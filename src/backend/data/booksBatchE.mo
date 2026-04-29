module {
  public let books : [{
    titleEn: Text; titleBn: Text; authorEn: Text; authorBn: Text;
    descriptionEn: Text; descriptionBn: Text;
    isbn: Text; genre: Text; language: Text;
    price: Nat; stock: Nat; rating: Float;
    tags: [Text]; coverImageUrl: Text
  }] = [
    {
      titleEn = "Durgesh Nandini"; titleBn = "দুর্গেশনন্দিনী";
      authorEn = "Bankim Chandra Chattopadhyay"; authorBn = "বঙ্কিমচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "The first Bengali novel, a historical romance set in the Mughal era."; descriptionBn = "প্রথম বাংলা উপন্যাস, মুঘল যুগে স্থাপিত একটি ঐতিহাসিক রোমান্স।";
      isbn = "9788172930011"; genre = "#fiction"; language = "#bengali";
      price = 280; stock = 60; rating = 4.7;
      tags = ["bengali-classic", "historical", "romance"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930011-L.jpg"
    },
    {
      titleEn = "Rajani"; titleBn = "রজনী";
      authorEn = "Bankim Chandra Chattopadhyay"; authorBn = "বঙ্কিমচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A sensitive novel exploring love and social issues in 19th-century Bengal."; descriptionBn = "১৯শ শতকের বাংলায় প্রেম ও সামাজিক সমস্যা নিয়ে একটি সংবেদনশীল উপন্যাস।";
      isbn = "9788172930028"; genre = "#fiction"; language = "#bengali";
      price = 260; stock = 50; rating = 4.5;
      tags = ["bengali-classic", "romance", "social"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930028-L.jpg"
    },
    {
      titleEn = "Krishnakanter Will"; titleBn = "কৃষ্ণকান্তের উইল";
      authorEn = "Bankim Chandra Chattopadhyay"; authorBn = "বঙ্কিমচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A gripping tale of inheritance, jealousy, and tragic love in a zamindari household."; descriptionBn = "একটি জমিদার পরিবারে উত্তরাধিকার, ঈর্ষা ও করুণ প্রেমের গল্প।";
      isbn = "9788172930035"; genre = "#fiction"; language = "#bengali";
      price = 270; stock = 55; rating = 4.6;
      tags = ["bengali-classic", "tragedy", "zamindari"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930035-L.jpg"
    },
    {
      titleEn = "Bishabriksha"; titleBn = "বিষবৃক্ষ";
      authorEn = "Bankim Chandra Chattopadhyay"; authorBn = "বঙ্কিমচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A tragic love story involving passion, moral conflict, and social norms."; descriptionBn = "আবেগ, নৈতিক দ্বন্দ্ব ও সামাজিক নিয়মের সাথে জড়িত একটি করুণ প্রেমের গল্প।";
      isbn = "9788172930042"; genre = "#fiction"; language = "#bengali";
      price = 270; stock = 50; rating = 4.5;
      tags = ["bengali-classic", "tragedy", "social"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930042-L.jpg"
    },
    {
      titleEn = "Devi Chaudhurani"; titleBn = "দেবী চৌধুরাণী";
      authorEn = "Bankim Chandra Chattopadhyay"; authorBn = "বঙ্কিমচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A woman who becomes a fearless leader fighting oppression in colonial Bengal."; descriptionBn = "একজন নারী যিনি ঔপনিবেশিক বাংলায় অত্যাচারের বিরুদ্ধে লড়াই করে নির্ভীক নেতা হয়ে ওঠেন।";
      isbn = "9788172930073"; genre = "#fiction"; language = "#bengali";
      price = 280; stock = 50; rating = 4.6;
      tags = ["bengali-classic", "historical", "woman-power"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930073-L.jpg"
    },
    {
      titleEn = "Anandamath"; titleBn = "আনন্দমঠ";
      authorEn = "Bankim Chandra Chattopadhyay"; authorBn = "বঙ্কিমচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A revolutionary novel about the Sanyasi Rebellion, source of the national song Vande Mataram."; descriptionBn = "সন্ন্যাসী বিদ্রোহ নিয়ে একটি বিপ্লবী উপন্যাস, বন্দে মাতরম-এর উৎস।";
      isbn = "9780140449662"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 80; rating = 4.8;
      tags = ["bengali-classic", "revolutionary", "national"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140449662-L.jpg"
    },
    {
      titleEn = "Sesh Prashna"; titleBn = "শেষ প্রশ্ন";
      authorEn = "Sarat Chandra Chattopadhyay"; authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A philosophical novel about love, marriage, and modern ideas by the master of Bengali fiction."; descriptionBn = "প্রেম, বিবাহ ও আধুনিক ধারণা সম্পর্কে একটি দার্শনিক উপন্যাস।";
      isbn = "9788172930110"; genre = "#fiction"; language = "#bengali";
      price = 300; stock = 55; rating = 4.7;
      tags = ["bengali-classic", "philosophical", "romance"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930110-L.jpg"
    },
    {
      titleEn = "Devdas"; titleBn = "দেবদাস";
      authorEn = "Sarat Chandra Chattopadhyay"; authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "The iconic story of Devdas and his tragic, unfulfilled love that has inspired countless films."; descriptionBn = "দেবদাসের কিংবদন্তি গল্প এবং তার করুণ, অপূর্ণ প্রেম যা অগণিত চলচ্চিত্রকে অনুপ্রাণিত করেছে।";
      isbn = "9788172930127"; genre = "#fiction"; language = "#bengali";
      price = 249; stock = 100; rating = 4.9;
      tags = ["bengali-classic", "tragedy", "love", "iconic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930127-L.jpg"
    },
    {
      titleEn = "Parineeta"; titleBn = "পরিণীতা";
      authorEn = "Sarat Chandra Chattopadhyay"; authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A short but powerful story about a young woman caught between love, duty, and social constraints."; descriptionBn = "প্রেম, কর্তব্য ও সামাজিক বাধার মধ্যে আটকে পড়া এক তরুণীর সংক্ষিপ্ত কিন্তু শক্তিশালী গল্প।";
      isbn = "9788172930134"; genre = "#fiction"; language = "#bengali";
      price = 220; stock = 70; rating = 4.7;
      tags = ["bengali-classic", "love", "social"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930134-L.jpg"
    },
    {
      titleEn = "Nishkriti"; titleBn = "নিষ্কৃতি";
      authorEn = "Sarat Chandra Chattopadhyay"; authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A compelling tale about relationships and freedom in a traditional Bengali family."; descriptionBn = "একটি ঐতিহ্যবাহী বাঙালি পরিবারে সম্পর্ক ও স্বাধীনতা নিয়ে একটি আকর্ষণীয় গল্প।";
      isbn = "9788172930141"; genre = "#fiction"; language = "#bengali";
      price = 220; stock = 48; rating = 4.5;
      tags = ["bengali-classic", "family", "social"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930141-L.jpg"
    },
    {
      titleEn = "Ghare Baire"; titleBn = "ঘরে বাইরে";
      authorEn = "Rabindranath Tagore"; authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "A masterpiece exploring nationalism, freedom, and love through three complex characters."; descriptionBn = "তিনটি জটিল চরিত্রের মাধ্যমে জাতীয়তাবাদ, স্বাধীনতা ও প্রেম অন্বেষণ করা একটি মাস্টারপিস।";
      isbn = "9780140439076"; genre = "#fiction"; language = "#bengali";
      price = 380; stock = 60; rating = 4.8;
      tags = ["bengali-classic", "tagore", "nationalism"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140439076-L.jpg"
    },
    {
      titleEn = "Gora"; titleBn = "গোরা";
      authorEn = "Rabindranath Tagore"; authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "Tagore's grand philosophical novel about identity, religion, and India's search for selfhood."; descriptionBn = "পরিচয়, ধর্ম ও ভারতের আত্মানুসন্ধান নিয়ে রবীন্দ্রনাথের বিশাল দার্শনিক উপন্যাস।";
      isbn = "9780140449662"; genre = "#fiction"; language = "#bengali";
      price = 399; stock = 65; rating = 4.9;
      tags = ["bengali-classic", "tagore", "philosophical", "identity"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140449662-L.jpg"
    },
    {
      titleEn = "Chokher Bali"; titleBn = "চোখের বালি";
      authorEn = "Rabindranath Tagore"; authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "A psychologically intense novel about a widow's desires and the social constraints of the time."; descriptionBn = "একজন বিধবার আকাঙ্ক্ষা ও সেই সময়ের সামাজিক সীমাবদ্ধতা নিয়ে একটি মানসিকভাবে তীব্র উপন্যাস।";
      isbn = "9788172931377"; genre = "#fiction"; language = "#bengali";
      price = 320; stock = 55; rating = 4.7;
      tags = ["bengali-classic", "tagore", "psychological", "social"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931377-L.jpg"
    },
    {
      titleEn = "Char Odhyay"; titleBn = "চার অধ্যায়";
      authorEn = "Rabindranath Tagore"; authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "Tagore's last novel about revolutionary politics, love, and tragic consequences."; descriptionBn = "বিপ্লবী রাজনীতি, প্রেম ও করুণ পরিণতি নিয়ে রবীন্দ্রনাথের শেষ উপন্যাস।";
      isbn = "9788172930172"; genre = "#fiction"; language = "#bengali";
      price = 220; stock = 50; rating = 4.6;
      tags = ["bengali-classic", "tagore", "politics", "tragedy"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930172-L.jpg"
    },
    {
      titleEn = "Jogajog"; titleBn = "যোগাযোগ";
      authorEn = "Rabindranath Tagore"; authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "A modern novel about class conflict, marriage, and a woman's inner rebellion."; descriptionBn = "শ্রেণি দ্বন্দ্ব, বিবাহ ও একজন নারীর অন্তর্দ্বন্দ্ব নিয়ে একটি আধুনিক উপন্যাস।";
      isbn = "9788172930189"; genre = "#fiction"; language = "#bengali";
      price = 240; stock = 50; rating = 4.6;
      tags = ["bengali-classic", "tagore", "marriage", "class"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930189-L.jpg"
    },
    {
      titleEn = "Gitanjali"; titleBn = "গীতাঞ্জলি";
      authorEn = "Rabindranath Tagore"; authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "The Nobel Prize-winning collection of devotional songs and poetry, a spiritual masterpiece."; descriptionBn = "নোবেল পুরস্কার বিজয়ী ভক্তিমূলক গান ও কবিতার সংকলন, একটি আধ্যাত্মিক মাস্টারপিস।";
      isbn = "9780333904978"; genre = "#poetry"; language = "#bengali";
      price = 299; stock = 100; rating = 4.9;
      tags = ["tagore", "poetry", "nobel", "devotional"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780333904978-L.jpg"
    },
    {
      titleEn = "Sonar Tari"; titleBn = "সোনার তরী";
      authorEn = "Rabindranath Tagore"; authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "One of Tagore's most celebrated poetry collections with profound metaphysical depth."; descriptionBn = "রবীন্দ্রনাথের সবচেয়ে বিখ্যাত কবিতা সংকলনগুলির একটি, গভীর আধিভৌতিক গভীরতা সহ।";
      isbn = "9788172930493"; genre = "#poetry"; language = "#bengali";
      price = 240; stock = 60; rating = 4.8;
      tags = ["tagore", "poetry", "metaphysical"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930493-L.jpg"
    },
    {
      titleEn = "Manasi"; titleBn = "মানসী";
      authorEn = "Rabindranath Tagore"; authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "An early poetry collection showcasing Tagore's lyrical mastery and romantic vision."; descriptionBn = "রবীন্দ্রনাথের গীতিমূলক দক্ষতা ও রোমান্টিক দৃষ্টিভঙ্গি প্রদর্শনকারী প্রাথমিক কবিতা সংকলন।";
      isbn = "9788172930509"; genre = "#poetry"; language = "#bengali";
      price = 220; stock = 55; rating = 4.7;
      tags = ["tagore", "poetry", "romantic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930509-L.jpg"
    },
    {
      titleEn = "Pather Panchali"; titleBn = "পথের পাঁচালী";
      authorEn = "Bibhutibhushan Bandyopadhyay"; authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
      descriptionEn = "The coming-of-age classic that inspired Satyajit Ray's legendary film trilogy."; descriptionBn = "বয়সে-আসার ক্লাসিক যা সত্যজিৎ রায়ের কিংবদন্তি চলচ্চিত্র ট্রিলজিকে অনুপ্রাণিত করেছিল।";
      isbn = "9788172933357"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 90; rating = 4.9;
      tags = ["bengali-classic", "coming-of-age", "rural", "iconic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172933357-L.jpg"
    },
    {
      titleEn = "Aparajito"; titleBn = "অপরাজিত";
      authorEn = "Bibhutibhushan Bandyopadhyay"; authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
      descriptionEn = "The sequel to Pather Panchali, following Apu's journey through life and loss."; descriptionBn = "পথের পাঁচালীর সিক্যুয়েল, অপুর জীবন ও ক্ষতির মধ্য দিয়ে যাত্রা অনুসরণ করে।";
      isbn = "9788172931322"; genre = "#fiction"; language = "#bengali";
      price = 320; stock = 75; rating = 4.8;
      tags = ["bengali-classic", "apu-trilogy", "life-journey"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931322-L.jpg"
    },
    {
      titleEn = "Chander Pahar"; titleBn = "চাঁদের পাহাড়";
      authorEn = "Bibhutibhushan Bandyopadhyay"; authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
      descriptionEn = "An adventure novel set in the jungles of Africa, beloved by generations of Bengali readers."; descriptionBn = "আফ্রিকার জঙ্গলে স্থাপিত একটি অ্যাডভেঞ্চার উপন্যাস, বাঙালি পাঠকের প্রজন্মের প্রিয়।";
      isbn = "9788172931339"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 80; rating = 4.9;
      tags = ["bengali-classic", "adventure", "africa", "iconic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931339-L.jpg"
    },
    {
      titleEn = "Purba Paschim"; titleBn = "পূর্ব পশ্চিম";
      authorEn = "Sunil Gangopadhyay"; authorBn = "সুনীল গঙ্গোপাধ্যায়";
      descriptionEn = "An epic saga about Partition and its impact on a Bengali family spread across two Bengals."; descriptionBn = "দেশভাগ এবং দুই বাংলায় ছড়িয়ে পড়া একটি বাঙালি পরিবারের উপর এর প্রভাব নিয়ে একটি মহাকাব্যিক গল্প।";
      isbn = "9788172930219"; genre = "#fiction"; language = "#bengali";
      price = 450; stock = 60; rating = 4.8;
      tags = ["partition", "epic", "bengali-family", "historical"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930219-L.jpg"
    },
    {
      titleEn = "Sei Samay"; titleBn = "সেই সময়";
      authorEn = "Sunil Gangopadhyay"; authorBn = "সুনীল গঙ্গোপাধ্যায়";
      descriptionEn = "A monumental historical novel recreating 19th-century Calcutta and its intellectual Renaissance."; descriptionBn = "১৯শ শতকের কলকাতা ও এর বুদ্ধিবৃত্তিক রেনেসাঁ পুনরায় তৈরি করা একটি বিশাল ঐতিহাসিক উপন্যাস।";
      isbn = "9788172930233"; genre = "#fiction"; language = "#bengali";
      price = 420; stock = 55; rating = 4.9;
      tags = ["historical", "calcutta", "renaissance", "epic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930233-L.jpg"
    },
    {
      titleEn = "Prothom Alo"; titleBn = "প্রথম আলো";
      authorEn = "Sunil Gangopadhyay"; authorBn = "সুনীল গঙ্গোপাধ্যায়";
      descriptionEn = "A panoramic novel about the birth of modern India, featuring Tagore and Vivekananda."; descriptionBn = "রবীন্দ্রনাথ ও বিবেকানন্দকে বৈশিষ্ট্যযুক্ত করে আধুনিক ভারতের জন্মের একটি বিশাল উপন্যাস।";
      isbn = "9788172930240"; genre = "#fiction"; language = "#bengali";
      price = 449; stock = 50; rating = 4.8;
      tags = ["historical", "tagore", "vivekananda", "modern-india"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930240-L.jpg"
    },
    {
      titleEn = "Arjun"; titleBn = "অর্জুন";
      authorEn = "Sunil Gangopadhyay"; authorBn = "সুনীল গঙ্গোপাধ্যায়";
      descriptionEn = "A novel about a young man's rebellion against society and his search for identity."; descriptionBn = "একজন তরুণের সমাজের বিরুদ্ধে বিদ্রোহ ও পরিচয়ের সন্ধান নিয়ে একটি উপন্যাস।";
      isbn = "9788172930257"; genre = "#fiction"; language = "#bengali";
      price = 350; stock = 55; rating = 4.6;
      tags = ["modern-bengali", "rebellion", "identity"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930257-L.jpg"
    },
    {
      titleEn = "Manab Jibon"; titleBn = "মানব জীবন";
      authorEn = "Shirshendu Mukhopadhyay"; authorBn = "শীর্ষেন্দু মুখোপাধ্যায়";
      descriptionEn = "A deeply moving novel about human relationships and the fragility of life."; descriptionBn = "মানবিক সম্পর্ক ও জীবনের ভঙ্গুরতা নিয়ে একটি গভীরভাবে আবেগময় উপন্যাস।";
      isbn = "9788172930288"; genre = "#fiction"; language = "#bengali";
      price = 320; stock = 55; rating = 4.7;
      tags = ["modern-bengali", "relationships", "humanist"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930288-L.jpg"
    },
    {
      titleEn = "Ghunpoka"; titleBn = "ঘুণপোকা";
      authorEn = "Shirshendu Mukhopadhyay"; authorBn = "শীর্ষেন্দু মুখোপাধ্যায়";
      descriptionEn = "A psychological novel exploring the silent decay of a middle-class family."; descriptionBn = "একটি মধ্যবিত্ত পরিবারের নীরব ক্ষয় অন্বেষণকারী একটি মনস্তাত্ত্বিক উপন্যাস।";
      isbn = "9788172930295"; genre = "#fiction"; language = "#bengali";
      price = 280; stock = 50; rating = 4.6;
      tags = ["modern-bengali", "psychological", "family"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930295-L.jpg"
    },
    {
      titleEn = "Pashapashi"; titleBn = "পাশাপাশি";
      authorEn = "Shirshendu Mukhopadhyay"; authorBn = "শীর্ষেন্দু মুখোপাধ্যায়";
      descriptionEn = "A touching story about neighbours and the bonds that transcend social boundaries."; descriptionBn = "প্রতিবেশীদের নিয়ে এবং সামাজিক সীমানা অতিক্রম করে বন্ধন নিয়ে একটি স্পর্শকারী গল্প।";
      isbn = "9788172930301"; genre = "#fiction"; language = "#bengali";
      price = 300; stock = 48; rating = 4.6;
      tags = ["modern-bengali", "community", "social"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930301-L.jpg"
    },
    {
      titleEn = "Uttarayan"; titleBn = "উত্তরায়ণ";
      authorEn = "Samaresh Majumdar"; authorBn = "সমরেশ মজুমদার";
      descriptionEn = "A sweeping saga following Animesh through the tumultuous political landscape of Bengal."; descriptionBn = "বাংলার উত্তাল রাজনৈতিক পরিস্থিতির মধ্য দিয়ে অনিমেশকে অনুসরণ করে একটি বিস্তৃত মহাকাব্য।";
      isbn = "9788172930332"; genre = "#fiction"; language = "#bengali";
      price = 380; stock = 55; rating = 4.8;
      tags = ["modern-bengali", "political", "saga"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930332-L.jpg"
    },
    {
      titleEn = "Kalbela"; titleBn = "কালবেলা";
      authorEn = "Samaresh Majumdar"; authorBn = "সমরেশ মজুমদার";
      descriptionEn = "The Naxalite movement in Bengal told through the story of Animesh and Mahasweta."; descriptionBn = "অনিমেশ ও মহাশ্বেতার গল্পের মাধ্যমে বাংলায় নকশাল আন্দোলন।";
      isbn = "9788172930349"; genre = "#fiction"; language = "#bengali";
      price = 380; stock = 60; rating = 4.8;
      tags = ["naxalite", "political", "modern-bengali"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930349-L.jpg"
    },
    {
      titleEn = "Ganga"; titleBn = "গঙ্গা";
      authorEn = "Samaresh Majumdar"; authorBn = "সমরেশ মজুমদার";
      descriptionEn = "A river serves as backdrop for this tale of rural Bengal and its timeless human drama."; descriptionBn = "গ্রামীণ বাংলা ও তার কালজয়ী মানবিক নাটকের এই গল্পের পটভূমিতে একটি নদী।";
      isbn = "9788172930356"; genre = "#fiction"; language = "#bengali";
      price = 320; stock = 50; rating = 4.6;
      tags = ["modern-bengali", "rural", "river"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930356-L.jpg"
    },
    {
      titleEn = "Ek Phonta Aagun"; titleBn = "এক ফোঁটা আগুন";
      authorEn = "Humayun Ahmed"; authorBn = "হুমায়ূন আহমেদ";
      descriptionEn = "A compelling story about passion, ambition, and the human spirit by Bangladesh's most beloved author."; descriptionBn = "বাংলাদেশের সবচেয়ে প্রিয় লেখকের আবেগ, উচ্চাকাঙ্ক্ষা ও মানবিক মনোভাব নিয়ে একটি আকর্ষণীয় গল্প।";
      isbn = "9788172930370"; genre = "#fiction"; language = "#bengali";
      price = 250; stock = 70; rating = 4.7;
      tags = ["bangladeshi", "humayun-ahmed", "passion"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930370-L.jpg"
    },
    {
      titleEn = "Aguner Parashmani"; titleBn = "আগুনের পরশমণি";
      authorEn = "Humayun Ahmed"; authorBn = "হুমায়ূন আহমেদ";
      descriptionEn = "A Liberation War novel capturing the courage and sacrifice of ordinary Bangladeshis in 1971."; descriptionBn = "১৯৭১ সালে সাধারণ বাংলাদেশীদের সাহস ও আত্মত্যাগ ধারণ করা একটি মুক্তিযুদ্ধের উপন্যাস।";
      isbn = "9788172931025"; genre = "#fiction"; language = "#bengali";
      price = 280; stock = 60; rating = 4.8;
      tags = ["liberation-war", "bangladesh", "1971"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931025-L.jpg"
    },
    {
      titleEn = "Jokhon Bikel Neme Aashe"; titleBn = "যখন বিকেল নেমে আসে";
      authorEn = "Humayun Ahmed"; authorBn = "হুমায়ূন আহমেদ";
      descriptionEn = "A lyrical novel about the quiet joys and sorrows of everyday Bangladeshi life."; descriptionBn = "প্রতিদিনের বাংলাদেশী জীবনের নীরব আনন্দ ও দুঃখ নিয়ে একটি গীতিমূলক উপন্যাস।";
      isbn = "9788172930417"; genre = "#fiction"; language = "#bengali";
      price = 240; stock = 60; rating = 4.6;
      tags = ["bangladeshi", "humayun-ahmed", "daily-life"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930417-L.jpg"
    },
    {
      titleEn = "Bidrohi Kavita"; titleBn = "বিদ্রোহী কবিতা";
      authorEn = "Kazi Nazrul Islam"; authorBn = "কাজী নজরুল ইসলাম";
      descriptionEn = "The rebellious poems of the Rebel Poet, full of fire, passion, and defiance."; descriptionBn = "বিদ্রোহী কবির বিদ্রোহী কবিতা, আগুন, আবেগ ও প্রতিবাদে ভরপুর।";
      isbn = "9788172930455"; genre = "#poetry"; language = "#bengali";
      price = 220; stock = 70; rating = 4.8;
      tags = ["nazrul", "poetry", "rebellion", "classic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930455-L.jpg"
    },
    {
      titleEn = "Agnibina"; titleBn = "অগ্নিবীণা";
      authorEn = "Kazi Nazrul Islam"; authorBn = "কাজী নজরুল ইসলাম";
      descriptionEn = "Nazrul's debut poetry collection, a landmark of Bengali revolutionary literature."; descriptionBn = "নজরুলের প্রথম কবিতা সংকলন, বাংলা বিপ্লবী সাহিত্যের একটি মাইলফলক।";
      isbn = "9788172930462"; genre = "#poetry"; language = "#bengali";
      price = 199; stock = 65; rating = 4.8;
      tags = ["nazrul", "poetry", "debut", "revolutionary"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930462-L.jpg"
    },
    {
      titleEn = "Banalata Sen"; titleBn = "বনলতা সেন";
      authorEn = "Jibanananda Das"; authorBn = "জীবনানন্দ দাশ";
      descriptionEn = "One of Bengali literature's most celebrated poetry collections, hauntingly beautiful."; descriptionBn = "বাংলা সাহিত্যের সবচেয়ে বিখ্যাত কবিতা সংকলনগুলির একটি, অলৌকিকভাবে সুন্দর।";
      isbn = "9788172930424"; genre = "#poetry"; language = "#bengali";
      price = 199; stock = 80; rating = 4.9;
      tags = ["jibanananda", "poetry", "modern", "iconic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930424-L.jpg"
    },
    {
      titleEn = "Mahaprithibi"; titleBn = "মহাপৃথিবী";
      authorEn = "Jibanananda Das"; authorBn = "জীবনানন্দ দাশ";
      descriptionEn = "A nature-infused poetry collection celebrating the vast beauty of the world."; descriptionBn = "প্রকৃতিতে ভরপুর কবিতা সংকলন, বিশ্বের বিশাল সৌন্দর্য উদযাপন করে।";
      isbn = "9788172930431"; genre = "#poetry"; language = "#bengali";
      price = 199; stock = 48; rating = 4.7;
      tags = ["jibanananda", "poetry", "nature"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930431-L.jpg"
    },
    {
      titleEn = "Chharpatra"; titleBn = "ছাড়পত্র";
      authorEn = "Sukanta Bhattacharya"; authorBn = "সুকান্ত ভট্টাচার্য";
      descriptionEn = "The young revolutionary poet's passionate call for a new world free from oppression."; descriptionBn = "তরুণ বিপ্লবী কবির অত্যাচারমুক্ত নতুন পৃথিবীর জন্য আবেগময় আহ্বান।";
      isbn = "9788172930554"; genre = "#poetry"; language = "#bengali";
      price = 180; stock = 65; rating = 4.7;
      tags = ["sukanta", "poetry", "revolutionary", "young-poet"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930554-L.jpg"
    },
    {
      titleEn = "Prothom Pratishruti"; titleBn = "প্রথম প্রতিশ্রুতি";
      authorEn = "Ashapurna Devi"; authorBn = "আশাপূর্ণা দেবী";
      descriptionEn = "The first volume of the celebrated trilogy about three generations of Bengali women."; descriptionBn = "বাঙালি নারীর তিন প্রজন্ম নিয়ে বিখ্যাত ট্রিলজির প্রথম খণ্ড।";
      isbn = "9788172930752"; genre = "#fiction"; language = "#bengali";
      price = 380; stock = 55; rating = 4.8;
      tags = ["womens-writing", "generational", "bengali-women"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930752-L.jpg"
    },
    {
      titleEn = "Subarnalata"; titleBn = "সুবর্ণলতা";
      authorEn = "Ashapurna Devi"; authorBn = "আশাপূর্ণা দেবী";
      descriptionEn = "The second volume of the trilogy, following the life of a determined and courageous woman."; descriptionBn = "ট্রিলজির দ্বিতীয় খণ্ড, একজন দৃঢ় ও সাহসী নারীর জীবন অনুসরণ করে।";
      isbn = "9788172930769"; genre = "#fiction"; language = "#bengali";
      price = 350; stock = 50; rating = 4.8;
      tags = ["womens-writing", "generational", "courage"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930769-L.jpg"
    },
    {
      titleEn = "Bakul Katha"; titleBn = "বকুলকথা";
      authorEn = "Ashapurna Devi"; authorBn = "আশাপূর্ণা দেবী";
      descriptionEn = "The concluding volume of the trilogy, completing the saga of three remarkable women."; descriptionBn = "ট্রিলজির সমাপনী খণ্ড, তিনজন অসাধারণ নারীর মহাকাব্যিক গল্প সম্পূর্ণ করে।";
      isbn = "9788172930776"; genre = "#fiction"; language = "#bengali";
      price = 320; stock = 48; rating = 4.7;
      tags = ["womens-writing", "generational", "trilogy-conclusion"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930776-L.jpg"
    },
    {
      titleEn = "Padma Nadir Majhi"; titleBn = "পদ্মা নদীর মাঝি";
      authorEn = "Manik Bandyopadhyay"; authorBn = "মানিক বন্দ্যোপাধ্যায়";
      descriptionEn = "A powerful portrayal of the lives of fishermen on the Padma River, steeped in realism."; descriptionBn = "পদ্মা নদীতে জেলেদের জীবনের একটি শক্তিশালী চিত্র, বাস্তবতায় পরিপূর্ণ।";
      isbn = "9788172930707"; genre = "#fiction"; language = "#bengali";
      price = 280; stock = 55; rating = 4.8;
      tags = ["bengali-classic", "fishermen", "padma", "realism"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930707-L.jpg"
    },
    {
      titleEn = "Putul Nacher Itikatha"; titleBn = "পুতুলনাচের ইতিকথা";
      authorEn = "Manik Bandyopadhyay"; authorBn = "মানিক বন্দ্যোপাধ্যায়";
      descriptionEn = "A village saga exposing the exploitation and despair of the rural poor through unforgettable characters."; descriptionBn = "অবিস্মরণীয় চরিত্রের মাধ্যমে গ্রামীণ দরিদ্রদের শোষণ ও হতাশা উন্মোচন করে একটি গ্রামীণ মহাকাব্য।";
      isbn = "9788172930714"; genre = "#fiction"; language = "#bengali";
      price = 260; stock = 50; rating = 4.7;
      tags = ["bengali-classic", "village", "exploitation", "realism"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930714-L.jpg"
    },
    {
      titleEn = "Dhatridebata"; titleBn = "ধাত্রীদেবতা";
      authorEn = "Tarashankar Bandyopadhyay"; authorBn = "তারাশঙ্কর বন্দ্যোপাধ্যায়";
      descriptionEn = "A novel about a feudal zamindar family and the sweeping social changes of the 20th century."; descriptionBn = "একটি সামন্তবাদী জমিদার পরিবার ও ২০শ শতকের ব্যাপক সামাজিক পরিবর্তন নিয়ে একটি উপন্যাস।";
      isbn = "9788172930585"; genre = "#fiction"; language = "#bengali";
      price = 320; stock = 45; rating = 4.6;
      tags = ["bengali-classic", "zamindari", "social-change"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930585-L.jpg"
    },
    {
      titleEn = "Hansuli Banker Upakatha"; titleBn = "হাঁসুলি বাঁকের উপকথা";
      authorEn = "Tarashankar Bandyopadhyay"; authorBn = "তারাশঙ্কর বন্দ্যোপাধ্যায়";
      descriptionEn = "The epic tale of the Bauri community, a masterpiece of Bengali folk-realist fiction."; descriptionBn = "বাউড়ি সম্প্রদায়ের মহাকাব্যিক গল্প, বাংলা লোক-বাস্তববাদী কথাসাহিত্যের একটি মাস্টারপিস।";
      isbn = "9788172930592"; genre = "#fiction"; language = "#bengali";
      price = 350; stock = 42; rating = 4.8;
      tags = ["bengali-classic", "folk", "community", "realism"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930592-L.jpg"
    },
    {
      titleEn = "Mahashweta Devi Selected Works"; titleBn = "মহাশ্বেতা দেবী নির্বাচিত রচনা";
      authorEn = "Mahashweta Devi"; authorBn = "মহাশ্বেতা দেবী";
      descriptionEn = "Selected fiction by the activist-author who gave voice to the marginalized tribals of India."; descriptionBn = "কর্মী-লেখকের নির্বাচিত কথাসাহিত্য যিনি ভারতের প্রান্তিক উপজাতিদের কণ্ঠস্বর দিয়েছিলেন।";
      isbn = "9788172930608"; genre = "#fiction"; language = "#bengali";
      price = 399; stock = 45; rating = 4.8;
      tags = ["mahashweta", "tribal", "social-justice", "activist"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930608-L.jpg"
    },
    {
      titleEn = "Hajar Churashir Ma"; titleBn = "হাজার চুরাশির মা";
      authorEn = "Mahashweta Devi"; authorBn = "মহাশ্বেতা দেবী";
      descriptionEn = "A mother's quest to understand her son, a Naxalite who was killed — a shattering political novel."; descriptionBn = "একজন মায়ের তার ছেলেকে বোঝার সন্ধান, যিনি একজন নকশাল ছিলেন — একটি বিধ্বংসী রাজনৈতিক উপন্যাস।";
      isbn = "9788172930615"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 55; rating = 4.9;
      tags = ["mahashweta", "naxalite", "mother", "political"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930615-L.jpg"
    },
    {
      titleEn = "Arandhan"; titleBn = "অরণ্যের অধিকার";
      authorEn = "Mahashweta Devi"; authorBn = "মহাশ্বেতা দেবী";
      descriptionEn = "A celebrated novel about Birsa Munda and the tribal people's struggle for forest rights."; descriptionBn = "বিরসা মুন্ডা ও উপজাতি মানুষের বনের অধিকারের সংগ্রাম নিয়ে একটি বিখ্যাত উপন্যাস।";
      isbn = "9788172930622"; genre = "#fiction"; language = "#bengali";
      price = 320; stock = 48; rating = 4.8;
      tags = ["tribal-rights", "birsa-munda", "forest", "resistance"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930622-L.jpg"
    },
    {
      titleEn = "Byomkesh Bakshi Samagra"; titleBn = "ব্যোমকেশ বক্সী সমগ্র";
      authorEn = "Sharadindu Bandyopadhyay"; authorBn = "শরদিন্দু বন্দ্যোপাধ্যায়";
      descriptionEn = "The complete detective adventures of Byomkesh Bakshi, Bengali literature's iconic sleuth."; descriptionBn = "ব্যোমকেশ বক্সীর সম্পূর্ণ গোয়েন্দা অ্যাডভেঞ্চার, বাংলা সাহিত্যের আইকনিক গোয়েন্দা।";
      isbn = "9788172930820"; genre = "#fiction"; language = "#bengali";
      price = 499; stock = 55; rating = 4.9;
      tags = ["detective", "byomkesh", "mystery", "iconic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930820-L.jpg"
    },
    {
      titleEn = "Satyanweshi Byomkesh"; titleBn = "সত্যান্বেষী ব্যোমকেশ";
      authorEn = "Sharadindu Bandyopadhyay"; authorBn = "শরদিন্দু বন্দ্যোপাধ্যায়";
      descriptionEn = "The first Byomkesh Bakshi story introducing the truth-seeker detective to readers."; descriptionBn = "পাঠকদের কাছে সত্যান্বেষী গোয়েন্দাকে পরিচয় করিয়ে দেওয়া প্রথম ব্যোমকেশ বক্সীর গল্প।";
      isbn = "9788172931094"; genre = "#fiction"; language = "#bengali";
      price = 249; stock = 55; rating = 4.8;
      tags = ["detective", "byomkesh", "mystery", "debut"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931094-L.jpg"
    },
    {
      titleEn = "Koni"; titleBn = "কোনি";
      authorEn = "Moti Nandi"; authorBn = "মতি নন্দী";
      descriptionEn = "An inspiring sports novel about Koni, a poor girl who rises to become a champion swimmer."; descriptionBn = "কোনি সম্পর্কে একটি অনুপ্রেরণামূলক ক্রীড়া উপন্যাস, একটি দরিদ্র মেয়ে যিনি চ্যাম্পিয়ন সাঁতারু হয়ে ওঠেন।";
      isbn = "9788172931124"; genre = "#fiction"; language = "#bengali";
      price = 220; stock = 65; rating = 4.8;
      tags = ["sports", "swimming", "inspiration", "bengali"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931124-L.jpg"
    },
    {
      titleEn = "Feluda Samagra Vol 1"; titleBn = "ফেলুদা সমগ্র খণ্ড ১";
      authorEn = "Satyajit Ray"; authorBn = "সত্যজিৎ রায়";
      descriptionEn = "The first volume of the complete Feluda detective stories by the legendary filmmaker and author."; descriptionBn = "কিংবদন্তি চলচ্চিত্র নির্মাতা ও লেখকের সম্পূর্ণ ফেলুদা গোয়েন্দা গল্পের প্রথম খণ্ড।";
      isbn = "9788172930639"; genre = "#fiction"; language = "#bengali";
      price = 399; stock = 85; rating = 4.9;
      tags = ["feluda", "detective", "satyajit-ray", "iconic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930639-L.jpg"
    },
    {
      titleEn = "Feluda Samagra Vol 2"; titleBn = "ফেলুদা সমগ্র খণ্ড ২";
      authorEn = "Satyajit Ray"; authorBn = "সত্যজিৎ রায়";
      descriptionEn = "The second volume of Feluda stories, including some of the most beloved adventures."; descriptionBn = "ফেলুদার গল্পের দ্বিতীয় খণ্ড, কিছু সবচেয়ে প্রিয় অ্যাডভেঞ্চার সহ।";
      isbn = "9788172930646"; genre = "#fiction"; language = "#bengali";
      price = 399; stock = 80; rating = 4.9;
      tags = ["feluda", "detective", "satyajit-ray", "adventure"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930646-L.jpg"
    },
    {
      titleEn = "Professor Shonku Samagra"; titleBn = "প্রফেসর শঙ্কু সমগ্র";
      authorEn = "Satyajit Ray"; authorBn = "সত্যজিৎ রায়";
      descriptionEn = "Complete Professor Shonku science fiction stories — adventure, invention, and imagination."; descriptionBn = "সম্পূর্ণ প্রফেসর শঙ্কু বিজ্ঞান কল্পকাহিনী গল্প — অ্যাডভেঞ্চার, উদ্ভাবন ও কল্পনা।";
      isbn = "9788172930653"; genre = "#fiction"; language = "#bengali";
      price = 449; stock = 70; rating = 4.9;
      tags = ["shonku", "science-fiction", "satyajit-ray", "adventure"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930653-L.jpg"
    },
    {
      titleEn = "Deshe Bideshe"; titleBn = "দেশে বিদেশে";
      authorEn = "Syed Mujtaba Ali"; authorBn = "সৈয়দ মুজতবা আলী";
      descriptionEn = "A witty and charming travel memoir about the author's time in Afghanistan in the 1920s."; descriptionBn = "১৯২০-এর দশকে আফগানিস্তানে লেখকের সময় সম্পর্কে একটি রসিক ও আকর্ষণীয় ভ্রমণ স্মৃতিকথা।";
      isbn = "9788172931377"; genre = "#biography"; language = "#bengali";
      price = 299; stock = 55; rating = 4.8;
      tags = ["travel", "afghanistan", "memoir", "humour"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931377-L.jpg"
    },
    {
      titleEn = "Buddhadeb Guha Omnibus"; titleBn = "বুদ্ধদেব গুহ সংকলন";
      authorEn = "Buddhadeb Guha"; authorBn = "বুদ্ধদেব গুহ";
      descriptionEn = "Selected novels by the nature-loving author, celebrating forests, wildlife, and human connection."; descriptionBn = "প্রকৃতিপ্রেমী লেখকের নির্বাচিত উপন্যাস, বন, বন্যপ্রাণী ও মানবিক সংযোগ উদযাপন করে।";
      isbn = "9788172930660"; genre = "#fiction"; language = "#bengali";
      price = 420; stock = 45; rating = 4.7;
      tags = ["nature", "forest", "wildlife", "bengali"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930660-L.jpg"
    },
    {
      titleEn = "Madhupur"; titleBn = "মধুপুর";
      authorEn = "Buddhadeb Guha"; authorBn = "বুদ্ধদেব গুহ";
      descriptionEn = "A lyrical novel about a man's deep bond with the Madhupur forest and its people."; descriptionBn = "মধুপুর বনের সাথে একজন মানুষের গভীর বন্ধন ও তার মানুষদের নিয়ে একটি গীতিমূলক উপন্যাস।";
      isbn = "9788172930677"; genre = "#fiction"; language = "#bengali";
      price = 320; stock = 48; rating = 4.7;
      tags = ["forest", "nature", "buddhadeb-guha"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930677-L.jpg"
    },
    {
      titleEn = "Bimal Mitra Samagra"; titleBn = "বিমল মিত্র সমগ্র";
      authorEn = "Bimal Mitra"; authorBn = "বিমল মিত্র";
      descriptionEn = "Complete collected works of Bimal Mitra, master of the Bengali commercial novel."; descriptionBn = "বাংলা বাণিজ্যিক উপন্যাসের মাস্টার বিমল মিত্রের সম্পূর্ণ রচনাবলী।";
      isbn = "9788172930684"; genre = "#fiction"; language = "#bengali";
      price = 499; stock = 38; rating = 4.5;
      tags = ["bimal-mitra", "bengali", "collected-works"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930684-L.jpg"
    },
    {
      titleEn = "Saheb Bibi Golam"; titleBn = "সাহেব বিবি গোলাম";
      authorEn = "Bimal Mitra"; authorBn = "বিমল মিত্র";
      descriptionEn = "A sweeping novel about the decline of the Bengali zamindari aristocracy and their way of life."; descriptionBn = "বাংলার জমিদার অভিজাত শ্রেণী ও তাদের জীবনধারার পতন নিয়ে একটি বিশাল উপন্যাস।";
      isbn = "9788172930691"; genre = "#fiction"; language = "#bengali";
      price = 380; stock = 50; rating = 4.7;
      tags = ["zamindari", "decline", "bengali-aristocracy", "historical"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930691-L.jpg"
    },
    {
      titleEn = "Phire Esho Chakorika"; titleBn = "ফিরে এসো চাকোরিকা";
      authorEn = "Sunil Gangopadhyay"; authorBn = "সুনীল গঙ্গোপাধ্যায়";
      descriptionEn = "A deeply personal poetry collection capturing longing, loss, and the passage of time."; descriptionBn = "আকাঙ্ক্ষা, ক্ষতি ও সময়ের প্রবাহ ধারণ করে একটি গভীরভাবে ব্যক্তিগত কবিতা সংকলন।";
      isbn = "9788172930899"; genre = "#poetry"; language = "#bengali";
      price = 280; stock = 55; rating = 4.7;
      tags = ["sunil", "poetry", "longing", "modern"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930899-L.jpg"
    },
    {
      titleEn = "Aakash Patal"; titleBn = "আকাশ পাতাল";
      authorEn = "Sunil Gangopadhyay"; authorBn = "সুনীল গঙ্গোপাধ্যায়";
      descriptionEn = "A modern Bengali novel about urban life, ambition, and the complexities of human relationships."; descriptionBn = "নগর জীবন, উচ্চাকাঙ্ক্ষা ও মানবিক সম্পর্কের জটিলতা নিয়ে একটি আধুনিক বাংলা উপন্যাস।";
      isbn = "9788172930905"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 50; rating = 4.5;
      tags = ["modern-bengali", "urban", "ambition"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930905-L.jpg"
    },
    {
      titleEn = "Mishor Rahashya Feluda"; titleBn = "মিশর রহস্য ফেলুদা";
      authorEn = "Satyajit Ray"; authorBn = "সত্যজিৎ রায়";
      descriptionEn = "Feluda travels to Egypt and unravels an ancient mystery in this thrilling adventure."; descriptionBn = "ফেলুদা মিশরে যান এবং এই রোমাঞ্চকর অ্যাডভেঞ্চারে একটি প্রাচীন রহস্য উন্মোচন করেন।";
      isbn = "9788172930912"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 70; rating = 4.8;
      tags = ["feluda", "egypt", "adventure", "mystery"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930912-L.jpg"
    },
    {
      titleEn = "Darjeeling Jawmjawmat"; titleBn = "দার্জিলিং জমজমাট";
      authorEn = "Satyajit Ray"; authorBn = "সত্যজিৎ রায়";
      descriptionEn = "Feluda in Darjeeling, where mystery meets the misty hills of the Himalayas."; descriptionBn = "দার্জিলিংয়ে ফেলুদা, যেখানে রহস্য হিমালয়ের কুয়াশাচ্ছন্ন পাহাড়ের সাথে মিলিত হয়।";
      isbn = "9788172930929"; genre = "#fiction"; language = "#bengali";
      price = 249; stock = 65; rating = 4.8;
      tags = ["feluda", "darjeeling", "mystery", "adventure"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930929-L.jpg"
    },
    {
      titleEn = "Lal Juto"; titleBn = "লাল জুতো";
      authorEn = "Satyajit Ray"; authorBn = "সত্যজিৎ রায়";
      descriptionEn = "Tarini Khuro's supernatural adventures — spooky and delightfully entertaining."; descriptionBn = "তারিণী খুড়োর অতিপ্রাকৃতিক অ্যাডভেঞ্চার — ভীতিকর এবং আনন্দদায়কভাবে বিনোদনমূলক।";
      isbn = "9788172930936"; genre = "#fiction"; language = "#bengali";
      price = 220; stock = 60; rating = 4.7;
      tags = ["supernatural", "satyajit-ray", "tarini-khurar", "stories"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930936-L.jpg"
    },
    {
      titleEn = "Akhand Bharat"; titleBn = "অখণ্ড ভারত";
      authorEn = "Sunil Gangopadhyay"; authorBn = "সুনীল গঙ্গোপাধ্যায়";
      descriptionEn = "A sweeping historical novel about the partition of India and its devastating human cost."; descriptionBn = "ভারতের বিভাজন ও তার বিধ্বংসী মানবিক মূল্য নিয়ে একটি বিশাল ঐতিহাসিক উপন্যাস।";
      isbn = "9788172930943"; genre = "#fiction"; language = "#bengali";
      price = 399; stock = 50; rating = 4.7;
      tags = ["partition", "historical", "india", "bengali"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930943-L.jpg"
    },
    {
      titleEn = "Nirbachita Rachana Jibanananda"; titleBn = "নির্বাচিত রচনা জীবনানন্দ";
      authorEn = "Jibanananda Das"; authorBn = "জীবনানন্দ দাশ";
      descriptionEn = "Selected poetry and prose by the enigmatic modernist, including Banalata Sen and many more."; descriptionBn = "রহস্যময় আধুনিকতাবাদীর নির্বাচিত কবিতা ও গদ্য, বনলতা সেন ও আরও অনেক কিছু সহ।";
      isbn = "9788172930950"; genre = "#poetry"; language = "#bengali";
      price = 350; stock = 55; rating = 4.8;
      tags = ["jibanananda", "selected", "poetry", "modernist"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930950-L.jpg"
    },
    {
      titleEn = "Natun Pachali"; titleBn = "নতুন পাঁচালী";
      authorEn = "Rabindranath Tagore"; authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "A collection of Tagore's shorter poems reflecting on nature, life, and the divine."; descriptionBn = "প্রকৃতি, জীবন ও ঐশ্বরিক বিষয়ে রবীন্দ্রনাথের ছোট কবিতার সংকলন।";
      isbn = "9788172930967"; genre = "#poetry"; language = "#bengali";
      price = 210; stock = 50; rating = 4.6;
      tags = ["tagore", "poetry", "nature", "divine"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930967-L.jpg"
    },
    {
      titleEn = "Shrikanta"; titleBn = "শ্রীকান্ত";
      authorEn = "Sarat Chandra Chattopadhyay"; authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "An autobiographical novel in four parts following Srikanta's wandering life and loves."; descriptionBn = "চার ভাগে একটি আত্মজীবনীমূলক উপন্যাস, শ্রীকান্তের পরিভ্রমণমূলক জীবন ও প্রেম অনুসরণ করে।";
      isbn = "9788172930974"; genre = "#fiction"; language = "#bengali";
      price = 399; stock = 60; rating = 4.8;
      tags = ["sarat", "autobiographical", "wandering", "love"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930974-L.jpg"
    },
    {
      titleEn = "Rabindra Kavitabali"; titleBn = "রবীন্দ্র কবিতাবলী";
      authorEn = "Rabindranath Tagore"; authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "A comprehensive anthology of Tagore's poetry spanning his entire creative career."; descriptionBn = "তাঁর সম্পূর্ণ সৃজনশীল জীবনকাল জুড়ে রবীন্দ্রনাথের কবিতার একটি বিস্তৃত সংকলন।";
      isbn = "9788172930981"; genre = "#poetry"; language = "#bengali";
      price = 449; stock = 70; rating = 4.9;
      tags = ["tagore", "poetry", "anthology", "complete"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930981-L.jpg"
    },
    {
      titleEn = "Nabarun Bhattacharya Rachanabali"; titleBn = "নবারুণ ভট্টাচার্য রচনাবলী";
      authorEn = "Nabarun Bhattacharya"; authorBn = "নবারুণ ভট্টাচার্য";
      descriptionEn = "Selected works of the rebellious postmodern writer who shook Bengali literary norms."; descriptionBn = "বিদ্রোহী উত্তর-আধুনিক লেখকের নির্বাচিত রচনা যিনি বাংলা সাহিত্যের রীতিকে কাঁপিয়ে দিয়েছিলেন।";
      isbn = "9788172930998"; genre = "#fiction"; language = "#bengali";
      price = 380; stock = 40; rating = 4.6;
      tags = ["postmodern", "rebellious", "bengali-literature"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930998-L.jpg"
    },
    {
      titleEn = "Patibrata"; titleBn = "পতিব্রতা";
      authorEn = "Sarat Chandra Chattopadhyay"; authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A novel about the traditional ideals of womanhood and their conflict with modern values."; descriptionBn = "নারীত্বের ঐতিহ্যবাহী আদর্শ ও আধুনিক মূল্যবোধের সাথে তাদের দ্বন্দ্ব নিয়ে একটি উপন্যাস।";
      isbn = "9788172931001"; genre = "#fiction"; language = "#bengali";
      price = 250; stock = 45; rating = 4.5;
      tags = ["sarat", "womanhood", "tradition", "social"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931001-L.jpg"
    },
    {
      titleEn = "Palli Samaj"; titleBn = "পল্লী সমাজ";
      authorEn = "Sarat Chandra Chattopadhyay"; authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A village society novel exposing caste discrimination and the power of love to transcend it."; descriptionBn = "জাতিবৈষম্য উন্মোচন করে এবং এটিকে অতিক্রম করার জন্য প্রেমের শক্তি নিয়ে একটি গ্রামীণ সমাজ উপন্যাস।";
      isbn = "9788172931018"; genre = "#fiction"; language = "#bengali";
      price = 260; stock = 48; rating = 4.6;
      tags = ["sarat", "village", "caste", "social-reform"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931018-L.jpg"
    },
    {
      titleEn = "Grihadaha"; titleBn = "গৃহদাহ";
      authorEn = "Sarat Chandra Chattopadhyay"; authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A powerful story of love, adultery, and redemption that shocked Bengali society."; descriptionBn = "প্রেম, ব্যভিচার ও মুক্তির একটি শক্তিশালী গল্প যা বাঙালি সমাজকে চমকে দিয়েছিল।";
      isbn = "9788172931032"; genre = "#fiction"; language = "#bengali";
      price = 270; stock = 50; rating = 4.7;
      tags = ["sarat", "love", "adultery", "social"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931032-L.jpg"
    },
    {
      titleEn = "Bipradas"; titleBn = "বিপ্রদাস";
      authorEn = "Sarat Chandra Chattopadhyay"; authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A novel about a self-sacrificing brahmin and the tangled web of love and duty."; descriptionBn = "একজন আত্মত্যাগী ব্রাহ্মণ ও প্রেম ও কর্তব্যের জটিল জালের নিয়ে একটি উপন্যাস।";
      isbn = "9788172930660"; genre = "#fiction"; language = "#bengali";
      price = 260; stock = 45; rating = 4.5;
      tags = ["sarat", "brahmin", "sacrifice", "duty"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930660-L.jpg"
    },
    {
      titleEn = "Jalsaghar"; titleBn = "জলসাঘর";
      authorEn = "Tarashankar Bandyopadhyay"; authorBn = "তারাশঙ্কর বন্দ্যোপাধ্যায়";
      descriptionEn = "A declining zamindar clings to his music hall as his world crumbles around him."; descriptionBn = "পতনশীল জমিদার তার বিশ্ব ভেঙে পড়ার সাথে সাথে তার সংগীত হলকে আঁকড়ে ধরেন।";
      isbn = "9788172930608"; genre = "#fiction"; language = "#bengali";
      price = 260; stock = 42; rating = 4.6;
      tags = ["zamindari", "music", "decline", "tarashankar"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930608-L.jpg"
    },
    {
      titleEn = "Debi"; titleBn = "দেবী";
      authorEn = "Humayun Ahmed"; authorBn = "হুমায়ূন আহমেদ";
      descriptionEn = "A supernatural tale about a young woman believed to be possessed by a goddess."; descriptionBn = "একজন তরুণী সম্পর্কে একটি অতিপ্রাকৃতিক গল্প যাকে দেবী দ্বারা আবিষ্ট বলে মনে করা হয়।";
      isbn = "9788172931049"; genre = "#fiction"; language = "#bengali";
      price = 249; stock = 65; rating = 4.7;
      tags = ["supernatural", "goddess", "bangladeshi", "humayun-ahmed"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931049-L.jpg"
    },
    {
      titleEn = "Nondito Naroke"; titleBn = "নন্দিত নরকে";
      authorEn = "Humayun Ahmed"; authorBn = "হুমায়ূন আহমেদ";
      descriptionEn = "Humayun Ahmed's debut novel — a raw, honest look at Bangladeshi middle-class life."; descriptionBn = "হুমায়ূন আহমেদের প্রথম উপন্যাস — বাংলাদেশি মধ্যবিত্ত জীবনের কাঁচা, সৎ দৃষ্টিভঙ্গি।";
      isbn = "9788172931056"; genre = "#fiction"; language = "#bengali";
      price = 220; stock = 70; rating = 4.7;
      tags = ["bangladeshi", "debut", "middle-class", "humayun-ahmed"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931056-L.jpg"
    },
    {
      titleEn = "Mukto Batas"; titleBn = "মুক্ত বাতাস";
      authorEn = "Sunil Gangopadhyay"; authorBn = "সুনীল গঙ্গোপাধ্যায়";
      descriptionEn = "An exuberant novel about the free spirit of youth, friendship, and creative rebellion."; descriptionBn = "যৌবনের মুক্ত মনোভাব, বন্ধুত্ব ও সৃজনশীল বিদ্রোহ নিয়ে একটি প্রাণবন্ত উপন্যাস।";
      isbn = "9788172931063"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 50; rating = 4.5;
      tags = ["youth", "friendship", "rebellion", "bengali"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931063-L.jpg"
    },
    {
      titleEn = "Kabiyal Bhairabi"; titleBn = "কবিয়াল ভৈরবী";
      authorEn = "Tarashankar Bandyopadhyay"; authorBn = "তারাশঙ্কর বন্দ্যোপাধ্যায়";
      descriptionEn = "A musical journey through the folk song traditions of rural Bengal."; descriptionBn = "গ্রামীণ বাংলার লোকসংগীত ঐতিহ্যের মাধ্যমে একটি সংগীতময় যাত্রা।";
      isbn = "9788172931070"; genre = "#fiction"; language = "#bengali";
      price = 280; stock = 40; rating = 4.6;
      tags = ["folk-music", "rural-bengal", "tarashankar"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931070-L.jpg"
    },
    {
      titleEn = "Chhoto Golpo Samagra Manik"; titleBn = "ছোটগল্প সমগ্র মানিক";
      authorEn = "Manik Bandyopadhyay"; authorBn = "মানিক বন্দ্যোপাধ্যায়";
      descriptionEn = "The complete short stories of Manik Bandyopadhyay, a treasure of Bengali realist fiction."; descriptionBn = "মানিক বন্দ্যোপাধ্যায়ের সম্পূর্ণ ছোটগল্প, বাংলা বাস্তববাদী কথাসাহিত্যের একটি রত্নভান্ডার।";
      isbn = "9788172931087"; genre = "#fiction"; language = "#bengali";
      price = 480; stock = 38; rating = 4.8;
      tags = ["manik", "short-stories", "realism", "complete"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931087-L.jpg"
    },
    {
      titleEn = "Swapna Bhabana"; titleBn = "স্বপ্ন ভাবনা";
      authorEn = "Shirshendu Mukhopadhyay"; authorBn = "শীর্ষেন্দু মুখোপাধ্যায়";
      descriptionEn = "A collection of Shirshendu's most memorable short stories about dreams, longing, and everyday magic."; descriptionBn = "স্বপ্ন, আকাঙ্ক্ষা ও দৈনন্দিন জাদু সম্পর্কে শীর্ষেন্দুর সবচেয়ে স্মরণীয় ছোটগল্পের সংকলন।";
      isbn = "9788172931100"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 50; rating = 4.6;
      tags = ["shirshendu", "short-stories", "dreams", "magic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931100-L.jpg"
    },
    {
      titleEn = "Durbin"; titleBn = "দুর্বিন";
      authorEn = "Buddhadeb Guha"; authorBn = "বুদ্ধদেব গুহ";
      descriptionEn = "A powerful hunting memoir set in the forests of India, full of adventure and wonder."; descriptionBn = "ভারতের বনে শিকারের একটি শক্তিশালী স্মৃতিকথা, অ্যাডভেঞ্চার ও বিস্ময়ে পরিপূর্ণ।";
      isbn = "9788172931117"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 48; rating = 4.7;
      tags = ["forest", "hunting", "memoir", "adventure"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931117-L.jpg"
    },
    {
      titleEn = "Bichhanay Thaki Na"; titleBn = "বিছানায় থাকি না";
      authorEn = "Buddhadeb Guha"; authorBn = "বুদ্ধদেব গুহ";
      descriptionEn = "An adventurous travel memoir celebrating the joy of exploration and freedom."; descriptionBn = "অন্বেষণ ও স্বাধীনতার আনন্দ উদযাপন করে একটি সাহসী ভ্রমণ স্মৃতিকথা।";
      isbn = "9788172931124"; genre = "#biography"; language = "#bengali";
      price = 280; stock = 45; rating = 4.6;
      tags = ["travel", "adventure", "freedom", "buddhadeb"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931124-L.jpg"
    },
    {
      titleEn = "Swami"; titleBn = "স্বামী";
      authorEn = "Sarat Chandra Chattopadhyay"; authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A story about marital sacrifice, gender roles, and what it truly means to love."; descriptionBn = "বৈবাহিক আত্মত্যাগ, লিঙ্গ ভূমিকা এবং প্রেমের প্রকৃত অর্থ কী তা নিয়ে একটি গল্প।";
      isbn = "9788172931131"; genre = "#fiction"; language = "#bengali";
      price = 240; stock = 50; rating = 4.5;
      tags = ["sarat", "marriage", "sacrifice", "gender"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931131-L.jpg"
    },
    {
      titleEn = "Adarsha Hindu Hotel"; titleBn = "আদর্শ হিন্দু হোটেল";
      authorEn = "Bibhutibhushan Bandyopadhyay"; authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
      descriptionEn = "A charming novel about the dreams and dignity of a humble hotel cook."; descriptionBn = "একজন নম্র হোটেল রাঁধুনির স্বপ্ন ও মর্যাদা নিয়ে একটি মনোরম উপন্যাস।";
      isbn = "9788172931148"; genre = "#fiction"; language = "#bengali";
      price = 260; stock = 55; rating = 4.7;
      tags = ["bengali-classic", "humble", "dignity", "hotel"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931148-L.jpg"
    },
    {
      titleEn = "Aranyak"; titleBn = "আরণ্যক";
      authorEn = "Bibhutibhushan Bandyopadhyay"; authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
      descriptionEn = "A lyrical celebration of the forest and its people — one of the great nature novels of Bengali literature."; descriptionBn = "বনের গীতিমূলক উদযাপন ও এর মানুষ — বাংলা সাহিত্যের মহান প্রকৃতি উপন্যাসগুলির একটি।";
      isbn = "9788172931155"; genre = "#fiction"; language = "#bengali";
      price = 280; stock = 60; rating = 4.9;
      tags = ["forest", "nature", "bibhuti", "lyrical"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931155-L.jpg"
    },
    {
      titleEn = "Premendra Mitra Golpo Samagra"; titleBn = "প্রেমেন্দ্র মিত্র গল্প সমগ্র";
      authorEn = "Premendra Mitra"; authorBn = "প্রেমেন্দ্র মিত্র";
      descriptionEn = "The complete short stories of Premendra Mitra, a giant of Bengali science fiction and adventure."; descriptionBn = "প্রেমেন্দ্র মিত্রের সম্পূর্ণ ছোটগল্প, বাংলা বিজ্ঞান কল্পকাহিনী ও অ্যাডভেঞ্চারের একজন দৈত্য।";
      isbn = "9788172931162"; genre = "#fiction"; language = "#bengali";
      price = 499; stock = 38; rating = 4.8;
      tags = ["science-fiction", "adventure", "premendra", "complete"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931162-L.jpg"
    },
    {
      titleEn = "Narayan Gangopadhyay Rachana"; titleBn = "নারায়ণ গঙ্গোপাধ্যায় রচনা";
      authorEn = "Narayan Gangopadhyay"; authorBn = "নারায়ণ গঙ্গোপাধ্যায়";
      descriptionEn = "Selected works including the beloved Tenida stories that have delighted generations."; descriptionBn = "প্রিয় তেনিদার গল্প সহ নির্বাচিত রচনা যা প্রজন্মকে আনন্দিত করেছে।";
      isbn = "9788172931179"; genre = "#fiction"; language = "#bengali";
      price = 360; stock = 50; rating = 4.7;
      tags = ["tenida", "children", "humour", "classic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931179-L.jpg"
    },
    {
      titleEn = "Suktara Chhoto Golpo"; titleBn = "শুকতারা ছোটগল্প সংকলন";
      authorEn = "Various Authors"; authorBn = "বিভিন্ন লেখক";
      descriptionEn = "A curated anthology of the best Bengali short stories from the Suktara magazine."; descriptionBn = "শুকতারা পত্রিকার সেরা বাংলা ছোটগল্পের একটি বাছাইকৃত সংকলন।";
      isbn = "9788172931186"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 50; rating = 4.5;
      tags = ["anthology", "short-stories", "magazine", "bengali"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931186-L.jpg"
    },
    {
      titleEn = "Charitraheen"; titleBn = "চরিত্রহীন";
      authorEn = "Sarat Chandra Chattopadhyay"; authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A controversial and landmark novel challenging social hypocrisy and double standards."; descriptionBn = "সামাজিক ভণ্ডামি ও দ্বৈত মানদণ্ডকে চ্যালেঞ্জ করে একটি বিতর্কিত ও যুগান্তকারী উপন্যাস।";
      isbn = "9788172931193"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 55; rating = 4.7;
      tags = ["sarat", "controversial", "social-hypocrisy", "classic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931193-L.jpg"
    },
    {
      titleEn = "Bikhyata Bangali Kabi"; titleBn = "বিখ্যাত বাঙালি কবিদের নির্বাচিত কবিতা";
      authorEn = "Various Poets"; authorBn = "বিভিন্ন কবি";
      descriptionEn = "An anthology of famous Bengali poets from medieval times to the modern era."; descriptionBn = "মধ্যযুগ থেকে আধুনিক যুগ পর্যন্ত বিখ্যাত বাঙালি কবিদের একটি সংকলন।";
      isbn = "9788172931209"; genre = "#poetry"; language = "#bengali";
      price = 349; stock = 45; rating = 4.6;
      tags = ["anthology", "poetry", "famous-poets", "bengali"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931209-L.jpg"
    },
    {
      titleEn = "Tarasankar Rachanabali Vol 1"; titleBn = "তারাশঙ্কর রচনাবলী খণ্ড ১";
      authorEn = "Tarashankar Bandyopadhyay"; authorBn = "তারাশঙ্কর বন্দ্যোপাধ্যায়";
      descriptionEn = "The first volume of collected works by the Jnanpith Award winner Tarashankar."; descriptionBn = "জ্ঞানপীঠ পুরস্কার বিজয়ী তারাশঙ্করের রচনাবলীর প্রথম খণ্ড।";
      isbn = "9788172930578"; genre = "#fiction"; language = "#bengali";
      price = 480; stock = 35; rating = 4.7;
      tags = ["tarashankar", "collected-works", "jnanpith"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930578-L.jpg"
    },
    {
      titleEn = "Shashabati"; titleBn = "শাশ্বতী";
      authorEn = "Ashapurna Devi"; authorBn = "আশাপূর্ণা দেবী";
      descriptionEn = "A novel about eternal womanhood, resilience, and the unchanging nature of love."; descriptionBn = "চিরন্তন নারীত্ব, স্থিতিস্থাপকতা ও প্রেমের অপরিবর্তনীয় প্রকৃতি নিয়ে একটি উপন্যাস।";
      isbn = "9788172931216"; genre = "#fiction"; language = "#bengali";
      price = 280; stock = 45; rating = 4.6;
      tags = ["womens-writing", "eternal", "resilience"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931216-L.jpg"
    },
    {
      titleEn = "Phire Pao"; titleBn = "ফিরে পাও";
      authorEn = "Humayun Ahmed"; authorBn = "হুমায়ূন আহমেদ";
      descriptionEn = "A tender novel about estrangement, reconciliation, and the enduring bonds of family."; descriptionBn = "বিচ্ছিন্নতা, পুনর্মিলন ও পারিবারিক বন্ধনের স্থায়িত্ব নিয়ে একটি কোমল উপন্যাস।";
      isbn = "9788172931223"; genre = "#fiction"; language = "#bengali";
      price = 240; stock = 55; rating = 4.5;
      tags = ["bangladeshi", "family", "reconciliation"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931223-L.jpg"
    },
    {
      titleEn = "Ei Sab Din Ratri"; titleBn = "এই সব দিন রাত্রি";
      authorEn = "Sunil Gangopadhyay"; authorBn = "সুনীল গঙ্গোপাধ্যায়";
      descriptionEn = "A deeply personal novel about a writer's life, loves, and creative struggles."; descriptionBn = "একজন লেখকের জীবন, প্রেম ও সৃজনশীল সংগ্রাম নিয়ে একটি গভীরভাবে ব্যক্তিগত উপন্যাস।";
      isbn = "9788172931230"; genre = "#fiction"; language = "#bengali";
      price = 320; stock = 48; rating = 4.6;
      tags = ["sunil", "writer-life", "personal", "creative"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931230-L.jpg"
    },
    {
      titleEn = "Icchamati"; titleBn = "ইছামতী";
      authorEn = "Bibhutibhushan Bandyopadhyay"; authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
      descriptionEn = "Set on the banks of the Ichamati river, a vast portrait of life in 19th-century rural Bengal."; descriptionBn = "ইছামতী নদীর তীরে, ১৯শ শতকের গ্রামীণ বাংলায় জীবনের একটি বিশাল চিত্র।";
      isbn = "9788172931247"; genre = "#fiction"; language = "#bengali";
      price = 350; stock = 50; rating = 4.8;
      tags = ["bengali-classic", "river", "rural", "historical"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931247-L.jpg"
    },
    {
      titleEn = "Bonfuler Golpo Samagra"; titleBn = "বনফুলের গল্প সমগ্র";
      authorEn = "Balai Chand Mukhopadhyay"; authorBn = "বলাইচাঁদ মুখোপাধ্যায় (বনফুল)";
      descriptionEn = "The complete short stories of Bonphul, master of the humorous and satirical Bengali story."; descriptionBn = "বনফুলের সম্পূর্ণ ছোটগল্প, হাস্যরসাত্মক ও ব্যঙ্গাত্মক বাংলা গল্পের মাস্টার।";
      isbn = "9788172931254"; genre = "#fiction"; language = "#bengali";
      price = 450; stock = 38; rating = 4.7;
      tags = ["bonphul", "humour", "satire", "short-stories"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931254-L.jpg"
    },
    {
      titleEn = "Taslima Nasrin Nirbachita"; titleBn = "তসলিমা নাসরিন নির্বাচিতা";
      authorEn = "Taslima Nasrin"; authorBn = "তসলিমা নাসরিন";
      descriptionEn = "Selected poems and prose by the controversial feminist author and activist."; descriptionBn = "বিতর্কিত নারীবাদী লেখক ও কর্মীর নির্বাচিত কবিতা ও গদ্য।";
      isbn = "9788172931261"; genre = "#poetry"; language = "#bengali";
      price = 320; stock = 40; rating = 4.4;
      tags = ["feminist", "controversial", "poetry", "activism"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931261-L.jpg"
    },
    {
      titleEn = "Lajja"; titleBn = "লজ্জা";
      authorEn = "Taslima Nasrin"; authorBn = "তসলিমা নাসরিন";
      descriptionEn = "A controversial novel about communal violence and religious persecution of Hindus in Bangladesh."; descriptionBn = "বাংলাদেশে হিন্দুদের সাম্প্রদায়িক সহিংসতা ও ধর্মীয় নিপীড়ন নিয়ে একটি বিতর্কিত উপন্যাস।";
      isbn = "9788172931278"; genre = "#fiction"; language = "#bengali";
      price = 280; stock = 45; rating = 4.3;
      tags = ["communal", "controversial", "bangladesh", "religious"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931278-L.jpg"
    },
    {
      titleEn = "Charidike Raat"; titleBn = "চারিদিকে রাত";
      authorEn = "Samaresh Basu"; authorBn = "সমরেশ বসু";
      descriptionEn = "A dark and powerful novel about life in the underbelly of Calcutta's working class."; descriptionBn = "কলকাতার শ্রমিক শ্রেণীর নিম্নস্তরে জীবন সম্পর্কে একটি অন্ধকার ও শক্তিশালী উপন্যাস।";
      isbn = "9788172931285"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 45; rating = 4.6;
      tags = ["working-class", "calcutta", "dark", "realism"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931285-L.jpg"
    },
    {
      titleEn = "Bibarna Pakhi"; titleBn = "বিবর্ণ পাখি";
      authorEn = "Bimalendu Choudhury"; authorBn = "বিমলেন্দু চৌধুরী";
      descriptionEn = "A poetic novel about a fading life and the gentle passage of time in rural Bengal."; descriptionBn = "গ্রামীণ বাংলায় ক্ষয়িষ্ণু জীবন ও সময়ের ধীর প্রবাহ নিয়ে একটি কাব্যিক উপন্যাস।";
      isbn = "9788172931308"; genre = "#fiction"; language = "#bengali";
      price = 240; stock = 40; rating = 4.4;
      tags = ["rural", "lyrical", "time", "bengali"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931308-L.jpg"
    },
    {
      titleEn = "Vaishnav Padabali"; titleBn = "বৈষ্ণব পদাবলী";
      authorEn = "Various Vaishnava Poets"; authorBn = "বিভিন্ন বৈষ্ণব কবি";
      descriptionEn = "The devotional Vaishnava lyrics of medieval Bengal, celebrating the love of Radha and Krishna."; descriptionBn = "মধ্যযুগীয় বাংলার ভক্তিমূলক বৈষ্ণব গীতিকা, রাধা ও কৃষ্ণের প্রেম উদযাপন করে।";
      isbn = "9788172931230"; genre = "#poetry"; language = "#bengali";
      price = 299; stock = 45; rating = 4.7;
      tags = ["vaishnava", "devotional", "radha-krishna", "medieval"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931230-L.jpg"
    },
    {
      titleEn = "Kaalo Ghoder Poraner Upore"; titleBn = "কালো ঘোড়ার প্রাণের উপরে";
      authorEn = "Shirshendu Mukhopadhyay"; authorBn = "শীর্ষেন্দু মুখোপাধ্যায়";
      descriptionEn = "A haunting novel that blends magic realism with rural Bengali folklore."; descriptionBn = "যাদু বাস্তববাদকে গ্রামীণ বাংলার লোককাহিনীর সাথে মিশিয়ে দেওয়া একটি আবিষ্টকারী উপন্যাস।";
      isbn = "9788172931315"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 48; rating = 4.6;
      tags = ["magic-realism", "folk", "shirshendu", "rural"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931315-L.jpg"
    },
    {
      titleEn = "Mati Bhumi Manush"; titleBn = "মাটি ভূমি মানুষ";
      authorEn = "Samaresh Majumdar"; authorBn = "সমরেশ মজুমদার";
      descriptionEn = "An earthy novel about the bond between people, their land, and the changing times."; descriptionBn = "মানুষ, তাদের জমি ও পরিবর্তনশীল সময়ের বন্ধন নিয়ে একটি মাটিঘেঁষা উপন্যাস।";
      isbn = "9788172931322"; genre = "#fiction"; language = "#bengali";
      price = 320; stock = 50; rating = 4.6;
      tags = ["land", "people", "social-change", "samaresh"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931322-L.jpg"
    },
    {
      titleEn = "Bangla Kabita Samagra Sukanta"; titleBn = "বাংলা কবিতা সমগ্র সুকান্ত";
      authorEn = "Sukanta Bhattacharya"; authorBn = "সুকান্ত ভট্টাচার্য";
      descriptionEn = "The complete poetry of Sukanta Bhattacharya, the voice of the struggling masses."; descriptionBn = "সুকান্ত ভট্টাচার্যের সম্পূর্ণ কবিতা, সংগ্রামী জনগণের কণ্ঠস্বর।";
      isbn = "9788172930547"; genre = "#poetry"; language = "#bengali";
      price = 299; stock = 60; rating = 4.8;
      tags = ["sukanta", "poetry", "complete", "revolutionary"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930547-L.jpg"
    },
    {
      titleEn = "Swarnarekha"; titleBn = "স্বর্ণরেখা";
      authorEn = "Samaresh Basu"; authorBn = "সমরেশ বসু";
      descriptionEn = "A river and its people — a beautiful meditation on the relationship between nature and humanity."; descriptionBn = "একটি নদী ও তার মানুষ — প্রকৃতি ও মানবতার মধ্যে সম্পর্কের একটি সুন্দর ধ্যান।";
      isbn = "9788172931292"; genre = "#fiction"; language = "#bengali";
      price = 280; stock = 42; rating = 4.6;
      tags = ["river", "nature", "humanity", "samaresh-basu"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931292-L.jpg"
    },
    {
      titleEn = "Arandhan O Anyanya"; titleBn = "অরণ্যদেব ও অন্যান্য";
      authorEn = "Satyajit Ray"; authorBn = "সত্যজিৎ রায়";
      descriptionEn = "A collection of Satyajit Ray's science fiction stories featuring Professor Shonku."; descriptionBn = "প্রফেসর শঙ্কুকে বৈশিষ্ট্যযুক্ত করে সত্যজিৎ রায়ের বিজ্ঞান কল্পকাহিনী গল্পের সংকলন।";
      isbn = "9788172931339"; genre = "#fiction"; language = "#bengali";
      price = 299; stock = 60; rating = 4.8;
      tags = ["shonku", "science-fiction", "satyajit-ray"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931339-L.jpg"
    },
    {
      titleEn = "Badurkar Bari"; titleBn = "বাদুড়ের বাড়ি";
      authorEn = "Shirshendu Mukhopadhyay"; authorBn = "শীর্ষেন্দু মুখোপাধ্যায়";
      descriptionEn = "A children's novel full of mystery and adventure set in a haunted old house."; descriptionBn = "একটি ভুতুড়ে পুরনো বাড়িতে স্থাপিত রহস্য ও অ্যাডভেঞ্চারে পরিপূর্ণ একটি শিশুতোষ উপন্যাস।";
      isbn = "9788172931346"; genre = "#fiction"; language = "#bengali";
      price = 220; stock = 65; rating = 4.7;
      tags = ["children", "mystery", "haunted", "adventure"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931346-L.jpg"
    },
    {
      titleEn = "Mahabharata Katha"; titleBn = "মহাভারতের কথা";
      authorEn = "Rajshekhar Basu"; authorBn = "রাজশেখর বসু (পরশুরাম)";
      descriptionEn = "A brilliant retelling of the Mahabharata in Bengali prose, abridged and elegant."; descriptionBn = "বাংলা গদ্যে মহাভারতের একটি উজ্জ্বল পুনর্কথন, সংক্ষিপ্ত ও মার্জিত।";
      isbn = "9788172931353"; genre = "#fiction"; language = "#bengali";
      price = 380; stock = 55; rating = 4.9;
      tags = ["mahabharata", "retelling", "mythology", "bengali"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931353-L.jpg"
    },
    {
      titleEn = "Ramayana Katha"; titleBn = "রামায়ণের কথা";
      authorEn = "Rajshekhar Basu"; authorBn = "রাজশেখর বসু (পরশুরাম)";
      descriptionEn = "A masterful abridgement and retelling of the Ramayana in modern Bengali."; descriptionBn = "আধুনিক বাংলায় রামায়ণের একটি দক্ষ সংক্ষেপণ ও পুনর্কথন।";
      isbn = "9788172931360"; genre = "#fiction"; language = "#bengali";
      price = 320; stock = 55; rating = 4.8;
      tags = ["ramayana", "retelling", "mythology", "bengali"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931360-L.jpg"
    },
    {
      titleEn = "Sukumar Rachanasamagra"; titleBn = "সুকুমার রচনাসমগ্র";
      authorEn = "Sukumar Ray"; authorBn = "সুকুমার রায়";
      descriptionEn = "The complete works of Sukumar Ray, the genius nonsense poet who delighted children and adults alike."; descriptionBn = "সুকুমার রায়ের সম্পূর্ণ রচনা, প্রতিভাবান ননসেন্স কবি যিনি শিশু ও প্রাপ্তবয়স্ক উভয়কেই আনন্দিত করেছিলেন।";
      isbn = "9788172931384"; genre = "#poetry"; language = "#bengali";
      price = 399; stock = 70; rating = 4.9;
      tags = ["sukumar-ray", "nonsense", "humour", "children"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172931384-L.jpg"
    },
  ];
}
