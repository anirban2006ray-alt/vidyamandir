module {
  public let books : [{
    titleEn: Text; titleBn: Text; authorEn: Text; authorBn: Text;
    descriptionEn: Text; descriptionBn: Text;
    isbn: Text; genre: Text; language: Text;
    price: Nat; stock: Nat; rating: Float;
    tags: [Text]; coverImageUrl: Text
  }] = [
    {
      titleEn = "Wings of Fire: An Autobiography";
      titleBn = "উইংস অফ ফায়ার: একটি আত্মজীবনী";
      authorEn = "A.P.J. Abdul Kalam";
      authorBn = "এ.পি.জে. আব্দুল কালাম";
      descriptionEn = "The inspiring autobiography of India's missile man and former President, APJ Abdul Kalam, recounting his journey from a humble background to the pinnacle of scientific achievement.";
      descriptionBn = "ভারতের ক্ষেপণাস্ত্র মানব ও প্রাক্তন রাষ্ট্রপতি এপিজে আব্দুল কালামের অনুপ্রেরণামূলক আত্মজীবনী।";
      isbn = "9788173711466";
      genre = "#biography";
      language = "#english";
      price = 299;
      stock = 150;
      rating = 4.8;
      tags = ["biography", "autobiography", "science", "inspiration", "india"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg";
    },
    {
      titleEn = "Long Walk to Freedom";
      titleBn = "স্বাধীনতার দীর্ঘ পথ";
      authorEn = "Nelson Mandela";
      authorBn = "নেলসন ম্যান্ডেলা";
      descriptionEn = "The autobiography of Nelson Mandela, one of the greatest leaders of the 20th century, tracing his childhood, his years in prison, and his path to becoming President of South Africa.";
      descriptionBn = "নেলসন ম্যান্ডেলার আত্মজীবনী — শৈশব থেকে কারাবাস এবং দক্ষিণ আফ্রিকার রাষ্ট্রপতি হওয়া পর্যন্ত তাঁর যাত্রার বিবরণ।";
      isbn = "9780316548182";
      genre = "#biography";
      language = "#english";
      price = 499;
      stock = 80;
      rating = 4.9;
      tags = ["biography", "autobiography", "politics", "freedom", "south africa"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780316548182-L.jpg";
    },
    {
      titleEn = "The Story of My Experiments with Truth";
      titleBn = "সত্যের সাথে আমার পরীক্ষা-নিরীক্ষার গল্প";
      authorEn = "Mahatma Gandhi";
      authorBn = "মহাত্মা গান্ধী";
      descriptionEn = "Gandhi's autobiography, covering his life from childhood through his political struggles for Indian independence, focusing on his spiritual and philosophical development.";
      descriptionBn = "গান্ধীজির আত্মজীবনী — শৈশব থেকে ভারতের স্বাধীনতা সংগ্রাম পর্যন্ত তাঁর আধ্যাত্মিক ও দার্শনিক বিকাশের বিবরণ।";
      isbn = "9780807059098";
      genre = "#biography";
      language = "#english";
      price = 349;
      stock = 100;
      rating = 4.7;
      tags = ["biography", "autobiography", "gandhi", "india", "independence"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780807059098-L.jpg";
    },
    {
      titleEn = "Steve Jobs";
      titleBn = "স্টিভ জবস";
      authorEn = "Walter Isaacson";
      authorBn = "ওয়াল্টার আইজ্যাকসন";
      descriptionEn = "The definitive biography of Steve Jobs, based on over forty interviews with Jobs himself, as well as interviews with family members, friends, adversaries, competitors, and colleagues.";
      descriptionBn = "স্টিভ জবসের প্রামাণিক জীবনী — তাঁর পরিবার, বন্ধু ও সহকর্মীদের সাথে সাক্ষাৎকারের ভিত্তিতে রচিত।";
      isbn = "9781451648539";
      genre = "#biography";
      language = "#english";
      price = 599;
      stock = 60;
      rating = 4.7;
      tags = ["biography", "technology", "apple", "innovation", "business"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781451648539-L.jpg";
    },
    {
      titleEn = "Leonardo da Vinci";
      titleBn = "লিওনার্দো দা ভিঞ্চি";
      authorEn = "Walter Isaacson";
      authorBn = "ওয়াল্টার আইজ্যাকসন";
      descriptionEn = "A biography of Leonardo da Vinci based on thousands of pages from his notebooks, showing the genius who served as the ultimate example of the Renaissance Man.";
      descriptionBn = "লিওনার্দো দা ভিঞ্চির হাজার হাজার নোটবুক পাতার উপর ভিত্তি করে রচিত জীবনী — রেনেসাঁর চূড়ান্ত প্রতিনিধির গল্প।";
      isbn = "9781501139154";
      genre = "#biography";
      language = "#english";
      price = 649;
      stock = 45;
      rating = 4.8;
      tags = ["biography", "art", "science", "renaissance", "genius"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781501139154-L.jpg";
    },
    {
      titleEn = "Elon Musk";
      titleBn = "ইলন মাস্ক";
      authorEn = "Walter Isaacson";
      authorBn = "ওয়াল্টার আইজ্যাকসন";
      descriptionEn = "The definitive biography of Elon Musk, the entrepreneur behind Tesla, SpaceX, and more, revealing the obsessions, grand visions, and determination that drive the world's richest man.";
      descriptionBn = "টেসলা, স্পেসএক্স-এর উদ্যোক্তা ইলন মাস্কের প্রামাণিক জীবনী — তাঁর দৃষ্টিভঙ্গি ও দৃঢ়সংকল্পের বিবরণ।";
      isbn = "9781982181284";
      genre = "#biography";
      language = "#english";
      price = 699;
      stock = 55;
      rating = 4.6;
      tags = ["biography", "technology", "tesla", "spacex", "entrepreneurship"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781982181284-L.jpg";
    },
    {
      titleEn = "Einstein: His Life and Universe";
      titleBn = "আইনস্টাইন: তাঁর জীবন ও মহাবিশ্ব";
      authorEn = "Walter Isaacson";
      authorBn = "ওয়াল্টার আইজ্যাকসন";
      descriptionEn = "The first full biography of Albert Einstein based on newly released private correspondence, tracing the development of his revolutionary theories and his complex personal life.";
      descriptionBn = "নতুন প্রকাশিত ব্যক্তিগত চিঠিপত্রের উপর ভিত্তি করে আলবার্ট আইনস্টাইনের প্রথম সম্পূর্ণ জীবনী।";
      isbn = "9780743264747";
      genre = "#biography";
      language = "#english";
      price = 549;
      stock = 50;
      rating = 4.8;
      tags = ["biography", "science", "physics", "einstein", "genius"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743264747-L.jpg";
    },
    {
      titleEn = "Educated: A Memoir";
      titleBn = "শিক্ষিত: একটি স্মৃতিকথা";
      authorEn = "Tara Westover";
      authorBn = "তারা ওয়েস্টওভার";
      descriptionEn = "A memoir about a young woman who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.";
      descriptionBn = "একজন তরুণী যে স্কুলে যাওয়ার সুযোগ পায়নি, পরিবার ছেড়ে ক্যামব্রিজ বিশ্ববিদ্যালয় থেকে পিএইচডি অর্জন করেন তার স্মৃতিকথা।";
      isbn = "9780399590504";
      genre = "#biography";
      language = "#english";
      price = 449;
      stock = 70;
      rating = 4.7;
      tags = ["memoir", "education", "family", "self-discovery", "inspirational"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg";
    },
    {
      titleEn = "Becoming";
      titleBn = "বিকশিত হওয়া";
      authorEn = "Michelle Obama";
      authorBn = "মিশেল ওবামা";
      descriptionEn = "The memoir of former US First Lady Michelle Obama, sharing an intimate look at her roots and how she came to define herself as a woman of power and purpose.";
      descriptionBn = "সাবেক মার্কিন ফার্স্ট লেডি মিশেল ওবামার স্মৃতিকথা — তাঁর শিকড় এবং কীভাবে তিনি নিজেকে গড়ে তুলেছেন তার বিবরণ।";
      isbn = "9781524763138";
      genre = "#biography";
      language = "#english";
      price = 499;
      stock = 90;
      rating = 4.9;
      tags = ["memoir", "politics", "inspirational", "women", "usa"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781524763138-L.jpg";
    },
    {
      titleEn = "When Breath Becomes Air";
      titleBn = "যখন শ্বাস বায়ু হয়ে যায়";
      authorEn = "Paul Kalanithi";
      authorBn = "পল কালানিথি";
      descriptionEn = "A memoir by a brilliant neurosurgeon facing terminal lung cancer, exploring what makes life meaningful in the face of death.";
      descriptionBn = "একজন মেধাবী নিউরোসার্জনের স্মৃতিকথা যিনি মারাত্মক ফুসফুসের ক্যান্সারের মুখোমুখি হয়ে জীবনের অর্থ খুঁজে পান।";
      isbn = "9780812988406";
      genre = "#biography";
      language = "#english";
      price = 399;
      stock = 75;
      rating = 4.9;
      tags = ["memoir", "medical", "death", "meaning", "inspirational"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780812988406-L.jpg";
    },
    {
      titleEn = "Gitanjali";
      titleBn = "গীতাঞ্জলি";
      authorEn = "Rabindranath Tagore";
      authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "Tagore's Nobel Prize-winning collection of poems — 'Song Offerings' — that brought him international fame. A deeply spiritual and lyrical work beloved across the world.";
      descriptionBn = "রবীন্দ্রনাথ ঠাকুরের নোবেল পুরস্কার বিজয়ী কবিতা সংকলন — গভীর আধ্যাত্মিক ও গীতিময় রচনা যা বিশ্বজুড়ে সমাদৃত।";
      isbn = "9788129300003";
      genre = "#poetry";
      language = "#bengali";
      price = 249;
      stock = 200;
      rating = 5.0;
      tags = ["poetry", "tagore", "bengali", "nobel", "spiritual"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788129300003-L.jpg";
    },
    {
      titleEn = "Selected Poems of Jibanananda Das";
      titleBn = "জীবনানন্দ দাশের শ্রেষ্ঠ কবিতা";
      authorEn = "Jibanananda Das";
      authorBn = "জীবনানন্দ দাশ";
      descriptionEn = "A curated selection of poems by Jibanananda Das, one of Bengal's greatest modern poets, known for his evocative imagery of nature and existential themes.";
      descriptionBn = "বাংলার অন্যতম শ্রেষ্ঠ আধুনিক কবি জীবনানন্দ দাশের বাছাই করা কবিতার সংকলন।";
      isbn = "9788177563306";
      genre = "#poetry";
      language = "#bengali";
      price = 299;
      stock = 120;
      rating = 4.9;
      tags = ["poetry", "bengali", "modern", "nature", "jibanananda"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177563306-L.jpg";
    },
    {
      titleEn = "Kazi Nazrul Islam Sanchayita";
      titleBn = "কাজী নজরুল ইসলাম সঞ্চয়িতা";
      authorEn = "Kazi Nazrul Islam";
      authorBn = "কাজী নজরুল ইসলাম";
      descriptionEn = "An anthology of the best poems and songs of Kazi Nazrul Islam, Bangladesh's national poet, celebrated for his fiery revolutionary spirit and lyrical beauty.";
      descriptionBn = "বাংলাদেশের জাতীয় কবি কাজী নজরুল ইসলামের সেরা কবিতা ও গানের সংকলন — তাঁর বিপ্লবী সত্তার পরিচয়।";
      isbn = "9789840412428";
      genre = "#poetry";
      language = "#bengali";
      price = 349;
      stock = 150;
      rating = 4.9;
      tags = ["poetry", "nazrul", "bengali", "revolution", "national poet"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789840412428-L.jpg";
    },
    {
      titleEn = "Poems by Sunil Gangopadhyay: Selected Works";
      titleBn = "সুনীল গঙ্গোপাধ্যায়ের কবিতা সমগ্র";
      authorEn = "Sunil Gangopadhyay";
      authorBn = "সুনীল গঙ্গোপাধ্যায়";
      descriptionEn = "A comprehensive collection of poems by Sunil Gangopadhyay, one of modern Bengali literature's most celebrated figures, combining romanticism with social awareness.";
      descriptionBn = "আধুনিক বাংলা সাহিত্যের অন্যতম বিখ্যাত লেখক সুনীল গঙ্গোপাধ্যায়ের কবিতার ব্যাপক সংকলন।";
      isbn = "9788177562125";
      genre = "#poetry";
      language = "#bengali";
      price = 279;
      stock = 100;
      rating = 4.8;
      tags = ["poetry", "bengali", "modern", "romantic", "sunil"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177562125-L.jpg";
    },
    {
      titleEn = "The God of Small Things";
      titleBn = "ছোট জিনিসের ঈশ্বর";
      authorEn = "Arundhati Roy";
      authorBn = "অরুন্ধতী রায়";
      descriptionEn = "Arundhati Roy's Booker Prize-winning debut novel, a story of forbidden love and the caste taboos of Indian society set in Kerala.";
      descriptionBn = "অরুন্ধতী রায়ের বুকার পুরস্কার বিজয়ী উপন্যাস — কেরালার পটভূমিতে নিষিদ্ধ প্রেম ও বর্ণপ্রথার গল্প।";
      isbn = "9780812979657";
      genre = "#fiction";
      language = "#english";
      price = 399;
      stock = 85;
      rating = 4.7;
      tags = ["fiction", "booker prize", "india", "love", "social"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780812979657-L.jpg";
    },
    {
      titleEn = "A Suitable Boy";
      titleBn = "একটি উপযুক্ত ছেলে";
      authorEn = "Vikram Seth";
      authorBn = "বিক্রম শেঠ";
      descriptionEn = "One of the longest novels in the English language, set in post-partition India, following a mother's search for a suitable husband for her daughter.";
      descriptionBn = "ইংরেজি ভাষার দীর্ঘতম উপন্যাসগুলির একটি — বিভাজন-পরবর্তী ভারতে একটি মায়ের তাঁর মেয়ের জন্য উপযুক্ত পাত্র খোঁজার গল্প।";
      isbn = "9780060786526";
      genre = "#fiction";
      language = "#english";
      price = 699;
      stock = 40;
      rating = 4.5;
      tags = ["fiction", "india", "family", "society", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780060786526-L.jpg";
    },
    {
      titleEn = "The Kite Runner";
      titleBn = "দ্য কাইট রানার";
      authorEn = "Khaled Hosseini";
      authorBn = "খালেদ হোসেইনি";
      descriptionEn = "A powerful story of friendship, betrayal, and redemption set against the backdrop of Afghanistan's turbulent history from the fall of the monarchy to the Taliban regime.";
      descriptionBn = "আফগানিস্তানের উত্তাল ইতিহাসের পটভূমিতে বন্ধুত্ব, বিশ্বাসঘাতকতা ও মুক্তির শক্তিশালী গল্প।";
      isbn = "9781594480003";
      genre = "#fiction";
      language = "#english";
      price = 399;
      stock = 90;
      rating = 4.8;
      tags = ["fiction", "afghanistan", "friendship", "redemption", "bestseller"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781594480003-L.jpg";
    },
    {
      titleEn = "Interpreter of Maladies";
      titleBn = "অসুখের দোভাষী";
      authorEn = "Jhumpa Lahiri";
      authorBn = "ঝুম্পা লাহিড়ী";
      descriptionEn = "Jhumpa Lahiri's Pulitzer Prize-winning debut collection of short stories exploring the lives of Indian and Indian-American characters navigating cultural identity.";
      descriptionBn = "ঝুম্পা লাহিড়ীর পুলিৎজার পুরস্কার বিজয়ী গল্প সংকলন — ভারতীয় ও ভারতীয়-আমেরিকান চরিত্রদের সাংস্কৃতিক পরিচয়ের গল্প।";
      isbn = "9780618104505";
      genre = "#fiction";
      language = "#english";
      price = 349;
      stock = 70;
      rating = 4.7;
      tags = ["fiction", "short stories", "pulitzer", "diaspora", "india"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780618104505-L.jpg";
    },
    {
      titleEn = "The Shadow Lines";
      titleBn = "ছায়া রেখা";
      authorEn = "Amitav Ghosh";
      authorBn = "অমিতাভ ঘোষ";
      descriptionEn = "A Sahitya Akademi Award-winning novel exploring the blurred boundaries between nations and the complex relationship between memory and history.";
      descriptionBn = "সাহিত্য অকাদেমি পুরস্কার বিজয়ী উপন্যাস — জাতির মধ্যে ঝাপসা সীমারেখা এবং স্মৃতি ও ইতিহাসের জটিল সম্পর্কের অন্বেষণ।";
      isbn = "9780547247823";
      genre = "#fiction";
      language = "#english";
      price = 449;
      stock = 55;
      rating = 4.6;
      tags = ["fiction", "india", "memory", "partition", "sahitya akademi"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780547247823-L.jpg";
    },
    {
      titleEn = "In Other Rooms, Other Wonders";
      titleBn = "অন্য ঘরে, অন্য বিস্ময়";
      authorEn = "Daniyal Mueenuddin";
      authorBn = "দানিয়াল মুইনুদ্দিন";
      descriptionEn = "An interconnected collection of short stories set in Pakistan's feudal landscape, depicting the lives of the wealthy, their servants, and those in between.";
      descriptionBn = "পাকিস্তানের সামন্ততান্ত্রিক পরিবেশে পরস্পর সংযুক্ত গল্পের সংকলন — ধনী, দরিদ্র ও মধ্যবর্তী মানুষের জীবনের চিত্র।";
      isbn = "9780393068030";
      genre = "#fiction";
      language = "#english";
      price = 399;
      stock = 45;
      rating = 4.5;
      tags = ["fiction", "pakistan", "short stories", "feudal", "literary"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780393068030-L.jpg";
    },
    {
      titleEn = "Half of a Yellow Sun";
      titleBn = "হলুদ সূর্যের অর্ধেক";
      authorEn = "Chimamanda Ngozi Adichie";
      authorBn = "চিমামান্ডা এনগোজি আদিচি";
      descriptionEn = "Set during the Nigerian Civil War, this Orange Prize-winning novel follows three characters whose lives intersect in the chaos of one of the twentieth century's most brutal conflicts.";
      descriptionBn = "নাইজেরিয়ান গৃহযুদ্ধের পটভূমিতে অরেঞ্জ পুরস্কার বিজয়ী উপন্যাস — তিনটি চরিত্রের জীবন যা এক নৃশংস সংঘর্ষে মিলিত হয়।";
      isbn = "9781400095209";
      genre = "#fiction";
      language = "#english";
      price = 449;
      stock = 60;
      rating = 4.8;
      tags = ["fiction", "nigeria", "war", "orange prize", "africa"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781400095209-L.jpg";
    },
    {
      titleEn = "Persepolis: The Story of a Childhood";
      titleBn = "পার্সেপোলিস: একটি শৈশবের গল্প";
      authorEn = "Marjane Satrapi";
      authorBn = "মারজান সাত্রাপি";
      descriptionEn = "A graphic memoir about growing up in Iran during and after the Islamic Revolution, told through the eyes of a young girl with courage and humor.";
      descriptionBn = "ইসলামি বিপ্লবের সময় ও পরবর্তীতে ইরানে বড় হওয়ার গ্রাফিক স্মৃতিকথা — একটি তরুণী মেয়ের সাহস ও রসবোধের চোখ দিয়ে দেখা।";
      isbn = "9780375714573";
      genre = "#biography";
      language = "#english";
      price = 499;
      stock = 50;
      rating = 4.8;
      tags = ["graphic memoir", "iran", "revolution", "autobiography", "comics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780375714573-L.jpg";
    },
    {
      titleEn = "My Experiments with Truth (Bengali)";
      titleBn = "সত্যের সন্ধানে";
      authorEn = "Mahatma Gandhi (Bengali translation)";
      authorBn = "মহাত্মা গান্ধী";
      descriptionEn = "Bengali translation of Gandhi's famous autobiography, one of the most read biographies in the Indian subcontinent.";
      descriptionBn = "গান্ধীজির বিখ্যাত আত্মজীবনীর বাংলা অনুবাদ — ভারতীয় উপমহাদেশে সর্বাধিক পঠিত জীবনীগ্রন্থগুলির একটি।";
      isbn = "9788177564174";
      genre = "#biography";
      language = "#bengali";
      price = 299;
      stock = 110;
      rating = 4.7;
      tags = ["biography", "gandhi", "bengali", "independence", "spiritual"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177564174-L.jpg";
    },
    {
      titleEn = "Rabindranath Tagore: A Biography";
      titleBn = "রবীন্দ্রনাথ ঠাকুর: একটি জীবনী";
      authorEn = "Krishna Dutta & Andrew Robinson";
      authorBn = "কৃষ্ণ দত্ত ও অ্যান্ড্রু রবিনসন";
      descriptionEn = "The definitive biography of Rabindranath Tagore, tracing his life, literary achievements, philosophy, and legacy as Asia's first Nobel laureate.";
      descriptionBn = "রবীন্দ্রনাথ ঠাকুরের প্রামাণিক জীবনী — এশিয়ার প্রথম নোবেল বিজয়ীর জীবন, সাহিত্য ও দর্শনের বিবরণ।";
      isbn = "9781850437796";
      genre = "#biography";
      language = "#english";
      price = 599;
      stock = 35;
      rating = 4.8;
      tags = ["biography", "tagore", "bengali", "literature", "nobel"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781850437796-L.jpg";
    },
    {
      titleEn = "Banalata Sen";
      titleBn = "বনলতা সেন";
      authorEn = "Jibanananda Das";
      authorBn = "জীবনানন্দ দাশ";
      descriptionEn = "One of the most celebrated poetry collections in modern Bengali literature, featuring the iconic poem 'Banalata Sen' and other evocative verses.";
      descriptionBn = "আধুনিক বাংলা সাহিত্যের অন্যতম বিখ্যাত কাব্যগ্রন্থ — 'বনলতা সেন' কবিতাসহ অন্যান্য অসাধারণ কবিতার সংকলন।";
      isbn = "9788177560770";
      genre = "#poetry";
      language = "#bengali";
      price = 199;
      stock = 180;
      rating = 5.0;
      tags = ["poetry", "bengali", "classic", "jibanananda", "romantic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177560770-L.jpg";
    },
    {
      titleEn = "Subhash Chandra Bose: A Biography";
      titleBn = "সুভাষচন্দ্র বসু: একটি জীবনী";
      authorEn = "Mihir Bose";
      authorBn = "মিহির বোস";
      descriptionEn = "The compelling life story of Netaji Subhash Chandra Bose, the firebrand Indian freedom fighter who challenged British rule through the Indian National Army.";
      descriptionBn = "নেতাজি সুভাষচন্দ্র বসুর জীবনকথা — যিনি ইন্ডিয়ান ন্যাশনাল আর্মির মাধ্যমে ব্রিটিশ শাসনকে চ্যালেঞ্জ করেছিলেন।";
      isbn = "9788177563375";
      genre = "#biography";
      language = "#bengali";
      price = 349;
      stock = 85;
      rating = 4.7;
      tags = ["biography", "netaji", "freedom fighter", "bengali", "india"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177563375-L.jpg";
    },
    {
      titleEn = "A Brief History of Time";
      titleBn = "সময়ের সংক্ষিপ্ত ইতিহাস";
      authorEn = "Stephen Hawking";
      authorBn = "স্টিফেন হকিং";
      descriptionEn = "Stephen Hawking's landmark book explaining the universe, black holes, and the origins of the cosmos for general readers without scientific backgrounds.";
      descriptionBn = "স্টিফেন হকিংয়ের যুগান্তকারী বই — সাধারণ পাঠকদের জন্য মহাবিশ্ব, কৃষ্ণগহ্বর ও মহাজগতের উৎপত্তির ব্যাখ্যা।";
      isbn = "9780553380163";
      genre = "#biography";
      language = "#english";
      price = 349;
      stock = 95;
      rating = 4.7;
      tags = ["science", "physics", "cosmology", "hawking", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg";
    },
    {
      titleEn = "Spare";
      titleBn = "স্পেয়ার";
      authorEn = "Prince Harry, Duke of Sussex";
      authorBn = "প্রিন্স হ্যারি";
      descriptionEn = "The memoir of Prince Harry, in which he writes about the tensions within the royal family, his experiences in the army, and his marriage to Meghan Markle.";
      descriptionBn = "প্রিন্স হ্যারির স্মৃতিকথা — রাজপরিবারের দ্বন্দ্ব, সেনাবাহিনীর অভিজ্ঞতা ও মেগান মার্কেলের সাথে বিবাহের গল্প।";
      isbn = "9780593593806";
      genre = "#biography";
      language = "#english";
      price = 599;
      stock = 40;
      rating = 4.3;
      tags = ["memoir", "royalty", "british", "family", "bestseller"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780593593806-L.jpg";
    },
    {
      titleEn = "Open: An Autobiography";
      titleBn = "ওপেন: একটি আত্মজীবনী";
      authorEn = "Andre Agassi";
      authorBn = "আন্দ্রে আগাসি";
      descriptionEn = "Andre Agassi's candid memoir about his life as a tennis champion, written with extraordinary honesty about his struggles, failures, and triumphs.";
      descriptionBn = "টেনিস চ্যাম্পিয়ন আন্দ্রে আগাসির স্পষ্টভাষী স্মৃতিকথা — তাঁর সংগ্রাম, ব্যর্থতা ও সাফল্যের অসাধারণ বিবরণ।";
      isbn = "9780307388407";
      genre = "#biography";
      language = "#english";
      price = 449;
      stock = 60;
      rating = 4.7;
      tags = ["memoir", "tennis", "sports", "autobiography", "agassi"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780307388407-L.jpg";
    },
    {
      titleEn = "The Diary of a Young Girl";
      titleBn = "একটি তরুণী মেয়ের ডায়েরি";
      authorEn = "Anne Frank";
      authorBn = "অ্যান ফ্রাংক";
      descriptionEn = "The profound diary of Anne Frank, a Jewish girl who hid with her family during the Nazi occupation of the Netherlands, one of the world's most read books.";
      descriptionBn = "ইহুদি মেয়ে অ্যান ফ্রাংকের হৃদয়স্পর্শী ডায়েরি — নাৎসি দখলকালীন নেদারল্যান্ডসে পরিবারের সাথে লুকিয়ে থাকার বিবরণ।";
      isbn = "9780553296983";
      genre = "#biography";
      language = "#english";
      price = 299;
      stock = 130;
      rating = 4.9;
      tags = ["diary", "holocaust", "history", "war", "youth"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553296983-L.jpg";
    },
    {
      titleEn = "I Know Why the Caged Bird Sings";
      titleBn = "আমি জানি কেন বন্দী পাখি গান গায়";
      authorEn = "Maya Angelou";
      authorBn = "মায়া অ্যাঞ্জেলু";
      descriptionEn = "Maya Angelou's autobiographical account of her childhood and early adult years, depicting trauma, race, and identity with poetic power and resilience.";
      descriptionBn = "মায়া অ্যাঞ্জেলুর শৈশব ও প্রথম যৌবনের আত্মজীবনীমূলক বিবরণ — আঘাত, জাতি ও পরিচয়ের কাব্যিক শক্তিশালী উপস্থাপন।";
      isbn = "9780345514400";
      genre = "#biography";
      language = "#english";
      price = 349;
      stock = 75;
      rating = 4.8;
      tags = ["memoir", "race", "poetry", "women", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780345514400-L.jpg";
    },
    {
      titleEn = "Night";
      titleBn = "রাত";
      authorEn = "Elie Wiesel";
      authorBn = "এলি ভিজেল";
      descriptionEn = "Elie Wiesel's harrowing account of surviving the Nazi death camps, one of the most powerful testimonies of the Holocaust ever written.";
      descriptionBn = "এলি ভিজেলের নাৎসি মৃত্যু শিবির থেকে বেঁচে থাকার হৃদয়বিদারক বিবরণ — ইতিহাসের সবচেয়ে শক্তিশালী সাক্ষ্যগুলির একটি।";
      isbn = "9780374500016";
      genre = "#biography";
      language = "#english";
      price = 349;
      stock = 80;
      rating = 4.9;
      tags = ["memoir", "holocaust", "history", "war", "survival"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780374500016-L.jpg";
    },
    {
      titleEn = "The Autobiography of Malcolm X";
      titleBn = "ম্যালকম এক্সের আত্মজীবনী";
      authorEn = "Malcolm X & Alex Haley";
      authorBn = "ম্যালকম এক্স ও অ্যালেক্স হেলি";
      descriptionEn = "The powerful life story of Malcolm X, tracing his transformation from street criminal to civil rights leader and spiritual leader.";
      descriptionBn = "ম্যালকম এক্সের শক্তিশালী জীবনকাহিনী — সড়ক অপরাধী থেকে নাগরিক অধিকার ও আধ্যাত্মিক নেতায় পরিণত হওয়ার বিবরণ।";
      isbn = "9780345350688";
      genre = "#biography";
      language = "#english";
      price = 399;
      stock = 65;
      rating = 4.8;
      tags = ["biography", "civil rights", "race", "islam", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780345350688-L.jpg";
    },
    {
      titleEn = "Born a Crime";
      titleBn = "অপরাধে জন্ম";
      authorEn = "Trevor Noah";
      authorBn = "ট্রেভর নোয়া";
      descriptionEn = "Trevor Noah's memoir of growing up during apartheid South Africa as the son of a black Zulu mother and white Swiss father — a crime under apartheid law.";
      descriptionBn = "বর্ণবৈষম্য-যুগের দক্ষিণ আফ্রিকায় কালো জুলু মা ও সাদা সুইস বাবার সন্তান হিসেবে বড় হওয়ার স্মৃতিকথা।";
      isbn = "9780399588174";
      genre = "#biography";
      language = "#english";
      price = 449;
      stock = 55;
      rating = 4.8;
      tags = ["memoir", "south africa", "apartheid", "comedy", "race"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780399588174-L.jpg";
    },
    {
      titleEn = "Can't Hurt Me";
      titleBn = "আমাকে আঘাত করতে পারবে না";
      authorEn = "David Goggins";
      authorBn = "ডেভিড গগিনস";
      descriptionEn = "David Goggins shares his astonishing life story — from abused child to Navy SEAL, Army Ranger, and world record holder — to inspire readers to push past their own limits.";
      descriptionBn = "নির্যাতিত শিশু থেকে নেভি সিল, আর্মি রেঞ্জার ও বিশ্ব রেকর্ডধারী ডেভিড গগিনসের বিস্ময়কর জীবনকাহিনী।";
      isbn = "9781544512259";
      genre = "#biography";
      language = "#english";
      price = 449;
      stock = 70;
      rating = 4.8;
      tags = ["memoir", "motivation", "military", "endurance", "self-help"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781544512259-L.jpg";
    },
    {
      titleEn = "The Glass Castle";
      titleBn = "কাচের দুর্গ";
      authorEn = "Jeannette Walls";
      authorBn = "জিনেট ওয়ালস";
      descriptionEn = "A stunning memoir of growing up with eccentric, nomadic parents who were both brilliant and deeply dysfunctional, told with extraordinary honesty and compassion.";
      descriptionBn = "অদ্ভুত, যাযাবর অভিভাবকদের সাথে বেড়ে ওঠার চমৎকার স্মৃতিকথা — অসাধারণ সততা ও সহানুভূতির সাথে বলা।";
      isbn = "9780743247542";
      genre = "#biography";
      language = "#english";
      price = 399;
      stock = 60;
      rating = 4.7;
      tags = ["memoir", "family", "poverty", "resilience", "childhood"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743247542-L.jpg";
    },
    {
      titleEn = "The Poet X";
      titleBn = "পোয়েট এক্স";
      authorEn = "Elizabeth Acevedo";
      authorBn = "এলিজাবেথ আসেভেদো";
      descriptionEn = "A National Book Award-winning novel-in-verse about a Dominican-American girl who uses slam poetry to process her identity and family struggles.";
      descriptionBn = "ন্যাশনাল বুক অ্যাওয়ার্ড বিজয়ী পদ্য-উপন্যাস — একটি ডোমিনিকান-আমেরিকান মেয়ে স্ল্যাম কবিতার মাধ্যমে পরিচয় ও পারিবারিক সংগ্রাম প্রক্রিয়া করে।";
      isbn = "9780062662804";
      genre = "#poetry";
      language = "#english";
      price = 349;
      stock = 55;
      rating = 4.7;
      tags = ["poetry", "novel", "youth", "identity", "national book award"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062662804-L.jpg";
    },
    {
      titleEn = "Milk and Honey";
      titleBn = "দুধ ও মধু";
      authorEn = "Rupi Kaur";
      authorBn = "রুপি কৌর";
      descriptionEn = "A collection of poetry and prose about survival, the experience of violence, abuse, love, loss, and femininity by Rupi Kaur, one of the best-selling poets of our time.";
      descriptionBn = "বেঁচে থাকা, সহিংসতা, প্রেম, হারানো ও নারীত্ব সম্পর্কে রুপি কৌরের কবিতা ও গদ্যের সংকলন।";
      isbn = "9781449486792";
      genre = "#poetry";
      language = "#english";
      price = 299;
      stock = 110;
      rating = 4.5;
      tags = ["poetry", "feminism", "love", "healing", "modern"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781449486792-L.jpg";
    },
    {
      titleEn = "Leaves of Grass";
      titleBn = "ঘাসের পাতা";
      authorEn = "Walt Whitman";
      authorBn = "ওয়াল্ট হুইটম্যান";
      descriptionEn = "Walt Whitman's landmark collection of poetry, celebrating the self, nature, democracy, and the American experience in free verse that transformed poetry.";
      descriptionBn = "ওয়াল্ট হুইটম্যানের যুগান্তকারী কবিতা সংকলন — মুক্তছন্দে আত্মা, প্রকৃতি, গণতন্ত্র ও আমেরিকান অভিজ্ঞতার উদযাপন।";
      isbn = "9780486270678";
      genre = "#poetry";
      language = "#english";
      price = 299;
      stock = 70;
      rating = 4.6;
      tags = ["poetry", "classic", "american", "whitman", "nature"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780486270678-L.jpg";
    },
    {
      titleEn = "The Complete Poems of Emily Dickinson";
      titleBn = "এমিলি ডিকিনসনের সম্পূর্ণ কবিতাসমগ্র";
      authorEn = "Emily Dickinson";
      authorBn = "এমিলি ডিকিনসন";
      descriptionEn = "The definitive collection of all poems by Emily Dickinson, one of the greatest American poets, known for her unconventional use of form and exploration of death and immortality.";
      descriptionBn = "মার্কিন অন্যতম শ্রেষ্ঠ কবি এমিলি ডিকিনসনের সমস্ত কবিতার চূড়ান্ত সংকলন।";
      isbn = "9780316184137";
      genre = "#poetry";
      language = "#english";
      price = 399;
      stock = 50;
      rating = 4.8;
      tags = ["poetry", "classic", "american", "dickinson", "death"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780316184137-L.jpg";
    },
    {
      titleEn = "Rubaiyat of Omar Khayyam";
      titleBn = "ওমর খৈয়ামের রুবাইয়াৎ";
      authorEn = "Omar Khayyam (trans. Edward FitzGerald)";
      authorBn = "ওমর খৈয়াম";
      descriptionEn = "The classic Persian poetry collection translated by Edward FitzGerald, celebrating life, love, wine, and acceptance of mortality with exquisite imagery.";
      descriptionBn = "এডওয়ার্ড ফিটজগেরাল্ড অনূদিত ধ্রুপদী ফার্সি কবিতার সংকলন — জীবন, প্রেম ও মৃত্যুর গ্রহণযোগ্যতার অপূর্ব উপস্থাপনা।";
      isbn = "9780486264677";
      genre = "#poetry";
      language = "#english";
      price = 249;
      stock = 80;
      rating = 4.7;
      tags = ["poetry", "persian", "classic", "philosophy", "translated"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780486264677-L.jpg";
    },
    {
      titleEn = "Sanchayita (Tagore's Selected Poems)";
      titleBn = "সঞ্চয়িতা";
      authorEn = "Rabindranath Tagore";
      authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "Sanchayita is the personal selection of poems by Rabindranath Tagore himself, representing the breadth of his poetic genius across all phases of his life.";
      descriptionBn = "সঞ্চয়িতা রবীন্দ্রনাথ ঠাকুরের নিজে বাছাই করা কবিতার সংকলন — তাঁর সমগ্র জীবনের কাব্য-প্রতিভার পরিচয়।";
      isbn = "9788177560145";
      genre = "#poetry";
      language = "#bengali";
      price = 299;
      stock = 200;
      rating = 5.0;
      tags = ["poetry", "tagore", "bengali", "classic", "selected"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177560145-L.jpg";
    },
    {
      titleEn = "Sonar Tari (The Golden Boat)";
      titleBn = "সোনার তরী";
      authorEn = "Rabindranath Tagore";
      authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "One of Tagore's most famous poetry collections, 'Sonar Tari' features the iconic title poem and many other lyrical masterpieces exploring transience and eternity.";
      descriptionBn = "রবীন্দ্রনাথের অন্যতম বিখ্যাত কাব্যগ্রন্থ — 'সোনার তরী' কবিতাসহ অনিত্যতা ও অনন্তকাল নিয়ে অনেক গীতিময় রচনা।";
      isbn = "9788177560862";
      genre = "#poetry";
      language = "#bengali";
      price = 249;
      stock = 160;
      rating = 4.9;
      tags = ["poetry", "tagore", "bengali", "classic", "lyrical"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177560862-L.jpg";
    },
    {
      titleEn = "The Complete Works of Sukumar Ray";
      titleBn = "সুকুমার রায় সমগ্র";
      authorEn = "Sukumar Ray";
      authorBn = "সুকুমার রায়";
      descriptionEn = "The complete collected works of Sukumar Ray, the master of Bengali nonsense literature, including Abol Tabol, HaJaBaRaLa, and other beloved works.";
      descriptionBn = "বাংলা ননসেন্স সাহিত্যের দিকপাল সুকুমার রায়ের সমস্ত রচনার সংকলন — আবোল তাবোল, হযবরল ও অন্যান্য প্রিয় রচনা।";
      isbn = "9788177561784";
      genre = "#poetry";
      language = "#bengali";
      price = 399;
      stock = 130;
      rating = 4.9;
      tags = ["poetry", "bengali", "humor", "children", "sukumar ray"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177561784-L.jpg";
    },
    {
      titleEn = "Agni Vina (Fiery Lyre)";
      titleBn = "অগ্নিবীণা";
      authorEn = "Kazi Nazrul Islam";
      authorBn = "কাজী নজরুল ইসলাম";
      descriptionEn = "Nazrul Islam's debut poetry collection, published in 1922, that ignited the Bengali literary world with its passionate revolutionary spirit.";
      descriptionBn = "নজরুল ইসলামের প্রথম কাব্যগ্রন্থ, ১৯২২ সালে প্রকাশিত — আবেগপ্রবণ বিপ্লবী চেতনায় বাংলা সাহিত্যজগৎকে আলোকিত করেছিল।";
      isbn = "9789840412459";
      genre = "#poetry";
      language = "#bengali";
      price = 249;
      stock = 140;
      rating = 4.9;
      tags = ["poetry", "nazrul", "bengali", "revolution", "debut"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789840412459-L.jpg";
    },
    {
      titleEn = "My Story: Kamala Das Autobiography";
      titleBn = "আমার গল্প: কমলা দাসের আত্মজীবনী";
      authorEn = "Kamala Das";
      authorBn = "কমলা দাস";
      descriptionEn = "The controversial and courageous autobiography of Kamala Das, one of India's greatest poets, dealing with love, marriage, and the search for identity.";
      descriptionBn = "ভারতের অন্যতম শ্রেষ্ঠ কবি কমলা দাসের সাহসী ও বিতর্কিত আত্মজীবনী — প্রেম, বিবাহ ও পরিচয়ের অন্বেষণ।";
      isbn = "9780006546139";
      genre = "#biography";
      language = "#english";
      price = 399;
      stock = 45;
      rating = 4.6;
      tags = ["autobiography", "poetry", "india", "women", "identity"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780006546139-L.jpg";
    },
    {
      titleEn = "Beautiful Boy";
      titleBn = "সুন্দর ছেলে";
      authorEn = "David Sheff";
      authorBn = "ডেভিড শেফ";
      descriptionEn = "A heartbreaking memoir by a father recounting his son's descent into methamphetamine addiction, showing the toll of addiction on families.";
      descriptionBn = "একজন বাবার হৃদয়বিদারক স্মৃতিকথা — তাঁর ছেলের মেথামফেটামিন আসক্তিতে পতনের গল্প।";
      isbn = "9780618683352";
      genre = "#biography";
      language = "#english";
      price = 399;
      stock = 50;
      rating = 4.5;
      tags = ["memoir", "addiction", "family", "drugs", "health"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780618683352-L.jpg";
    },
    {
      titleEn = "The Sun and Her Flowers";
      titleBn = "সূর্য এবং তার ফুলেরা";
      authorEn = "Rupi Kaur";
      authorBn = "রুপি কৌর";
      descriptionEn = "Rupi Kaur's second collection of poetry, exploring themes of loss, trauma, healing, femininity, and belonging with her characteristic raw honesty.";
      descriptionBn = "রুপি কৌরের দ্বিতীয় কবিতা সংকলন — হারানো, আঘাত, সুস্থতা, নারীত্ব ও আপন বোধের অন্বেষণ।";
      isbn = "9781449486814";
      genre = "#poetry";
      language = "#english";
      price = 299;
      stock = 90;
      rating = 4.4;
      tags = ["poetry", "feminism", "healing", "love", "modern"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781449486814-L.jpg";
    },
    {
      titleEn = "Between the World and Me";
      titleBn = "বিশ্ব ও আমার মাঝে";
      authorEn = "Ta-Nehisi Coates";
      authorBn = "তা-নেহিসি কোটস";
      descriptionEn = "A National Book Award-winning letter from Ta-Nehisi Coates to his son about the struggle to be a Black American, written in the tradition of James Baldwin.";
      descriptionBn = "ন্যাশনাল বুক অ্যাওয়ার্ড বিজয়ী চিঠি — তা-নেহিসি কোটস তাঁর ছেলেকে কৃষ্ণাঙ্গ আমেরিকান হওয়ার সংগ্রামের কথা লেখেন।";
      isbn = "9780812993547";
      genre = "#biography";
      language = "#english";
      price = 349;
      stock = 65;
      rating = 4.7;
      tags = ["memoir", "race", "america", "national book award", "society"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780812993547-L.jpg";
    },
    {
      titleEn = "The Complete Poems of Shakti Chattopadhyay";
      titleBn = "শক্তি চট্টোপাধ্যায়ের কবিতা সমগ্র";
      authorEn = "Shakti Chattopadhyay";
      authorBn = "শক্তি চট্টোপাধ্যায়";
      descriptionEn = "The complete poems of Shakti Chattopadhyay, one of the most beloved modern Bengali poets, known for his lyrical intensity and powerful imagery.";
      descriptionBn = "আধুনিক বাংলা কাব্যসাহিত্যের অন্যতম প্রিয় কবি শক্তি চট্টোপাধ্যায়ের সম্পূর্ণ কবিতাসমগ্র।";
      isbn = "9788177563788";
      genre = "#poetry";
      language = "#bengali";
      price = 349;
      stock = 95;
      rating = 4.9;
      tags = ["poetry", "bengali", "modern", "shakti", "lyrical"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177563788-L.jpg";
    },
    {
      titleEn = "Sandesh (Selected Writings of Sukumar Ray)";
      titleBn = "সন্দেশ";
      authorEn = "Sukumar Ray";
      authorBn = "সুকুমার রায়";
      descriptionEn = "Selected children's stories, poems, and nonsense verse from the legendary Sukumar Ray, published in Sandesh magazine.";
      descriptionBn = "কিংবদন্তি সুকুমার রায়ের সন্দেশ পত্রিকায় প্রকাশিত শিশুদের গল্প, কবিতা ও ননসেন্স পদ্যের সংকলন।";
      isbn = "9788177562682";
      genre = "#poetry";
      language = "#bengali";
      price = 249;
      stock = 120;
      rating = 4.8;
      tags = ["children", "poetry", "humor", "bengali", "sukumar"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177562682-L.jpg";
    },
    {
      titleEn = "Midnight's Children";
      titleBn = "মধ্যরাতের সন্তান";
      authorEn = "Salman Rushdie";
      authorBn = "সালমান রুশদি";
      descriptionEn = "Salman Rushdie's Booker Prize and Booker of Bookers-winning novel, weaving together the story of India's independence with the magical narrative of Saleem Sinai.";
      descriptionBn = "সালমান রুশদির বুকার পুরস্কার বিজয়ী উপন্যাস — ভারতের স্বাধীনতার ইতিহাসকে সালিম সিনাইর যাদুকরী আখ্যানের সাথে বুনে দিয়েছেন।";
      isbn = "9780140101805";
      genre = "#fiction";
      language = "#english";
      price = 499;
      stock = 65;
      rating = 4.6;
      tags = ["fiction", "india", "booker prize", "magical realism", "partition"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140101805-L.jpg";
    },
    {
      titleEn = "The Remains of the Day";
      titleBn = "দিনের শেষে";
      authorEn = "Kazuo Ishiguro";
      authorBn = "কাজুও ইশিগুরো";
      descriptionEn = "Kazuo Ishiguro's Booker Prize-winning novel about an English butler reflecting on his years of service, duty, and the choices he made.";
      descriptionBn = "কাজুও ইশিগুরোর বুকার পুরস্কার বিজয়ী উপন্যাস — একজন ইংরেজ বাটলারের সেবা, কর্তব্য ও জীবনের পছন্দের প্রতিফলন।";
      isbn = "9780679731726";
      genre = "#fiction";
      language = "#english";
      price = 399;
      stock = 55;
      rating = 4.6;
      tags = ["fiction", "booker prize", "england", "butler", "memory"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679731726-L.jpg";
    },
    {
      titleEn = "The White Tiger";
      titleBn = "সাদা বাঘ";
      authorEn = "Aravind Adiga";
      authorBn = "অরবিন্দ আদিগা";
      descriptionEn = "Aravind Adiga's Booker Prize-winning debut novel, told as a series of letters from a murderous entrepreneur from a small village in India to the Chinese Premier.";
      descriptionBn = "অরবিন্দ আদিগার বুকার পুরস্কার বিজয়ী প্রথম উপন্যাস — একজন হত্যাকারী উদ্যোক্তার চীনা প্রধানমন্ত্রীকে লেখা চিঠির আকারে।";
      isbn = "9781416562603";
      genre = "#fiction";
      language = "#english";
      price = 399;
      stock = 75;
      rating = 4.5;
      tags = ["fiction", "india", "booker prize", "class", "satire"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781416562603-L.jpg";
    },
    {
      titleEn = "The Inheritance of Loss";
      titleBn = "হারানোর উত্তরাধিকার";
      authorEn = "Kiran Desai";
      authorBn = "কিরণ দেশাই";
      descriptionEn = "Kiran Desai's Booker Prize-winning novel set in the Himalayas and New York, exploring themes of post-colonialism, migration, and cultural identity.";
      descriptionBn = "কিরণ দেশাইয়ের বুকার পুরস্কার বিজয়ী উপন্যাস — হিমালয় ও নিউ ইয়র্কে উপনিবেশ-উত্তর, অভিবাসন ও সাংস্কৃতিক পরিচয়ের অন্বেষণ।";
      isbn = "9780802142818";
      genre = "#fiction";
      language = "#english";
      price = 449;
      stock = 45;
      rating = 4.5;
      tags = ["fiction", "booker prize", "india", "identity", "migration"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780802142818-L.jpg";
    },
    {
      titleEn = "Pather Panchali (Song of the Little Road)";
      titleBn = "পথের পাঁচালী";
      authorEn = "Bibhutibhushan Bandyopadhyay";
      authorBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়";
      descriptionEn = "The landmark Bengali novel by Bibhutibhushan Bandyopadhyay, immortalized by Satyajit Ray's film, depicting the poverty and beauty of rural Bengal.";
      descriptionBn = "বিভূতিভূষণ বন্দ্যোপাধ্যায়ের যুগান্তকারী বাংলা উপন্যাস — সত্যজিৎ রায়ের চলচ্চিত্রে অমর হয়ে ওঠা গ্রামীণ বাংলার দারিদ্র্য ও সৌন্দর্যের গল্প।";
      isbn = "9788177564563";
      genre = "#fiction";
      language = "#bengali";
      price = 299;
      stock = 150;
      rating = 4.9;
      tags = ["fiction", "bengali", "classic", "rural", "apu trilogy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177564563-L.jpg";
    },
    {
      titleEn = "Chokher Bali (A Grain of Sand)";
      titleBn = "চোখের বালি";
      authorEn = "Rabindranath Tagore";
      authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "Tagore's psychologically complex novel about desire, jealousy, and social convention in Bengali society, considered one of the first modern Bengali novels.";
      descriptionBn = "রবীন্দ্রনাথের মনোবিশ্লেষণমূলক উপন্যাস — বাংলা সমাজে কামনা, ঈর্ষা ও সামাজিক প্রথার গল্প, প্রথম আধুনিক বাংলা উপন্যাসগুলির একটি।";
      isbn = "9788177560138";
      genre = "#fiction";
      language = "#bengali";
      price = 279;
      stock = 130;
      rating = 4.8;
      tags = ["fiction", "bengali", "tagore", "classic", "psychology"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177560138-L.jpg";
    },
    {
      titleEn = "The Namesake";
      titleBn = "দ্য নেমসেক";
      authorEn = "Jhumpa Lahiri";
      authorBn = "ঝুম্পা লাহিড়ী";
      descriptionEn = "Jhumpa Lahiri's bestselling debut novel following the Ganguli family, Bengali immigrants in America, and their struggle between two cultures.";
      descriptionBn = "ঝুম্পা লাহিড়ীর সেরা বিক্রীত প্রথম উপন্যাস — আমেরিকায় বাঙালি অভিবাসী গাঙ্গুলী পরিবারের দুই সংস্কৃতির মধ্যে সংগ্রামের গল্প।";
      isbn = "9780618485222";
      genre = "#fiction";
      language = "#english";
      price = 399;
      stock = 80;
      rating = 4.6;
      tags = ["fiction", "diaspora", "bengali", "identity", "america"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780618485222-L.jpg";
    },
    {
      titleEn = "The Space Between Us";
      titleBn = "আমাদের মাঝের দূরত্ব";
      authorEn = "Thrity Umrigar";
      authorBn = "থ্রিটি উমরিগার";
      descriptionEn = "A powerful novel about two women from different social classes in India and the complex relationship that binds them together.";
      descriptionBn = "ভারতের ভিন্ন সামাজিক শ্রেণির দুজন নারীর মধ্যে শক্তিশালী সম্পর্কের উপন্যাস।";
      isbn = "9780060791551";
      genre = "#fiction";
      language = "#english";
      price = 379;
      stock = 50;
      rating = 4.4;
      tags = ["fiction", "india", "class", "women", "social"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780060791551-L.jpg";
    },
    {
      titleEn = "Sea of Poppies";
      titleBn = "পপির সমুদ্র";
      authorEn = "Amitav Ghosh";
      authorBn = "অমিতাভ ঘোষ";
      descriptionEn = "First book in Amitav Ghosh's Ibis Trilogy, set during the opium trade era, following diverse characters on a voyage from India to Mauritius.";
      descriptionBn = "অমিতাভ ঘোষের ইবিস ট্রিলজির প্রথম বই — আফিম বাণিজ্যের যুগে ভারত থেকে মরিশাসে যাত্রার গল্প।";
      isbn = "9780374174224";
      genre = "#fiction";
      language = "#english";
      price = 499;
      stock = 55;
      rating = 4.6;
      tags = ["fiction", "india", "history", "opium trade", "amitav ghosh"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780374174224-L.jpg";
    },
    {
      titleEn = "Hunger: A Memoir of My Body";
      titleBn = "ক্ষুধা: আমার শরীরের স্মৃতিকথা";
      authorEn = "Roxane Gay";
      authorBn = "রক্সান গে";
      descriptionEn = "An honest memoir by Roxane Gay about her body, identity, and the complications of experiencing trauma and working through it over time.";
      descriptionBn = "রক্সান গের সৎ স্মৃতিকথা — তাঁর শরীর, পরিচয় এবং আঘাত সহ্য করে এগিয়ে যাওয়ার জটিলতার বিবরণ।";
      isbn = "9780062362599";
      genre = "#biography";
      language = "#english";
      price = 399;
      stock = 45;
      rating = 4.4;
      tags = ["memoir", "body", "trauma", "feminism", "identity"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062362599-L.jpg";
    },
    {
      titleEn = "The Sun Does Shine";
      titleBn = "সূর্য উজ্জ্বল হয়";
      authorEn = "Anthony Ray Hinton";
      authorBn = "অ্যান্থনি রে হিন্টন";
      descriptionEn = "The extraordinary memoir of Anthony Ray Hinton, who spent thirty years on Alabama's death row for a crime he did not commit, and his story of hope and survival.";
      descriptionBn = "অ্যান্থনি রে হিন্টনের অসাধারণ স্মৃতিকথা — তিনি ত্রিশ বছর মৃত্যুদণ্ড সেলে কাটিয়েছিলেন এমন অপরাধের জন্য যা তিনি করেননি।";
      isbn = "9781250308672";
      genre = "#biography";
      language = "#english";
      price = 399;
      stock = 40;
      rating = 4.9;
      tags = ["memoir", "justice", "death row", "hope", "america"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781250308672-L.jpg";
    },
    {
      titleEn = "Just Kids";
      titleBn = "শুধু শিশু";
      authorEn = "Patti Smith";
      authorBn = "প্যাটি স্মিথ";
      descriptionEn = "Patti Smith's National Book Award-winning memoir about her friendship with Robert Mapplethorpe in New York during the late 1960s and early 1970s.";
      descriptionBn = "প্যাটি স্মিথের ন্যাশনাল বুক অ্যাওয়ার্ড বিজয়ী স্মৃতিকথা — ১৯৬০-৭০ এর দশকে নিউ ইয়র্কে রবার্ট ম্যাপলথর্পের সাথে তাঁর বন্ধুত্বের গল্প।";
      isbn = "9780060936228";
      genre = "#biography";
      language = "#english";
      price = 449;
      stock = 50;
      rating = 4.7;
      tags = ["memoir", "art", "music", "new york", "friendship"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780060936228-L.jpg";
    },
    {
      titleEn = "Manoj Basu Rachanavali (Collected Works)";
      titleBn = "মনোজ বসু রচনাবলী";
      authorEn = "Manoj Basu";
      authorBn = "মনোজ বসু";
      descriptionEn = "Collected literary works of Manoj Basu, a significant Bengali author who wrote about peasants, rural life, and social struggles in Bengal.";
      descriptionBn = "মনোজ বসুর সাহিত্যকর্মের সংকলন — বাংলার কৃষক, গ্রামীণ জীবন ও সামাজিক সংগ্রামের লেখক।";
      isbn = "9788177562484";
      genre = "#fiction";
      language = "#bengali";
      price = 449;
      stock = 60;
      rating = 4.7;
      tags = ["fiction", "bengali", "rural", "social", "collected works"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177562484-L.jpg";
    },
    {
      titleEn = "Shesher Kabita (Farewell Song)";
      titleBn = "শেষের কবিতা";
      authorEn = "Rabindranath Tagore";
      authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "Tagore's most beloved lyrical novel, blending poetry and prose in a romantic story set in the hills of Shillong.";
      descriptionBn = "রবীন্দ্রনাথের সবচেয়ে প্রিয় গীতিনাট্যধর্মী উপন্যাস — শিলংয়ের পাহাড়ে প্রেমের গল্পে কবিতা ও গদ্যের মিশ্রণ।";
      isbn = "9788177560893";
      genre = "#fiction";
      language = "#bengali";
      price = 249;
      stock = 170;
      rating = 4.9;
      tags = ["fiction", "bengali", "tagore", "romance", "lyrical"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177560893-L.jpg";
    },
    {
      titleEn = "When Things Fall Apart";
      titleBn = "সব ভেঙে পড়লে";
      authorEn = "Pema Chödrön";
      authorBn = "পেমা চোড্রন";
      descriptionEn = "A Buddhist guide to difficult times, offering advice on how to use pain and loss as a foundation for spiritual growth and transformation.";
      descriptionBn = "কঠিন সময়ে বৌদ্ধ নির্দেশিকা — কীভাবে ব্যথা ও হারানোকে আধ্যাত্মিক বিকাশের ভিত্তি হিসেবে ব্যবহার করা যায়।";
      isbn = "9781570623448";
      genre = "#biography";
      language = "#english";
      price = 349;
      stock = 65;
      rating = 4.8;
      tags = ["spiritual", "buddhism", "self-help", "healing", "meditation"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781570623448-L.jpg";
    },
    {
      titleEn = "Poems of Paul Celan";
      titleBn = "পল সেলানের কবিতা";
      authorEn = "Paul Celan";
      authorBn = "পল সেলান";
      descriptionEn = "A bilingual collection of poems by Paul Celan, one of the greatest German-language poets of the 20th century, known for the haunting 'Death Fugue'.";
      descriptionBn = "বিংশ শতাব্দীর অন্যতম শ্রেষ্ঠ জার্মান ভাষার কবি পল সেলানের কবিতার দ্বিভাষিক সংকলন।";
      isbn = "9781567921465";
      genre = "#poetry";
      language = "#english";
      price = 399;
      stock = 35;
      rating = 4.7;
      tags = ["poetry", "german", "holocaust", "translated", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781567921465-L.jpg";
    },
    {
      titleEn = "Selected Poems of Pablo Neruda";
      titleBn = "পাবলো নেরুদার বাছাই কবিতা";
      authorEn = "Pablo Neruda";
      authorBn = "পাবলো নেরুদা";
      descriptionEn = "A selection of Pablo Neruda's most celebrated poems including love poems, political verse, and nature poetry from the Nobel Prize-winning Chilean poet.";
      descriptionBn = "নোবেল পুরস্কার বিজয়ী চিলিয়ান কবি পাবলো নেরুদার সেরা কবিতার সংকলন — প্রেমের কবিতা, রাজনৈতিক পদ্য ও প্রকৃতির কবিতা।";
      isbn = "9780374513191";
      genre = "#poetry";
      language = "#english";
      price = 399;
      stock = 60;
      rating = 4.8;
      tags = ["poetry", "spanish", "love", "nature", "translated"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780374513191-L.jpg";
    },
    {
      titleEn = "The Complete Poems of Rainer Maria Rilke";
      titleBn = "রাইনার মারিয়া রিলকের সম্পূর্ণ কবিতাসমগ্র";
      authorEn = "Rainer Maria Rilke";
      authorBn = "রাইনার মারিয়া রিলকে";
      descriptionEn = "The collected poems of Rainer Maria Rilke, one of the greatest German poets, including the Duino Elegies and Sonnets to Orpheus.";
      descriptionBn = "মহান জার্মান কবি রাইনার মারিয়া রিলকের সংকলিত কবিতা — ডুইনো এলেজিস ও অর্ফিউসের সনেটসহ।";
      isbn = "9780865476134";
      genre = "#poetry";
      language = "#english";
      price = 449;
      stock = 40;
      rating = 4.8;
      tags = ["poetry", "german", "classic", "spiritual", "rilke"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780865476134-L.jpg";
    },
    {
      titleEn = "Tagore's Manasi: A Collection of Poems";
      titleBn = "মানসী";
      authorEn = "Rabindranath Tagore";
      authorBn = "রবীন্দ্রনাথ ঠাকুর";
      descriptionEn = "One of Tagore's significant poetry collections, 'Manasi' represents a maturing of his poetic voice and a deepening of social and personal themes.";
      descriptionBn = "রবীন্দ্রনাথের উল্লেখযোগ্য কাব্যগ্রন্থ 'মানসী' — তাঁর কাব্যকণ্ঠের পরিপক্বতা ও সামাজিক-ব্যক্তিগত বিষয়ের গভীরতার পরিচয়।";
      isbn = "9788177560787";
      genre = "#poetry";
      language = "#bengali";
      price = 249;
      stock = 140;
      rating = 4.8;
      tags = ["poetry", "tagore", "bengali", "classic", "social"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177560787-L.jpg";
    },
    {
      titleEn = "My Own Country";
      titleBn = "আমার নিজের দেশ";
      authorEn = "Abraham Verghese";
      authorBn = "আব্রাহাম ভার্গিস";
      descriptionEn = "A memoir by a doctor who arrived in a small Tennessee town to find an AIDS epidemic devastating the community, a compelling story of medicine and humanity.";
      descriptionBn = "একজন ডাক্তারের স্মৃতিকথা — যিনি টেনেসির একটি ছোট শহরে এসে AIDS মহামারি দেখতে পেলেন; চিকিৎসা ও মানবতার মর্মস্পর্শী গল্প।";
      isbn = "9780679751526";
      genre = "#biography";
      language = "#english";
      price = 449;
      stock = 40;
      rating = 4.6;
      tags = ["memoir", "medicine", "aids", "community", "doctor"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679751526-L.jpg";
    },
    {
      titleEn = "Poems of Shakti: Selected";
      titleBn = "শক্তির কবিতা: বাছাই";
      authorEn = "Shakti Chattopadhyay";
      authorBn = "শক্তি চট্টোপাধ্যায়";
      descriptionEn = "A selected anthology from the expansive poetry of Shakti Chattopadhyay, capturing his romantic, urban, and nature-infused verse.";
      descriptionBn = "শক্তি চট্টোপাধ্যায়ের বিস্তৃত কবিতা থেকে একটি বাছাই সংকলন — তাঁর রোমান্টিক, নাগরিক ও প্রকৃতির কবিতা।";
      isbn = "9788177563795";
      genre = "#poetry";
      language = "#bengali";
      price = 279;
      stock = 90;
      rating = 4.8;
      tags = ["poetry", "bengali", "romantic", "urban", "nature"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177563795-L.jpg";
    },
    {
      titleEn = "Devdas";
      titleBn = "দেবদাস";
      authorEn = "Sarat Chandra Chattopadhyay";
      authorBn = "শরৎচন্দ্র চট্টোপাধ্যায়";
      descriptionEn = "One of the most adapted Bengali novels, the story of the ill-fated Devdas and his tragic love for Paro, representing the ultimate romantic tragedy.";
      descriptionBn = "সর্বাধিক চলচ্চিত্রায়িত বাংলা উপন্যাসগুলির একটি — হতভাগ্য দেবদাস ও পারোর প্রতি তাঁর বিষণ্ণ প্রেমের গল্প।";
      isbn = "9788177562903";
      genre = "#fiction";
      language = "#bengali";
      price = 249;
      stock = 180;
      rating = 4.9;
      tags = ["fiction", "bengali", "romance", "tragedy", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177562903-L.jpg";
    },
    {
      titleEn = "Feluda Samagra Vol 1";
      titleBn = "ফেলুদা সমগ্র ১";
      authorEn = "Satyajit Ray";
      authorBn = "সত্যজিৎ রায়";
      descriptionEn = "The first volume of the complete Feluda detective stories by Satyajit Ray, featuring Bengal's most beloved fictional detective and his adventures.";
      descriptionBn = "সত্যজিৎ রায়ের সম্পূর্ণ ফেলুদা গোয়েন্দা গল্পের প্রথম খণ্ড — বাংলার সর্বাধিক প্রিয় কাল্পনিক গোয়েন্দার অ্যাডভেঞ্চার।";
      isbn = "9788177561517";
      genre = "#fiction";
      language = "#bengali";
      price = 449;
      stock = 200;
      rating = 4.9;
      tags = ["fiction", "bengali", "detective", "feluda", "satyajit ray"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177561517-L.jpg";
    },
    {
      titleEn = "Hajar Churashir Ma (Mother of 1084)";
      titleBn = "হাজার চুরাশির মা";
      authorEn = "Mahasweta Devi";
      authorBn = "মহাশ্বেতা দেবী";
      descriptionEn = "Mahasweta Devi's iconic novella about a mother who discovers her son was a Naxalite, exploring political violence and maternal grief in Bengal.";
      descriptionBn = "মহাশ্বেতা দেবীর আইকনিক উপন্যাস — একজন মা আবিষ্কার করেন তাঁর ছেলে নকশালপন্থী ছিল; বাংলায় রাজনৈতিক সহিংসতা ও মাতৃ-শোকের অন্বেষণ।";
      isbn = "9788177562477";
      genre = "#fiction";
      language = "#bengali";
      price = 249;
      stock = 110;
      rating = 4.9;
      tags = ["fiction", "bengali", "politics", "mother", "mahasweta devi"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177562477-L.jpg";
    }
  ];
}
