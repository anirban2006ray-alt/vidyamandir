module {
  public let books : [{
    titleEn: Text; titleBn: Text; authorEn: Text; authorBn: Text;
    descriptionEn: Text; descriptionBn: Text;
    isbn: Text; genre: Text; language: Text;
    price: Nat; stock: Nat; rating: Float;
    tags: [Text]; coverImageUrl: Text
  }] = [
    {
      titleEn = "Bhagavad Gita As It Is";
      titleBn = "ভগবদ্গীতা যথাযথ";
      authorEn = "A.C. Bhaktivedanta Swami Prabhupada";
      authorBn = "এ.সি. ভক্তিবেদান্ত স্বামী প্রভুপাদ";
      descriptionEn = "The complete edition of Bhagavad Gita with original Sanskrit text, transliteration, word-for-word meanings, translation and elaborate commentary by Srila Prabhupada.";
      descriptionBn = "শ্রীল প্রভুপাদের বিস্তারিত ভাষ্যসহ সংস্কৃত মূলপাঠ, রোমান প্রতিবর্ণীকরণ ও শব্দ-প্রতি-শব্দ অনুবাদ সম্বলিত সম্পূর্ণ ভগবদ্গীতা।";
      isbn = "9780892131198";
      genre = "religion";
      language = "english";
      price = 599;
      stock = 200;
      rating = 4.9;
      tags = ["bhagavad gita", "krishna", "hinduism", "vedanta", "prabhupada", "iskcon"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780892131198-L.jpg"
    },
    {
      titleEn = "Bhagavad Gita (Gita Press)";
      titleBn = "শ্রীমদ্ভগবদ্গীতা (গীতা প্রেস)";
      authorEn = "Gita Press Gorakhpur";
      authorBn = "গীতা প্রেস গোরখপুর";
      descriptionEn = "The authentic Bhagavad Gita with Sanskrit text, Hindi and English translation published by Gita Press, the most trusted publisher of Hindu scriptures.";
      descriptionBn = "হিন্দু শাস্ত্রের সবচেয়ে বিশ্বস্ত প্রকাশনা গীতা প্রেস কর্তৃক প্রকাশিত সংস্কৃত মূলপাঠ ও বাংলা অনুবাদসহ ভগবদ্গীতা।";
      isbn = "9788129300188";
      genre = "religion";
      language = "bilingual";
      price = 149;
      stock = 500;
      rating = 4.8;
      tags = ["bhagavad gita", "gita press", "hinduism", "scripture", "krishna"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788129300188-L.jpg"
    },
    {
      titleEn = "The Bhagavad Gita";
      titleBn = "ভগবদ্গীতা";
      authorEn = "Eknath Easwaran";
      authorBn = "একনাথ ইশ্বরন";
      descriptionEn = "A lucid and accessible translation of the Bhagavad Gita by Eknath Easwaran, with a comprehensive introduction and chapter-by-chapter commentary.";
      descriptionBn = "একনাথ ইশ্বরনের সুবোধ্য অনুবাদ, সর্বব্যাপী ভূমিকা ও অধ্যায়ভিত্তিক ভাষ্যসহ ভগবদ্গীতা।";
      isbn = "9781586380199";
      genre = "religion";
      language = "english";
      price = 399;
      stock = 150;
      rating = 4.7;
      tags = ["bhagavad gita", "eknath easwaran", "yoga", "hinduism", "spirituality"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781586380199-L.jpg"
    },
    {
      titleEn = "The Upanishads";
      titleBn = "উপনিষদ";
      authorEn = "Eknath Easwaran (Translator)";
      authorBn = "একনাথ ইশ্বরন (অনুবাদক)";
      descriptionEn = "A brilliant translation of the principal Upanishads with commentary, capturing the philosophical and spiritual essence of Vedanta thought.";
      descriptionBn = "বেদান্ত দর্শনের মূল উপনিষদগুলির অপূর্ব অনুবাদ ও ভাষ্য।";
      isbn = "9780140441635";
      genre = "religion";
      language = "english";
      price = 449;
      stock = 120;
      rating = 4.7;
      tags = ["upanishads", "vedanta", "hinduism", "philosophy", "spirituality"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140441635-L.jpg"
    },
    {
      titleEn = "Ramcharitmanas";
      titleBn = "রামচরিতমানস";
      authorEn = "Tulsidas";
      authorBn = "তুলসীদাস";
      descriptionEn = "The timeless epic by Goswami Tulsidas narrating the life and deeds of Lord Rama in Awadhi, with Hindi and English translation by Gita Press.";
      descriptionBn = "গোস্বামী তুলসীদাস রচিত ভগবান রামের জীবন ও কার্যের চিরন্তন মহাকাব্য, হিন্দি ও ইংরেজি অনুবাদসহ।";
      isbn = "9788129300256";
      genre = "religion";
      language = "bilingual";
      price = 299;
      stock = 300;
      rating = 4.9;
      tags = ["ramcharitmanas", "tulsidas", "rama", "hinduism", "epic", "gita press"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788129300256-L.jpg"
    },
    {
      titleEn = "The Complete Works of Swami Vivekananda Vol 1";
      titleBn = "স্বামী বিবেকানন্দের সমগ্র রচনাবলী খণ্ড ১";
      authorEn = "Swami Vivekananda";
      authorBn = "স্বামী বিবেকানন্দ";
      descriptionEn = "Volume 1 of the complete works of Swami Vivekananda, containing his lectures and writings on Karma Yoga, Jnana Yoga, and practical Vedanta.";
      descriptionBn = "কর্মযোগ, জ্ঞানযোগ ও প্রাকটিক্যাল বেদান্ত বিষয়ক বক্তৃতা ও রচনা সম্বলিত স্বামী বিবেকানন্দের সমগ্র রচনাবলীর প্রথম খণ্ড।";
      isbn = "9788185301303";
      genre = "religion";
      language = "english";
      price = 349;
      stock = 200;
      rating = 4.9;
      tags = ["vivekananda", "vedanta", "karma yoga", "jnana yoga", "hinduism", "philosophy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788185301303-L.jpg"
    },
    {
      titleEn = "Autobiography of a Yogi";
      titleBn = "একজন যোগীর আত্মজীবনী";
      authorEn = "Paramahansa Yogananda";
      authorBn = "পরমহংস যোগানন্দ";
      descriptionEn = "The spiritual classic by Paramahansa Yogananda that has inspired millions worldwide, recounting his own experiences with saints and sages of India and the West.";
      descriptionBn = "পরমহংস যোগানন্দের আধ্যাত্মিক ক্লাসিক যা বিশ্বজুড়ে লক্ষ লক্ষ মানুষকে অনুপ্রাণিত করেছে।";
      isbn = "9780876120835";
      genre = "religion";
      language = "english";
      price = 499;
      stock = 180;
      rating = 4.9;
      tags = ["yogananda", "yoga", "spirituality", "autobiography", "india", "kriya yoga"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780876120835-L.jpg"
    },
    {
      titleEn = "The Gospel of Sri Ramakrishna";
      titleBn = "শ্রীশ্রীরামকৃষ্ণ কথামৃত";
      authorEn = "M. (Mahendranath Gupta)";
      authorBn = "মহেন্দ্রনাথ গুপ্ত";
      descriptionEn = "The complete English translation of the Gospel of Sri Ramakrishna, recording the conversations and teachings of the great mystic of 19th century Bengal.";
      descriptionBn = "১৯শ শতকের মহান বাঙালি রহস্যবাদী শ্রীরামকৃষ্ণের কথা ও শিক্ষার সম্পূর্ণ ইংরেজি অনুবাদ।";
      isbn = "9780874810202";
      genre = "religion";
      language = "english";
      price = 549;
      stock = 150;
      rating = 4.9;
      tags = ["ramakrishna", "gospel", "mysticism", "hinduism", "bengal", "vedanta"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780874810202-L.jpg"
    },
    {
      titleEn = "The Power of Now";
      titleBn = "বর্তমান মুহূর্তের শক্তি";
      authorEn = "Eckhart Tolle";
      authorBn = "একহার্ট টোলে";
      descriptionEn = "A guide to spiritual enlightenment that has sold over 3 million copies in North America. Tolle's message is simple: living in the now is the truest path to happiness and enlightenment.";
      descriptionBn = "আধ্যাত্মিক জাগরণের পথে বর্তমান মুহূর্তে বেঁচে থাকার অসাধারণ গাইড।";
      isbn = "9781577314806";
      genre = "selfHelp";
      language = "english";
      price = 399;
      stock = 250;
      rating = 4.7;
      tags = ["eckhart tolle", "mindfulness", "spirituality", "self-help", "consciousness", "now"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg"
    },
    {
      titleEn = "Man's Search for Meaning";
      titleBn = "অর্থ খোঁজার সন্ধানে মানুষ";
      authorEn = "Viktor E. Frankl";
      authorBn = "ভিক্টর ই. ফ্র্যাংকল";
      descriptionEn = "A Holocaust survivor's powerful memoir and introduction to logotherapy, exploring how meaning can be found even in the darkest of circumstances.";
      descriptionBn = "হলোকাস্ট থেকে বেঁচে যাওয়া মানুষের শক্তিশালী স্মৃতিকথা এবং লোগোথেরাপির পরিচিতি।";
      isbn = "9780807014271";
      genre = "selfHelp";
      language = "english";
      price = 299;
      stock = 300;
      rating = 4.8;
      tags = ["frankl", "meaning", "psychology", "holocaust", "logotherapy", "resilience"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780807014271-L.jpg"
    },
    {
      titleEn = "The 7 Habits of Highly Effective People";
      titleBn = "অত্যন্ত কার্যকর মানুষের ৭টি অভ্যাস";
      authorEn = "Stephen R. Covey";
      authorBn = "স্টিফেন আর. কভি";
      descriptionEn = "A landmark bestseller that has changed the lives of millions worldwide with its practical approach to personal and professional effectiveness.";
      descriptionBn = "ব্যক্তিগত ও পেশাদার কার্যকারিতার ব্যবহারিক পদ্ধতি নিয়ে লেখা যুগান্তকারী বেস্টসেলার।";
      isbn = "9780743269513";
      genre = "selfHelp";
      language = "english";
      price = 449;
      stock = 280;
      rating = 4.7;
      tags = ["covey", "habits", "effectiveness", "leadership", "self-help", "productivity"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743269513-L.jpg"
    },
    {
      titleEn = "Think and Grow Rich";
      titleBn = "চিন্তা করুন এবং ধনী হোন";
      authorEn = "Napoleon Hill";
      authorBn = "নেপোলিয়ন হিল";
      descriptionEn = "The timeless classic on achieving success through the power of thought, desire, faith, and persistence. One of the all-time bestselling self-help books.";
      descriptionBn = "চিন্তা, ইচ্ছা, বিশ্বাস ও অধ্যবসায়ের মাধ্যমে সাফল্য অর্জনের চিরকালীন ক্লাসিক।";
      isbn = "9781585424337";
      genre = "selfHelp";
      language = "english";
      price = 299;
      stock = 320;
      rating = 4.6;
      tags = ["napoleon hill", "success", "wealth", "mindset", "self-help", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg"
    },
    {
      titleEn = "How to Win Friends and Influence People";
      titleBn = "বন্ধু তৈরি করুন এবং মানুষকে প্রভাবিত করুন";
      authorEn = "Dale Carnegie";
      authorBn = "ডেল কার্নেগি";
      descriptionEn = "The first and still the best book of its kind on the subject of human relationships, with timeless principles that have helped millions achieve success.";
      descriptionBn = "মানবিক সম্পর্কের বিষয়ে এর ধরনের প্রথম ও এখনও সেরা বই, যা লক্ষ লক্ষ মানুষকে সাফল্য অর্জনে সাহায্য করেছে।";
      isbn = "9780671027032";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 290;
      rating = 4.7;
      tags = ["carnegie", "relationships", "influence", "communication", "self-help", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg"
    },
    {
      titleEn = "Atomic Habits";
      titleBn = "পরমাণু অভ্যাস";
      authorEn = "James Clear";
      authorBn = "জেমস ক্লিয়ার";
      descriptionEn = "A revolutionary guide to building good habits and breaking bad ones through tiny changes that lead to remarkable results.";
      descriptionBn = "ছোট পরিবর্তনের মাধ্যমে ভালো অভ্যাস গড়া ও খারাপ অভ্যাস ভাঙার বিপ্লবী গাইড।";
      isbn = "9780735211292";
      genre = "selfHelp";
      language = "english";
      price = 449;
      stock = 350;
      rating = 4.8;
      tags = ["atomic habits", "habits", "productivity", "self-improvement", "james clear"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
    },
    {
      titleEn = "The Alchemist";
      titleBn = "আলকেমিস্ট";
      authorEn = "Paulo Coelho";
      authorBn = "পাওলো কোয়েলো";
      descriptionEn = "A magical story of Santiago, a shepherd boy who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids.";
      descriptionBn = "এক রাখাল বালক সান্তিয়াগোর পিরামিডের কাছে লুকানো ধন খোঁজার জাদুকরী গল্প।";
      isbn = "9780062315007";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 380;
      rating = 4.7;
      tags = ["alchemist", "coelho", "inspiration", "journey", "dream", "fiction"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
    },
    {
      titleEn = "Rich Dad Poor Dad";
      titleBn = "ধনী বাবা গরিব বাবা";
      authorEn = "Robert T. Kiyosaki";
      authorBn = "রবার্ট টি. কিয়োসাকি";
      descriptionEn = "The #1 Personal Finance book of all time tells the story of Robert Kiyosaki and his two dads and the ways in which both men shaped his thoughts about money and investing.";
      descriptionBn = "সর্বকালের সেরা ব্যক্তিগত অর্থ বিষয়ক বই, যা অর্থ ও বিনিয়োগ সম্পর্কে চিন্তার গভীর পরিবর্তন আনে।";
      isbn = "9781612681122";
      genre = "selfHelp";
      language = "english";
      price = 399;
      stock = 400;
      rating = 4.6;
      tags = ["rich dad poor dad", "kiyosaki", "finance", "investment", "money", "self-help"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781612681122-L.jpg"
    },
    {
      titleEn = "Meditations";
      titleBn = "ধ্যানসমূহ";
      authorEn = "Marcus Aurelius";
      authorBn = "মার্কাস অরেলিয়াস";
      descriptionEn = "The personal writings of Roman Emperor Marcus Aurelius, forming one of the greatest works of Stoic philosophy ever written.";
      descriptionBn = "রোমান সম্রাট মার্কাস অরেলিয়াসের ব্যক্তিগত লেখা, স্টোয়িক দর্শনের অন্যতম সেরা রচনা।";
      isbn = "9780486298238";
      genre = "nonFiction";
      language = "english";
      price = 249;
      stock = 220;
      rating = 4.8;
      tags = ["marcus aurelius", "stoicism", "philosophy", "meditation", "roman", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780486298238-L.jpg"
    },
    {
      titleEn = "Tao Te Ching";
      titleBn = "তাও তে চিং";
      authorEn = "Lao Tzu";
      authorBn = "লাও জু";
      descriptionEn = "The classic text of Taoism by Lao Tzu, offering wisdom on living in harmony with the Tao (the Way), the fundamental principle that underlies all existence.";
      descriptionBn = "লাও জু রচিত তাওইজমের মূল গ্রন্থ, যা সমস্ত অস্তিত্বের মূল নীতি তাও-এর সাথে সামঞ্জস্যে জীবনযাপনের জ্ঞান দেয়।";
      isbn = "9781590302460";
      genre = "nonFiction";
      language = "english";
      price = 299;
      stock = 180;
      rating = 4.7;
      tags = ["taoism", "tao te ching", "lao tzu", "philosophy", "chinese philosophy", "wisdom"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781590302460-L.jpg"
    },
    {
      titleEn = "Sri Sri Ramakrishna Kathamrita (Vol 1)";
      titleBn = "শ্রীশ্রীরামকৃষ্ণ কথামৃত (প্রথম খণ্ড)";
      authorEn = "Mahendranath Gupta (M)";
      authorBn = "মহেন্দ্রনাথ গুপ্ত (ম)";
      descriptionEn = "The original Bengali record of the conversations of Sri Ramakrishna as transcribed by his disciple M (Mahendranath Gupta), a sacred text of Bengali spirituality.";
      descriptionBn = "শ্রীরামকৃষ্ণের কথোপকথনের মূল বাংলা বিবরণ, বাংলা আধ্যাত্মিকতার পবিত্র গ্রন্থ।";
      isbn = "9788185301228";
      genre = "religion";
      language = "bengali";
      price = 349;
      stock = 200;
      rating = 4.9;
      tags = ["ramakrishna", "kathamrita", "bengali", "spirituality", "mysticism", "hinduism"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788185301228-L.jpg"
    },
    {
      titleEn = "Vivekananda Rachana Samagra (Bengali)";
      titleBn = "বিবেকানন্দ রচনা সমগ্র";
      authorEn = "Swami Vivekananda";
      authorBn = "স্বামী বিবেকানন্দ";
      descriptionEn = "Complete Bengali works of Swami Vivekananda including lectures, letters, poems, and discourses collected in a single comprehensive volume.";
      descriptionBn = "স্বামী বিবেকানন্দের সমগ্র বাংলা রচনা যেমন বক্তৃতা, চিঠি, কবিতা ও আলোচনার সংকলন।";
      isbn = "9788185301747";
      genre = "religion";
      language = "bengali";
      price = 499;
      stock = 170;
      rating = 4.9;
      tags = ["vivekananda", "bengali", "vedanta", "philosophy", "collected works"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788185301747-L.jpg"
    },
    {
      titleEn = "Srimadbhagavatam (Bengali)";
      titleBn = "শ্রীমদ্ভাগবতম";
      authorEn = "Vyasa / Prabhupada";
      authorBn = "ব্যাস / প্রভুপাদ";
      descriptionEn = "The Bhagavata Purana in Bengali, one of the most revered texts of Vaishnavism, containing the stories of Vishnu and Krishna in twelve cantos.";
      descriptionBn = "বাংলায় ভাগবত পুরাণ, বৈষ্ণবধর্মের সর্বাধিক সম্মানিত গ্রন্থ, বারোটি স্কন্দে বিষ্ণু ও কৃষ্ণের কথা সম্বলিত।";
      isbn = "9788175972438";
      genre = "religion";
      language = "bengali";
      price = 549;
      stock = 160;
      rating = 4.8;
      tags = ["bhagavatam", "purana", "krishna", "vishnu", "bengali", "vaishnavism"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788175972438-L.jpg"
    },
    {
      titleEn = "Chanakya Niti";
      titleBn = "চাণক্য নীতি";
      authorEn = "Chanakya (Kautilya)";
      authorBn = "চাণক্য (কৌটিল্য)";
      descriptionEn = "The timeless wisdom of ancient Indian philosopher Chanakya on politics, economics, ethics, and statecraft, still relevant after 2500 years.";
      descriptionBn = "প্রাচীন ভারতীয় দার্শনিক চাণক্যের রাজনীতি, অর্থনীতি, নৈতিকতা ও রাজকার্যের চিরন্তন জ্ঞান।";
      isbn = "9788171673964";
      genre = "nonFiction";
      language = "bilingual";
      price = 249;
      stock = 230;
      rating = 4.5;
      tags = ["chanakya", "niti", "philosophy", "politics", "ancient india", "wisdom"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788171673964-L.jpg"
    },
    {
      titleEn = "Srimad Bhagavad Gita (Bengali Translation)";
      titleBn = "শ্রীমদ্ভগবদ্গীতা (বাংলা অনুবাদ)";
      authorEn = "Swami Gambhirananda";
      authorBn = "স্বামী গম্ভীরানন্দ";
      descriptionEn = "A scholarly Bengali translation and commentary of the Bhagavad Gita by Swami Gambhirananda of the Ramakrishna Order.";
      descriptionBn = "রামকৃষ্ণ মঠের স্বামী গম্ভীরানন্দের বিদ্বৎসুলভ বাংলা অনুবাদ ও ভাষ্যসহ ভগবদ্গীতা।";
      isbn = "9788185301310";
      genre = "religion";
      language = "bengali";
      price = 299;
      stock = 180;
      rating = 4.8;
      tags = ["bhagavad gita", "bengali", "ramakrishna order", "vedanta", "hinduism"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788185301310-L.jpg"
    },
    {
      titleEn = "The Book of Joy";
      titleBn = "আনন্দের বই";
      authorEn = "Dalai Lama & Desmond Tutu";
      authorBn = "দালাই লামা ও ডেসমন্ড টুটু";
      descriptionEn = "Two of the world's most beloved figures come together to share their wisdom about living with joy in a troubled world, based on their week of conversations.";
      descriptionBn = "বিশ্বের দুই সবচেয়ে প্রিয় ব্যক্তিত্ব একটি কঠিন পৃথিবীতে আনন্দের সাথে বাঁচার জ্ঞান ভাগ করে নেন।";
      isbn = "9780399185045";
      genre = "selfHelp";
      language = "english";
      price = 499;
      stock = 140;
      rating = 4.8;
      tags = ["dalai lama", "desmond tutu", "joy", "happiness", "spirituality", "buddhism"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780399185045-L.jpg"
    },
    {
      titleEn = "Sapiens: A Brief History of Humankind";
      titleBn = "সেপিয়েন্স: মানবজাতির সংক্ষিপ্ত ইতিহাস";
      authorEn = "Yuval Noah Harari";
      authorBn = "ইউভাল নোয়া হারারি";
      descriptionEn = "A sweeping narrative of humanity's creation and evolution that explores how biology and history have defined us and enhanced—or restrained—our possibilities.";
      descriptionBn = "মানবজাতির সৃষ্টি ও বিবর্তনের ব্যাপক বর্ণনা যা জীববিজ্ঞান ও ইতিহাস আমাদের কীভাবে সংজ্ঞায়িত করেছে তা অন্বেষণ করে।";
      isbn = "9780062316097";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 200;
      rating = 4.7;
      tags = ["sapiens", "harari", "history", "humanity", "anthropology", "non-fiction"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg"
    },
    {
      titleEn = "The Monk Who Sold His Ferrari";
      titleBn = "যে সন্ন্যাসী তার ফেরারি বিক্রি করেছিলেন";
      authorEn = "Robin Sharma";
      authorBn = "রবিন শর্মা";
      descriptionEn = "A fable about fulfilling your dreams and reaching your destiny through the story of Julian Mantle, a lawyer who transforms himself after a spiritual awakening.";
      descriptionBn = "আধ্যাত্মিক জাগরণের পর নিজেকে রূপান্তরিত করা এক আইনজীবীর গল্পের মাধ্যমে স্বপ্ন পূরণ ও নিয়তি অর্জনের উপকথা।";
      isbn = "9780006388371";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 250;
      rating = 4.4;
      tags = ["robin sharma", "monk", "ferrari", "self-help", "spirituality", "leadership"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780006388371-L.jpg"
    },
    {
      titleEn = "The Secret";
      titleBn = "রহস্য";
      authorEn = "Rhonda Byrne";
      authorBn = "রন্ডা বার্ন";
      descriptionEn = "The book that reveals the most powerful law in the universe — the law of attraction — showing how thoughts become things.";
      descriptionBn = "বিশ্বব্রহ্মাণ্ডের সবচেয়ে শক্তিশালী নিয়ম — আকর্ষণের নিয়ম — প্রকাশ করে দেখানো হয় কীভাবে চিন্তা বাস্তবে পরিণত হয়।";
      isbn = "9781582701707";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 280;
      rating = 4.3;
      tags = ["secret", "law of attraction", "rhonda byrne", "self-help", "manifestation"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781582701707-L.jpg"
    },
    {
      titleEn = "Ikigai: The Japanese Secret to a Long and Happy Life";
      titleBn = "ইকিগাই: দীর্ঘ ও সুখী জীবনের জাপানি রহস্য";
      authorEn = "Hector Garcia & Francesc Miralles";
      authorBn = "হেক্টর গার্সিয়া ও ফ্র্যানসেস্ক মিরাল্লেস";
      descriptionEn = "The Japanese concept of ikigai — the reason for being — explored through interviews with the residents of Okinawa, Japan's happiest island.";
      descriptionBn = "ইকিগাই — বেঁচে থাকার কারণ — জাপানের সবচেয়ে সুখী দ্বীপ ওকিনাওয়ার বাসিন্দাদের সাক্ষাৎকারের মাধ্যমে অন্বেষণ।";
      isbn = "9780143130727";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 290;
      rating = 4.5;
      tags = ["ikigai", "japanese", "happiness", "purpose", "longevity", "self-help"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg"
    },
    {
      titleEn = "The Art of War";
      titleBn = "যুদ্ধের শিল্প";
      authorEn = "Sun Tzu";
      authorBn = "সান জু";
      descriptionEn = "The ancient Chinese military treatise attributed to Sun Tzu, now recognized as a guide to strategy in business, politics, and daily life.";
      descriptionBn = "সান জুর প্রাচীন চীনা সামরিক গ্রন্থ, এখন ব্যবসা, রাজনীতি ও দৈনন্দিন জীবনে কৌশলের গাইড হিসেবে স্বীকৃত।";
      isbn = "9781599869773";
      genre = "nonFiction";
      language = "english";
      price = 199;
      stock = 250;
      rating = 4.5;
      tags = ["art of war", "sun tzu", "strategy", "philosophy", "military", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781599869773-L.jpg"
    },
    {
      titleEn = "The Subtle Art of Not Giving a F*ck";
      titleBn = "পরোয়া না করার সূক্ষ্ম শিল্প";
      authorEn = "Mark Manson";
      authorBn = "মার্ক ম্যানসন";
      descriptionEn = "A counterintuitive approach to living a good life by focusing only on what is truly important and giving up pursuing positivity all the time.";
      descriptionBn = "শুধুমাত্র যা সত্যিই গুরুত্বপূর্ণ তাতে মনোযোগ দিয়ে একটি ভালো জীবন যাপনের বিপরীতমুখী পদ্ধতি।";
      isbn = "9780062457714";
      genre = "selfHelp";
      language = "english";
      price = 399;
      stock = 310;
      rating = 4.4;
      tags = ["mark manson", "self-help", "mindset", "stoicism", "values", "modern"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg"
    },
    {
      titleEn = "Grit: The Power of Passion and Perseverance";
      titleBn = "কঠোরতা: আবেগ ও অধ্যবসায়ের শক্তি";
      authorEn = "Angela Duckworth";
      authorBn = "অ্যাঞ্জেলা ডাকওয়ার্থ";
      descriptionEn = "A pioneering psychologist takes us on an eye-opening journey to discover the true secret to outstanding achievement — not talent, but grit.";
      descriptionBn = "একজন অগ্রণী মনোবিজ্ঞানী আমাদের অসাধারণ সাফল্যের আসল রহস্য আবিষ্কারের চোখ খোলা যাত্রায় নিয়ে যান।";
      isbn = "9781501111105";
      genre = "selfHelp";
      language = "english";
      price = 399;
      stock = 200;
      rating = 4.5;
      tags = ["grit", "angela duckworth", "perseverance", "success", "psychology", "talent"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781501111105-L.jpg"
    },
    {
      titleEn = "Dare to Lead";
      titleBn = "নেতৃত্ব দিতে সাহস করুন";
      authorEn = "Brene Brown";
      authorBn = "ব্রেনে ব্রাউন";
      descriptionEn = "A guide to becoming a courageous leader by embracing vulnerability, living your values, and building trust in the workplace.";
      descriptionBn = "দুর্বলতাকে আলিঙ্গন করে, মূল্যবোধ অনুযায়ী জীবনযাপন করে এবং কর্মক্ষেত্রে বিশ্বাস গড়ে সাহসী নেতা হওয়ার গাইড।";
      isbn = "9780399592522";
      genre = "selfHelp";
      language = "english";
      price = 449;
      stock = 180;
      rating = 4.6;
      tags = ["brene brown", "leadership", "vulnerability", "courage", "workplace", "self-help"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780399592522-L.jpg"
    },
    {
      titleEn = "You Are a Badass";
      titleBn = "তুমি একজন দুর্দান্ত মানুষ";
      authorEn = "Jen Sincero";
      authorBn = "জেন সিনসেরো";
      descriptionEn = "A self-help guide that helps readers identify and change self-sabotaging beliefs and behaviors and live a life they love.";
      descriptionBn = "আত্মঘাতী বিশ্বাস ও আচরণ চিহ্নিত করে পরিবর্তন করতে এবং পছন্দের জীবন যাপন করতে সাহায্যকারী গাইড।";
      isbn = "9780762447695";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 220;
      rating = 4.3;
      tags = ["jen sincero", "badass", "self-help", "motivation", "mindset", "empowerment"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780762447695-L.jpg"
    },
    {
      titleEn = "The 48 Laws of Power";
      titleBn = "ক্ষমতার ৪৮টি সূত্র";
      authorEn = "Robert Greene";
      authorBn = "রবার্ট গ্রিন";
      descriptionEn = "A distillation of 3000 years of history of power, drawing on the lives of powerful figures from Machiavelli to Sun Tzu.";
      descriptionBn = "ম্যাকিয়াভেলি থেকে সান জু পর্যন্ত ক্ষমতাশালী ব্যক্তিত্বদের জীবন থেকে নেওয়া ৩০০০ বছরের ক্ষমতার ইতিহাসের নির্যাস।";
      isbn = "9780140280197";
      genre = "selfHelp";
      language = "english";
      price = 449;
      stock = 200;
      rating = 4.5;
      tags = ["robert greene", "power", "strategy", "history", "machiavelli", "influence"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140280197-L.jpg"
    },
    {
      titleEn = "Can't Hurt Me";
      titleBn = "আমাকে কষ্ট দিতে পারবে না";
      authorEn = "David Goggins";
      authorBn = "ডেভিড গগিন্স";
      descriptionEn = "The story of David Goggins' extraordinary life and his path to becoming one of the world's toughest humans through mental toughness and accountability.";
      descriptionBn = "ডেভিড গগিন্সের অসাধারণ জীবনের গল্প এবং মানসিক দৃঢ়তার মাধ্যমে বিশ্বের সবচেয়ে কঠিন মানুষ হওয়ার পথ।";
      isbn = "9781544512280";
      genre = "selfHelp";
      language = "english";
      price = 449;
      stock = 200;
      rating = 4.7;
      tags = ["david goggins", "mental toughness", "motivation", "resilience", "military", "self-help"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781544512280-L.jpg"
    },
    {
      titleEn = "Start With Why";
      titleBn = "কেন দিয়ে শুরু করুন";
      authorEn = "Simon Sinek";
      authorBn = "সাইমন সিনেক";
      descriptionEn = "How great leaders inspire everyone to take action by communicating from the inside out — starting with why, not what.";
      descriptionBn = "মহান নেতারা কীভাবে ভেতর থেকে বাইরে যোগাযোগ করে সবাইকে পদক্ষেপ নিতে অনুপ্রাণিত করেন।";
      isbn = "9781591846444";
      genre = "selfHelp";
      language = "english";
      price = 399;
      stock = 230;
      rating = 4.5;
      tags = ["simon sinek", "leadership", "why", "inspiration", "business", "motivation"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781591846444-L.jpg"
    },
    {
      titleEn = "The Four Agreements";
      titleBn = "চারটি চুক্তি";
      authorEn = "Don Miguel Ruiz";
      authorBn = "ডন মিগুয়েল রুইজ";
      descriptionEn = "A practical guide to personal freedom based on ancient Toltec wisdom, offering four agreements to transform your life.";
      descriptionBn = "প্রাচীন টোলটেক জ্ঞানের উপর ভিত্তি করে ব্যক্তিগত স্বাধীনতার ব্যবহারিক গাইড।";
      isbn = "9781878424310";
      genre = "selfHelp";
      language = "english";
      price = 299;
      stock = 240;
      rating = 4.6;
      tags = ["four agreements", "toltec", "spirituality", "self-help", "wisdom", "freedom"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781878424310-L.jpg"
    },
    {
      titleEn = "The Untethered Soul";
      titleBn = "মুক্ত আত্মা";
      authorEn = "Michael A. Singer";
      authorBn = "মাইকেল এ. সিঙ্গার";
      descriptionEn = "A guide to awakening to inner peace by learning how to release the thoughts and emotions that limit your consciousness.";
      descriptionBn = "চেতনাকে সীমিত করে এমন চিন্তা ও আবেগ ছেড়ে দিয়ে আভ্যন্তরীণ শান্তিতে জাগরণের গাইড।";
      isbn = "9781572245372";
      genre = "selfHelp";
      language = "english";
      price = 399;
      stock = 200;
      rating = 4.7;
      tags = ["untethered soul", "michael singer", "consciousness", "spirituality", "mindfulness"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781572245372-L.jpg"
    },
    {
      titleEn = "Be Here Now";
      titleBn = "এখানে এখনই থাকুন";
      authorEn = "Ram Dass";
      authorBn = "রাম দাস";
      descriptionEn = "The spiritual classic by Ram Dass, a former Harvard professor who became a spiritual seeker, offering insights into Eastern and Western mysticism.";
      descriptionBn = "রাম দাসের আধ্যাত্মিক ক্লাসিক, হার্ভার্ডের প্রাক্তন অধ্যাপক যিনি আধ্যাত্মিক সাধক হয়েছিলেন।";
      isbn = "9780517543054";
      genre = "religion";
      language = "english";
      price = 349;
      stock = 150;
      rating = 4.7;
      tags = ["ram dass", "be here now", "spirituality", "eastern philosophy", "yoga", "consciousness"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780517543054-L.jpg"
    },
    {
      titleEn = "The Tibetan Book of Living and Dying";
      titleBn = "বেঁচে থাকা ও মৃত্যুর তিব্বতীয় বই";
      authorEn = "Sogyal Rinpoche";
      authorBn = "সোগিয়াল রিনপোচে";
      descriptionEn = "A spiritual classic drawing on the Tibetan Buddhist tradition of dying and death, offering wisdom for living and dying with peace and understanding.";
      descriptionBn = "মৃত্যু ও পরলোকের তিব্বতীয় বৌদ্ধ ঐতিহ্য থেকে নেওয়া আধ্যাত্মিক ক্লাসিক।";
      isbn = "9780062508348";
      genre = "religion";
      language = "english";
      price = 449;
      stock = 140;
      rating = 4.7;
      tags = ["tibetan book", "sogyal rinpoche", "buddhism", "death", "spirituality", "bardo"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062508348-L.jpg"
    },
    {
      titleEn = "The Way of the Peaceful Warrior";
      titleBn = "শান্তিপূর্ণ যোদ্ধার পথ";
      authorEn = "Dan Millman";
      authorBn = "ড্যান মিলম্যান";
      descriptionEn = "A tale of transformation, a work that has changed the lives of millions of people. The story of a young athlete who meets an old warrior named Socrates.";
      descriptionBn = "একটি রূপান্তরের গল্প যা লক্ষ লক্ষ মানুষের জীবন পরিবর্তন করেছে। একজন যুবক ক্রীড়াবিদের গল্প যে সক্রেটিস নামের এক বৃদ্ধ যোদ্ধার সাথে দেখা করে।";
      isbn = "9781932073218";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 180;
      rating = 4.5;
      tags = ["peaceful warrior", "dan millman", "spirituality", "martial arts", "transformation"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781932073218-L.jpg"
    },
    {
      titleEn = "Siddhartha";
      titleBn = "সিদ্ধার্থ";
      authorEn = "Hermann Hesse";
      authorBn = "হেরমান হেস";
      descriptionEn = "The quest of Siddhartha, a young man in the time of the Buddha, for peace, wisdom and spiritual fulfillment — a masterpiece of 20th century literature.";
      descriptionBn = "বুদ্ধের সময়কালে একজন যুবক সিদ্ধার্থের শান্তি, জ্ঞান ও আধ্যাত্মিক তৃপ্তির অন্বেষণ।";
      isbn = "9780553208849";
      genre = "nonFiction";
      language = "english";
      price = 249;
      stock = 220;
      rating = 4.6;
      tags = ["siddhartha", "hesse", "buddhism", "philosophy", "spiritual fiction", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553208849-L.jpg"
    },
    {
      titleEn = "The Celestine Prophecy";
      titleBn = "সেলেস্টাইন প্রফেসি";
      authorEn = "James Redfield";
      authorBn = "জেমস রেডফিল্ড";
      descriptionEn = "An adventure story set in the Peruvian jungle that follows the narrator's journey to find a sacred manuscript containing nine spiritual insights.";
      descriptionBn = "পেরুর জঙ্গলে স্থাপিত একটি অ্যাডভেঞ্চার গল্প যা নয়টি আধ্যাত্মিক উপলব্ধি সম্বলিত পবিত্র পাণ্ডুলিপি খোঁজার যাত্রা অনুসরণ করে।";
      isbn = "9780446671002";
      genre = "selfHelp";
      language = "english";
      price = 299;
      stock = 160;
      rating = 4.2;
      tags = ["celestine prophecy", "james redfield", "spiritual", "adventure", "new age", "insights"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780446671002-L.jpg"
    },
    {
      titleEn = "The Prophet";
      titleBn = "নবী";
      authorEn = "Kahlil Gibran";
      authorBn = "কাহলিল জিব্রান";
      descriptionEn = "The masterwork of Kahlil Gibran, featuring Almustafa's farewell reflections on the fundamental aspects of human existence — love, children, work, joy and sorrow.";
      descriptionBn = "কাহলিল জিব্রানের মাস্টারওয়ার্ক, মানব অস্তিত্বের মৌলিক দিকগুলোতে আলমুস্তাফার বিদায়কালীন চিন্তাভাবনা।";
      isbn = "9780394404288";
      genre = "nonFiction";
      language = "english";
      price = 249;
      stock = 210;
      rating = 4.8;
      tags = ["kahlil gibran", "prophet", "poetry", "philosophy", "spirituality", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780394404288-L.jpg"
    },
    {
      titleEn = "The Daily Stoic";
      titleBn = "দৈনন্দিন স্টোয়িক";
      authorEn = "Ryan Holiday & Stephen Hanselman";
      authorBn = "রায়ান হলিডে ও স্টিভেন হ্যান্সেলম্যান";
      descriptionEn = "366 meditations on wisdom, perseverance, and the art of living, drawn from the great Stoic philosophers — Marcus Aurelius, Epictetus, and Seneca.";
      descriptionBn = "মার্কাস অরেলিয়াস, এপিকটেটাস ও সেনেকার মহান স্টোয়িক দার্শনিকদের থেকে নেওয়া ৩৬৬টি ধ্যান।";
      isbn = "9780735211735";
      genre = "nonFiction";
      language = "english";
      price = 449;
      stock = 190;
      rating = 4.7;
      tags = ["stoicism", "ryan holiday", "marcus aurelius", "daily meditation", "philosophy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780735211735-L.jpg"
    },
    {
      titleEn = "The Obstacle Is the Way";
      titleBn = "বাধাই পথ";
      authorEn = "Ryan Holiday";
      authorBn = "রায়ান হলিডে";
      descriptionEn = "The timeless art of turning trials into triumph using the Stoic philosophy of Marcus Aurelius, applied to modern life and business.";
      descriptionBn = "মার্কাস অরেলিয়াসের স্টোয়িক দর্শন ব্যবহার করে পরীক্ষাকে বিজয়ে পরিণত করার চিরন্তন শিল্প।";
      isbn = "9781591846734";
      genre = "selfHelp";
      language = "english";
      price = 399;
      stock = 200;
      rating = 4.6;
      tags = ["ryan holiday", "stoicism", "obstacle", "resilience", "philosophy", "business"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781591846734-L.jpg"
    },
    {
      titleEn = "Ego Is the Enemy";
      titleBn = "অহংকারই শত্রু";
      authorEn = "Ryan Holiday";
      authorBn = "রায়ান হলিডে";
      descriptionEn = "A guide to conquering the ego at every stage of life — aspiring, succeeding, or failing — drawing on the lives of historical and contemporary figures.";
      descriptionBn = "জীবনের প্রতিটি পর্যায়ে — আকাঙ্ক্ষা, সাফল্য বা ব্যর্থতায় — অহংকার জয় করার গাইড।";
      isbn = "9781591847816";
      genre = "selfHelp";
      language = "english";
      price = 399;
      stock = 180;
      rating = 4.5;
      tags = ["ego", "ryan holiday", "stoicism", "humility", "philosophy", "self-help"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781591847816-L.jpg"
    },
    {
      titleEn = "Stillness Is the Key";
      titleBn = "স্থিরতাই চাবিকাঠি";
      authorEn = "Ryan Holiday";
      authorBn = "রায়ান হলিডে";
      descriptionEn = "An ancient formula for enduring excellence in the modern world: stillness, the key to unlocking wisdom and creating a life well-lived.";
      descriptionBn = "আধুনিক বিশ্বে স্থায়ী শ্রেষ্ঠত্বের প্রাচীন সূত্র: স্থিরতা, জ্ঞান আনলক করার চাবিকাঠি।";
      isbn = "9780525538585";
      genre = "selfHelp";
      language = "english";
      price = 399;
      stock = 170;
      rating = 4.5;
      tags = ["ryan holiday", "stillness", "stoicism", "mindfulness", "philosophy", "calm"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780525538585-L.jpg"
    },
    {
      titleEn = "Letters from a Stoic";
      titleBn = "একজন স্টোয়িকের চিঠি";
      authorEn = "Seneca";
      authorBn = "সেনেকা";
      descriptionEn = "The letters of the Roman Stoic philosopher Seneca to his friend Lucilius, offering practical advice on living wisely and with philosophical depth.";
      descriptionBn = "রোমান স্টোয়িক দার্শনিক সেনেকার তার বন্ধু লুসিলিয়াসকে লেখা চিঠি, জ্ঞানের সাথে বেঁচে থাকার ব্যবহারিক পরামর্শ।";
      isbn = "9780140442106";
      genre = "nonFiction";
      language = "english";
      price = 299;
      stock = 160;
      rating = 4.7;
      tags = ["seneca", "stoicism", "letters", "philosophy", "roman", "wisdom"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140442106-L.jpg"
    },
    {
      titleEn = "Nicomachean Ethics";
      titleBn = "নিকোমাকেয়ান নীতিশাস্ত্র";
      authorEn = "Aristotle";
      authorBn = "অ্যারিস্টটল";
      descriptionEn = "Aristotle's most influential work on ethics and the science of happiness, exploring the nature of virtue, friendship, and the good life.";
      descriptionBn = "সুখ ও নীতিশাস্ত্রের বিজ্ঞানে অ্যারিস্টটলের সবচেয়ে প্রভাবশালী রচনা, সদগুণ, বন্ধুত্ব ও উত্তম জীবনের প্রকৃতি অন্বেষণ।";
      isbn = "9780140449495";
      genre = "nonFiction";
      language = "english";
      price = 349;
      stock = 140;
      rating = 4.5;
      tags = ["aristotle", "ethics", "philosophy", "happiness", "virtue", "greek philosophy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140449495-L.jpg"
    },
    {
      titleEn = "Plato's Republic";
      titleBn = "প্লেটোর রিপাবলিক";
      authorEn = "Plato";
      authorBn = "প্লেটো";
      descriptionEn = "Plato's masterwork on justice, order, and character of the just city-state and the just man — one of the most influential works in the history of philosophy.";
      descriptionBn = "ন্যায়বিচার, শৃঙ্খলা ও ন্যায়সংগত নগর-রাষ্ট্র ও ন্যায়সংগত মানুষের চরিত্রের উপর প্লেটোর মাস্টারওয়ার্ক।";
      isbn = "9780140455113";
      genre = "nonFiction";
      language = "english";
      price = 349;
      stock = 130;
      rating = 4.4;
      tags = ["plato", "republic", "philosophy", "justice", "politics", "greek philosophy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140455113-L.jpg"
    },
    {
      titleEn = "Thus Spoke Zarathustra";
      titleBn = "এভাবেই কথা বলেছিলেন জরথুস্ত্র";
      authorEn = "Friedrich Nietzsche";
      authorBn = "ফ্রিডরিখ নিটশে";
      descriptionEn = "Nietzsche's masterpiece that introduced the concept of the Ubermensch (Superman) and the doctrine of eternal recurrence.";
      descriptionBn = "নিটশের মাস্টারপিস যা উবারমেনশ (সুপারম্যান) ধারণা ও চিরন্তন পুনরাবৃত্তির মতবাদ প্রবর্তন করেছিল।";
      isbn = "9780140441185";
      genre = "nonFiction";
      language = "english";
      price = 349;
      stock = 130;
      rating = 4.4;
      tags = ["nietzsche", "zarathustra", "ubermensch", "philosophy", "german philosophy", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140441185-L.jpg"
    },
    {
      titleEn = "The Story of Philosophy";
      titleBn = "দর্শনের গল্প";
      authorEn = "Will Durant";
      authorBn = "উইল ডুরান্ট";
      descriptionEn = "A brilliant account of the great philosophers of the Western world from Plato to Nietzsche, written in a style accessible to all readers.";
      descriptionBn = "প্লেটো থেকে নিটশে পর্যন্ত পশ্চিমা বিশ্বের মহান দার্শনিকদের উজ্জ্বল বিবরণ।";
      isbn = "9780671739164";
      genre = "nonFiction";
      language = "english";
      price = 449;
      stock = 150;
      rating = 4.6;
      tags = ["will durant", "philosophy", "history", "plato", "nietzsche", "western philosophy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780671739164-L.jpg"
    },
    {
      titleEn = "The Varieties of Religious Experience";
      titleBn = "ধর্মীয় অভিজ্ঞতার বৈচিত্র্য";
      authorEn = "William James";
      authorBn = "উইলিয়াম জেমস";
      descriptionEn = "A landmark study of religious and mystical experience by philosopher William James, exploring the psychological aspects of religion.";
      descriptionBn = "দার্শনিক উইলিয়াম জেমসের ধর্মীয় ও রহস্যবাদী অভিজ্ঞতার মাইলফলক গবেষণা।";
      isbn = "9780140390346";
      genre = "nonFiction";
      language = "english";
      price = 399;
      stock = 120;
      rating = 4.5;
      tags = ["william james", "religion", "psychology", "mysticism", "philosophy", "spirituality"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140390346-L.jpg"
    },
    {
      titleEn = "The Quran (English Translation)";
      titleBn = "পবিত্র কুরআন (বাংলা অনুবাদ)";
      authorEn = "Abdullah Yusuf Ali (Translator)";
      authorBn = "আবদুল্লাহ ইউসুফ আলী (অনুবাদক)";
      descriptionEn = "The English translation and commentary of the Holy Quran by Abdullah Yusuf Ali, one of the most respected and widely used translations.";
      descriptionBn = "আবদুল্লাহ ইউসুফ আলীর ইংরেজি অনুবাদ ও ভাষ্যসহ পবিত্র কুরআন।";
      isbn = "9781580820714";
      genre = "religion";
      language = "bilingual";
      price = 499;
      stock = 200;
      rating = 4.9;
      tags = ["quran", "islam", "scripture", "religion", "yusuf ali", "translation"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781580820714-L.jpg"
    },
    {
      titleEn = "The Holy Bible (King James Version)";
      titleBn = "পবিত্র বাইবেল";
      authorEn = "Various Authors";
      authorBn = "বিভিন্ন লেখক";
      descriptionEn = "The complete King James Version of the Holy Bible including Old and New Testament with concordance and maps.";
      descriptionBn = "পুরাতন ও নতুন নিয়মসহ পবিত্র বাইবেলের সম্পূর্ণ কিং জেমস সংস্করণ।";
      isbn = "9780718015602";
      genre = "religion";
      language = "english";
      price = 449;
      stock = 180;
      rating = 4.9;
      tags = ["bible", "christianity", "scripture", "religion", "kjv", "new testament"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780718015602-L.jpg"
    },
    {
      titleEn = "The Dhammapada";
      titleBn = "ধর্মপদ";
      authorEn = "Eknath Easwaran (Translator)";
      authorBn = "একনাথ ইশ্বরন (অনুবাদক)";
      descriptionEn = "The essential teaching of the Buddha, collected in 423 verses offering a path to overcoming suffering through wisdom, ethical conduct, and mental cultivation.";
      descriptionBn = "বুদ্ধের মূল শিক্ষা ৪২৩টি শ্লোকে সংগৃহীত, জ্ঞান, নৈতিক আচরণ ও মানসিক চর্চার মাধ্যমে দুঃখ কাটিয়ে ওঠার পথ।";
      isbn = "9781586380205";
      genre = "religion";
      language = "english";
      price = 299;
      stock = 160;
      rating = 4.8;
      tags = ["dhammapada", "buddhism", "buddha", "scripture", "pali", "eknath easwaran"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781586380205-L.jpg"
    },
    {
      titleEn = "What the Buddha Taught";
      titleBn = "বুদ্ধ কী শিখিয়েছিলেন";
      authorEn = "Walpola Rahula";
      authorBn = "ওয়ালপোলা রাহুলা";
      descriptionEn = "A scholarly and accessible account of the original teachings of the Buddha, considered the clearest and most comprehensive introduction to Buddhism.";
      descriptionBn = "বুদ্ধের মূল শিক্ষার পণ্ডিতসুলভ ও সহজবোধ্য বিবরণ, বৌদ্ধধর্মের সবচেয়ে স্পষ্ট ও ব্যাপক পরিচিতি হিসেবে বিবেচিত।";
      isbn = "9780802130310";
      genre = "religion";
      language = "english";
      price = 299;
      stock = 150;
      rating = 4.7;
      tags = ["buddhism", "walpola rahula", "buddha", "dharma", "four noble truths", "eightfold path"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780802130310-L.jpg"
    },
    {
      titleEn = "The Heart of the Buddha's Teaching";
      titleBn = "বুদ্ধের শিক্ষার হৃদয়";
      authorEn = "Thich Nhat Hanh";
      authorBn = "থিক নাট হান";
      descriptionEn = "An introduction to the foundations of Buddhist practice, including the Four Noble Truths and the Noble Eightfold Path, by beloved Zen master Thich Nhat Hanh.";
      descriptionBn = "প্রিয় জেন মাস্টার থিক নাট হানের বৌদ্ধ অনুশীলনের ভিত্তির পরিচিতি।";
      isbn = "9780767903691";
      genre = "religion";
      language = "english";
      price = 349;
      stock = 170;
      rating = 4.8;
      tags = ["thich nhat hanh", "buddhism", "mindfulness", "four noble truths", "zen", "dharma"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780767903691-L.jpg"
    },
    {
      titleEn = "Peace Is Every Step";
      titleBn = "প্রতিটি পদক্ষেপেই শান্তি";
      authorEn = "Thich Nhat Hanh";
      authorBn = "থিক নাট হান";
      descriptionEn = "A guide to applying mindfulness and Buddhist teachings to everyday activities, showing how peace is available in every moment.";
      descriptionBn = "প্রতিদিনের কার্যকলাপে মাইন্ডফুলনেস ও বৌদ্ধ শিক্ষা প্রয়োগের গাইড।";
      isbn = "9780553351391";
      genre = "religion";
      language = "english";
      price = 299;
      stock = 160;
      rating = 4.7;
      tags = ["thich nhat hanh", "mindfulness", "buddhism", "peace", "meditation", "zen"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553351391-L.jpg"
    },
    {
      titleEn = "The Miracle of Mindfulness";
      titleBn = "মাইন্ডফুলনেসের অলৌকিক ঘটনা";
      authorEn = "Thich Nhat Hanh";
      authorBn = "থিক নাট হান";
      descriptionEn = "An introduction to the practice of mindfulness — the state of alert, open attention in the present moment — through simple meditative exercises.";
      descriptionBn = "সহজ ধ্যানের অনুশীলনের মাধ্যমে মাইন্ডফুলনেসের পরিচিতি।";
      isbn = "9780807012390";
      genre = "religion";
      language = "english";
      price = 299;
      stock = 180;
      rating = 4.7;
      tags = ["thich nhat hanh", "mindfulness", "meditation", "buddhism", "zen", "consciousness"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780807012390-L.jpg"
    },
    {
      titleEn = "Awakening the Buddha Within";
      titleBn = "ভিতরের বুদ্ধকে জাগিয়ে তোলা";
      authorEn = "Lama Surya Das";
      authorBn = "লামা সূর্য দাস";
      descriptionEn = "A complete guide to Tibetan Buddhism and its practical application in daily Western life by one of America's foremost Buddhist teachers.";
      descriptionBn = "আমেরিকার অন্যতম প্রধান বৌদ্ধ শিক্ষকের তিব্বতীয় বৌদ্ধধর্ম ও দৈনন্দিন জীবনে তার ব্যবহারিক প্রয়োগের সম্পূর্ণ গাইড।";
      isbn = "9780767900706";
      genre = "religion";
      language = "english";
      price = 399;
      stock = 130;
      rating = 4.5;
      tags = ["tibetan buddhism", "lama surya das", "awakening", "buddhism", "meditation", "dharma"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780767900706-L.jpg"
    },
    {
      titleEn = "The Power of Positive Thinking";
      titleBn = "ইতিবাচক চিন্তার শক্তি";
      authorEn = "Norman Vincent Peale";
      authorBn = "নরম্যান ভিনসেন্ট পিল";
      descriptionEn = "The classic guide to changing your life through positive thinking and faith, helping millions overcome discouragement and achieve success.";
      descriptionBn = "ইতিবাচক চিন্তা ও বিশ্বাসের মাধ্যমে জীবন পরিবর্তনের ক্লাসিক গাইড।";
      isbn = "9780743234801";
      genre = "selfHelp";
      language = "english";
      price = 299;
      stock = 250;
      rating = 4.3;
      tags = ["positive thinking", "norman vincent peale", "faith", "self-help", "motivation", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743234801-L.jpg"
    },
    {
      titleEn = "Feeling Good: The New Mood Therapy";
      titleBn = "ভালো অনুভব করুন: নতুন মেজাজ থেরাপি";
      authorEn = "David D. Burns";
      authorBn = "ডেভিড ডি. বার্নস";
      descriptionEn = "The classic best-seller on Cognitive Behavioral Therapy (CBT) that has helped millions combat depression, anxiety, and low self-esteem.";
      descriptionBn = "কগনিটিভ বিহেভিয়ারাল থেরাপির ক্লাসিক বেস্টসেলার যা লক্ষ লক্ষ মানুষকে বিষণ্নতা, উদ্বেগ ও কম আত্মসম্মানের বিরুদ্ধে লড়তে সাহায্য করেছে।";
      isbn = "9780380810338";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 200;
      rating = 4.6;
      tags = ["cbt", "cognitive therapy", "depression", "self-help", "mental health", "burns"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780380810338-L.jpg"
    },
    {
      titleEn = "Emotional Intelligence";
      titleBn = "আবেগীয় বুদ্ধিমত্তা";
      authorEn = "Daniel Goleman";
      authorBn = "ড্যানিয়েল গোলম্যান";
      descriptionEn = "The groundbreaking book that argues emotional intelligence (EQ) matters more than IQ, and how we can nurture it in ourselves and our children.";
      descriptionBn = "যুগান্তকারী বই যা যুক্তি দেয় যে আবেগীয় বুদ্ধিমত্তা (ইকিউ) আইকিউর চেয়ে বেশি গুরুত্বপূর্ণ।";
      isbn = "9780553375060";
      genre = "selfHelp";
      language = "english";
      price = 399;
      stock = 220;
      rating = 4.5;
      tags = ["emotional intelligence", "goleman", "eq", "psychology", "self-help", "empathy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553375060-L.jpg"
    },
    {
      titleEn = "The Body Keeps the Score";
      titleBn = "শরীর হিসাব রাখে";
      authorEn = "Bessel van der Kolk";
      authorBn = "বেসেল ভ্যান ডের কোলক";
      descriptionEn = "A landmark study on how trauma reshapes the body and brain, compromising the capacities for pleasure, engagement, self-control, and trust.";
      descriptionBn = "ট্রমা কীভাবে শরীর ও মস্তিষ্ককে পুনর্গঠন করে তার মাইলফলক গবেষণা।";
      isbn = "9780143127741";
      genre = "selfHelp";
      language = "english";
      price = 499;
      stock = 190;
      rating = 4.8;
      tags = ["trauma", "body", "van der kolk", "psychology", "healing", "mental health"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780143127741-L.jpg"
    },
    {
      titleEn = "The Road Less Travelled";
      titleBn = "কম চলা পথ";
      authorEn = "M. Scott Peck";
      authorBn = "এম. স্কট পেক";
      descriptionEn = "A classic work on psychology and spiritual growth, beginning with the challenging assertion that 'Life is difficult' and exploring how to overcome its challenges.";
      descriptionBn = "মনোবিজ্ঞান ও আধ্যাত্মিক বৃদ্ধির ক্লাসিক রচনা, 'জীবন কঠিন' এই চ্যালেঞ্জিং দাবি দিয়ে শুরু।";
      isbn = "9780743243155";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 170;
      rating = 4.5;
      tags = ["m. scott peck", "road less travelled", "psychology", "spirituality", "self-help", "discipline"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743243155-L.jpg"
    },
    {
      titleEn = "When Things Fall Apart";
      titleBn = "যখন সব ভেঙে পড়ে";
      authorEn = "Pema Chodron";
      authorBn = "পেমা চোড্রন";
      descriptionEn = "A guide to finding peace and meaning in difficult times through Tibetan Buddhist teachings on groundlessness and open space.";
      descriptionBn = "তিব্বতীয় বৌদ্ধ শিক্ষার মাধ্যমে কঠিন সময়ে শান্তি ও অর্থ খোঁজার গাইড।";
      isbn = "9781570623448";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 160;
      rating = 4.7;
      tags = ["pema chodron", "buddhism", "grief", "suffering", "mindfulness", "compassion"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781570623448-L.jpg"
    },
    {
      titleEn = "Wherever You Go There You Are";
      titleBn = "যেখানেই যাও, সেখানেই আছো";
      authorEn = "Jon Kabat-Zinn";
      authorBn = "জন কাবাট-জিন";
      descriptionEn = "An accessible introduction to mindfulness meditation, showing how mindfulness can be integrated into everyday life to overcome anxiety, stress, and pain.";
      descriptionBn = "মাইন্ডফুলনেস মেডিটেশনের সহজবোধ্য পরিচিতি, দেখানো হয় কীভাবে দৈনন্দিন জীবনে মাইন্ডফুলনেস একীভূত করা যায়।";
      isbn = "9781401308797";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 180;
      rating = 4.6;
      tags = ["jon kabat-zinn", "mindfulness", "meditation", "stress reduction", "mbsr", "wellness"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781401308797-L.jpg"
    },
    {
      titleEn = "The Gifts of Imperfection";
      titleBn = "অপূর্ণতার উপহার";
      authorEn = "Brene Brown";
      authorBn = "ব্রেনে ব্রাউন";
      descriptionEn = "A guide to letting go of who you think you should be and embracing who you are, based on Brene Brown's 10 years of research.";
      descriptionBn = "আপনি কে হওয়া উচিত তা ছেড়ে দিয়ে আপনি কে তা আলিঙ্গন করার গাইড।";
      isbn = "9781592858491";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 200;
      rating = 4.6;
      tags = ["brene brown", "imperfection", "wholehearted", "self-acceptance", "vulnerability", "courage"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781592858491-L.jpg"
    },
    {
      titleEn = "Letting Go: The Pathway of Surrender";
      titleBn = "ছেড়ে দেওয়া: আত্মসমর্পণের পথ";
      authorEn = "David R. Hawkins";
      authorBn = "ডেভিড আর. হকিন্স";
      descriptionEn = "A practical guide to surrendering negative emotions and patterns, allowing a healing process to unfold at all levels of mind and body.";
      descriptionBn = "নেতিবাচক আবেগ ও নিদর্শন ছেড়ে দেওয়ার ব্যবহারিক গাইড।";
      isbn = "9781401945015";
      genre = "selfHelp";
      language = "english";
      price = 399;
      stock = 150;
      rating = 4.6;
      tags = ["david hawkins", "surrender", "letting go", "spirituality", "consciousness", "healing"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781401945015-L.jpg"
    },
    {
      titleEn = "Swami Vivekananda: A Biography";
      titleBn = "স্বামী বিবেকানন্দ: একটি জীবনী";
      authorEn = "Swami Nikhilananda";
      authorBn = "স্বামী নিখিলানন্দ";
      descriptionEn = "The authoritative biography of Swami Vivekananda written by Swami Nikhilananda, covering his early life, spiritual development, and global mission.";
      descriptionBn = "স্বামী বিবেকানন্দের শৈশব, আধ্যাত্মিক উন্নয়ন ও বৈশ্বিক মিশন নিয়ে লেখা স্বামী নিখিলানন্দের প্রামাণিক জীবনী।";
      isbn = "9788185301396";
      genre = "religion";
      language = "english";
      price = 399;
      stock = 160;
      rating = 4.8;
      tags = ["vivekananda", "biography", "ramakrishna", "vedanta", "hinduism", "india"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788185301396-L.jpg"
    },
    {
      titleEn = "Sri Aurobindo: The Life Divine";
      titleBn = "দিব্য জীবন";
      authorEn = "Sri Aurobindo";
      authorBn = "শ্রী অরবিন্দ";
      descriptionEn = "Sri Aurobindo's magnum opus on the spiritual evolution of humanity, arguing for the possibility of a divine life on Earth through integral yoga.";
      descriptionBn = "মানবজাতির আধ্যাত্মিক বিবর্তনে শ্রী অরবিন্দের ম্যাগনাম ওপাস, সমন্বিত যোগের মাধ্যমে পৃথিবীতে দিব্য জীবনের সম্ভাবনা।";
      isbn = "9780941524612";
      genre = "religion";
      language = "english";
      price = 549;
      stock = 120;
      rating = 4.7;
      tags = ["sri aurobindo", "life divine", "integral yoga", "vedanta", "spirituality", "evolution"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780941524612-L.jpg"
    },
    {
      titleEn = "The Mother (Sri Aurobindo)";
      titleBn = "মা (শ্রী অরবিন্দ)";
      authorEn = "Sri Aurobindo";
      authorBn = "শ্রী অরবিন্দ";
      descriptionEn = "A profound spiritual treatise on the four aspects of the Divine Mother and the path of surrender to her in the practice of integral yoga.";
      descriptionBn = "দিব্য মাতার চারটি দিক ও সমন্বিত যোগের অনুশীলনে তাঁর কাছে আত্মসমর্পণের পথের উপর গভীর আধ্যাত্মিক গ্রন্থ।";
      isbn = "9780938710004";
      genre = "religion";
      language = "english";
      price = 299;
      stock = 130;
      rating = 4.8;
      tags = ["sri aurobindo", "the mother", "integral yoga", "divine mother", "spirituality"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780938710004-L.jpg"
    },
    {
      titleEn = "Devi Mahatmyam (Durga Saptashati)";
      titleBn = "দেবী মাহাত্ম্যম (দুর্গা সপ্তশতী)";
      authorEn = "Markandeya Purana";
      authorBn = "মার্কণ্ডেয় পুরাণ";
      descriptionEn = "The 700 verses from the Markandeya Purana praising the goddess Durga and her victory over the demon Mahishasura, a sacred text of Shakta tradition.";
      descriptionBn = "মার্কণ্ডেয় পুরাণের ৭০০ শ্লোক দেবী দুর্গার এবং অসুর মহিষাসুরের উপর তাঁর বিজয়ের প্রশংসা করে।";
      isbn = "9788175973787";
      genre = "religion";
      language = "bilingual";
      price = 249;
      stock = 200;
      rating = 4.9;
      tags = ["durga", "devi", "shakti", "hinduism", "purana", "mantra", "goddess"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788175973787-L.jpg"
    },
    {
      titleEn = "Sundar Kand (Ramayan)";
      titleBn = "সুন্দর কাণ্ড (রামায়ণ)";
      authorEn = "Valmiki / Gita Press";
      authorBn = "বাল্মীকি / গীতা প্রেস";
      descriptionEn = "The Sundar Kand section of the Valmiki Ramayana, describing Hanuman's journey to Lanka in search of Sita — considered the most auspicious portion to recite.";
      descriptionBn = "বাল্মীকি রামায়ণের সুন্দর কাণ্ড, সীতার খোঁজে হনুমানের লঙ্কা যাত্রার বর্ণনা।";
      isbn = "9788129300331";
      genre = "religion";
      language = "bilingual";
      price = 199;
      stock = 250;
      rating = 4.8;
      tags = ["sundar kand", "hanuman", "ramayana", "hinduism", "gita press", "prayer"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788129300331-L.jpg"
    },
    {
      titleEn = "The Yoga Sutras of Patanjali";
      titleBn = "পতঞ্জলির যোগসূত্র";
      authorEn = "Patanjali (Sri Swami Satchidananda, Translator)";
      authorBn = "পতঞ্জলি (শ্রী স্বামী সচ্চিদানন্দ, অনুবাদক)";
      descriptionEn = "The classical text on Raja Yoga by Patanjali with commentary by Sri Swami Satchidananda — the authoritative guide on yogic philosophy and practice.";
      descriptionBn = "শ্রী স্বামী সচ্চিদানন্দের ভাষ্যসহ পতঞ্জলির রাজযোগের মূল গ্রন্থ।";
      isbn = "9781938477072";
      genre = "religion";
      language = "english";
      price = 349;
      stock = 160;
      rating = 4.8;
      tags = ["yoga sutras", "patanjali", "raja yoga", "meditation", "yogic philosophy", "satchidananda"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781938477072-L.jpg"
    },
    {
      titleEn = "Light on Yoga";
      titleBn = "যোগের আলো";
      authorEn = "B.K.S. Iyengar";
      authorBn = "বি.কে.এস. আয়েঙ্গার";
      descriptionEn = "The definitive work on Hatha Yoga by B.K.S. Iyengar, covering 200 asanas and pranayamas with over 600 photographs, the bible of yoga practice worldwide.";
      descriptionBn = "বি.কে.এস. আয়েঙ্গারের হঠযোগের নির্ধারক রচনা, ৬০০টিরও বেশি ছবিসহ ২০০টি আসন ও প্রাণায়াম।";
      isbn = "9780805210316";
      genre = "religion";
      language = "english";
      price = 549;
      stock = 150;
      rating = 4.8;
      tags = ["iyengar yoga", "hatha yoga", "asana", "pranayama", "yoga practice", "physical yoga"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780805210316-L.jpg"
    },
    {
      titleEn = "The Bhagavatam: Stories of Krishna";
      titleBn = "ভাগবতম: কৃষ্ণের গল্প";
      authorEn = "C. Rajagopalachari";
      authorBn = "সি. রাজগোপালাচারী";
      descriptionEn = "A retelling of the most beloved stories of Lord Krishna from the Bhagavata Purana in simple, accessible prose by the eminent scholar and statesman.";
      descriptionBn = "বিশিষ্ট পণ্ডিত ও রাষ্ট্রনায়কের সহজ গদ্যে ভাগবত পুরাণ থেকে কৃষ্ণের সবচেয়ে প্রিয় গল্পের পুনর্কথন।";
      isbn = "9788172763893";
      genre = "religion";
      language = "english";
      price = 249;
      stock = 180;
      rating = 4.6;
      tags = ["krishna", "bhagavatam", "rajagopalachari", "hinduism", "purana", "storytelling"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172763893-L.jpg"
    },
    {
      titleEn = "Sri Ramakrishna The Great Master";
      titleBn = "শ্রীরামকৃষ্ণ মহাগুরু";
      authorEn = "Swami Saradananda";
      authorBn = "স্বামী সারদানন্দ";
      descriptionEn = "The authoritative biography of Sri Ramakrishna by his disciple Swami Saradananda, exploring his spiritual experiences, teachings, and divine life.";
      descriptionBn = "তাঁর শিষ্য স্বামী সারদানন্দের লেখা শ্রীরামকৃষ্ণের প্রামাণিক জীবনী।";
      isbn = "9788185301174";
      genre = "religion";
      language = "english";
      price = 499;
      stock = 140;
      rating = 4.9;
      tags = ["ramakrishna", "biography", "saradananda", "mysticism", "vedanta", "hinduism"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788185301174-L.jpg"
    },
    {
      titleEn = "Mother of Sri Aurobindo Ashram";
      titleBn = "শ্রী অরবিন্দ আশ্রমের মা";
      authorEn = "Nirodbaran";
      authorBn = "নিরোধবরণ";
      descriptionEn = "A biography of the Mother (Mirra Alfassa), spiritual partner of Sri Aurobindo and leader of the Sri Aurobindo Ashram in Pondicherry, India.";
      descriptionBn = "শ্রী অরবিন্দের আধ্যাত্মিক অংশীদার ও পন্ডিচেরির শ্রী অরবিন্দ আশ্রামের নেত্রী মায়ের (মিরা আলফাসা) জীবনী।";
      isbn = "9788170584131";
      genre = "religion";
      language = "english";
      price = 349;
      stock = 120;
      rating = 4.7;
      tags = ["mother", "mirra alfassa", "sri aurobindo", "ashram", "spirituality", "yoga"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788170584131-L.jpg"
    },
    {
      titleEn = "Panchatantra";
      titleBn = "পঞ্চতন্ত্র";
      authorEn = "Vishnu Sharma";
      authorBn = "বিষ্ণু শর্মা";
      descriptionEn = "The ancient Indian collection of instructive fables in Sanskrit, originally composed around 300 BCE, offering wisdom through animal stories.";
      descriptionBn = "প্রাচীন ভারতীয় সংস্কৃত নীতিকথার সংকলন, মূলত খ্রিস্টপূর্ব ৩০০ সালে রচিত, পশু-পাখির গল্পের মাধ্যমে জ্ঞান প্রদান।";
      isbn = "9780143068359";
      genre = "nonFiction";
      language = "bilingual";
      price = 199;
      stock = 220;
      rating = 4.5;
      tags = ["panchatantra", "fables", "ancient india", "wisdom", "stories", "philosophy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780143068359-L.jpg"
    },
    {
      titleEn = "Hitopadesha";
      titleBn = "হিতোপদেশ";
      authorEn = "Narayana Pandit";
      authorBn = "নারায়ণ পণ্ডিত";
      descriptionEn = "A collection of Sanskrit fables and didactic prose, derived partly from the Panchatantra, offering practical wisdom for daily life.";
      descriptionBn = "সংস্কৃত নীতিকথা ও শিক্ষামূলক গদ্যের সংকলন, আংশিকভাবে পঞ্চতন্ত্র থেকে নেওয়া।";
      isbn = "9788175972520";
      genre = "nonFiction";
      language = "bilingual";
      price = 199;
      stock = 200;
      rating = 4.4;
      tags = ["hitopadesha", "fables", "narayana", "sanskrit", "wisdom", "ancient india"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788175972520-L.jpg"
    },
    {
      titleEn = "Swami and His Message (Bengali)";
      titleBn = "স্বামীজি ও তাঁহার বাণী";
      authorEn = "Swami Vivekananda";
      authorBn = "স্বামী বিবেকানন্দ";
      descriptionEn = "A collection of Swami Vivekananda's inspiring speeches and messages in Bengali, including his famous Chicago Parliament of Religions address.";
      descriptionBn = "স্বামী বিবেকানন্দের বাংলায় অনুপ্রেরণামূলক বক্তৃতা ও বাণীর সংকলন, শিকাগো ধর্ম মহাসভার ঐতিহাসিক ভাষণ সহ।";
      isbn = "9788185301051";
      genre = "religion";
      language = "bengali";
      price = 249;
      stock = 190;
      rating = 4.8;
      tags = ["vivekananda", "bengali", "speech", "chicago", "vedanta", "hinduism"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788185301051-L.jpg"
    },
    {
      titleEn = "Raja Yoga (Bengali)";
      titleBn = "রাজযোগ";
      authorEn = "Swami Vivekananda";
      authorBn = "স্বামী বিবেকানন্দ";
      descriptionEn = "Swami Vivekananda's classic exposition of Raja Yoga in Bengali, explaining Patanjali's yoga sutras and the science of concentration and meditation.";
      descriptionBn = "স্বামী বিবেকানন্দের বাংলায় রাজযোগের ক্লাসিক ব্যাখ্যা, পতঞ্জলির যোগসূত্র ও একাগ্রতা ও ধ্যানের বিজ্ঞান।";
      isbn = "9788185301618";
      genre = "religion";
      language = "bengali";
      price = 249;
      stock = 170;
      rating = 4.8;
      tags = ["raja yoga", "vivekananda", "bengali", "yoga", "meditation", "patanjali"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788185301618-L.jpg"
    },
    {
      titleEn = "Karma Yoga and Bhakti Yoga";
      titleBn = "কর্মযোগ ও ভক্তিযোগ";
      authorEn = "Swami Vivekananda";
      authorBn = "স্বামী বিবেকানন্দ";
      descriptionEn = "Two of Vivekananda's most important works in one volume — Karma Yoga on the path of work and Bhakti Yoga on the path of devotion.";
      descriptionBn = "একটি খণ্ডে বিবেকানন্দের দুটি সবচেয়ে গুরুত্বপূর্ণ রচনা — কর্মের পথে কর্মযোগ ও ভক্তির পথে ভক্তিযোগ।";
      isbn = "9780911206227";
      genre = "religion";
      language = "english";
      price = 299;
      stock = 180;
      rating = 4.8;
      tags = ["karma yoga", "bhakti yoga", "vivekananda", "vedanta", "hinduism", "yoga"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780911206227-L.jpg"
    },
    {
      titleEn = "Mahabharata (Abridged)";
      titleBn = "মহাভারত (সংক্ষিপ্ত)";
      authorEn = "C. Rajagopalachari";
      authorBn = "সি. রাজগোপালাচারী";
      descriptionEn = "The classic abridged retelling of India's greatest epic, the Mahabharata, by eminent scholar C. Rajagopalachari — accessible yet faithful to the original.";
      descriptionBn = "বিশিষ্ট পণ্ডিত সি. রাজগোপালাচারীর ভারতের মহান মহাকাব্য মহাভারতের ক্লাসিক সংক্ষিপ্ত পুনর্কথন।";
      isbn = "9788172763800";
      genre = "religion";
      language = "english";
      price = 299;
      stock = 220;
      rating = 4.7;
      tags = ["mahabharata", "rajagopalachari", "hinduism", "epic", "india", "krishna", "pandava"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172763800-L.jpg"
    },
    {
      titleEn = "Ramayana (Abridged)";
      titleBn = "রামায়ণ (সংক্ষিপ্ত)";
      authorEn = "C. Rajagopalachari";
      authorBn = "সি. রাজগোপালাচারী";
      descriptionEn = "The classic abridged retelling of the Ramayana by C. Rajagopalachari, bringing the timeless story of Rama, Sita, and Hanuman to modern readers.";
      descriptionBn = "সি. রাজগোপালাচারীর রামায়ণের ক্লাসিক সংক্ষিপ্ত পুনর্কথন, রাম, সীতা ও হনুমানের চিরন্তন গল্প আধুনিক পাঠকের কাছে নিয়ে আসা।";
      isbn = "9788172763817";
      genre = "religion";
      language = "english";
      price = 249;
      stock = 230;
      rating = 4.7;
      tags = ["ramayana", "rajagopalachari", "rama", "hinduism", "epic", "hanuman", "sita"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172763817-L.jpg"
    },
    {
      titleEn = "The Richest Man in Babylon";
      titleBn = "ব্যাবিলনের সবচেয়ে ধনী মানুষ";
      authorEn = "George S. Clason";
      authorBn = "জর্জ এস. ক্ল্যাসন";
      descriptionEn = "Classic financial wisdom through parables set in ancient Babylon — the foundation of all personal finance books that came after it.";
      descriptionBn = "প্রাচীন ব্যাবিলনে স্থাপিত দৃষ্টান্তের মাধ্যমে ক্লাসিক আর্থিক জ্ঞান।";
      isbn = "9780451205360";
      genre = "selfHelp";
      language = "english";
      price = 249;
      stock = 280;
      rating = 4.6;
      tags = ["richest man babylon", "clason", "finance", "money", "wealth", "parables"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780451205360-L.jpg"
    },
    {
      titleEn = "As a Man Thinketh";
      titleBn = "মানুষ যেভাবে চিন্তা করে";
      authorEn = "James Allen";
      authorBn = "জেমস অ্যালেন";
      descriptionEn = "The classic short work on the power of thought and its transformative effect on a person's character, circumstances, and environment.";
      descriptionBn = "চিন্তার শক্তি এবং কারও চরিত্র, পরিস্থিতি ও পরিবেশে তার রূপান্তরকারী প্রভাবের ক্লাসিক সংক্ষিপ্ত রচনা।";
      isbn = "9780486438283";
      genre = "selfHelp";
      language = "english";
      price = 149;
      stock = 300;
      rating = 4.5;
      tags = ["james allen", "as a man thinketh", "thought", "character", "self-help", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780486438283-L.jpg"
    },
    {
      titleEn = "Outwitting the Devil";
      titleBn = "শয়তানকে হারানো";
      authorEn = "Napoleon Hill";
      authorBn = "নেপোলিয়ন হিল";
      descriptionEn = "Napoleon Hill's long-suppressed manuscript on the hidden forces that prevent people from living free and successful lives, rediscovered and published 70 years after it was written.";
      descriptionBn = "নেপোলিয়ন হিলের দীর্ঘ-দমিত পাণ্ডুলিপি যা লেখার ৭০ বছর পরে প্রকাশিত হয়েছে।";
      isbn = "9781454900672";
      genre = "selfHelp";
      language = "english";
      price = 349;
      stock = 180;
      rating = 4.4;
      tags = ["napoleon hill", "outwitting devil", "success", "self-help", "motivation", "achievement"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781454900672-L.jpg"
    },
    {
      titleEn = "The Science of Getting Rich";
      titleBn = "ধনী হওয়ার বিজ্ঞান";
      authorEn = "Wallace D. Wattles";
      authorBn = "ওয়ালেস ডি. ওয়াটলস";
      descriptionEn = "A practical guide to wealth creation using the power of thought and creative visualization, the inspiration behind Rhonda Byrne's The Secret.";
      descriptionBn = "চিন্তার শক্তি ও সৃজনশীল কল্পনা ব্যবহার করে সম্পদ সৃষ্টির ব্যবহারিক গাইড।";
      isbn = "9781604598179";
      genre = "selfHelp";
      language = "english";
      price = 199;
      stock = 220;
      rating = 4.3;
      tags = ["wattles", "science of getting rich", "wealth", "visualization", "self-help", "law of attraction"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781604598179-L.jpg"
    }
  ];
}
