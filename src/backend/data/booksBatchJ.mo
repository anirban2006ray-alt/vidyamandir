module {
  public let books : [{
    titleEn: Text; titleBn: Text; authorEn: Text; authorBn: Text;
    descriptionEn: Text; descriptionBn: Text;
    isbn: Text; genre: Text; language: Text;
    price: Nat; stock: Nat; rating: Float;
    tags: [Text]; coverImageUrl: Text
  }] = [
    {
      titleEn = "India After Gandhi";
      titleBn = "গান্ধীর পরে ভারত";
      authorEn = "Ramachandra Guha";
      authorBn = "রামচন্দ্র গুহ";
      descriptionEn = "A sweeping history of the world's largest democracy from independence to the present day.";
      descriptionBn = "স্বাধীনতা থেকে বর্তমান পর্যন্ত বিশ্বের বৃহত্তম গণতন্ত্রের এক বিস্তৃত ইতিহাস।";
      isbn = "9780330396110";
      genre = "history";
      language = "english";
      price = 599;
      stock = 80;
      rating = 4.8;
      tags = ["india", "history", "democracy", "politics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780330396110-L.jpg";
    },
    {
      titleEn = "The Discovery of India";
      titleBn = "ভারত আবিষ্কার";
      authorEn = "Jawaharlal Nehru";
      authorBn = "জওহরলাল নেহরু";
      descriptionEn = "Nehru's magisterial account of India's history, culture and civilization written during his imprisonment.";
      descriptionBn = "কারাবাসকালে নেহরু রচিত ভারতের ইতিহাস, সংস্কৃতি ও সভ্যতার এক মহাকাব্যিক বিবরণ।";
      isbn = "9780195623598";
      genre = "history";
      language = "english";
      price = 499;
      stock = 70;
      rating = 4.7;
      tags = ["india", "history", "civilization", "nehru"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780195623598-L.jpg";
    },
    {
      titleEn = "An Era of Darkness";
      titleBn = "অন্ধকারের যুগ";
      authorEn = "Shashi Tharoor";
      authorBn = "শশী থারুর";
      descriptionEn = "A searing indictment of British colonial rule and its devastating impact on India.";
      descriptionBn = "ব্রিটিশ ঔপনিবেশিক শাসন এবং ভারতে তার বিধ্বংসী প্রভাবের এক তীব্র নিন্দা।";
      isbn = "9781611854213";
      genre = "history";
      language = "english";
      price = 499;
      stock = 65;
      rating = 4.6;
      tags = ["colonialism", "british", "india", "history"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781611854213-L.jpg";
    },
    {
      titleEn = "Why Nations Fail";
      titleBn = "কেন জাতিরাষ্ট্র ব্যর্থ হয়";
      authorEn = "Daron Acemoglu";
      authorBn = "ড্যারন অ্যাসেমোগলু";
      descriptionEn = "An ambitious study of what makes nations succeed or fail economically and politically.";
      descriptionBn = "কী কারণে জাতিগুলো অর্থনৈতিক ও রাজনৈতিকভাবে সফল বা ব্যর্থ হয় তার এক উচ্চাভিলাষী গবেষণা।";
      isbn = "9780307719225";
      genre = "nonFiction";
      language = "english";
      price = 549;
      stock = 60;
      rating = 4.7;
      tags = ["economics", "politics", "institutions", "development"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780307719225-L.jpg";
    },
    {
      titleEn = "Arthashastra";
      titleBn = "অর্থশাস্ত্র";
      authorEn = "Kautilya";
      authorBn = "কৌটিল্য";
      descriptionEn = "The ancient Indian treatise on statecraft, economic policy and military strategy by Chanakya.";
      descriptionBn = "চাণক্য রচিত রাষ্ট্রনীতি, অর্থনৈতিক নীতি ও সামরিক কৌশলের প্রাচীন ভারতীয় গ্রন্থ।";
      isbn = "9788172764401";
      genre = "history";
      language = "english";
      price = 399;
      stock = 55;
      rating = 4.5;
      tags = ["kautilya", "chanakya", "statecraft", "ancient"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172764401-L.jpg";
    },
    {
      titleEn = "Sapiens: A Brief History of Humankind";
      titleBn = "সেপিয়েন্স: মানবজাতির সংক্ষিপ্ত ইতিহাস";
      authorEn = "Yuval Noah Harari";
      authorBn = "ইউভাল নোয়া হারারি";
      descriptionEn = "A bold exploration of human history from the Stone Age to the digital era.";
      descriptionBn = "পাথর যুগ থেকে ডিজিটাল যুগ পর্যন্ত মানব ইতিহাসের এক সাহসী অন্বেষণ।";
      isbn = "9780062316110";
      genre = "history";
      language = "english";
      price = 499;
      stock = 90;
      rating = 4.8;
      tags = ["history", "humanity", "evolution", "civilization"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062316110-L.jpg";
    },
    {
      titleEn = "Guns, Germs, and Steel";
      titleBn = "বন্দুক, জীবাণু ও ইস্পাত";
      authorEn = "Jared Diamond";
      authorBn = "জ্যারেড ডায়মন্ড";
      descriptionEn = "A Pulitzer Prize-winning exploration of why some civilizations came to dominate others.";
      descriptionBn = "কেন কিছু সভ্যতা অন্যদের আধিপত্য করতে সক্ষম হলো তার পুলিৎজার পুরস্কারজয়ী অন্বেষণ।";
      isbn = "9780393317558";
      genre = "history";
      language = "english";
      price = 549;
      stock = 75;
      rating = 4.7;
      tags = ["civilization", "history", "geography", "biology"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780393317558-L.jpg";
    },
    {
      titleEn = "The Wealth of Nations";
      titleBn = "জাতিসমূহের সম্পদ";
      authorEn = "Adam Smith";
      authorBn = "অ্যাডাম স্মিথ";
      descriptionEn = "The foundational text of modern economics exploring the nature and causes of national wealth.";
      descriptionBn = "জাতীয় সম্পদের প্রকৃতি ও কারণ অন্বেষণকারী আধুনিক অর্থনীতির ভিত্তিমূলক পাঠ্য।";
      isbn = "9780486424644";
      genre = "nonFiction";
      language = "english";
      price = 449;
      stock = 50;
      rating = 4.5;
      tags = ["economics", "capitalism", "markets", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780486424644-L.jpg";
    },
    {
      titleEn = "Capital in the Twenty-First Century";
      titleBn = "একবিংশ শতাব্দীতে পুঁজি";
      authorEn = "Thomas Piketty";
      authorBn = "টমাস পিকেটি";
      descriptionEn = "A landmark study on wealth and income inequality across developed economies over the past 250 years.";
      descriptionBn = "গত ২৫০ বছর ধরে উন্নত অর্থনীতিতে সম্পদ ও আয়ের বৈষম্য সম্পর্কে এক যুগান্তকারী গবেষণা।";
      isbn = "9780674430006";
      genre = "nonFiction";
      language = "english";
      price = 649;
      stock = 45;
      rating = 4.6;
      tags = ["economics", "inequality", "wealth", "capitalism"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780674430006-L.jpg";
    },
    {
      titleEn = "Freedom at Midnight";
      titleBn = "মধ্যরাতের স্বাধীনতা";
      authorEn = "Dominique Lapierre and Larry Collins";
      authorBn = "ডমিনিক ল্যাপিয়ের এবং ল্যারি কলিন্স";
      descriptionEn = "A vivid account of the independence of India and the tragedy of Partition in 1947.";
      descriptionBn = "১৯৪৭ সালে ভারতের স্বাধীনতা এবং দেশভাগের বিয়োগান্তক ঘটনার এক প্রাণবন্ত বিবরণ।";
      isbn = "9780671220204";
      genre = "history";
      language = "english";
      price = 499;
      stock = 70;
      rating = 4.7;
      tags = ["india", "independence", "partition", "1947"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780671220204-L.jpg";
    },
    {
      titleEn = "Midnight's Children";
      titleBn = "মধ্যরাতের সন্তানেরা";
      authorEn = "Salman Rushdie";
      authorBn = "সালমান রুশদি";
      descriptionEn = "A magical realist novel about a boy born at midnight on India's independence day and his fate tied to the nation.";
      descriptionBn = "ভারতের স্বাধীনতার মধ্যরাতে জন্মগ্রহণকারী এক বালকের জাদুবাস্তব উপন্যাস।";
      isbn = "9780812976533";
      genre = "history";
      language = "english";
      price = 499;
      stock = 65;
      rating = 4.6;
      tags = ["india", "fiction", "magical realism", "booker"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780812976533-L.jpg";
    },
    {
      titleEn = "The White Tiger";
      titleBn = "সাদা বাঘ";
      authorEn = "Aravind Adiga";
      authorBn = "অরবিন্দ আডিগা";
      descriptionEn = "A Booker Prize-winning dark comedy about class struggle and ambition in modern India.";
      descriptionBn = "আধুনিক ভারতে শ্রেণিসংগ্রাম ও উচ্চাকাঙ্ক্ষা নিয়ে একটি বুকার পুরস্কারজয়ী অন্ধকার কমেডি।";
      isbn = "9781416562603";
      genre = "history";
      language = "english";
      price = 449;
      stock = 60;
      rating = 4.5;
      tags = ["india", "class", "fiction", "booker"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781416562603-L.jpg";
    },
    {
      titleEn = "The Namesake";
      titleBn = "নেমসেক";
      authorEn = "Jhumpa Lahiri";
      authorBn = "ঝুম্পা লাহিড়ী";
      descriptionEn = "A beautifully written novel about the immigrant experience and the tension between cultures.";
      descriptionBn = "অভিবাসন অভিজ্ঞতা এবং সংস্কৃতিগত টানাপোড়েন নিয়ে একটি সুন্দরভাবে লেখা উপন্যাস।";
      isbn = "9780618485222";
      genre = "nonFiction";
      language = "english";
      price = 399;
      stock = 55;
      rating = 4.5;
      tags = ["bengali", "diaspora", "identity", "family"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780618485222-L.jpg";
    },
    {
      titleEn = "Train to Pakistan";
      titleBn = "পাকিস্তানে ট্রেন";
      authorEn = "Khushwant Singh";
      authorBn = "খুশবন্ত সিং";
      descriptionEn = "A powerful novel set during the Partition of India, depicting the horror and humanity of that period.";
      descriptionBn = "ভারত বিভাজনের প্রেক্ষাপটে রচিত একটি শক্তিশালী উপন্যাস যা সেই সময়ের ভয়াবহতা ও মানবতা চিত্রিত করে।";
      isbn = "9780143065883";
      genre = "history";
      language = "english";
      price = 349;
      stock = 70;
      rating = 4.6;
      tags = ["partition", "india", "pakistan", "fiction"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780143065883-L.jpg";
    },
    {
      titleEn = "Early India: From the Origins to AD 1300";
      titleBn = "প্রাচীন ভারত: উৎপত্তি থেকে ১৩০০ খ্রিষ্টাব্দ পর্যন্ত";
      authorEn = "Romila Thapar";
      authorBn = "রোমিলা থাপার";
      descriptionEn = "A comprehensive history of early India from prehistoric times to the medieval period.";
      descriptionBn = "প্রাগৈতিহাসিক কাল থেকে মধ্যযুগ পর্যন্ত প্রাচীন ভারতের একটি ব্যাপক ইতিহাস।";
      isbn = "9780143029892";
      genre = "history";
      language = "english";
      price = 549;
      stock = 50;
      rating = 4.7;
      tags = ["ancient india", "history", "archaeology", "civilization"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780143029892-L.jpg";
    },
    {
      titleEn = "Bengal Divided: Hindu Communalism and Partition";
      titleBn = "বিভক্ত বাংলা: হিন্দু সাম্প্রদায়িকতা এবং বিভাজন";
      authorEn = "Joya Chatterji";
      authorBn = "জয়া চ্যাটার্জি";
      descriptionEn = "A scholarly examination of how Hindu communalism shaped the partition of Bengal in 1947.";
      descriptionBn = "১৯৪৭ সালে বাংলা বিভাজনে হিন্দু সাম্প্রদায়িকতার ভূমিকা নিয়ে একটি পণ্ডিতসুলভ পরীক্ষা।";
      isbn = "9780521523820";
      genre = "history";
      language = "english";
      price = 549;
      stock = 40;
      rating = 4.5;
      tags = ["bengal", "partition", "communalism", "history"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780521523820-L.jpg";
    },
    {
      titleEn = "The Argumentative Indian";
      titleBn = "তার্কিক ভারতীয়";
      authorEn = "Amartya Sen";
      authorBn = "অমর্ত্য সেন";
      descriptionEn = "Essays on Indian history, culture and identity by Nobel laureate economist Amartya Sen.";
      descriptionBn = "নোবেল বিজয়ী অর্থনীতিবিদ অমর্ত্য সেনের ভারতীয় ইতিহাস, সংস্কৃতি ও পরিচয় বিষয়ক প্রবন্ধ।";
      isbn = "9780374530136";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 55;
      rating = 4.7;
      tags = ["india", "culture", "identity", "amartya sen"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780374530136-L.jpg";
    },
    {
      titleEn = "A Corner of a Foreign Field";
      titleBn = "বিদেশী মাঠের এক কোণে";
      authorEn = "Ramachandra Guha";
      authorBn = "রামচন্দ্র গুহ";
      descriptionEn = "The history of cricket in India told through the lens of colonialism, nationalism, and social change.";
      descriptionBn = "ঔপনিবেশিকতা, জাতীয়তাবাদ ও সামাজিক পরিবর্তনের দৃষ্টিকোণ থেকে ভারতে ক্রিকেটের ইতিহাস।";
      isbn = "9780330491341";
      genre = "history";
      language = "english";
      price = 449;
      stock = 45;
      rating = 4.5;
      tags = ["cricket", "india", "history", "sport"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780330491341-L.jpg";
    },
    {
      titleEn = "The Great Partition";
      titleBn = "মহান বিভাজন";
      authorEn = "Yasmin Khan";
      authorBn = "ইয়াসমিন খান";
      descriptionEn = "A revelatory account of the making of India and Pakistan and the human cost of Partition.";
      descriptionBn = "ভারত ও পাকিস্তান গঠন এবং বিভাজনের মানবিক মূল্যের এক উদ্ঘাটনমূলক বিবরণ।";
      isbn = "9780300143560";
      genre = "history";
      language = "english";
      price = 499;
      stock = 50;
      rating = 4.6;
      tags = ["partition", "india", "pakistan", "1947"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780300143560-L.jpg";
    },
    {
      titleEn = "Empire: How Britain Made the Modern World";
      titleBn = "সাম্রাজ্য: ব্রিটেন কিভাবে আধুনিক বিশ্ব গড়েছিল";
      authorEn = "Niall Ferguson";
      authorBn = "নিয়াল ফার্গুসন";
      descriptionEn = "A comprehensive history of the British Empire and its lasting influence on the modern world.";
      descriptionBn = "ব্রিটিশ সাম্রাজ্য এবং আধুনিক বিশ্বে তার স্থায়ী প্রভাবের একটি ব্যাপক ইতিহাস।";
      isbn = "9780465023295";
      genre = "history";
      language = "english";
      price = 549;
      stock = 45;
      rating = 4.4;
      tags = ["british empire", "colonialism", "history", "world"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780465023295-L.jpg";
    },
    {
      titleEn = "The Clash of Civilizations";
      titleBn = "সভ্যতার সংঘাত";
      authorEn = "Samuel P. Huntington";
      authorBn = "স্যামুয়েল পি. হান্টিংটন";
      descriptionEn = "Huntington's influential thesis on the reshaping of world order along cultural and religious lines.";
      descriptionBn = "সাংস্কৃতিক ও ধর্মীয় রেখা বরাবর বিশ্ব-শৃঙ্খলার পুনর্গঠন সম্পর্কে হান্টিংটনের প্রভাবশালী থিসিস।";
      isbn = "9780684844411";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 50;
      rating = 4.3;
      tags = ["geopolitics", "civilization", "politics", "culture"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780684844411-L.jpg";
    },
    {
      titleEn = "The End of History and the Last Man";
      titleBn = "ইতিহাসের সমাপ্তি ও শেষ মানুষ";
      authorEn = "Francis Fukuyama";
      authorBn = "ফ্রান্সিস ফুকুয়ামা";
      descriptionEn = "Fukuyama's famous argument that liberal democracy represents the end point of human political evolution.";
      descriptionBn = "ফুকুয়ামার বিখ্যাত যুক্তি যে উদার গণতন্ত্র মানব রাজনৈতিক বিবর্তনের শেষ বিন্দু প্রতিনিধিত্ব করে।";
      isbn = "9780743284554";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 45;
      rating = 4.4;
      tags = ["democracy", "politics", "philosophy", "history"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743284554-L.jpg";
    },
    {
      titleEn = "The Rise and Fall of the Great Powers";
      titleBn = "মহাশক্তিসমূহের উত্থান ও পতন";
      authorEn = "Paul Kennedy";
      authorBn = "পল কেনেডি";
      descriptionEn = "An analysis of the rise and fall of great powers from 1500 to 2000 through economic and military lens.";
      descriptionBn = "১৫০০ থেকে ২০০০ পর্যন্ত অর্থনৈতিক ও সামরিক দৃষ্টিকোণ থেকে মহাশক্তিগুলির উত্থান ও পতনের বিশ্লেষণ।";
      isbn = "9780679720195";
      genre = "history";
      language = "english";
      price = 549;
      stock = 40;
      rating = 4.5;
      tags = ["geopolitics", "power", "history", "military"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679720195-L.jpg";
    },
    {
      titleEn = "Poverty and Famines";
      titleBn = "দারিদ্র্য এবং দুর্ভিক্ষ";
      authorEn = "Amartya Sen";
      authorBn = "অমর্ত্য সেন";
      descriptionEn = "A groundbreaking analysis of the causes and prevention of famines, including the Bengal Famine.";
      descriptionBn = "বাংলার দুর্ভিক্ষ সহ দুর্ভিক্ষের কারণ ও প্রতিরোধের একটি যুগান্তকারী বিশ্লেষণ।";
      isbn = "9780198284635";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 45;
      rating = 4.7;
      tags = ["economics", "poverty", "famine", "amartya sen"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780198284635-L.jpg";
    },
    {
      titleEn = "The Communist Manifesto";
      titleBn = "কমিউনিস্ট ইশতেহার";
      authorEn = "Karl Marx and Friedrich Engels";
      authorBn = "কার্ল মার্ক্স এবং ফ্রিডরিখ এঙ্গেলস";
      descriptionEn = "The foundational text of communist political theory and one of the most influential pamphlets in history.";
      descriptionBn = "কমিউনিস্ট রাজনৈতিক তত্ত্বের ভিত্তিমূলক পাঠ্য এবং ইতিহাসের সবচেয়ে প্রভাবশালী পুস্তিকাগুলির একটি।";
      isbn = "9780140447576";
      genre = "nonFiction";
      language = "english";
      price = 299;
      stock = 80;
      rating = 4.5;
      tags = ["communism", "marx", "politics", "economics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140447576-L.jpg";
    },
    {
      titleEn = "1984";
      titleBn = "উনিশশো চুরাশি";
      authorEn = "George Orwell";
      authorBn = "জর্জ অরওয়েল";
      descriptionEn = "Orwell's chilling dystopian novel about totalitarianism, surveillance, and the destruction of truth.";
      descriptionBn = "সর্বগ্রাসীতা, নজরদারি এবং সত্যের ধ্বংস সম্পর্কে অরওয়েলের শীতল ডিস্টোপিয়ান উপন্যাস।";
      isbn = "9780451524935";
      genre = "nonFiction";
      language = "english";
      price = 349;
      stock = 100;
      rating = 4.8;
      tags = ["dystopia", "politics", "totalitarianism", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg";
    },
    {
      titleEn = "Animal Farm";
      titleBn = "অ্যানিমাল ফার্ম";
      authorEn = "George Orwell";
      authorBn = "জর্জ অরওয়েল";
      descriptionEn = "A political allegory about the dangers of totalitarianism told through a story of farm animals.";
      descriptionBn = "খামারের প্রাণীদের গল্পের মাধ্যমে বলা সর্বগ্রাসীতার বিপদ সম্পর্কে একটি রাজনৈতিক রূপক।";
      isbn = "9780451526342";
      genre = "nonFiction";
      language = "english";
      price = 299;
      stock = 90;
      rating = 4.7;
      tags = ["politics", "allegory", "totalitarianism", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780451526342-L.jpg";
    },
    {
      titleEn = "Brave New World";
      titleBn = "সাহসী নতুন পৃথিবী";
      authorEn = "Aldous Huxley";
      authorBn = "অ্যালডাস হাক্সলি";
      descriptionEn = "A dystopian vision of a future society built on conformity, consumerism, and the suppression of individuality.";
      descriptionBn = "সামঞ্জস্য, ভোগবাদ ও ব্যক্তিত্ব দমনের উপর নির্মিত একটি ভবিষ্যৎ সমাজের ডিস্টোপিয়ান দৃষ্টিভঙ্গি।";
      isbn = "9780060850524";
      genre = "nonFiction";
      language = "english";
      price = 349;
      stock = 75;
      rating = 4.6;
      tags = ["dystopia", "politics", "classic", "science fiction"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg";
    },
    {
      titleEn = "The Second World War";
      titleBn = "দ্বিতীয় বিশ্বযুদ্ধ";
      authorEn = "Winston Churchill";
      authorBn = "উইনস্টন চার্চিল";
      descriptionEn = "Churchill's monumental six-volume history of World War II from the perspective of the British war leader.";
      descriptionBn = "ব্রিটিশ যুদ্ধনেতার দৃষ্টিকোণ থেকে দ্বিতীয় বিশ্বযুদ্ধের চার্চিলের ছয় খণ্ডে রচিত স্মারক ইতিহাস।";
      isbn = "9780141441726";
      genre = "history";
      language = "english";
      price = 599;
      stock = 40;
      rating = 4.7;
      tags = ["world war", "churchill", "history", "military"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141441726-L.jpg";
    },
    {
      titleEn = "The Diary of a Young Girl";
      titleBn = "এক কিশোরীর ডায়েরি";
      authorEn = "Anne Frank";
      authorBn = "অ্যান ফ্রাঙ্ক";
      descriptionEn = "The famous diary of a Jewish girl hiding from the Nazis in Amsterdam during World War II.";
      descriptionBn = "দ্বিতীয় বিশ্বযুদ্ধের সময় আমস্টার্ডামে নাৎসিদের থেকে আত্মগোপনকারী একটি ইহুদি মেয়ের বিখ্যাত ডায়েরি।";
      isbn = "9780553577129";
      genre = "history";
      language = "english";
      price = 349;
      stock = 80;
      rating = 4.8;
      tags = ["holocaust", "world war", "diary", "biography"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553577129-L.jpg";
    },
    {
      titleEn = "The Prince";
      titleBn = "রাজপুত্র";
      authorEn = "Niccolo Machiavelli";
      authorBn = "নিকোলো ম্যাকিয়াভেলি";
      descriptionEn = "The classic treatise on political power and statecraft written in 16th-century Renaissance Italy.";
      descriptionBn = "ষোড়শ শতাব্দীর রেনেসাঁ ইতালিতে রাজনৈতিক ক্ষমতা ও রাষ্ট্রকলা বিষয়ক ক্লাসিক গ্রন্থ।";
      isbn = "9780140449150";
      genre = "nonFiction";
      language = "english";
      price = 299;
      stock = 70;
      rating = 4.5;
      tags = ["politics", "power", "machiavelli", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140449150-L.jpg";
    },
    {
      titleEn = "The Republic";
      titleBn = "প্রজাতন্ত্র";
      authorEn = "Plato";
      authorBn = "প্লেটো";
      descriptionEn = "Plato's foundational philosophical dialogue on justice, the ideal state, and the philosopher-king.";
      descriptionBn = "ন্যায়বিচার, আদর্শ রাষ্ট্র এবং দার্শনিক-রাজা বিষয়ে প্লেটোর ভিত্তিমূলক দার্শনিক সংলাপ।";
      isbn = "9780140455113";
      genre = "nonFiction";
      language = "english";
      price = 349;
      stock = 60;
      rating = 4.6;
      tags = ["philosophy", "politics", "plato", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140455113-L.jpg";
    },
    {
      titleEn = "A People's History of the United States";
      titleBn = "মার্কিন যুক্তরাষ্ট্রের জনগণের ইতিহাস";
      authorEn = "Howard Zinn";
      authorBn = "হাওয়ার্ড জিন";
      descriptionEn = "A radical retelling of American history from the perspective of ordinary people rather than the ruling class.";
      descriptionBn = "শাসক শ্রেণির পরিবর্তে সাধারণ মানুষের দৃষ্টিকোণ থেকে আমেরিকান ইতিহাসের একটি আমূল পুনর্কথন।";
      isbn = "9780060838652";
      genre = "history";
      language = "english";
      price = 549;
      stock = 55;
      rating = 4.7;
      tags = ["american history", "social history", "politics", "people"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780060838652-L.jpg";
    },
    {
      titleEn = "Long Walk to Freedom";
      titleBn = "স্বাধীনতার দীর্ঘ পথ";
      authorEn = "Nelson Mandela";
      authorBn = "নেলসন ম্যান্ডেলা";
      descriptionEn = "Nelson Mandela's autobiography chronicling his struggle against apartheid and his journey to becoming South Africa's first Black president.";
      descriptionBn = "বর্ণবাদ-বিরোধী সংগ্রাম এবং দক্ষিণ আফ্রিকার প্রথম কৃষ্ণাঙ্গ রাষ্ট্রপতি হওয়ার পথের বিবরণ সহ নেলসন ম্যান্ডেলার আত্মজীবনী।";
      isbn = "9780316548182";
      genre = "history";
      language = "english";
      price = 499;
      stock = 60;
      rating = 4.8;
      tags = ["mandela", "apartheid", "biography", "south africa"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780316548182-L.jpg";
    },
    {
      titleEn = "The Story of My Experiments with Truth";
      titleBn = "আমার সত্যের সাথে পরীক্ষার গল্প";
      authorEn = "Mahatma Gandhi";
      authorBn = "মহাত্মা গান্ধী";
      descriptionEn = "Gandhi's own autobiography describing his spiritual and political evolution from lawyer to independence leader.";
      descriptionBn = "আইনজীবী থেকে স্বাধীনতা আন্দোলনের নেতায় পরিণত হওয়ার তাঁর আধ্যাত্মিক ও রাজনৈতিক বিবর্তন বর্ণনাকারী গান্ধীর আত্মজীবনী।";
      isbn = "9780486245935";
      genre = "history";
      language = "english";
      price = 399;
      stock = 70;
      rating = 4.7;
      tags = ["gandhi", "autobiography", "india", "independence"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780486245935-L.jpg";
    },
    {
      titleEn = "The Origin of Species";
      titleBn = "প্রজাতির উৎপত্তি";
      authorEn = "Charles Darwin";
      authorBn = "চার্লস ডারউইন";
      descriptionEn = "Darwin's revolutionary work presenting the theory of evolution by natural selection.";
      descriptionBn = "প্রাকৃতিক নির্বাচন দ্বারা বিবর্তনের তত্ত্ব উপস্থাপন করে ডারউইনের বিপ্লবী কাজ।";
      isbn = "9780140432053";
      genre = "nonFiction";
      language = "english";
      price = 399;
      stock = 65;
      rating = 4.7;
      tags = ["evolution", "science", "darwin", "biology"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140432053-L.jpg";
    },
    {
      titleEn = "The Federalist Papers";
      titleBn = "ফেডারেলিস্ট পেপারস";
      authorEn = "Alexander Hamilton, James Madison and John Jay";
      authorBn = "আলেকজান্ডার হ্যামিলটন, জেমস ম্যাডিসন এবং জন জে";
      descriptionEn = "The classic collection of essays advocating the ratification of the United States Constitution.";
      descriptionBn = "মার্কিন যুক্তরাষ্ট্রের সংবিধান অনুমোদনের পক্ষে যুক্তি প্রদর্শনকারী প্রবন্ধের ক্লাসিক সংকলন।";
      isbn = "9780140444957";
      genre = "nonFiction";
      language = "english";
      price = 449;
      stock = 40;
      rating = 4.6;
      tags = ["america", "constitution", "democracy", "politics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140444957-L.jpg";
    },
    {
      titleEn = "The Second Sex";
      titleBn = "দ্বিতীয় লিঙ্গ";
      authorEn = "Simone de Beauvoir";
      authorBn = "সিমোন দ্য বোভোয়ার";
      descriptionEn = "A foundational text of feminist philosophy examining the oppression of women throughout history.";
      descriptionBn = "ইতিহাস জুড়ে নারীদের নিপীড়ন পরীক্ষা করে নারীবাদী দর্শনের একটি ভিত্তিমূলক পাঠ্য।";
      isbn = "9780679724513";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 50;
      rating = 4.6;
      tags = ["feminism", "philosophy", "sociology", "women"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679724513-L.jpg";
    },
    {
      titleEn = "The Shock Doctrine";
      titleBn = "শক মতবাদ";
      authorEn = "Naomi Klein";
      authorBn = "নাওমি ক্লেইন";
      descriptionEn = "Klein's investigation into how disaster capitalism exploits crises to impose neoliberal economic policies.";
      descriptionBn = "কিভাবে বিপর্যয় পুঁজিবাদ নিওলিবেরাল অর্থনৈতিক নীতি আরোপ করতে সংকটকে কাজে লাগায় তার উপর ক্লেইনের তদন্ত।";
      isbn = "9780312427993";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 45;
      rating = 4.5;
      tags = ["economics", "capitalism", "politics", "globalization"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780312427993-L.jpg";
    },
    {
      titleEn = "The Tipping Point";
      titleBn = "টিপিং পয়েন্ট";
      authorEn = "Malcolm Gladwell";
      authorBn = "ম্যালকম গ্ল্যাডওয়েল";
      descriptionEn = "Gladwell's exploration of how small changes and ideas can tip into social epidemics.";
      descriptionBn = "কিভাবে ছোট পরিবর্তন ও ধারণাগুলো সামাজিক মহামারীতে পরিণত হতে পারে তার গ্ল্যাডওয়েলের অন্বেষণ।";
      isbn = "9780316346627";
      genre = "nonFiction";
      language = "english";
      price = 399;
      stock = 65;
      rating = 4.4;
      tags = ["sociology", "behavior", "change", "social science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780316346627-L.jpg";
    },
    {
      titleEn = "Freakonomics";
      titleBn = "ফ্রিকোনমিক্স";
      authorEn = "Steven D. Levitt and Stephen J. Dubner";
      authorBn = "স্টিভেন ডি. লেভিট এবং স্টিফেন জে. ডুবনার";
      descriptionEn = "A maverick economist explores the hidden side of everything using data and unconventional thinking.";
      descriptionBn = "একজন বৈচিত্র্যময় অর্থনীতিবিদ তথ্য ও অচিরাচরিত চিন্তাভাবনা ব্যবহার করে সব কিছুর লুকানো দিক অন্বেষণ করেন।";
      isbn = "9780060731335";
      genre = "nonFiction";
      language = "english";
      price = 399;
      stock = 70;
      rating = 4.4;
      tags = ["economics", "data", "social science", "statistics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780060731335-L.jpg";
    },
    {
      titleEn = "The Power of the Powerless";
      titleBn = "ক্ষমতাহীনের শক্তি";
      authorEn = "Vaclav Havel";
      authorBn = "ভাক্লাভ হাভেল";
      descriptionEn = "Havel's influential essay on living in truth under totalitarian regimes in Communist Czechoslovakia.";
      descriptionBn = "কমিউনিস্ট চেকোস্লোভাকিয়ায় সর্বগ্রাসী শাসনের অধীনে সত্যে বেঁচে থাকার বিষয়ে হাভেলের প্রভাবশালী প্রবন্ধ।";
      isbn = "9780765602817";
      genre = "nonFiction";
      language = "english";
      price = 399;
      stock = 35;
      rating = 4.6;
      tags = ["communism", "dissent", "politics", "freedom"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780765602817-L.jpg";
    },
    {
      titleEn = "Thinking, Fast and Slow";
      titleBn = "দ্রুত ও ধীর চিন্তা";
      authorEn = "Daniel Kahneman";
      authorBn = "ড্যানিয়েল কাহনেমান";
      descriptionEn = "Nobel laureate Kahneman explores two systems of thinking and their influence on judgments and decisions.";
      descriptionBn = "নোবেল বিজয়ী কাহনেমান দুটি চিন্তার পদ্ধতি এবং বিচার ও সিদ্ধান্তের উপর তাদের প্রভাব অন্বেষণ করেন।";
      isbn = "9780374533557";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 75;
      rating = 4.7;
      tags = ["psychology", "economics", "decision making", "behavioral science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg";
    },
    {
      titleEn = "The Road to Serfdom";
      titleBn = "দাসত্বের পথ";
      authorEn = "Friedrich A. Hayek";
      authorBn = "ফ্রিডরিখ এ. হায়েক";
      descriptionEn = "Hayek's warning about the dangers of central planning and government control over the economy.";
      descriptionBn = "কেন্দ্রীয় পরিকল্পনা এবং অর্থনীতিতে সরকারি নিয়ন্ত্রণের বিপদ সম্পর্কে হায়েকের সতর্কবার্তা।";
      isbn = "9780226320618";
      genre = "nonFiction";
      language = "english";
      price = 449;
      stock = 45;
      rating = 4.5;
      tags = ["economics", "liberalism", "politics", "philosophy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780226320618-L.jpg";
    },
    {
      titleEn = "The Third Wave";
      titleBn = "তৃতীয় তরঙ্গ";
      authorEn = "Samuel P. Huntington";
      authorBn = "স্যামুয়েল পি. হান্টিংটন";
      descriptionEn = "Huntington's study of the democratization wave that swept much of the world in the late 20th century.";
      descriptionBn = "বিংশ শতাব্দীর শেষ দিকে বিশ্বের অনেক জায়গায় ছড়িয়ে পড়া গণতন্ত্রীকরণের ঢেউয়ের উপর হান্টিংটনের গবেষণা।";
      isbn = "9780806125169";
      genre = "nonFiction";
      language = "english";
      price = 449;
      stock = 35;
      rating = 4.4;
      tags = ["democracy", "politics", "governance", "history"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780806125169-L.jpg";
    },
    {
      titleEn = "Homo Deus: A Brief History of Tomorrow";
      titleBn = "হোমো দেউস: আগামীর সংক্ষিপ্ত ইতিহাস";
      authorEn = "Yuval Noah Harari";
      authorBn = "ইউভাল নোয়া হারারি";
      descriptionEn = "Harari's exploration of humanity's possible futures in an age of artificial intelligence and biotechnology.";
      descriptionBn = "কৃত্রিম বুদ্ধিমত্তা ও জৈব প্রযুক্তির যুগে মানবতার সম্ভাব্য ভবিষ্যৎ নিয়ে হারারির অন্বেষণ।";
      isbn = "9780062464316";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 70;
      rating = 4.6;
      tags = ["future", "technology", "history", "humanity"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062464316-L.jpg";
    },
    {
      titleEn = "The Autobiography of Benjamin Franklin";
      titleBn = "বেঞ্জামিন ফ্রাংকলিনের আত্মজীবনী";
      authorEn = "Benjamin Franklin";
      authorBn = "বেঞ্জামিন ফ্রাংকলিন";
      descriptionEn = "The autobiography of one of America's founding fathers, scientist, inventor, and statesman.";
      descriptionBn = "আমেরিকার প্রতিষ্ঠাতাদের একজন, বিজ্ঞানী, উদ্ভাবক ও রাষ্ট্রনায়কের আত্মজীবনী।";
      isbn = "9780486290737";
      genre = "history";
      language = "english";
      price = 349;
      stock = 55;
      rating = 4.5;
      tags = ["biography", "america", "history", "founding fathers"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780486290737-L.jpg";
    },
    {
      titleEn = "The Histories";
      titleBn = "ইতিহাস";
      authorEn = "Herodotus";
      authorBn = "হেরোডোটাস";
      descriptionEn = "The first great work of history in Western literature, covering the Greco-Persian Wars and ancient civilizations.";
      descriptionBn = "পশ্চিমা সাহিত্যে ইতিহাসের প্রথম মহান কাজ, গ্রিকো-পারস্য যুদ্ধ এবং প্রাচীন সভ্যতা নিয়ে।";
      isbn = "9780140449082";
      genre = "history";
      language = "english";
      price = 449;
      stock = 40;
      rating = 4.5;
      tags = ["ancient history", "greece", "persia", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140449082-L.jpg";
    },
    {
      titleEn = "Annihilation of Caste";
      titleBn = "জাতিভেদ প্রথার বিলোপ";
      authorEn = "B.R. Ambedkar";
      authorBn = "বি.আর. আম্বেদকর";
      descriptionEn = "Ambedkar's powerful critique of the caste system and his call for its complete abolition in India.";
      descriptionBn = "জাতিভেদ প্রথার বিরুদ্ধে আম্বেদকরের শক্তিশালী সমালোচনা এবং ভারতে এর সম্পূর্ণ বিলোপের আহ্বান।";
      isbn = "9781784783693";
      genre = "nonFiction";
      language = "english";
      price = 399;
      stock = 65;
      rating = 4.8;
      tags = ["ambedkar", "caste", "india", "social justice"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781784783693-L.jpg";
    },
    {
      titleEn = "The Idea of Justice";
      titleBn = "ন্যায়বিচারের ধারণা";
      authorEn = "Amartya Sen";
      authorBn = "অমর্ত্য সেন";
      descriptionEn = "Sen's path-breaking work redefining justice beyond contractarian frameworks to embrace global and comparative approaches.";
      descriptionBn = "চুক্তিভিত্তিক কাঠামোর বাইরে বৈশ্বিক ও তুলনামূলক পদ্ধতি গ্রহণ করে ন্যায়বিচারকে পুনর্সংজ্ঞায়িত করা সেনের যুগান্তকারী কাজ।";
      isbn = "9780674060470";
      genre = "nonFiction";
      language = "english";
      price = 549;
      stock = 40;
      rating = 4.6;
      tags = ["justice", "philosophy", "economics", "amartya sen"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780674060470-L.jpg";
    },
    {
      titleEn = "Mao: The Unknown Story";
      titleBn = "মাও: অজানা গল্প";
      authorEn = "Jung Chang and Jon Halliday";
      authorBn = "জুং চ্যাং এবং জন হ্যালিডে";
      descriptionEn = "A comprehensive and controversial biography of Mao Zedong based on extensive interviews and archival research.";
      descriptionBn = "ব্যাপক সাক্ষাৎকার ও আর্কাইভ গবেষণার উপর ভিত্তি করে মাও জে-দঙের একটি ব্যাপক ও বিতর্কিত জীবনী।";
      isbn = "9780679746324";
      genre = "history";
      language = "english";
      price = 599;
      stock = 40;
      rating = 4.4;
      tags = ["mao", "china", "communism", "biography"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679746324-L.jpg";
    },
    {
      titleEn = "The Gulag Archipelago";
      titleBn = "গুলাগ আর্কিপেলাগো";
      authorEn = "Aleksandr Solzhenitsyn";
      authorBn = "আলেকসান্দর সলঝেনিৎসিন";
      descriptionEn = "Solzhenitsyn's devastating account of the Soviet Union's forced labor camp system.";
      descriptionBn = "সোভিয়েত ইউনিয়নের জোরপূর্বক শ্রম শিবির ব্যবস্থার সলঝেনিৎসিনের ধ্বংসাত্মক বিবরণ।";
      isbn = "9781843430858";
      genre = "history";
      language = "english";
      price = 599;
      stock = 35;
      rating = 4.8;
      tags = ["soviet union", "communism", "history", "gulag"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781843430858-L.jpg";
    },
    {
      titleEn = "The History of the Peloponnesian War";
      titleBn = "পেলোপোনেশিয়ান যুদ্ধের ইতিহাস";
      authorEn = "Thucydides";
      authorBn = "থুকিডিডিস";
      descriptionEn = "The classic account of the war between Athens and Sparta in the fifth century BC.";
      descriptionBn = "খ্রিস্টপূর্ব পঞ্চম শতাব্দীতে এথেন্স ও স্পার্টার মধ্যে যুদ্ধের ক্লাসিক বিবরণ।";
      isbn = "9780140440393";
      genre = "history";
      language = "english";
      price = 449;
      stock = 35;
      rating = 4.5;
      tags = ["ancient history", "greece", "war", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140440393-L.jpg";
    },
    {
      titleEn = "The Power Elite";
      titleBn = "ক্ষমতার অভিজাত";
      authorEn = "C. Wright Mills";
      authorBn = "সি. রাইট মিলস";
      descriptionEn = "Mills' influential sociological study of the interlocking military, corporate, and political elite in America.";
      descriptionBn = "আমেরিকায় আন্তঃসংযুক্ত সামরিক, কর্পোরেট ও রাজনৈতিক অভিজাতদের উপর মিলসের প্রভাবশালী সমাজতাত্ত্বিক গবেষণা।";
      isbn = "9780195133547";
      genre = "nonFiction";
      language = "english";
      price = 449;
      stock = 35;
      rating = 4.4;
      tags = ["sociology", "politics", "power", "america"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780195133547-L.jpg";
    },
    {
      titleEn = "The Wretched of the Earth";
      titleBn = "পৃথিবীর বঞ্চিত";
      authorEn = "Frantz Fanon";
      authorBn = "ফ্রান্টজ ফ্যানন";
      descriptionEn = "Fanon's influential analysis of colonialism and decolonization, particularly in Africa.";
      descriptionBn = "বিশেষত আফ্রিকায় ঔপনিবেশিকতা ও উপনিবেশ মুক্তির উপর ফ্যাননের প্রভাবশালী বিশ্লেষণ।";
      isbn = "9780802141323";
      genre = "nonFiction";
      language = "english";
      price = 449;
      stock = 40;
      rating = 4.6;
      tags = ["colonialism", "decolonization", "africa", "politics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780802141323-L.jpg";
    },
    {
      titleEn = "Orientalism";
      titleBn = "প্রাচ্যতত্ত্ব";
      authorEn = "Edward Said";
      authorBn = "এডওয়ার্ড সাইদ";
      descriptionEn = "Said's landmark critique of how the West constructed and represented the Orient.";
      descriptionBn = "পশ্চিম কিভাবে প্রাচ্যকে গঠন ও উপস্থাপন করেছে তার উপর সাইদের যুগান্তকারী সমালোচনা।";
      isbn = "9780394740676";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 45;
      rating = 4.6;
      tags = ["colonialism", "culture", "postcolonialism", "politics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780394740676-L.jpg";
    },
    {
      titleEn = "The Art of War";
      titleBn = "যুদ্ধের শিল্প";
      authorEn = "Sun Tzu";
      authorBn = "সান জু";
      descriptionEn = "The ancient Chinese military treatise that has influenced both Eastern and Western strategy and philosophy.";
      descriptionBn = "প্রাচীন চীনা সামরিক গ্রন্থ যা পূর্বী ও পাশ্চাত্য উভয় কৌশল ও দর্শনকে প্রভাবিত করেছে।";
      isbn = "9781590302255";
      genre = "nonFiction";
      language = "english";
      price = 299;
      stock = 80;
      rating = 4.6;
      tags = ["strategy", "military", "philosophy", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781590302255-L.jpg";
    },
    {
      titleEn = "The Penguin History of the World";
      titleBn = "পেঙ্গুইন বিশ্বের ইতিহাস";
      authorEn = "J.M. Roberts and Odd Arne Westad";
      authorBn = "জে.এম. রবার্টস এবং ওড আর্ন ওয়েস্টাড";
      descriptionEn = "A sweeping single-volume history of the world from prehistoric times to the present day.";
      descriptionBn = "প্রাগৈতিহাসিক কাল থেকে বর্তমান পর্যন্ত এক খণ্ডে বিশ্বের একটি বিস্তৃত ইতিহাস।";
      isbn = "9780141034355";
      genre = "history";
      language = "english";
      price = 649;
      stock = 45;
      rating = 4.7;
      tags = ["world history", "comprehensive", "history", "reference"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141034355-L.jpg";
    },
    {
      titleEn = "On Liberty";
      titleBn = "স্বাধীনতা প্রসঙ্গে";
      authorEn = "John Stuart Mill";
      authorBn = "জন স্টুয়ার্ট মিল";
      descriptionEn = "Mill's classic defense of individual freedom and the limits of government authority.";
      descriptionBn = "ব্যক্তি স্বাধীনতা এবং সরকারি কর্তৃত্বের সীমার মিলের ক্লাসিক প্রতিরক্ষা।";
      isbn = "9780140432077";
      genre = "nonFiction";
      language = "english";
      price = 349;
      stock = 55;
      rating = 4.6;
      tags = ["liberty", "philosophy", "politics", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140432077-L.jpg";
    },
    {
      titleEn = "The Social Contract";
      titleBn = "সামাজিক চুক্তি";
      authorEn = "Jean-Jacques Rousseau";
      authorBn = "জাঁ-জ্যাক রুসো";
      descriptionEn = "Rousseau's influential treatise on the foundations of political authority and legitimate government.";
      descriptionBn = "রাজনৈতিক কর্তৃত্বের ভিত্তি ও বৈধ সরকারের উপর রুসোর প্রভাবশালী গ্রন্থ।";
      isbn = "9780140442014";
      genre = "nonFiction";
      language = "english";
      price = 349;
      stock = 50;
      rating = 4.5;
      tags = ["political philosophy", "democracy", "society", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140442014-L.jpg";
    },
    {
      titleEn = "The Bottom Billion";
      titleBn = "তলানির একশো কোটি";
      authorEn = "Paul Collier";
      authorBn = "পল কলিয়ার";
      descriptionEn = "Collier's analysis of why the poorest billion people in the world are falling further behind.";
      descriptionBn = "কেন বিশ্বের সবচেয়ে দরিদ্র একশো কোটি মানুষ আরও পিছিয়ে পড়ছে তার কলিয়ারের বিশ্লেষণ।";
      isbn = "9780195374636";
      genre = "nonFiction";
      language = "english";
      price = 449;
      stock = 40;
      rating = 4.5;
      tags = ["economics", "development", "poverty", "africa"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780195374636-L.jpg";
    },
    {
      titleEn = "বাংলাদেশের মুক্তিযুদ্ধ";
      titleBn = "বাংলাদেশের মুক্তিযুদ্ধ";
      authorEn = "Muntasir Mamoon";
      authorBn = "মুনতাসীর মামুন";
      descriptionEn = "A comprehensive Bengali-language history of the Bangladesh Liberation War of 1971.";
      descriptionBn = "১৯৭১ সালের বাংলাদেশের মুক্তিযুদ্ধের একটি ব্যাপক বাংলা ভাষার ইতিহাস।";
      isbn = "9789844580701";
      genre = "history";
      language = "bengali";
      price = 499;
      stock = 60;
      rating = 4.8;
      tags = ["bangladesh", "liberation war", "1971", "history"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789844580701-L.jpg";
    },
    {
      titleEn = "Amar Dekha Rajnitir Ponchas Bachar";
      titleBn = "আমার দেখা রাজনীতির পঞ্চাশ বছর";
      authorEn = "Abul Mansur Ahmad";
      authorBn = "আবুল মনসুর আহমদ";
      descriptionEn = "Fifty years of Bengali politics as witnessed by a prominent journalist and political figure.";
      descriptionBn = "একজন বিশিষ্ট সাংবাদিক ও রাজনৈতিক ব্যক্তিত্বের দৃষ্টিতে বাংলার রাজনীতির পঞ্চাশ বছর।";
      isbn = "9789840407484";
      genre = "history";
      language = "bengali";
      price = 450;
      stock = 45;
      rating = 4.7;
      tags = ["bengal", "politics", "history", "memoir"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789840407484-L.jpg";
    },
    {
      titleEn = "Ekattorer Dinguli";
      titleBn = "একাত্তরের দিনগুলি";
      authorEn = "Jahanara Imam";
      authorBn = "জাহানারা ইমাম";
      descriptionEn = "A poignant diary of the 1971 Bangladesh Liberation War, written by a mother who lost her son.";
      descriptionBn = "১৯৭১ সালের বাংলাদেশের মুক্তিযুদ্ধের একটি হৃদয়বিদারক ডায়েরি, একজন মায়ের লেখা যিনি তাঁর পুত্রকে হারিয়েছিলেন।";
      isbn = "9789840406166";
      genre = "history";
      language = "bengali";
      price = 350;
      stock = 75;
      rating = 4.9;
      tags = ["bangladesh", "liberation war", "1971", "diary"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789840406166-L.jpg";
    },
    {
      titleEn = "Asmapta Atmajeebani";
      titleBn = "অসমাপ্ত আত্মজীবনী";
      authorEn = "Sheikh Mujibur Rahman";
      authorBn = "শেখ মুজিবুর রহমান";
      descriptionEn = "The unfinished autobiography of Sheikh Mujibur Rahman, the founding father of Bangladesh.";
      descriptionBn = "বাংলাদেশের জাতির পিতা শেখ মুজিবুর রহমানের অসম্পূর্ণ আত্মজীবনী।";
      isbn = "9789840407576";
      genre = "history";
      language = "bengali";
      price = 400;
      stock = 80;
      rating = 4.9;
      tags = ["mujib", "bangladesh", "biography", "politics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789840407576-L.jpg";
    },
    {
      titleEn = "Bangla Sahityer Itihas";
      titleBn = "বাংলা সাহিত্যের ইতিহাস";
      authorEn = "Dinesh Chandra Sen";
      authorBn = "দীনেশচন্দ্র সেন";
      descriptionEn = "A landmark history of Bengali literature tracing its development from ancient to modern times.";
      descriptionBn = "প্রাচীন থেকে আধুনিক কাল পর্যন্ত বাংলা সাহিত্যের বিকাশ অনুসরণকারী একটি যুগান্তকারী ইতিহাস।";
      isbn = "9788172955045";
      genre = "history";
      language = "bengali";
      price = 499;
      stock = 40;
      rating = 4.6;
      tags = ["bengali literature", "history", "culture", "bengal"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172955045-L.jpg";
    },
    {
      titleEn = "Bangladesher Itihas";
      titleBn = "বাংলাদেশের ইতিহাস";
      authorEn = "Sirajul Islam";
      authorBn = "সিরাজুল ইসলাম";
      descriptionEn = "A comprehensive history of Bangladesh from ancient times through the liberation war and independence.";
      descriptionBn = "প্রাচীনকাল থেকে মুক্তিযুদ্ধ ও স্বাধীনতা পর্যন্ত বাংলাদেশের একটি ব্যাপক ইতিহাস।";
      isbn = "9789840407026";
      genre = "history";
      language = "bengali";
      price = 550;
      stock = 50;
      rating = 4.7;
      tags = ["bangladesh", "history", "independence", "political"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789840407026-L.jpg";
    },
    {
      titleEn = "Banglar Itihas";
      titleBn = "বাংলার ইতিহাস";
      authorEn = "Ramesh Chandra Majumdar";
      authorBn = "রমেশচন্দ্র মজুমদার";
      descriptionEn = "A scholarly history of Bengal from the earliest times to the modern period by a distinguished historian.";
      descriptionBn = "একজন বিশিষ্ট ঐতিহাসিকের দ্বারা প্রাচীনকাল থেকে আধুনিক যুগ পর্যন্ত বাংলার একটি পণ্ডিতসুলভ ইতিহাস।";
      isbn = "9788172553173";
      genre = "history";
      language = "bengali";
      price = 499;
      stock = 45;
      rating = 4.7;
      tags = ["bengal", "history", "ancient", "culture"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172553173-L.jpg";
    },
    {
      titleEn = "Palonshahi Amaler Bangla";
      titleBn = "পলাশী থেকে ভাগলপুর";
      authorEn = "Shyamali Ghosh";
      authorBn = "শ্যামলী ঘোষ";
      descriptionEn = "A social and political history of Bengal from the Battle of Plassey to modern times.";
      descriptionBn = "পলাশীর যুদ্ধ থেকে আধুনিক সময় পর্যন্ত বাংলার সামাজিক ও রাজনৈতিক ইতিহাস।";
      isbn = "9788129511713";
      genre = "history";
      language = "bengali";
      price = 450;
      stock = 40;
      rating = 4.5;
      tags = ["bengal", "plassey", "history", "colonial"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788129511713-L.jpg";
    },
    {
      titleEn = "Rabindranather Rajniti Chinta";
      titleBn = "রবীন্দ্রনাথের রাজনীতি চিন্তা";
      authorEn = "Hiranmay Bandyopadhyay";
      authorBn = "হিরণময় বন্দ্যোপাধ্যায়";
      descriptionEn = "An exploration of Tagore's political thought and his vision for India's social and political future.";
      descriptionBn = "রবীন্দ্রনাথের রাজনৈতিক চিন্তা এবং ভারতের সামাজিক ও রাজনৈতিক ভবিষ্যতের জন্য তাঁর দৃষ্টিভঙ্গির অন্বেষণ।";
      isbn = "9788179551042";
      genre = "nonFiction";
      language = "bengali";
      price = 399;
      stock = 35;
      rating = 4.6;
      tags = ["tagore", "politics", "bengali", "india"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788179551042-L.jpg";
    },
    {
      titleEn = "21 Shey February";
      titleBn = "একুশে ফেব্রুয়ারি";
      authorEn = "Badruddin Umar";
      authorBn = "বদরুদ্দীন উমর";
      descriptionEn = "The history of the Bengali Language Movement of 1952, which led to the establishment of International Mother Language Day.";
      descriptionBn = "১৯৫২ সালের বাংলা ভাষা আন্দোলনের ইতিহাস, যা আন্তর্জাতিক মাতৃভাষা দিবস প্রতিষ্ঠার দিকে পরিচালিত করেছিল।";
      isbn = "9789840407118";
      genre = "history";
      language = "bengali";
      price = 350;
      stock = 70;
      rating = 4.8;
      tags = ["language movement", "bangladesh", "bengali", "1952"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789840407118-L.jpg";
    },
    {
      titleEn = "The Bengal Renaissance";
      titleBn = "বাংলার নবজাগরণ";
      authorEn = "Susobhan Sarkar";
      authorBn = "সুশোভন সরকার";
      descriptionEn = "A study of the 19th-century renaissance in Bengal and its impact on Indian social and cultural life.";
      descriptionBn = "উনবিংশ শতাব্দীতে বাংলার নবজাগরণ এবং ভারতীয় সামাজিক ও সাংস্কৃতিক জীবনে এর প্রভাবের একটি গবেষণা।";
      isbn = "9788121500036";
      genre = "history";
      language = "english";
      price = 449;
      stock = 40;
      rating = 4.5;
      tags = ["bengal", "renaissance", "history", "culture"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788121500036-L.jpg";
    },
    {
      titleEn = "Biplabi Bangla";
      titleBn = "বিপ্লবী বাংলা";
      authorEn = "Arun Chandra Guha";
      authorBn = "অরুণচন্দ্র গুহ";
      descriptionEn = "The story of Bengali revolutionaries who fought against British colonialism in the early 20th century.";
      descriptionBn = "বিংশ শতাব্দীর প্রথম দিকে ব্রিটিশ ঔপনিবেশিকতার বিরুদ্ধে লড়াই করা বাঙালি বিপ্লবীদের গল্প।";
      isbn = "9788129507983";
      genre = "history";
      language = "bengali";
      price = 399;
      stock = 45;
      rating = 4.6;
      tags = ["bengal", "revolution", "independence", "history"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788129507983-L.jpg";
    },
    {
      titleEn = "Muktijuddhyer Itihas";
      titleBn = "মুক্তিযুদ্ধের ইতিহাস";
      authorEn = "Hasan Hafizur Rahman";
      authorBn = "হাসান হাফিজুর রহমান";
      descriptionEn = "A detailed Bengali account of the 1971 Liberation War of Bangladesh, based on primary sources.";
      descriptionBn = "প্রাথমিক উৎসের উপর ভিত্তি করে বাংলাদেশের ১৯৭১ সালের মুক্তিযুদ্ধের একটি বিস্তারিত বাংলা বিবরণ।";
      isbn = "9789840406111";
      genre = "history";
      language = "bengali";
      price = 499;
      stock = 55;
      rating = 4.8;
      tags = ["bangladesh", "1971", "liberation war", "history"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789840406111-L.jpg";
    },
    {
      titleEn = "Anandamath";
      titleBn = "আনন্দমঠ";
      authorEn = "Bankim Chandra Chattopadhyay";
      authorBn = "বঙ্কিমচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "A historic Bengali novel of nationalist resistance against colonial rule, source of the song 'Vande Mataram'.";
      descriptionBn = "ঔপনিবেশিক শাসনের বিরুদ্ধে জাতীয়তাবাদী প্রতিরোধের ঐতিহাসিক বাংলা উপন্যাস, 'বন্দে মাতরম' গানের উৎস।";
      isbn = "9788179551882";
      genre = "history";
      language = "bengali";
      price = 299;
      stock = 80;
      rating = 4.7;
      tags = ["bengali", "nationalism", "bankim", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788179551882-L.jpg";
    },
    {
      titleEn = "Development as Freedom";
      titleBn = "স্বাধীনতা হিসেবে উন্নয়ন";
      authorEn = "Amartya Sen";
      authorBn = "অমর্ত্য সেন";
      descriptionEn = "Sen argues that development should be measured not by GDP but by the expansion of human freedoms and capabilities.";
      descriptionBn = "সেন যুক্তি দেন যে উন্নয়ন জিডিপি দ্বারা নয় বরং মানবিক স্বাধীনতা ও সক্ষমতার বিস্তার দ্বারা পরিমাপ করা উচিত।";
      isbn = "9780385720270";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 55;
      rating = 4.7;
      tags = ["development", "economics", "freedom", "amartya sen"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780385720270-L.jpg";
    },
    {
      titleEn = "The World is Flat";
      titleBn = "পৃথিবী সমতল";
      authorEn = "Thomas L. Friedman";
      authorBn = "টমাস এল. ফ্রিডম্যান";
      descriptionEn = "Friedman's analysis of how globalization is creating a level playing field in the global economy.";
      descriptionBn = "বৈশ্বিক অর্থনীতিতে বিশ্বায়ন কিভাবে একটি সমান সুযোগের মাঠ তৈরি করছে তার ফ্রিডম্যানের বিশ্লেষণ।";
      isbn = "9780374292881";
      genre = "nonFiction";
      language = "english";
      price = 449;
      stock = 50;
      rating = 4.3;
      tags = ["globalization", "economics", "technology", "business"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780374292881-L.jpg";
    },
    {
      titleEn = "The Age of Revolution";
      titleBn = "বিপ্লবের যুগ";
      authorEn = "Eric Hobsbawm";
      authorBn = "এরিক হবসবম";
      descriptionEn = "Hobsbawm's magisterial study of Europe's dual revolution — industrial and democratic — from 1789 to 1848.";
      descriptionBn = "১৭৮৯ থেকে ১৮৪৮ পর্যন্ত ইউরোপের দ্বৈত বিপ্লব — শিল্প ও গণতান্ত্রিক — এর উপর হবসবমের দক্ষ গবেষণা।";
      isbn = "9780679772538";
      genre = "history";
      language = "english";
      price = 499;
      stock = 45;
      rating = 4.7;
      tags = ["revolution", "europe", "history", "industrial"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679772538-L.jpg";
    },
    {
      titleEn = "The Age of Capital";
      titleBn = "পুঁজির যুগ";
      authorEn = "Eric Hobsbawm";
      authorBn = "এরিক হবসবম";
      descriptionEn = "Hobsbawm's brilliant account of the triumph of capitalism and the bourgeoisie from 1848 to 1875.";
      descriptionBn = "১৮৪৮ থেকে ১৮৭৫ পর্যন্ত পুঁজিবাদ ও বুর্জোয়াদের বিজয়ের হবসবমের উজ্জ্বল বিবরণ।";
      isbn = "9780679756804";
      genre = "history";
      language = "english";
      price = 499;
      stock = 40;
      rating = 4.6;
      tags = ["capitalism", "europe", "history", "19th century"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679756804-L.jpg";
    },
    {
      titleEn = "The Age of Empire";
      titleBn = "সাম্রাজ্যের যুগ";
      authorEn = "Eric Hobsbawm";
      authorBn = "এরিক হবসবম";
      descriptionEn = "The third volume of Hobsbawm's 'Ages' series, covering 1875 to 1914 and the height of European imperialism.";
      descriptionBn = "হবসবমের 'যুগ' সিরিজের তৃতীয় খণ্ড, ১৮৭৫ থেকে ১৯১৪ এবং ইউরোপীয় সাম্রাজ্যবাদের শীর্ষকাল অন্তর্ভুক্ত করে।";
      isbn = "9780679721758";
      genre = "history";
      language = "english";
      price = 499;
      stock = 40;
      rating = 4.6;
      tags = ["imperialism", "europe", "history", "19th century"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679721758-L.jpg";
    },
    {
      titleEn = "The Age of Extremes";
      titleBn = "চরম যুগ";
      authorEn = "Eric Hobsbawm";
      authorBn = "এরিক হবসবম";
      descriptionEn = "Hobsbawm's definitive account of the short 20th century from 1914 to 1991.";
      descriptionBn = "১৯১৪ থেকে ১৯৯১ পর্যন্ত সংক্ষিপ্ত বিংশ শতাব্দীর হবসবমের নির্ধারক বিবরণ।";
      isbn = "9780679730057";
      genre = "history";
      language = "english";
      price = 499;
      stock = 45;
      rating = 4.8;
      tags = ["20th century", "history", "world wars", "cold war"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679730057-L.jpg";
    },
    {
      titleEn = "Swadhinata Sangram";
      titleBn = "স্বাধীনতা সংগ্রাম";
      authorEn = "Abdus Salam";
      authorBn = "আবদুস সালাম";
      descriptionEn = "A Bengal-focused account of the independence struggle of the Indian subcontinent.";
      descriptionBn = "ভারতীয় উপমহাদেশের স্বাধীনতা সংগ্রামের বাংলাকেন্দ্রিক বিবরণ।";
      isbn = "9789840413133";
      genre = "history";
      language = "bengali";
      price = 399;
      stock = 50;
      rating = 4.6;
      tags = ["independence", "bengal", "india", "history"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789840413133-L.jpg";
    },
    {
      titleEn = "The Peasant and the Raj";
      titleBn = "কৃষক ও রাজ";
      authorEn = "Eric Stokes";
      authorBn = "এরিক স্টোকস";
      descriptionEn = "Studies in agrarian society and peasant rebellion in colonial India.";
      descriptionBn = "ঔপনিবেশিক ভারতে কৃষি সমাজ ও কৃষক বিদ্রোহের গবেষণা।";
      isbn = "9780521299701";
      genre = "history";
      language = "english";
      price = 499;
      stock = 35;
      rating = 4.5;
      tags = ["india", "colonialism", "peasant", "history"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780521299701-L.jpg";
    },
    {
      titleEn = "The Inheritance of Loss";
      titleBn = "ক্ষতির উত্তরাধিকার";
      authorEn = "Kiran Desai";
      authorBn = "কিরণ দেশাই";
      descriptionEn = "Booker Prize-winning novel weaving together stories of love, loss, migration, and colonialism in India.";
      descriptionBn = "ভারতে প্রেম, ক্ষতি, অভিবাসন ও ঔপনিবেশিকতার গল্প একত্রে বুনে বুকার পুরস্কারজয়ী উপন্যাস।";
      isbn = "9780802141927";
      genre = "nonFiction";
      language = "english";
      price = 399;
      stock = 55;
      rating = 4.4;
      tags = ["india", "fiction", "booker", "migration"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780802141927-L.jpg";
    },
    {
      titleEn = "The God of Small Things";
      titleBn = "ছোট জিনিসের দেবতা";
      authorEn = "Arundhati Roy";
      authorBn = "অরুন্ধতী রায়";
      descriptionEn = "Booker Prize-winning novel exploring caste, forbidden love, and political upheaval in Kerala, India.";
      descriptionBn = "ভারতের কেরালায় জাতিভেদ, নিষিদ্ধ প্রেম ও রাজনৈতিক উথালপাতাল অন্বেষণকারী বুকার পুরস্কারজয়ী উপন্যাস।";
      isbn = "9780812979657";
      genre = "nonFiction";
      language = "english";
      price = 399;
      stock = 70;
      rating = 4.6;
      tags = ["india", "caste", "fiction", "booker"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780812979657-L.jpg";
    },
    {
      titleEn = "The Reluctant Fundamentalist";
      titleBn = "অনিচ্ছুক মৌলবাদী";
      authorEn = "Mohsin Hamid";
      authorBn = "মহসিন হামিদ";
      descriptionEn = "A Pakistani man recounts his American dream and disillusionment after the September 11 attacks.";
      descriptionBn = "একজন পাকিস্তানি ব্যক্তি ১১ সেপ্টেম্বরের হামলার পরে তার আমেরিকান স্বপ্ন ও হতাশার বিবরণ দেন।";
      isbn = "9780156034807";
      genre = "nonFiction";
      language = "english";
      price = 399;
      stock = 50;
      rating = 4.3;
      tags = ["pakistan", "fiction", "identity", "politics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780156034807-L.jpg";
    },
    {
      titleEn = "Prisoner Without a Name, Cell Without a Number";
      titleBn = "নামহীন বন্দী, সংখ্যাহীন কক্ষ";
      authorEn = "Jacobo Timerman";
      authorBn = "জাকোবো তিমারমান";
      descriptionEn = "A journalist's account of his imprisonment and torture during Argentina's military dictatorship.";
      descriptionBn = "আর্জেন্টিনার সামরিক একনায়কত্বের সময় কারাবাস ও নির্যাতনের একজন সাংবাদিকের বিবরণ।";
      isbn = "9780299082048";
      genre = "history";
      language = "english";
      price = 449;
      stock = 30;
      rating = 4.6;
      tags = ["argentina", "dictatorship", "human rights", "memoir"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780299082048-L.jpg";
    },
    {
      titleEn = "Collapse: How Societies Choose to Fail or Succeed";
      titleBn = "পতন: সমাজগুলি কিভাবে ব্যর্থ বা সফল হওয়া বেছে নেয়";
      authorEn = "Jared Diamond";
      authorBn = "জ্যারেড ডায়মন্ড";
      descriptionEn = "Diamond examines why some societies collapsed throughout history while others survived and thrived.";
      descriptionBn = "কেন কিছু সমাজ ইতিহাস জুড়ে ধ্বংস হয়েছিল আর কিছু বেঁচে থাকে ও উন্নতি হয় তা ডায়মন্ড পরীক্ষা করেন।";
      isbn = "9780143036555";
      genre = "history";
      language = "english";
      price = 549;
      stock = 50;
      rating = 4.5;
      tags = ["civilization", "environment", "history", "society"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780143036555-L.jpg";
    },
    {
      titleEn = "The Selfish Gene";
      titleBn = "স্বার্থপর জিন";
      authorEn = "Richard Dawkins";
      authorBn = "রিচার্ড ডকিন্স";
      descriptionEn = "Dawkins' revolutionary theory of evolution from the perspective of the gene rather than the organism.";
      descriptionBn = "জীব নয় বরং জিনের দৃষ্টিকোণ থেকে বিবর্তনের ডকিন্সের বিপ্লবী তত্ত্ব।";
      isbn = "9780192860927";
      genre = "nonFiction";
      language = "english";
      price = 499;
      stock = 60;
      rating = 4.6;
      tags = ["evolution", "genetics", "biology", "science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780192860927-L.jpg";
    },
    {
      titleEn = "A Brief History of Time";
      titleBn = "সময়ের সংক্ষিপ্ত ইতিহাস";
      authorEn = "Stephen Hawking";
      authorBn = "স্টিফেন হকিং";
      descriptionEn = "Hawking's landmark popular science book explaining the origin, structure and ultimate fate of the universe.";
      descriptionBn = "মহাবিশ্বের উৎপত্তি, গঠন ও চূড়ান্ত পরিণতি ব্যাখ্যা করা হকিংয়ের যুগান্তকারী জনপ্রিয় বিজ্ঞান গ্রন্থ।";
      isbn = "9780553380163";
      genre = "nonFiction";
      language = "english";
      price = 449;
      stock = 80;
      rating = 4.7;
      tags = ["physics", "cosmology", "science", "universe"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg";
    },
    {
      titleEn = "The Muqaddimah";
      titleBn = "মুকাদ্দিমা";
      authorEn = "Ibn Khaldun";
      authorBn = "ইবনে খালদুন";
      descriptionEn = "Ibn Khaldun's 14th-century masterwork on philosophy of history and the rise and fall of civilizations.";
      descriptionBn = "ইতিহাসের দর্শন এবং সভ্যতার উত্থান ও পতনের উপর ইবনে খালদুনের চতুর্দশ শতাব্দীর মাস্টারওয়ার্ক।";
      isbn = "9780691017549";
      genre = "history";
      language = "english";
      price = 549;
      stock = 35;
      rating = 4.7;
      tags = ["history", "philosophy", "islamic", "civilization"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780691017549-L.jpg";
    }
  ];
}
