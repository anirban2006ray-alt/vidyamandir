import Map "mo:core/Map";
import List "mo:core/List";
import Set "mo:core/Set";
import Runtime "mo:core/Runtime";
import Stripe "mo:caffeineai-stripe/stripe";
import OutCall "mo:caffeineai-http-outcalls/outcall";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import Migration "migration";
import Common "types/common";
import CatalogTypes "types/catalog";
import FlashSaleTypes "types/flashsale";
import CartTypes "types/cart";
import ReviewTypes "types/review";
import OrderTypes "types/order";
import UserTypes "types/user";
import EnquiryTypes "types/enquiry";
import CatalogLib "lib/catalog";
import CatalogMixin "mixins/catalog-api";
import FlashSaleMixin "mixins/flashsale-api";
import CartMixin "mixins/cart-api";
import ReviewMixin "mixins/review-api";
import OrderMixin "mixins/order-api";
import UserMixin "mixins/user-api";
import EnquiryMixin "mixins/enquiry-api";



(with migration = Migration.run)
actor {
  // --- Authorization ---
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // --- Catalog state ---
  let products = Map.empty<Common.ProductId, CatalogTypes.Product>();
  let recentlyViewed = Map.empty<Common.UserId, List.List<Common.ProductId>>();
  let nextProductId : [var Nat] = [var 1];
  include CatalogMixin(accessControlState, products, recentlyViewed, nextProductId);

  // --- Flash sale state ---
  let flashSales = Map.empty<Common.FlashSaleId, FlashSaleTypes.FlashSale>();
  let nextFlashSaleId : [var Nat] = [var 1];
  include FlashSaleMixin(accessControlState, flashSales, nextFlashSaleId);

  // --- Cart & Wishlist state (products injected for stock + existence checks) ---
  let carts = Map.empty<Common.UserId, List.List<CartTypes.CartItem>>();
  let wishlists = Map.empty<Common.UserId, List.List<Common.ProductId>>();
  include CartMixin(products, carts, wishlists);

  // --- Reviews, Q&A state ---
  let reviews = Map.empty<Common.ReviewId, ReviewTypes.ReviewInternal>();
  let questions = Map.empty<Common.QuestionId, ReviewTypes.Question>();
  let answers = Map.empty<Common.AnswerId, ReviewTypes.AnswerInternal>();
  let purchasedProductsByUser = Map.empty<Common.UserId, Set.Set<Common.ProductId>>();
  let nextReviewId : [var Nat] = [var 1];
  let nextQuestionId : [var Nat] = [var 1];
  let nextAnswerId : [var Nat] = [var 1];
  include ReviewMixin(accessControlState, reviews, questions, answers, purchasedProductsByUser, nextReviewId, nextQuestionId, nextAnswerId);

  // --- Orders & Addresses state (products injected for inventory validation) ---
  let orders = Map.empty<Common.OrderId, OrderTypes.Order>();
  let addresses = Map.empty<Common.UserId, List.List<OrderTypes.Address>>();
  let promoCodes = Map.empty<Text, OrderTypes.PromoCode>();
  let nextOrderId : [var Nat] = [var 1];
  let nextAddressId : [var Nat] = [var 1];
  let nextPromoCodeId : [var Nat] = [var 1];
  include OrderMixin(accessControlState, orders, addresses, promoCodes, products, purchasedProductsByUser, nextOrderId, nextAddressId, nextPromoCodeId);

  // --- User profiles state ---
  let profiles = Map.empty<Common.UserId, UserTypes.UserProfile>();
  include UserMixin(accessControlState, profiles, orders, products);

  // --- Enquiry state ---
  let enquiries = Map.empty<Text, EnquiryTypes.Enquiry>();
  let nextEnquiryId : [var Nat] = [var 1];
  include EnquiryMixin(accessControlState, enquiries, nextEnquiryId);

  // --- Seed catalog if empty ---
  if (products.isEmpty()) {
    type BookSeed = {
      titleEn : Text;
      titleBn : Text;
      authorEn : Text;
      authorBn : Text;
      descriptionEn : Text;
      descriptionBn : Text;
      isbn : Text;
      genre : CatalogTypes.Genre;
      language : CatalogTypes.Language;
      publisher : Text;
      priceInPaisa : Nat;
      stockCount : Nat;
      slug : Text;
    };

    let bookSeeds : [BookSeed] = [
      {
        titleEn = "Gitanjali";
        titleBn = "গীতাঞ্জলি";
        authorEn = "Rabindranath Tagore";
        authorBn = "রবীন্দ্রনাথ ঠাকুর";
        descriptionEn = "A collection of devotional songs and poems by Nobel laureate Rabindranath Tagore, originally written in Bengali.";
        descriptionBn = "রবীন্দ্রনাথ ঠাকুরের নোবেলজয়ী ভক্তিমূলক গান ও কবিতার সংকলন।";
        isbn = "978-8172930011";
        genre = #poetry;
        language = #bengali;
        publisher = "Visva-Bharati";
        priceInPaisa = 22000;
        stockCount = 30;
        slug = "gitanjali";
      },
      {
        titleEn = "Pather Panchali";
        titleBn = "পথের পাঁচালী";
        authorEn = "Bibhutibhushan Bandyopadhyay";
        authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
        descriptionEn = "A classic Bengali novel depicting the rural life of a poor Brahmin family in Bengal, the basis of Satyajit Ray's famous film.";
        descriptionBn = "বাংলার এক দরিদ্র ব্রাহ্মণ পরিবারের গ্রামীণ জীবনের বর্ণনা সংবলিত ক্লাসিক উপন্যাস।";
        isbn = "978-8172930028";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Signet Press";
        priceInPaisa = 25000;
        stockCount = 25;
        slug = "pather-panchali";
      },
      {
        titleEn = "Devdas";
        titleBn = "দেবদাস";
        authorEn = "Sarat Chandra Chattopadhyay";
        authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
        descriptionEn = "The tragic love story of Devdas, a young man unable to marry his childhood sweetheart, one of the most beloved Bengali novels.";
        descriptionBn = "দেবদাসের হৃদয়বিদারক প্রেমের গল্প — বাংলা সাহিত্যের অন্যতম জনপ্রিয় উপন্যাস।";
        isbn = "978-8172930035";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Dey's Publishing";
        priceInPaisa = 19900;
        stockCount = 40;
        slug = "devdas";
      },
      {
        titleEn = "Chokher Bali";
        titleBn = "চোখের বালি";
        authorEn = "Rabindranath Tagore";
        authorBn = "রবীন্দ্রনাথ ঠাকুর";
        descriptionEn = "A psychological novel by Tagore exploring the complex relationships between a young widow and a newly married couple in colonial Bengal.";
        descriptionBn = "ঔপনিবেশিক বাংলায় এক যুবতী বিধবা ও নবদম্পতির জটিল সম্পর্কের মনস্তাত্ত্বিক উপন্যাস।";
        isbn = "978-8172930042";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Visva-Bharati";
        priceInPaisa = 27500;
        stockCount = 20;
        slug = "chokher-bali";
      },
      {
        titleEn = "Anandamath";
        titleBn = "আনন্দমঠ";
        authorEn = "Bankim Chandra Chattopadhyay";
        authorBn = "বঙ্কিমচন্দ্র চট্টোপাধ্যায়";
        descriptionEn = "A patriotic novel set during the Sannyasi Rebellion, containing the famous song 'Vande Mataram' that became a rallying cry for India's independence.";
        descriptionBn = "সন্ন্যাসী বিদ্রোহের পটভূমিতে রচিত দেশপ্রেমিক উপন্যাস, যাতে 'বন্দে মাতরম' গানটি অন্তর্ভুক্ত।";
        isbn = "978-8172930059";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Dey's Publishing";
        priceInPaisa = 21000;
        stockCount = 35;
        slug = "anandamath";
      },
      {
        titleEn = "Aranyak";
        titleBn = "আরণ্যক";
        authorEn = "Bibhutibhushan Bandyopadhyay";
        authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
        descriptionEn = "A lyrical novel about a man's deep connection with the forests of Bihar, celebrated for its evocative nature writing.";
        descriptionBn = "বিহারের অরণ্যের সাথে এক মানুষের গভীর সম্পর্কের গল্প — প্রকৃতি লেখার মাস্টারপিস।";
        isbn = "978-8172930066";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Signet Press";
        priceInPaisa = 23500;
        stockCount = 15;
        slug = "aranyak";
      },
      {
        titleEn = "Sei Somoy";
        titleBn = "সেই সময়";
        authorEn = "Sunil Gangopadhyay";
        authorBn = "সুনীল গঙ্গোপাধ্যায়";
        descriptionEn = "A monumental historical novel set in 19th century Bengal, depicting the Bengal Renaissance with vivid characters and authentic detail.";
        descriptionBn = "উনিশ শতকের বাংলায় রচিত বিশাল ঐতিহাসিক উপন্যাস — বঙ্গীয় নবজাগরণের জীবন্ত চিত্র।";
        isbn = "978-8172930073";
        genre = #fiction;
        language = #bengali;
        publisher = "Ananda Publishers";
        priceInPaisa = 55000;
        stockCount = 18;
        slug = "sei-somoy";
      },
      {
        titleEn = "Parineeta";
        titleBn = "পরিণীতা";
        authorEn = "Sarat Chandra Chattopadhyay";
        authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
        descriptionEn = "A heartfelt story of love and social customs in Bengali society, one of Sarat Chandra's most celebrated short novels.";
        descriptionBn = "বাংলা সমাজে প্রেম ও সামাজিক প্রথার আবেগময় গল্প — শরৎচন্দ্রের অন্যতম বিখ্যাত উপন্যাসিকা।";
        isbn = "978-8172930080";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Dey's Publishing";
        priceInPaisa = 17500;
        stockCount = 45;
        slug = "parineeta";
      },
      {
        titleEn = "Gora";
        titleBn = "গোরা";
        authorEn = "Rabindranath Tagore";
        authorBn = "রবীন্দ্রনাথ ঠাকুর";
        descriptionEn = "A sweeping novel exploring questions of identity, nationalism, and religion through the story of a passionate young man in colonial Calcutta.";
        descriptionBn = "জাতীয়তাবাদ, ধর্ম ও পরিচয়ের প্রশ্ন নিয়ে রচিত বিশাল উপন্যাস।";
        isbn = "978-8172930097";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Visva-Bharati";
        priceInPaisa = 35000;
        stockCount = 22;
        slug = "gora";
      },
      {
        titleEn = "Naukadubi";
        titleBn = "নৌকাডুবি";
        authorEn = "Rabindranath Tagore";
        authorBn = "রবীন্দ্রনাথ ঠাকুর";
        descriptionEn = "A romantic novel set around a tragic boat sinking, where two couples' lives become intertwined by fate.";
        descriptionBn = "এক ট্র্যাজিক নৌকাডুবির পটভূমিতে দুই দম্পতির ভাগ্যজড়িত প্রেমের উপন্যাস।";
        isbn = "978-8172930103";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Visva-Bharati";
        priceInPaisa = 24000;
        stockCount = 20;
        slug = "naukadubi";
      },
      {
        titleEn = "Byomkesh Bakshi: Complete Collection";
        titleBn = "ব্যোমকেশ বক্সী: সমগ্র";
        authorEn = "Sharadindu Bandyopadhyay";
        authorBn = "শরদিন্দু বন্দ্যোপাধ্যায়";
        descriptionEn = "The complete adventures of the legendary Bengali detective Byomkesh Bakshi — the 'truth-seeker' of Bengali literature.";
        descriptionBn = "বাংলা সাহিত্যের কিংবদন্তি গোয়েন্দা ব্যোমকেশ বক্সীর সম্পূর্ণ অ্যাডভেঞ্চার সমগ্র।";
        isbn = "978-8172930110";
        genre = #fiction;
        language = #bengali;
        publisher = "Ananda Publishers";
        priceInPaisa = 75000;
        stockCount = 12;
        slug = "byomkesh-samogra";
      },
      {
        titleEn = "Feluda Samagra (Vol. 1)";
        titleBn = "ফেলুদা সমগ্র (প্রথম খণ্ড)";
        authorEn = "Satyajit Ray";
        authorBn = "সত্যজিৎ রায়";
        descriptionEn = "The first volume of the complete adventures of the iconic Bengali detective Feluda, created by the legendary filmmaker Satyajit Ray.";
        descriptionBn = "কিংবদন্তি চলচ্চিত্র নির্মাতা সত্যজিৎ রায়ের সৃষ্ট জনপ্রিয় গোয়েন্দা ফেলুদার প্রথম খণ্ড।";
        isbn = "978-8172930127";
        genre = #fiction;
        language = #bengali;
        publisher = "Ananda Publishers";
        priceInPaisa = 45000;
        stockCount = 28;
        slug = "feluda-vol1";
      },
      {
        titleEn = "Apur Sansar";
        titleBn = "অপুর সংসার";
        authorEn = "Bibhutibhushan Bandyopadhyay";
        authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
        descriptionEn = "The concluding part of the Apu Trilogy, following young Apu's life as an adult — the sequel to Pather Panchali.";
        descriptionBn = "অপু ট্রিলজির সমাপ্তি পর্ব — প্রাপ্তবয়স্ক অপুর জীবনের গল্প।";
        isbn = "978-8172930134";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Signet Press";
        priceInPaisa = 22000;
        stockCount = 18;
        slug = "apur-sansar";
      },
      {
        titleEn = "Kabuliwala and Other Stories";
        titleBn = "কাবুলিওয়ালা ও অন্যান্য গল্প";
        authorEn = "Rabindranath Tagore";
        authorBn = "রবীন্দ্রনাথ ঠাকুর";
        descriptionEn = "A collection of Tagore's most beloved short stories, including the heart-touching tale of Kabuliwala and his bond with a little Bengali girl.";
        descriptionBn = "রবীন্দ্রনাথের শ্রেষ্ঠ ছোটগল্পের সংকলন — কাবুলিওয়ালার হৃদয়স্পর্শী গল্প সহ।";
        isbn = "978-8172930141";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Visva-Bharati";
        priceInPaisa = 19900;
        stockCount = 35;
        slug = "kabuliwala-stories";
      },
      {
        titleEn = "Higher Secondary Bengali Grammar";
        titleBn = "উচ্চমাধ্যমিক বাংলা ব্যাকরণ";
        authorEn = "Asit Kumar Bandyopadhyay";
        authorBn = "অসিতকুমার বন্দ্যোপাধ্যায়";
        descriptionEn = "A comprehensive Bengali grammar textbook for higher secondary students, covering all aspects of Bengali language and literature.";
        descriptionBn = "উচ্চমাধ্যমিক ছাত্রছাত্রীদের জন্য বাংলা ভাষা ও সাহিত্যের সম্পূর্ণ ব্যাকরণ পাঠ্যপুস্তক।";
        isbn = "978-8172930158";
        genre = #academic;
        language = #bengali;
        publisher = "Papyrus";
        priceInPaisa = 32000;
        stockCount = 50;
        slug = "hs-bengali-grammar";
      },
      {
        titleEn = "Class 10 Mathematics (WBBSE)";
        titleBn = "দশম শ্রেণী গণিত (পশ্চিমবঙ্গ)";
        authorEn = "R.D. Sharma";
        authorBn = "আর ডি শর্মা";
        descriptionEn = "Complete mathematics textbook for Class 10 following West Bengal Board of Secondary Education curriculum with solved examples.";
        descriptionBn = "পশ্চিমবঙ্গ মাধ্যমিক শিক্ষা সংসদের পাঠ্যক্রম অনুযায়ী দশম শ্রেণীর সম্পূর্ণ গণিত পাঠ্যপুস্তক।";
        isbn = "978-8172930165";
        genre = #academic;
        language = #bilingual;
        publisher = "Dhanpat Rai Publications";
        priceInPaisa = 38000;
        stockCount = 40;
        slug = "class10-maths-wb";
      },
      {
        titleEn = "Chander Pahar";
        titleBn = "চাঁদের পাহাড়";
        authorEn = "Bibhutibhushan Bandyopadhyay";
        authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
        descriptionEn = "An adventure novel set in the jungles of Africa, following a young Bengali man's quest for treasure across dangerous landscapes.";
        descriptionBn = "আফ্রিকার জঙ্গলে এক সাহসী বাঙালি যুবকের রোমাঞ্চকর অ্যাডভেঞ্চার উপন্যাস।";
        isbn = "978-8172930172";
        genre = #fiction;
        language = #bengali;
        publisher = "Signet Press";
        priceInPaisa = 24000;
        stockCount = 30;
        slug = "chander-pahar";
      },
      {
        titleEn = "Aam Aatir Bhepu";
        titleBn = "আম আঁটির ভেঁপু";
        authorEn = "Bibhutibhushan Bandyopadhyay";
        authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
        descriptionEn = "The enchanting story of young Apu and Durga growing up in rural Bengal — the first part of the Apu Trilogy for young readers.";
        descriptionBn = "গ্রামীণ বাংলায় ছোট্ট অপু ও দুর্গার বড় হওয়ার মনোমুগ্ধকর গল্প — অপু ট্রিলজির প্রথম পর্ব।";
        isbn = "978-8172930189";
        genre = #childrens;
        language = #bengali;
        publisher = "Signet Press";
        priceInPaisa = 15000;
        stockCount = 38;
        slug = "aam-aatir-bhepu";
      },
      {
        titleEn = "Thakurmar Jhuli";
        titleBn = "ঠাকুরমার ঝুলি";
        authorEn = "Dakshinaranjan Mitra Majumder";
        authorBn = "দক্ষিণারঞ্জন মিত্র মজুমদার";
        descriptionEn = "A beloved collection of traditional Bengali fairy tales, told in grandmother's style — magical stories for children of all ages.";
        descriptionBn = "ঐতিহ্যবাহী বাংলা রূপকথার সংকলন — ঠাকুরমার গলায় জাদুর গল্প, সব বয়সের শিশুদের জন্য।";
        isbn = "978-8172930196";
        genre = #childrens;
        language = #bengali;
        publisher = "Dey's Publishing";
        priceInPaisa = 18500;
        stockCount = 42;
        slug = "thakurmar-jhuli";
      },
      {
        titleEn = "Rabindra-Rachanabali (Abridged)";
        titleBn = "রবীন্দ্র-রচনাবলী (সংক্ষিপ্ত)";
        authorEn = "Rabindranath Tagore";
        authorBn = "রবীন্দ্রনাথ ঠাকুর";
        descriptionEn = "An abridged collection of Rabindranath Tagore's finest works spanning poetry, prose, and drama — a must-have for every Bengali home.";
        descriptionBn = "রবীন্দ্রনাথ ঠাকুরের কবিতা, গদ্য ও নাটকের শ্রেষ্ঠ রচনার সংক্ষিপ্ত সংকলন।";
        isbn = "978-8172930202";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Visva-Bharati";
        priceInPaisa = 89900;
        stockCount = 10;
        slug = "rabindra-rachanabali";
      },
      {
        titleEn = "Shesher Kobita";
        titleBn = "শেষের কবিতা";
        authorEn = "Rabindranath Tagore";
        authorBn = "রবীন্দ্রনাথ ঠাকুর";
        descriptionEn = "A lyrical love story and philosophical novel that interweaves prose and poetry, considered one of Tagore's most modern works.";
        descriptionBn = "গদ্য ও কবিতার অপূর্ব সমন্বয়ে রচিত প্রেমের উপন্যাস — রবীন্দ্রনাথের সবচেয়ে আধুনিক রচনাগুলির অন্যতম।";
        isbn = "978-8172930219";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Visva-Bharati";
        priceInPaisa = 26000;
        stockCount = 25;
        slug = "shesher-kobita";
      },
      {
        titleEn = "Srikanta";
        titleBn = "শ্রীকান্ত";
        authorEn = "Sarat Chandra Chattopadhyay";
        authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
        descriptionEn = "A semi-autobiographical novel following the wandering life of Srikanta and his encounters with women who love him — a masterpiece of Bengali fiction.";
        descriptionBn = "শ্রীকান্তের ভ্রমণ জীবন ও তাকে ভালোবাসা নারীদের গল্প — বাংলা কথাসাহিত্যের মাস্টারপিস।";
        isbn = "978-8172930226";
        genre = #bengaliClassics;
        language = #bengali;
        publisher = "Dey's Publishing";
        priceInPaisa = 42000;
        stockCount = 16;
        slug = "srikanta";
      },
      {
        titleEn = "Swami Vivekananda: His Life and Legacy";
        titleBn = "স্বামী বিবেকানন্দ: জীবন ও উত্তরাধিকার";
        authorEn = "Sister Nivedita";
        authorBn = "সিস্টার নিবেদিতা";
        descriptionEn = "A deeply personal account of Swami Vivekananda's life, philosophy, and impact on India and the world by his devoted disciple.";
        descriptionBn = "স্বামী বিবেকানন্দের জীবন, দর্শন ও বিশ্বে তাঁর প্রভাব সম্পর্কে তাঁর ভক্ত শিষ্যার আন্তরিক বিবরণ।";
        isbn = "978-8172930233";
        genre = #biography;
        language = #english;
        publisher = "Advaita Ashrama";
        priceInPaisa = 34000;
        stockCount = 20;
        slug = "vivekananda-life-legacy";
      },
    ];

    for (seed in bookSeeds.values()) {
      let input : CatalogTypes.CreateProductInput = {
        info = {
          titleEn = seed.titleEn;
          titleBn = seed.titleBn;
          authorEn = seed.authorEn;
          authorBn = seed.authorBn;
          descriptionEn = seed.descriptionEn;
          descriptionBn = seed.descriptionBn;
        };
        isbn = seed.isbn;
        genre = seed.genre;
        language = seed.language;
        publisher = seed.publisher;
        publicationDate = 0;
        coverImageUrl = "https://picsum.photos/seed/" # seed.slug # "/300/400";
        priceInPaisa = seed.priceInPaisa;
        stockCount = seed.stockCount;
      };
      switch (CatalogLib.createProduct(products, nextProductId[0], input)) {
        case (#ok(_)) { nextProductId[0] += 1 };
        case (#err(_)) {};
      };
    };
  };

  // --- Stripe payment integration ---
  var stripeConfiguration : ?Stripe.StripeConfiguration = null;

  public query func isStripeConfigured() : async Bool {
    stripeConfiguration != null;
  };

  public shared ({ caller }) func setStripeConfiguration(config : Stripe.StripeConfiguration) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can configure Stripe");
    };
    stripeConfiguration := ?config;
  };

  public func getStripeSessionStatus(sessionId : Text) : async Stripe.StripeSessionStatus {
    let config = switch (stripeConfiguration) {
      case null { Runtime.trap("Stripe not configured") };
      case (?c) { c };
    };
    await Stripe.getSessionStatus(config, sessionId, transform);
  };

  public shared ({ caller }) func createCheckoutSession(
    items : [Stripe.ShoppingItem],
    successUrl : Text,
    cancelUrl : Text,
  ) : async Text {
    let config = switch (stripeConfiguration) {
      case null { Runtime.trap("Stripe not configured") };
      case (?c) { c };
    };
    await Stripe.createCheckoutSession(config, caller, items, successUrl, cancelUrl, transform);
  };

  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };
};
