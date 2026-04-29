module {
  public let books : [{
    titleEn: Text; titleBn: Text; authorEn: Text; authorBn: Text;
    descriptionEn: Text; descriptionBn: Text;
    isbn: Text; genre: Text; language: Text;
    price: Nat; stock: Nat; rating: Float;
    tags: [Text]; coverImageUrl: Text
  }] = [
    {
      titleEn = "Amar Chitra Katha: Mahabharata";
      titleBn = "অমর চিত্র কথা: মহাভারত";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "The epic tale of the Pandavas and Kauravas brought to life in vibrant comic art.";
      descriptionBn = "পাণ্ডব ও কৌরবদের মহাকাব্যিক কাহিনী প্রাণবন্ত কমিক চিত্রে উপস্থাপিত।";
      isbn = "9788184820270";
      genre = "#children";
      language = "#bilingual";
      price = 299;
      stock = 60;
      rating = 4.8;
      tags = ["comics", "mythology", "mahabharata", "amar chitra katha"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184820270-L.jpg";
    },
    {
      titleEn = "Amar Chitra Katha: Ramayana";
      titleBn = "অমর চিত্র কথা: রামায়ণ";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "The timeless story of Lord Rama illustrated in the iconic Amar Chitra Katha style.";
      descriptionBn = "ভগবান রামের চিরন্তন কাহিনী আইকনিক অমর চিত্র কথা শৈলীতে চিত্রিত।";
      isbn = "9788184820263";
      genre = "#children";
      language = "#bilingual";
      price = 299;
      stock = 55;
      rating = 4.8;
      tags = ["comics", "mythology", "ramayana", "amar chitra katha"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184820263-L.jpg";
    },
    {
      titleEn = "Panchatantra";
      titleBn = "পঞ্চতন্ত্র";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "Ancient Indian fables of wisdom and wit, beautifully illustrated for children.";
      descriptionBn = "প্রজ্ঞা ও রসবোধের প্রাচীন ভারতীয় নীতিকথা, শিশুদের জন্য সুন্দরভাবে চিত্রিত।";
      isbn = "9788184821154";
      genre = "#children";
      language = "#bilingual";
      price = 249;
      stock = 70;
      rating = 4.7;
      tags = ["comics", "fables", "panchatantra", "amar chitra katha"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184821154-L.jpg";
    },
    {
      titleEn = "Tinkle Double Digest";
      titleBn = "টিংকল ডবল ডাইজেস্ট";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "A collection of Tinkle's best comic stories featuring Suppandi, Shikari Shambu and more.";
      descriptionBn = "সুপ্পান্দি, শিকারি শম্ভু ও অন্যান্যদের নিয়ে টিংকলের সেরা কমিক গল্পের সংকলন।";
      isbn = "9788184820287";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 80;
      rating = 4.6;
      tags = ["tinkle", "comics", "suppandi", "shikari shambu", "children"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184820287-L.jpg";
    },
    {
      titleEn = "Feluda: Sonar Kella";
      titleBn = "ফেলুদা: সোনার কেল্লা";
      authorEn = "Satyajit Ray";
      authorBn = "সত্যজিৎ রায়";
      descriptionEn = "Feluda and Topshe race to Rajasthan to solve the mystery of the golden fortress.";
      descriptionBn = "ফেলুদা ও তোপসে সোনার কেল্লার রহস্য সমাধান করতে রাজস্থানে ছুটে যায়।";
      isbn = "9788172152000";
      genre = "#fiction";
      language = "#bengali";
      price = 199;
      stock = 90;
      rating = 4.9;
      tags = ["feluda", "detective", "satyajit ray", "bengali fiction", "mystery"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172152000-L.jpg";
    },
    {
      titleEn = "Feluda: Joy Baba Felunath";
      titleBn = "ফেলুদা: জয় বাবা ফেলুনাথ";
      authorEn = "Satyajit Ray";
      authorBn = "সত্যজিৎ রায়";
      descriptionEn = "Feluda investigates the theft of a golden Ganesha idol in the holy city of Varanasi.";
      descriptionBn = "পবিত্র বারাণসী শহরে সোনার গণেশ মূর্তি চুরির তদন্ত করেন ফেলুদা।";
      isbn = "9788172152017";
      genre = "#fiction";
      language = "#bengali";
      price = 199;
      stock = 85;
      rating = 4.9;
      tags = ["feluda", "detective", "satyajit ray", "bengali fiction", "mystery"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172152017-L.jpg";
    },
    {
      titleEn = "Feluda: Bombaiyer Bombete";
      titleBn = "ফেলুদা: বম্বাইয়ের বোম্বেটে";
      authorEn = "Satyajit Ray";
      authorBn = "সত্যজিৎ রায়";
      descriptionEn = "Feluda is on the trail of a dangerous criminal in the bustling city of Bombay.";
      descriptionBn = "কোলাহলমুখর বোম্বাই শহরে এক বিপজ্জনক অপরাধীর পেছনে ছুটছেন ফেলুদা।";
      isbn = "9788172152024";
      genre = "#fiction";
      language = "#bengali";
      price = 199;
      stock = 80;
      rating = 4.8;
      tags = ["feluda", "detective", "satyajit ray", "bengali fiction", "mystery"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172152024-L.jpg";
    },
    {
      titleEn = "Byomkesh Bakshi: Satyanweshi";
      titleBn = "ব্যোমকেশ বক্সী: সত্যান্বেষী";
      authorEn = "Sharadindu Bandyopadhyay";
      authorBn = "শরদিন্দু বন্দ্যোপাধ্যায়";
      descriptionEn = "The very first Byomkesh Bakshi story introducing the truth-seeker detective.";
      descriptionBn = "সত্যান্বেষী গোয়েন্দা ব্যোমকেশ বক্সীকে পরিচয় করিয়ে দেওয়া প্রথম কাহিনী।";
      isbn = "9788172930110";
      genre = "#fiction";
      language = "#bengali";
      price = 249;
      stock = 75;
      rating = 4.8;
      tags = ["byomkesh bakshi", "detective", "sharadindu", "bengali fiction"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930110-L.jpg";
    },
    {
      titleEn = "Byomkesh Bakshi Samagra";
      titleBn = "ব্যোমকেশ বক্সী সমগ্র";
      authorEn = "Sharadindu Bandyopadhyay";
      authorBn = "শরদিন্দু বন্দ্যোপাধ্যায়";
      descriptionEn = "Complete collection of all Byomkesh Bakshi detective stories in one volume.";
      descriptionBn = "এক খণ্ডে সমস্ত ব্যোমকেশ বক্সীর গোয়েন্দা কাহিনীর সম্পূর্ণ সংকলন।";
      isbn = "9788172930127";
      genre = "#fiction";
      language = "#bengali";
      price = 499;
      stock = 40;
      rating = 4.9;
      tags = ["byomkesh bakshi", "detective", "sharadindu", "bengali fiction", "complete works"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930127-L.jpg";
    },
    {
      titleEn = "The Adventures of Tintin: The Secret of the Unicorn";
      titleBn = "টিনটিনের অ্যাডভেঞ্চার: ইউনিকর্নের রহস্য";
      authorEn = "Herge";
      authorBn = "হার্জে";
      descriptionEn = "Tintin and Captain Haddock search for sunken treasure linked to a model ship.";
      descriptionBn = "টিনটিন ও ক্যাপ্টেন হ্যাডক একটি মডেল জাহাজের সাথে সংযুক্ত ডুবে যাওয়া ধনসম্পদের সন্ধান করে।";
      isbn = "9781405206242";
      genre = "#children";
      language = "#english";
      price = 349;
      stock = 65;
      rating = 4.8;
      tags = ["tintin", "herge", "comics", "adventure", "children"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781405206242-L.jpg";
    },
    {
      titleEn = "The Adventures of Tintin: Tintin in Tibet";
      titleBn = "টিনটিনের অ্যাডভেঞ্চার: তিব্বতে টিনটিন";
      authorEn = "Herge";
      authorBn = "হার্জে";
      descriptionEn = "Tintin risks everything to rescue his friend Chang from the Himalayas.";
      descriptionBn = "টিনটিন তার বন্ধু চ্যাংকে হিমালয় থেকে উদ্ধার করতে সব কিছু ঝুঁকিতে ফেলে।";
      isbn = "9781405208116";
      genre = "#children";
      language = "#english";
      price = 349;
      stock = 60;
      rating = 4.9;
      tags = ["tintin", "herge", "comics", "adventure", "children"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781405208116-L.jpg";
    },
    {
      titleEn = "The Adventures of Tintin: The Blue Lotus";
      titleBn = "টিনটিনের অ্যাডভেঞ্চার: নীল পদ্ম";
      authorEn = "Herge";
      authorBn = "হার্জে";
      descriptionEn = "Tintin travels to Shanghai and uncovers an opium smuggling ring in 1930s China.";
      descriptionBn = "টিনটিন সাংহাই ভ্রমণ করে এবং ১৯৩০-এর দশকের চিনে আফিম পাচারের চক্র উদঘাটন করে।";
      isbn = "9781405208093";
      genre = "#children";
      language = "#english";
      price = 349;
      stock = 55;
      rating = 4.7;
      tags = ["tintin", "herge", "comics", "adventure", "china"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781405208093-L.jpg";
    },
    {
      titleEn = "The Adventures of Tintin: The Calculus Affair";
      titleBn = "টিনটিনের অ্যাডভেঞ্চার: ক্যালকুলাস অ্যাফেয়ার";
      authorEn = "Herge";
      authorBn = "হার্জে";
      descriptionEn = "Tintin and Haddock rescue Professor Calculus from enemy spies.";
      descriptionBn = "টিনটিন ও হ্যাডক শত্রু গুপ্তচরদের কাছ থেকে প্রফেসর ক্যালকুলাসকে উদ্ধার করে।";
      isbn = "9781405206266";
      genre = "#children";
      language = "#english";
      price = 349;
      stock = 50;
      rating = 4.7;
      tags = ["tintin", "herge", "comics", "adventure", "spy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781405206266-L.jpg";
    },
    {
      titleEn = "Asterix the Gaul";
      titleBn = "অ্যাস্টেরিক্স দ্য গল";
      authorEn = "Rene Goscinny";
      authorBn = "রেনে গোসিনি";
      descriptionEn = "The first Asterix adventure — a small Gaulish village resists Roman occupation with a magic potion.";
      descriptionBn = "প্রথম অ্যাস্টেরিক্স অ্যাডভেঞ্চার — একটি ছোট গলিশ গ্রাম জাদুর ওষুধ দিয়ে রোমান দখলকে প্রতিহত করে।";
      isbn = "9780752866055";
      genre = "#children";
      language = "#english";
      price = 299;
      stock = 70;
      rating = 4.8;
      tags = ["asterix", "comics", "gaul", "roman", "humor"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780752866055-L.jpg";
    },
    {
      titleEn = "Asterix and the Olympic Games";
      titleBn = "অ্যাস্টেরিক্স এবং অলিম্পিক গেমস";
      authorEn = "Rene Goscinny";
      authorBn = "রেনে গোসিনি";
      descriptionEn = "Asterix and Obelix head to ancient Olympia to compete in the Olympic Games.";
      descriptionBn = "অ্যাস্টেরিক্স ও ওবেলিক্স অলিম্পিক গেমসে প্রতিযোগিতা করতে প্রাচীন অলিম্পিয়ায় যায়।";
      isbn = "9780752866079";
      genre = "#children";
      language = "#english";
      price = 299;
      stock = 65;
      rating = 4.6;
      tags = ["asterix", "comics", "olympics", "humor", "ancient rome"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780752866079-L.jpg";
    },
    {
      titleEn = "The Hardy Boys: The Tower Treasure";
      titleBn = "দ্য হার্ডি বয়েজ: টাওয়ার ট্রেজার";
      authorEn = "Franklin W. Dixon";
      authorBn = "ফ্র্যাংকলিন ডব্লিউ ডিক্সন";
      descriptionEn = "Frank and Joe Hardy tackle their first big mystery involving a stolen treasure.";
      descriptionBn = "ফ্র্যাংক ও জো হার্ডি চুরি হওয়া ধনসম্পদ নিয়ে তাদের প্রথম বড় রহস্যের মোকাবিলা করে।";
      isbn = "9780448089010";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 75;
      rating = 4.5;
      tags = ["hardy boys", "mystery", "detective", "young adult", "adventure"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780448089010-L.jpg";
    },
    {
      titleEn = "The Hardy Boys: The House on the Cliff";
      titleBn = "দ্য হার্ডি বয়েজ: ক্লিফের বাড়ি";
      authorEn = "Franklin W. Dixon";
      authorBn = "ফ্র্যাংকলিন ডব্লিউ ডিক্সন";
      descriptionEn = "The Hardy Boys investigate a haunted house by the sea hiding dangerous secrets.";
      descriptionBn = "হার্ডি বয়েজ সমুদ্রের ধারে একটি ভূতুড়ে বাড়ির তদন্ত করে যা বিপজ্জনক রহস্য লুকিয়ে রেখেছে।";
      isbn = "9780448089027";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 70;
      rating = 4.4;
      tags = ["hardy boys", "mystery", "detective", "young adult"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780448089027-L.jpg";
    },
    {
      titleEn = "Famous Five: Five on a Treasure Island";
      titleBn = "ফেমাস ফাইভ: ট্রেজার আইল্যান্ডে পাঁচজন";
      authorEn = "Enid Blyton";
      authorBn = "এনিড ব্লাইটন";
      descriptionEn = "Julian, Dick, Anne, George and Timmy discover a shipwreck and hidden treasure on a mysterious island.";
      descriptionBn = "জুলিয়ান, ডিক, অ্যান, জর্জ ও টিমি একটি রহস্যময় দ্বীপে জাহাজ ভাঙা ও লুকানো ধন আবিষ্কার করে।";
      isbn = "9780340681275";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 90;
      rating = 4.7;
      tags = ["famous five", "enid blyton", "adventure", "treasure", "children"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780340681275-L.jpg";
    },
    {
      titleEn = "Famous Five: Five Go Adventuring Again";
      titleBn = "ফেমাস ফাইভ: পাঁচজন আবার অ্যাডভেঞ্চারে";
      authorEn = "Enid Blyton";
      authorBn = "এনিড ব্লাইটন";
      descriptionEn = "The Five solve the mystery of secret passages in an old manor house during winter.";
      descriptionBn = "পাঁচজন শীতকালে একটি পুরানো ম্যানর হাউসে গোপন প্যাসেজের রহস্য সমাধান করে।";
      isbn = "9780340681282";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 85;
      rating = 4.6;
      tags = ["famous five", "enid blyton", "mystery", "children", "adventure"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780340681282-L.jpg";
    },
    {
      titleEn = "Famous Five: Five Run Away Together";
      titleBn = "ফেমাস ফাইভ: পাঁচজন একসাথে পালায়";
      authorEn = "Enid Blyton";
      authorBn = "এনিড ব্লাইটন";
      descriptionEn = "The Famous Five uncover a kidnapping plot on Kirrin Island.";
      descriptionBn = "ফেমাস ফাইভ কিরিন আইল্যান্ডে একটি অপহরণ ষড়যন্ত্র উদঘাটন করে।";
      isbn = "9780340681299";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 80;
      rating = 4.5;
      tags = ["famous five", "enid blyton", "mystery", "children", "island"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780340681299-L.jpg";
    },
    {
      titleEn = "Harry Potter and the Philosopher's Stone";
      titleBn = "হ্যারি পটার এবং দার্শনিক পাথর";
      authorEn = "J.K. Rowling";
      authorBn = "জে. কে. রোলিং";
      descriptionEn = "An orphaned boy discovers he's a wizard and attends Hogwarts School of Witchcraft and Wizardry.";
      descriptionBn = "একটি অনাথ ছেলে আবিষ্কার করে সে একজন জাদুকর এবং হগওয়ার্টস স্কুলে ভর্তি হয়।";
      isbn = "9780747532699";
      genre = "#fiction";
      language = "#english";
      price = 399;
      stock = 100;
      rating = 4.9;
      tags = ["harry potter", "rowling", "fantasy", "magic", "young adult"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg";
    },
    {
      titleEn = "Harry Potter and the Chamber of Secrets";
      titleBn = "হ্যারি পটার এবং রহস্য কক্ষ";
      authorEn = "J.K. Rowling";
      authorBn = "জে. কে. রোলিং";
      descriptionEn = "Harry's second year at Hogwarts brings new dangers as mysterious attacks petrify students.";
      descriptionBn = "হগওয়ার্টসে হ্যারির দ্বিতীয় বছরে নতুন বিপদ আসে কারণ রহস্যময় আক্রমণে ছাত্ররা পাথর হয়ে যায়।";
      isbn = "9780747538486";
      genre = "#fiction";
      language = "#english";
      price = 399;
      stock = 95;
      rating = 4.8;
      tags = ["harry potter", "rowling", "fantasy", "magic", "young adult"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780747538486-L.jpg";
    },
    {
      titleEn = "Harry Potter and the Prisoner of Azkaban";
      titleBn = "হ্যারি পটার এবং আজকাবানের বন্দী";
      authorEn = "J.K. Rowling";
      authorBn = "জে. কে. রোলিং";
      descriptionEn = "Harry learns about Sirius Black, an escaped prisoner with a connection to his past.";
      descriptionBn = "হ্যারি সিরিয়াস ব্ল্যাক সম্পর্কে জানতে পারে, যে একজন পলাতক বন্দী যার সাথে তার অতীতের সম্পর্ক আছে।";
      isbn = "9780747546290";
      genre = "#fiction";
      language = "#english";
      price = 399;
      stock = 90;
      rating = 4.9;
      tags = ["harry potter", "rowling", "fantasy", "magic", "young adult"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780747546290-L.jpg";
    },
    {
      titleEn = "Harry Potter and the Goblet of Fire";
      titleBn = "হ্যারি পটার এবং আগুনের পাত্র";
      authorEn = "J.K. Rowling";
      authorBn = "জে. কে. রোলিং";
      descriptionEn = "Harry is mysteriously entered into the dangerous Triwizard Tournament in his fourth year.";
      descriptionBn = "চতুর্থ বছরে হ্যারিকে রহস্যজনকভাবে বিপজ্জনক ট্রাইউইজার্ড টুর্নামেন্টে অংশগ্রহণ করানো হয়।";
      isbn = "9780747550990";
      genre = "#fiction";
      language = "#english";
      price = 449;
      stock = 85;
      rating = 4.9;
      tags = ["harry potter", "rowling", "fantasy", "tournament", "young adult"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780747550990-L.jpg";
    },
    {
      titleEn = "Harry Potter and the Order of the Phoenix";
      titleBn = "হ্যারি পটার এবং ফিনিক্সের আদেশ";
      authorEn = "J.K. Rowling";
      authorBn = "জে. কে. রোলিং";
      descriptionEn = "Harry and his friends form Dumbledore's Army to fight the rising threat of Voldemort.";
      descriptionBn = "হ্যারি ও তার বন্ধুরা ভলডেমর্টের ক্রমবর্ধমান হুমকির বিরুদ্ধে ডাম্বলডোর'স আর্মি গঠন করে।";
      isbn = "9780747551003";
      genre = "#fiction";
      language = "#english";
      price = 449;
      stock = 80;
      rating = 4.8;
      tags = ["harry potter", "rowling", "fantasy", "magic", "young adult"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780747551003-L.jpg";
    },
    {
      titleEn = "Harry Potter and the Half-Blood Prince";
      titleBn = "হ্যারি পটার এবং হাফ-ব্লাড প্রিন্স";
      authorEn = "J.K. Rowling";
      authorBn = "জে. কে. রোলিং";
      descriptionEn = "Harry discovers Voldemort's dark past and the key to defeating him through Horcruxes.";
      descriptionBn = "হ্যারি ভলডেমর্টের অন্ধকার অতীত এবং হরক্রাক্সের মাধ্যমে তাকে পরাজিত করার চাবিকাঠি আবিষ্কার করে।";
      isbn = "9780747581086";
      genre = "#fiction";
      language = "#english";
      price = 449;
      stock = 75;
      rating = 4.8;
      tags = ["harry potter", "rowling", "fantasy", "horcrux", "young adult"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780747581086-L.jpg";
    },
    {
      titleEn = "Harry Potter and the Deathly Hallows";
      titleBn = "হ্যারি পটার এবং মৃত্যুর নিশানা";
      authorEn = "J.K. Rowling";
      authorBn = "জে. কে. রোলিং";
      descriptionEn = "The epic conclusion as Harry faces Voldemort in the final battle for the wizarding world.";
      descriptionBn = "মহাকাব্যিক সমাপ্তিতে হ্যারি জাদুকরের জগতের জন্য চূড়ান্ত যুদ্ধে ভলডেমর্টের মুখোমুখি হয়।";
      isbn = "9780747591054";
      genre = "#fiction";
      language = "#english";
      price = 449;
      stock = 70;
      rating = 4.9;
      tags = ["harry potter", "rowling", "fantasy", "final battle", "young adult"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780747591054-L.jpg";
    },
    {
      titleEn = "Charlie and the Chocolate Factory";
      titleBn = "চার্লি এবং চকলেট কারখানা";
      authorEn = "Roald Dahl";
      authorBn = "রোয়ালড ডাল";
      descriptionEn = "Charlie Bucket wins a golden ticket to visit Willy Wonka's extraordinary chocolate factory.";
      descriptionBn = "চার্লি বাকেট উইলি ওয়ংকার অসাধারণ চকলেট কারখানা পরিদর্শনের জন্য একটি সোনালি টিকেট জেতে।";
      isbn = "9780141322711";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 100;
      rating = 4.8;
      tags = ["roald dahl", "chocolate", "children", "fantasy", "golden ticket"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141322711-L.jpg";
    },
    {
      titleEn = "Matilda";
      titleBn = "ম্যাটিলডা";
      authorEn = "Roald Dahl";
      authorBn = "রোয়ালড ডাল";
      descriptionEn = "A brilliant young girl with telekinetic powers overcomes her horrible parents and headmistress.";
      descriptionBn = "টেলিকাইনেটিক শক্তিসম্পন্ন একজন মেধাবী তরুণী তার ভয়ঙ্কর বাবা-মা ও প্রধান শিক্ষিকাকে পরাস্ত করে।";
      isbn = "9780141322858";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 95;
      rating = 4.9;
      tags = ["roald dahl", "matilda", "children", "telekinesis", "school"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141322858-L.jpg";
    },
    {
      titleEn = "The BFG";
      titleBn = "দ্য বিএফজি";
      authorEn = "Roald Dahl";
      authorBn = "রোয়ালড ডাল";
      descriptionEn = "A young girl named Sophie befriends the Big Friendly Giant who collects dreams.";
      descriptionBn = "সোফি নামের একটি মেয়ে স্বপ্ন সংগ্রহকারী বড় বন্ধুত্বপূর্ণ দৈত্যের সাথে বন্ধুত্ব করে।";
      isbn = "9780141322766";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 90;
      rating = 4.8;
      tags = ["roald dahl", "bfg", "giant", "children", "dreams"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141322766-L.jpg";
    },
    {
      titleEn = "James and the Giant Peach";
      titleBn = "জেমস এবং বিশাল পিচ";
      authorEn = "Roald Dahl";
      authorBn = "রোয়ালড ডাল";
      descriptionEn = "James escapes his horrible aunts inside a magical giant peach with friendly insects.";
      descriptionBn = "জেমস বন্ধুত্বপূর্ণ পোকামাকড়সহ একটি যাদুকরী বিশাল পিচের ভেতরে তার ভয়ঙ্কর মাসিদের কাছ থেকে পালায়।";
      isbn = "9780141322773";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 85;
      rating = 4.7;
      tags = ["roald dahl", "james", "peach", "children", "adventure"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141322773-L.jpg";
    },
    {
      titleEn = "The Witches";
      titleBn = "দ্য উইচেস";
      authorEn = "Roald Dahl";
      authorBn = "রোয়ালড ডাল";
      descriptionEn = "A young boy and his grandmother battle the Grand High Witch and her evil plans.";
      descriptionBn = "একটি ছেলে ও তার দাদি গ্র্যান্ড হাই উইচ ও তার মন্দ পরিকল্পনার বিরুদ্ধে লড়াই করে।";
      isbn = "9780141322780";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 80;
      rating = 4.7;
      tags = ["roald dahl", "witches", "children", "supernatural", "adventure"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141322780-L.jpg";
    },
    {
      titleEn = "Danny the Champion of the World";
      titleBn = "ড্যানি দ্য চ্যাম্পিয়ন অফ দ্য ওয়ার্ল্ড";
      authorEn = "Roald Dahl";
      authorBn = "রোয়ালড ডাল";
      descriptionEn = "Danny and his father plan an audacious poaching scheme against a pompous landowner.";
      descriptionBn = "ড্যানি ও তার বাবা একটি অহংকারী জমির মালিকের বিরুদ্ধে একটি সাহসী শিকারের পরিকল্পনা করে।";
      isbn = "9780141322865";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 75;
      rating = 4.6;
      tags = ["roald dahl", "danny", "children", "adventure", "poaching"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141322865-L.jpg";
    },
    {
      titleEn = "The Cat in the Hat";
      titleBn = "দ্য ক্যাট ইন দ্য হ্যাট";
      authorEn = "Dr. Seuss";
      authorBn = "ড. সিউস";
      descriptionEn = "A mischievous cat wearing a tall striped hat comes to entertain two bored children on a rainy day.";
      descriptionBn = "একটি দুষ্টু বিড়াল লম্বা ডোরাকাটা টুপি পরে বৃষ্টির দিনে দুটি বিরক্ত শিশুকে বিনোদন দিতে আসে।";
      isbn = "9780394800011";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 100;
      rating = 4.8;
      tags = ["dr seuss", "cat in the hat", "children", "rhyme", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780394800011-L.jpg";
    },
    {
      titleEn = "Green Eggs and Ham";
      titleBn = "গ্রিন এগস অ্যান্ড হ্যাম";
      authorEn = "Dr. Seuss";
      authorBn = "ড. সিউস";
      descriptionEn = "Sam-I-Am tries to convince a grumpy character to try green eggs and ham.";
      descriptionBn = "স্যাম-আই-অ্যাম একটি রাগী চরিত্রকে সবুজ ডিম এবং হ্যাম খেতে রাজি করানোর চেষ্টা করে।";
      isbn = "9780394800165";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 95;
      rating = 4.7;
      tags = ["dr seuss", "green eggs", "children", "rhyme", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780394800165-L.jpg";
    },
    {
      titleEn = "How the Grinch Stole Christmas";
      titleBn = "গ্রিঞ্চ কীভাবে বড়দিন চুরি করল";
      authorEn = "Dr. Seuss";
      authorBn = "ড. সিউস";
      descriptionEn = "The Grinch attempts to ruin Christmas for the Whos of Whoville but learns the true meaning of the holiday.";
      descriptionBn = "গ্রিঞ্চ হুভিলের হুদের জন্য বড়দিন নষ্ট করার চেষ্টা করে কিন্তু উৎসবের সত্যিকার অর্থ শিখে নেয়।";
      isbn = "9780394800790";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 90;
      rating = 4.8;
      tags = ["dr seuss", "grinch", "christmas", "children", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780394800790-L.jpg";
    },
    {
      titleEn = "Geronimo Stilton: Lost Treasure of the Emerald Eye";
      titleBn = "জেরোনিমো স্টিলটন: পান্নার চোখের হারানো ধন";
      authorEn = "Geronimo Stilton";
      authorBn = "জেরোনিমো স্টিলটন";
      descriptionEn = "Geronimo Stilton the mouse journalist goes on his first treasure hunt.";
      descriptionBn = "ইঁদুর সাংবাদিক জেরোনিমো স্টিলটন তার প্রথম ধন সন্ধানে যায়।";
      isbn = "9780439559690";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 80;
      rating = 4.5;
      tags = ["geronimo stilton", "mouse", "adventure", "children", "treasure"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780439559690-L.jpg";
    },
    {
      titleEn = "Geronimo Stilton: The Curse of the Cheese Pyramid";
      titleBn = "জেরোনিমো স্টিলটন: পনিরের পিরামিডের অভিশাপ";
      authorEn = "Geronimo Stilton";
      authorBn = "জেরোনিমো স্টিলটন";
      descriptionEn = "Geronimo and his friends venture to ancient Egypt for a thrilling adventure.";
      descriptionBn = "জেরোনিমো ও তার বন্ধুরা রোমাঞ্চকর অ্যাডভেঞ্চারের জন্য প্রাচীন মিশরে যায়।";
      isbn = "9780439559706";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 75;
      rating = 4.4;
      tags = ["geronimo stilton", "egypt", "adventure", "children", "pyramid"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780439559706-L.jpg";
    },
    {
      titleEn = "Amar Chitra Katha: Krishna";
      titleBn = "অমর চিত্র কথা: কৃষ্ণ";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "The divine stories of Lord Krishna's life from birth to his role in the Mahabharata.";
      descriptionBn = "ভগবান কৃষ্ণের জীবনের দৈব কাহিনী — জন্ম থেকে মহাভারতে তার ভূমিকা পর্যন্ত।";
      isbn = "9788184822564";
      genre = "#children";
      language = "#bilingual";
      price = 249;
      stock = 70;
      rating = 4.8;
      tags = ["amar chitra katha", "krishna", "mythology", "comics", "bilingual"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184822564-L.jpg";
    },
    {
      titleEn = "Amar Chitra Katha: Shivaji";
      titleBn = "অমর চিত্র কথা: শিবাজী";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "The heroic life of Chhatrapati Shivaji Maharaj, the founder of the Maratha Empire.";
      descriptionBn = "মারাঠা সাম্রাজ্যের প্রতিষ্ঠাতা ছত্রপতি শিবাজী মহারাজের বীরত্বপূর্ণ জীবন।";
      isbn = "9788184822571";
      genre = "#children";
      language = "#bilingual";
      price = 249;
      stock = 65;
      rating = 4.7;
      tags = ["amar chitra katha", "shivaji", "history", "comics", "maratha"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184822571-L.jpg";
    },
    {
      titleEn = "Amar Chitra Katha: Birbal the Wise";
      titleBn = "অমর চিত্র কথা: বুদ্ধিমান বীরবল";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "The witty tales of Birbal, the clever courtier of Emperor Akbar.";
      descriptionBn = "সম্রাট আকবরের চতুর দরবারি বীরবলের রসিক কাহিনী।";
      isbn = "9788184822588";
      genre = "#children";
      language = "#bilingual";
      price = 199;
      stock = 75;
      rating = 4.6;
      tags = ["amar chitra katha", "birbal", "akbar", "comics", "humor"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184822588-L.jpg";
    },
    {
      titleEn = "Tinkle: Suppandi's Best";
      titleBn = "টিংকল: সুপ্পান্দির সেরা";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "The funniest Suppandi stories collected in one delightful volume.";
      descriptionBn = "সবচেয়ে মজার সুপ্পান্দির গল্পগুলি একটি আনন্দময় খণ্ডে সংকলিত।";
      isbn = "9788184820294";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 80;
      rating = 4.5;
      tags = ["tinkle", "suppandi", "comics", "humor", "children"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184820294-L.jpg";
    },
    {
      titleEn = "The Secret Seven";
      titleBn = "দ্য সিক্রেট সেভেন";
      authorEn = "Enid Blyton";
      authorBn = "এনিড ব্লাইটন";
      descriptionEn = "Seven children form a secret society and solve local mysteries in their village.";
      descriptionBn = "সাতটি শিশু একটি গোপন সমিতি গঠন করে এবং তাদের গ্রামে স্থানীয় রহস্য সমাধান করে।";
      isbn = "9780340796399";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 70;
      rating = 4.5;
      tags = ["enid blyton", "secret seven", "mystery", "children", "club"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780340796399-L.jpg";
    },
    {
      titleEn = "The Faraway Tree";
      titleBn = "দ্য ফ্যারঅ্যাওয়ে ট্রি";
      authorEn = "Enid Blyton";
      authorBn = "এনিড ব্লাইটন";
      descriptionEn = "Three children discover a magical tree that leads to different worlds at its top.";
      descriptionBn = "তিনটি শিশু একটি যাদুকরী গাছ আবিষ্কার করে যা তার শীর্ষে বিভিন্ন জগতে নিয়ে যায়।";
      isbn = "9780603561344";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 75;
      rating = 4.7;
      tags = ["enid blyton", "faraway tree", "magic", "children", "fantasy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780603561344-L.jpg";
    },
    {
      titleEn = "The Adventures of Tintin: Destination Moon";
      titleBn = "টিনটিনের অ্যাডভেঞ্চার: চাঁদের পথে";
      authorEn = "Herge";
      authorBn = "হার্জে";
      descriptionEn = "Tintin and his friends prepare for mankind's first journey to the Moon.";
      descriptionBn = "টিনটিন ও তার বন্ধুরা মানবজাতির চাঁদে প্রথম যাত্রার প্রস্তুতি নেয়।";
      isbn = "9781405206228";
      genre = "#children";
      language = "#english";
      price = 349;
      stock = 60;
      rating = 4.8;
      tags = ["tintin", "herge", "moon", "space", "adventure"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781405206228-L.jpg";
    },
    {
      titleEn = "The Adventures of Tintin: Explorers on the Moon";
      titleBn = "টিনটিনের অ্যাডভেঞ্চার: চাঁদে অভিযাত্রীরা";
      authorEn = "Herge";
      authorBn = "হার্জে";
      descriptionEn = "The continuation of the Moon adventure as Tintin lands on the lunar surface.";
      descriptionBn = "টিনটিন চন্দ্রপৃষ্ঠে অবতরণ করায় চাঁদের অ্যাডভেঞ্চারের ধারাবাহিকতা।";
      isbn = "9781405206235";
      genre = "#children";
      language = "#english";
      price = 349;
      stock = 55;
      rating = 4.8;
      tags = ["tintin", "herge", "moon landing", "space", "adventure"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781405206235-L.jpg";
    },
    {
      titleEn = "Asterix and the Gladiator";
      titleBn = "অ্যাস্টেরিক্স এবং গ্ল্যাডিয়েটর";
      authorEn = "Rene Goscinny";
      authorBn = "রেনে গোসিনি";
      descriptionEn = "Asterix and Obelix travel to Rome to rescue the village bard Cacofonix.";
      descriptionBn = "অ্যাস্টেরিক্স ও ওবেলিক্স গ্রামের গায়ক কাকোফনিক্সকে উদ্ধার করতে রোমে যায়।";
      isbn = "9780752866062";
      genre = "#children";
      language = "#english";
      price = 299;
      stock = 65;
      rating = 4.5;
      tags = ["asterix", "comics", "rome", "gladiator", "humor"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780752866062-L.jpg";
    },
    {
      titleEn = "Asterix and Cleopatra";
      titleBn = "অ্যাস্টেরিক্স এবং ক্লিওপেট্রা";
      authorEn = "Rene Goscinny";
      authorBn = "রেনে গোসিনি";
      descriptionEn = "Asterix accompanies the architect Edifis to Egypt to help build a palace for Cleopatra.";
      descriptionBn = "অ্যাস্টেরিক্স ক্লিওপেট্রার জন্য একটি প্রাসাদ তৈরি করতে সাহায্য করতে স্থপতি ইডিফিসের সাথে মিশরে যায়।";
      isbn = "9780752866086";
      genre = "#children";
      language = "#english";
      price = 299;
      stock = 60;
      rating = 4.6;
      tags = ["asterix", "comics", "cleopatra", "egypt", "humor"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780752866086-L.jpg";
    },
    {
      titleEn = "Hardy Boys: The Missing Chums";
      titleBn = "হার্ডি বয়েজ: নিখোঁজ বন্ধুরা";
      authorEn = "Franklin W. Dixon";
      authorBn = "ফ্র্যাংকলিন ডব্লিউ ডিক্সন";
      descriptionEn = "Frank and Joe investigate when two of their friends mysteriously disappear.";
      descriptionBn = "ফ্র্যাংক ও জো তদন্ত করে যখন তাদের দুই বন্ধু রহস্যজনকভাবে অদৃশ্য হয়ে যায়।";
      isbn = "9780448089041";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 65;
      rating = 4.3;
      tags = ["hardy boys", "mystery", "detective", "young adult", "missing"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780448089041-L.jpg";
    },
    {
      titleEn = "Famous Five: Five Go to Smugglers Top";
      titleBn = "ফেমাস ফাইভ: স্মাগলারস টপে পাঁচজন";
      authorEn = "Enid Blyton";
      authorBn = "এনিড ব্লাইটন";
      descriptionEn = "The Five discover a smuggling operation in an old mansion on a hill.";
      descriptionBn = "পাঁচজন একটি পাহাড়ের পুরানো প্রাসাদে পাচারকারীর কার্যক্রম আবিষ্কার করে।";
      isbn = "9780340681305";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 75;
      rating = 4.4;
      tags = ["famous five", "enid blyton", "smuggling", "mystery", "children"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780340681305-L.jpg";
    },
    {
      titleEn = "Famous Five: Five Go to Mystery Moor";
      titleBn = "ফেমাস ফাইভ: মিস্ট্রি মুরে পাঁচজন";
      authorEn = "Enid Blyton";
      authorBn = "এনিড ব্লাইটন";
      descriptionEn = "The Five investigate strange happenings on a foggy moorland.";
      descriptionBn = "পাঁচজন কুয়াশাচ্ছন্ন মুরল্যান্ডে অদ্ভুত ঘটনার তদন্ত করে।";
      isbn = "9780340681312";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 70;
      rating = 4.4;
      tags = ["famous five", "enid blyton", "mystery", "children", "moor"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780340681312-L.jpg";
    },
    {
      titleEn = "Roald Dahl: Fantastic Mr Fox";
      titleBn = "রোয়ালড ডাল: ফ্যান্টাস্টিক মি. ফক্স";
      authorEn = "Roald Dahl";
      authorBn = "রোয়ালড ডাল";
      descriptionEn = "Clever Mr Fox outsmarts three nasty farmers to feed his family.";
      descriptionBn = "চালাক মি. ফক্স তার পরিবারকে খাওয়ানোর জন্য তিনজন দুষ্ট কৃষককে ঠকায়।";
      isbn = "9780140328707";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 85;
      rating = 4.7;
      tags = ["roald dahl", "fox", "children", "animals", "clever"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140328707-L.jpg";
    },
    {
      titleEn = "Roald Dahl: George's Marvellous Medicine";
      titleBn = "রোয়ালড ডাল: জর্জের অসাধারণ ওষুধ";
      authorEn = "Roald Dahl";
      authorBn = "রোয়ালড ডাল";
      descriptionEn = "Young George concocts a remarkable medicine to cure his horrible grandmother.";
      descriptionBn = "ছোট্ট জর্জ তার ভয়ঙ্কর দাদিকে সারাতে একটি অসাধারণ ওষুধ তৈরি করে।";
      isbn = "9780142410240";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 80;
      rating = 4.6;
      tags = ["roald dahl", "george", "medicine", "children", "humor"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780142410240-L.jpg";
    },
    {
      titleEn = "The Adventures of Tintin: King Ottokar's Sceptre";
      titleBn = "টিনটিনের অ্যাডভেঞ্চার: রাজা ওটোকারের রাজদণ্ড";
      authorEn = "Herge";
      authorBn = "হার্জে";
      descriptionEn = "Tintin foils a plot to steal the royal sceptre and overthrow the king.";
      descriptionBn = "টিনটিন রাজকীয় রাজদণ্ড চুরি এবং রাজাকে উৎখাত করার পরিকল্পনা বানচাল করে।";
      isbn = "9781405208109";
      genre = "#children";
      language = "#english";
      price = 349;
      stock = 50;
      rating = 4.7;
      tags = ["tintin", "herge", "sceptre", "adventure", "politics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781405208109-L.jpg";
    },
    {
      titleEn = "Oh, the Places You'll Go!";
      titleBn = "ওহ, তুমি যে জায়গায় যাবে!";
      authorEn = "Dr. Seuss";
      authorBn = "ড. সিউস";
      descriptionEn = "An inspiring Dr. Seuss book about life's journey, popular as a graduation gift.";
      descriptionBn = "জীবনের যাত্রা সম্পর্কে ড. সিউসের একটি অনুপ্রেরণামূলক বই, স্নাতকের উপহার হিসাবে জনপ্রিয়।";
      isbn = "9780679805274";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 80;
      rating = 4.8;
      tags = ["dr seuss", "inspiration", "children", "graduation", "journey"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679805274-L.jpg";
    },
    {
      titleEn = "Geronimo Stilton: I'm Too Fond of My Fur!";
      titleBn = "জেরোনিমো স্টিলটন: আমি আমার পশমের প্রতি অতি আগ্রহী!";
      authorEn = "Geronimo Stilton";
      authorBn = "জেরোনিমো স্টিলটন";
      descriptionEn = "Geronimo gets roped into adventure when he tries to avoid danger.";
      descriptionBn = "জেরোনিমো বিপদ এড়ানোর চেষ্টা করার সময় অ্যাডভেঞ্চারে জড়িয়ে পড়ে।";
      isbn = "9780439559713";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 70;
      rating = 4.4;
      tags = ["geronimo stilton", "mouse", "adventure", "children", "humor"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780439559713-L.jpg";
    },
    {
      titleEn = "Feluda: Badshahi Angti";
      titleBn = "ফেলুদা: বাদশাহী আংটি";
      authorEn = "Satyajit Ray";
      authorBn = "সত্যজিৎ রায়";
      descriptionEn = "Feluda's first case — solving the mystery of a stolen antique ring in Lucknow.";
      descriptionBn = "ফেলুদার প্রথম মামলা — লখনউতে একটি চুরি হওয়া প্রাচীন আংটির রহস্য সমাধান।";
      isbn = "9788172152031";
      genre = "#fiction";
      language = "#bengali";
      price = 179;
      stock = 90;
      rating = 4.8;
      tags = ["feluda", "detective", "satyajit ray", "bengali fiction", "lucknow"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172152031-L.jpg";
    },
    {
      titleEn = "Feluda: Tintorettor Jishu";
      titleBn = "ফেলুদা: টিনটোরেটোর যীশু";
      authorEn = "Satyajit Ray";
      authorBn = "সত্যজিৎ রায়";
      descriptionEn = "Feluda investigates the theft of a priceless Tintoretto painting in Calcutta.";
      descriptionBn = "ফেলুদা কলকাতায় একটি অমূল্য টিনটোরেটো চিত্রকর্ম চুরির তদন্ত করেন।";
      isbn = "9788172152048";
      genre = "#fiction";
      language = "#bengali";
      price = 199;
      stock = 80;
      rating = 4.7;
      tags = ["feluda", "detective", "satyajit ray", "art theft", "bengali"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172152048-L.jpg";
    },
    {
      titleEn = "Byomkesh Bakshi: Chiriakhana";
      titleBn = "ব্যোমকেশ বক্সী: চিড়িয়াখানা";
      authorEn = "Sharadindu Bandyopadhyay";
      authorBn = "শরদিন্দু বন্দ্যোপাধ্যায়";
      descriptionEn = "Byomkesh investigates a series of murders in an isolated colony called Chiriakhana.";
      descriptionBn = "ব্যোমকেশ চিড়িয়াখানা নামক একটি বিচ্ছিন্ন কলোনিতে একের পর এক হত্যার তদন্ত করেন।";
      isbn = "9788172930134";
      genre = "#fiction";
      language = "#bengali";
      price = 249;
      stock = 65;
      rating = 4.7;
      tags = ["byomkesh bakshi", "detective", "sharadindu", "bengali fiction", "murder"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172930134-L.jpg";
    },
    {
      titleEn = "Amar Chitra Katha: Chandragupta Maurya";
      titleBn = "অমর চিত্র কথা: চন্দ্রগুপ্ত মৌর্য";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "The rise of Chandragupta Maurya who united India and founded the Maurya Empire.";
      descriptionBn = "চন্দ্রগুপ্ত মৌর্যের উত্থান যিনি ভারতকে একত্রিত করেছিলেন এবং মৌর্য সাম্রাজ্য প্রতিষ্ঠা করেছিলেন।";
      isbn = "9788184822595";
      genre = "#children";
      language = "#bilingual";
      price = 249;
      stock = 60;
      rating = 4.6;
      tags = ["amar chitra katha", "chandragupta", "history", "comics", "maurya"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184822595-L.jpg";
    },
    {
      titleEn = "Amar Chitra Katha: Ashoka the Great";
      titleBn = "অমর চিত্র কথা: মহান অশোক";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "Emperor Ashoka's transformation from a warrior king to a champion of peace and Buddhism.";
      descriptionBn = "সম্রাট অশোকের যোদ্ধা রাজা থেকে শান্তি ও বৌদ্ধধর্মের প্রবক্তায় রূপান্তর।";
      isbn = "9788184822601";
      genre = "#children";
      language = "#bilingual";
      price = 249;
      stock = 55;
      rating = 4.7;
      tags = ["amar chitra katha", "ashoka", "history", "buddhism", "comics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184822601-L.jpg";
    },
    {
      titleEn = "The Enchanted Wood";
      titleBn = "যাদুর বন";
      authorEn = "Enid Blyton";
      authorBn = "এনিড ব্লাইটন";
      descriptionEn = "Three children discover a magical wood with the extraordinary Faraway Tree.";
      descriptionBn = "তিনটি শিশু অসাধারণ ফ্যারঅ্যাওয়ে ট্রিসহ একটি যাদুর বন আবিষ্কার করে।";
      isbn = "9780603561337";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 80;
      rating = 4.6;
      tags = ["enid blyton", "enchanted wood", "magic", "children", "faraway tree"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780603561337-L.jpg";
    },
    {
      titleEn = "The Adventures of Tintin: The Crab with the Golden Claws";
      titleBn = "টিনটিনের অ্যাডভেঞ্চার: সোনালি নখরের কাঁকড়া";
      authorEn = "Herge";
      authorBn = "হার্জে";
      descriptionEn = "Tintin first meets Captain Haddock and they uncover an opium smuggling ring.";
      descriptionBn = "টিনটিন প্রথমবার ক্যাপ্টেন হ্যাডকের সাথে দেখা করে এবং তারা আফিম পাচারের চক্র উন্মোচন করে।";
      isbn = "9781405206204";
      genre = "#children";
      language = "#english";
      price = 349;
      stock = 55;
      rating = 4.7;
      tags = ["tintin", "herge", "haddock", "adventure", "smuggling"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781405206204-L.jpg";
    },
    {
      titleEn = "Dr. Seuss: One Fish Two Fish Red Fish Blue Fish";
      titleBn = "ড. সিউস: এক মাছ দুই মাছ লাল মাছ নীল মাছ";
      authorEn = "Dr. Seuss";
      authorBn = "ড. সিউস";
      descriptionEn = "A classic early reader that playfully introduces children to counting and colors.";
      descriptionBn = "একটি ক্লাসিক প্রারম্ভিক পাঠক যা মজাদারভাবে শিশুদের গণনা ও রঙের সাথে পরিচয় করিয়ে দেয়।";
      isbn = "9780394800134";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 90;
      rating = 4.7;
      tags = ["dr seuss", "early reader", "counting", "colors", "children"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780394800134-L.jpg";
    },
    {
      titleEn = "Geronimo Stilton: Four Mice Deep in the Jungle";
      titleBn = "জেরোনিমো স্টিলটন: জঙ্গলের গভীরে চার ইঁদুর";
      authorEn = "Geronimo Stilton";
      authorBn = "জেরোনিমো স্টিলটন";
      descriptionEn = "Geronimo is dragged into a jungle adventure and must brave wild animals and ancient traps.";
      descriptionBn = "জেরোনিমোকে একটি জঙ্গল অ্যাডভেঞ্চারে টেনে নিয়ে যাওয়া হয় এবং বন্য প্রাণী ও প্রাচীন ফাঁদ সামলাতে হয়।";
      isbn = "9780439559720";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 65;
      rating = 4.4;
      tags = ["geronimo stilton", "jungle", "adventure", "children", "animals"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780439559720-L.jpg";
    },
    {
      titleEn = "Amar Chitra Katha: Vikramaditya";
      titleBn = "অমর চিত্র কথা: বিক্রমাদিত্য";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "The legendary tales of King Vikramaditya, known for his wisdom and justice.";
      descriptionBn = "তার জ্ঞান ও ন্যায়বিচারের জন্য পরিচিত রাজা বিক্রমাদিত্যের কিংবদন্তি কাহিনী।";
      isbn = "9788184822618";
      genre = "#children";
      language = "#bilingual";
      price = 199;
      stock = 70;
      rating = 4.5;
      tags = ["amar chitra katha", "vikramaditya", "legends", "history", "comics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184822618-L.jpg";
    },
    {
      titleEn = "Feluda: Darjeeling Jamaaye Khun";
      titleBn = "ফেলুদা: দার্জিলিং জমায় খুন";
      authorEn = "Satyajit Ray";
      authorBn = "সত্যজিৎ রায়";
      descriptionEn = "Feluda is on a relaxing trip to Darjeeling when a murder disrupts the peace.";
      descriptionBn = "ফেলুদা দার্জিলিংয়ে বিশ্রামের সফরে থাকাকালীন একটি হত্যাকাণ্ড শান্তি ভেঙে দেয়।";
      isbn = "9788172152055";
      genre = "#fiction";
      language = "#bengali";
      price = 199;
      stock = 75;
      rating = 4.7;
      tags = ["feluda", "detective", "satyajit ray", "darjeeling", "murder"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172152055-L.jpg";
    },
    {
      titleEn = "The Hardy Boys: The Secret of the Caves";
      titleBn = "হার্ডি বয়েজ: গুহার রহস্য";
      authorEn = "Franklin W. Dixon";
      authorBn = "ফ্র্যাংকলিন ডব্লিউ ডিক্সন";
      descriptionEn = "Frank and Joe investigate mysterious signals coming from caves near the shore.";
      descriptionBn = "ফ্র্যাংক ও জো তীরের কাছে গুহা থেকে আসা রহস্যময় সংকেত তদন্ত করে।";
      isbn = "9780448089058";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 60;
      rating = 4.3;
      tags = ["hardy boys", "caves", "mystery", "detective", "young adult"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780448089058-L.jpg";
    },
    {
      titleEn = "The Adventures of Tintin: The Shooting Star";
      titleBn = "টিনটিনের অ্যাডভেঞ্চার: শুটিং স্টার";
      authorEn = "Herge";
      authorBn = "হার্জে";
      descriptionEn = "Tintin races to find a meteorite that has fallen in the Arctic Ocean.";
      descriptionBn = "টিনটিন আর্কটিক সাগরে পড়া একটি উল্কা খুঁজে পেতে ছুটে যায়।";
      isbn = "9781405206211";
      genre = "#children";
      language = "#english";
      price = 349;
      stock = 50;
      rating = 4.6;
      tags = ["tintin", "herge", "meteorite", "adventure", "arctic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781405206211-L.jpg";
    },
    {
      titleEn = "Roald Dahl: The Twits";
      titleBn = "রোয়ালড ডাল: দ্য টুইটস";
      authorEn = "Roald Dahl";
      authorBn = "রোয়ালড ডাল";
      descriptionEn = "Mr and Mrs Twit are the most horrible couple, but the animals they keep plot their revenge.";
      descriptionBn = "মি. ও মিসেস টুইট সবচেয়ে ভয়ঙ্কর দম্পতি, কিন্তু তারা যে প্রাণী রাখে তারা প্রতিশোধের পরিকল্পনা করে।";
      isbn = "9780141322872";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 80;
      rating = 4.6;
      tags = ["roald dahl", "twits", "children", "humor", "revenge"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141322872-L.jpg";
    },
    {
      titleEn = "Dr. Seuss: Fox in Socks";
      titleBn = "ড. সিউস: মোজায় শেয়াল";
      authorEn = "Dr. Seuss";
      authorBn = "ড. সিউস";
      descriptionEn = "A tongue-twisting tale of Fox who delights in confusing Knox with tricky rhymes.";
      descriptionBn = "জিভ-মোচড়ানো এক শেয়ালের কাহিনী যে কঠিন ছড়া দিয়ে নক্সকে বিভ্রান্ত করে আনন্দ পায়।";
      isbn = "9780394800376";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 85;
      rating = 4.6;
      tags = ["dr seuss", "fox", "rhyme", "tongue twister", "children"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780394800376-L.jpg";
    },
    {
      titleEn = "Tinkle: Shikari Shambu Collection";
      titleBn = "টিংকল: শিকারি শম্ভু সংকলন";
      authorEn = "Anant Pai";
      authorBn = "অনন্ত পাই";
      descriptionEn = "The hilarious adventures of Shikari Shambu, the cowardly hunter who somehow always succeeds.";
      descriptionBn = "কাপুরুষ শিকারি শম্ভুর হাস্যরসপূর্ণ অ্যাডভেঞ্চার যে কোনোভাবে সবসময় সফল হয়।";
      isbn = "9788184820300";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 75;
      rating = 4.5;
      tags = ["tinkle", "shikari shambu", "comics", "humor", "hunter"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788184820300-L.jpg";
    },
    {
      titleEn = "Geronimo Stilton: Merry Christmas, Geronimo!";
      titleBn = "জেরোনিমো স্টিলটন: শুভ বড়দিন, জেরোনিমো!";
      authorEn = "Geronimo Stilton";
      authorBn = "জেরোনিমো স্টিলটন";
      descriptionEn = "Geronimo's chaotic Christmas turns into a heartwarming holiday adventure.";
      descriptionBn = "জেরোনিমোর বিশৃঙ্খল বড়দিন একটি হৃদয়গ্রাহী ছুটির অ্যাডভেঞ্চারে পরিণত হয়।";
      isbn = "9780439559737";
      genre = "#children";
      language = "#english";
      price = 249;
      stock = 60;
      rating = 4.3;
      tags = ["geronimo stilton", "christmas", "adventure", "children", "holiday"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780439559737-L.jpg";
    },
    {
      titleEn = "Asterix at the Olympic Games";
      titleBn = "অ্যাস্টেরিক্স অলিম্পিক গেমসে";
      authorEn = "Rene Goscinny";
      authorBn = "রেনে গোসিনি";
      descriptionEn = "The Gauls compete at Olympia using their strength and Asterix's magic potion.";
      descriptionBn = "গলরা অ্যাস্টেরিক্সের যাদুর ওষুধ ব্যবহার করে অলিম্পিয়ায় প্রতিযোগিতা করে।";
      isbn = "9780752866093";
      genre = "#children";
      language = "#english";
      price = 299;
      stock = 60;
      rating = 4.5;
      tags = ["asterix", "comics", "olympics", "gaul", "humor"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780752866093-L.jpg";
    },
    {
      titleEn = "Dr. Seuss: Hop on Pop";
      titleBn = "ড. সিউস: বাবার মাথায় লাফ";
      authorEn = "Dr. Seuss";
      authorBn = "ড. সিউস";
      descriptionEn = "A fun early reader with simple rhymes that help young children learn to read.";
      descriptionBn = "সহজ ছড়া সহ একটি মজাদার প্রারম্ভিক পাঠক যা ছোট শিশুদের পড়তে শিখতে সাহায্য করে।";
      isbn = "9780394800196";
      genre = "#children";
      language = "#english";
      price = 199;
      stock = 90;
      rating = 4.6;
      tags = ["dr seuss", "hop on pop", "early reader", "rhyme", "children"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780394800196-L.jpg";
    },
  ];
}
