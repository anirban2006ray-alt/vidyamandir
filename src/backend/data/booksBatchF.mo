module {
  public let books : [{
    titleEn: Text; titleBn: Text; authorEn: Text; authorBn: Text;
    descriptionEn: Text; descriptionBn: Text;
    isbn: Text; genre: Text; language: Text;
    price: Nat; stock: Nat; rating: Float;
    tags: [Text]; coverImageUrl: Text
  }] = [
    {
      titleEn = "Oliver Twist"; titleBn = "অলিভার টুইস্ট";
      authorEn = "Charles Dickens"; authorBn = "চার্লস ডিকেন্স";
      descriptionEn = "The gripping story of a young orphan who escapes a life of crime and finds his place in the world."; descriptionBn = "একজন তরুণ অনাথের আকর্ষণীয় গল্প যিনি অপরাধময় জীবন থেকে মুক্তি পেয়ে বিশ্বে তার স্থান খুঁজে পান।";
      isbn = "9780141439693"; genre = "#fiction"; language = "#english";
      price = 399; stock = 80; rating = 4.7;
      tags = ["dickens", "orphan", "victorian", "classic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439693-L.jpg"
    },
    {
      titleEn = "A Tale of Two Cities"; titleBn = "দুই শহরের গল্প";
      authorEn = "Charles Dickens"; authorBn = "চার্লস ডিকেন্স";
      descriptionEn = "Set in London and Paris during the French Revolution, this is Dickens' most dramatic historical novel."; descriptionBn = "ফরাসি বিপ্লবের সময় লন্ডন ও প্যারিসে স্থাপিত, এটি ডিকেন্সের সবচেয়ে নাটকীয় ঐতিহাসিক উপন্যাস।";
      isbn = "9780141439600"; genre = "#fiction"; language = "#english";
      price = 399; stock = 75; rating = 4.8;
      tags = ["dickens", "french-revolution", "historical", "classic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439600-L.jpg"
    },
    {
      titleEn = "Great Expectations"; titleBn = "গ্রেট এক্সপেক্টেশন্স";
      authorEn = "Charles Dickens"; authorBn = "চার্লস ডিকেন্স";
      descriptionEn = "Pip's journey from poverty to gentleman, full of mystery, love, and the search for identity."; descriptionBn = "দারিদ্র্য থেকে ভদ্রলোক হওয়ার পিপের যাত্রা, রহস্য, প্রেম ও পরিচয়ের সন্ধানে পূর্ণ।";
      isbn = "9780141439563"; genre = "#fiction"; language = "#english";
      price = 420; stock = 70; rating = 4.8;
      tags = ["dickens", "bildungsroman", "victorian", "identity"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439563-L.jpg"
    },
    {
      titleEn = "David Copperfield"; titleBn = "ডেভিড কপারফিল্ড";
      authorEn = "Charles Dickens"; authorBn = "চার্লস ডিকেন্স";
      descriptionEn = "Dickens' favourite of his own novels, a semi-autobiographical account of a young man's life."; descriptionBn = "ডিকেন্সের নিজের পছন্দের উপন্যাস, একজন তরুণের জীবনের আধা-আত্মজীবনীমূলক বিবরণ।";
      isbn = "9780141439549"; genre = "#fiction"; language = "#english";
      price = 450; stock = 65; rating = 4.8;
      tags = ["dickens", "autobiographical", "victorian", "bildungsroman"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439549-L.jpg"
    },
    {
      titleEn = "Pride and Prejudice"; titleBn = "প্রাইড অ্যান্ড প্রেজুডিস";
      authorEn = "Jane Austen"; authorBn = "জেন অস্টেন";
      descriptionEn = "The beloved classic about Elizabeth Bennet and Mr Darcy — wit, romance, and social observation."; descriptionBn = "এলিজাবেথ বেনেট ও মিস্টার ডার্সি সম্পর্কে প্রিয় ক্লাসিক — রসিকতা, রোমান্স ও সামাজিক পর্যবেক্ষণ।";
      isbn = "9780141439518"; genre = "#fiction"; language = "#english";
      price = 350; stock = 100; rating = 4.9;
      tags = ["austen", "romance", "social", "iconic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg"
    },
    {
      titleEn = "Sense and Sensibility"; titleBn = "সেন্স অ্যান্ড সেন্সিবিলিটি";
      authorEn = "Jane Austen"; authorBn = "জেন অস্টেন";
      descriptionEn = "Two sisters with contrasting personalities navigate love, heartbreak, and propriety."; descriptionBn = "বিপরীত ব্যক্তিত্বের দুই বোন প্রেম, হৃদয়বেদনা ও শালীনতার মধ্যে পথ চলেন।";
      isbn = "9780141439662"; genre = "#fiction"; language = "#english";
      price = 350; stock = 85; rating = 4.7;
      tags = ["austen", "romance", "sisters", "social"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439662-L.jpg"
    },
    {
      titleEn = "Emma"; titleBn = "এমা";
      authorEn = "Jane Austen"; authorBn = "জেন অস্টেন";
      descriptionEn = "A clever matchmaker navigates her own heart and social dynamics in Regency England."; descriptionBn = "রিজেন্সি ইংল্যান্ডে একজন চতুর ঘটকালি নিজের হৃদয় ও সামাজিক গতিবিদ্যার মধ্যে পথ চলেন।";
      isbn = "9780141439587"; genre = "#fiction"; language = "#english";
      price = 350; stock = 80; rating = 4.7;
      tags = ["austen", "comedy", "social", "matchmaking"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439587-L.jpg"
    },
    {
      titleEn = "Nineteen Eighty-Four"; titleBn = "নাইনটিন এইটি-ফোর";
      authorEn = "George Orwell"; authorBn = "জর্জ অরওয়েল";
      descriptionEn = "The most powerful warning against totalitarianism ever written, still chillingly relevant today."; descriptionBn = "কর্তৃত্ববাদের বিরুদ্ধে কখনও লেখা সবচেয়ে শক্তিশালী সতর্কবার্তা, আজও শিহরণ-উদ্দীপকভাবে প্রাসঙ্গিক।";
      isbn = "9780141036144"; genre = "#fiction"; language = "#english";
      price = 399; stock = 100; rating = 4.9;
      tags = ["orwell", "dystopia", "totalitarianism", "iconic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141036144-L.jpg"
    },
    {
      titleEn = "Animal Farm"; titleBn = "অ্যানিমাল ফার্ম";
      authorEn = "George Orwell"; authorBn = "জর্জ অরওয়েল";
      descriptionEn = "A satirical allegory about the betrayal of a revolution and the corruption of power."; descriptionBn = "একটি বিপ্লবের বিশ্বাসঘাতকতা ও ক্ষমতার দুর্নীতি নিয়ে একটি ব্যঙ্গাত্মক রূপকথা।";
      isbn = "9780141036137"; genre = "#fiction"; language = "#english";
      price = 299; stock = 100; rating = 4.8;
      tags = ["orwell", "satire", "allegory", "politics"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141036137-L.jpg"
    },
    {
      titleEn = "The Old Man and the Sea"; titleBn = "দ্য ওল্ড ম্যান অ্যান্ড দ্য সি";
      authorEn = "Ernest Hemingway"; authorBn = "আর্নেস্ট হেমিংওয়ে";
      descriptionEn = "An old fisherman's epic struggle with a giant marlin — a Pulitzer Prize-winning masterpiece."; descriptionBn = "একজন বৃদ্ধ জেলের বিশাল মার্লিনের সাথে মহাকাব্যিক সংগ্রাম — একটি পুলিৎজার পুরস্কার বিজয়ী মাস্টারপিস।";
      isbn = "9780684801223"; genre = "#fiction"; language = "#english";
      price = 350; stock = 85; rating = 4.8;
      tags = ["hemingway", "pulitzer", "sea", "perseverance"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780684801223-L.jpg"
    },
    {
      titleEn = "A Farewell to Arms"; titleBn = "এ ফেয়ারওয়েল টু আর্মস";
      authorEn = "Ernest Hemingway"; authorBn = "আর্নেস্ট হেমিংওয়ে";
      descriptionEn = "A love story set against the backdrop of the First World War — haunting and unforgettable."; descriptionBn = "প্রথম বিশ্বযুদ্ধের পটভূমিতে একটি প্রেমের গল্প — হৃদয়গ্রাহী এবং অবিস্মরণীয়।";
      isbn = "9780684174921"; genre = "#fiction"; language = "#english";
      price = 399; stock = 75; rating = 4.7;
      tags = ["hemingway", "war", "love", "classic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780684174921-L.jpg"
    },
    {
      titleEn = "For Whom the Bell Tolls"; titleBn = "ফর হুম দ্য বেল টোলস";
      authorEn = "Ernest Hemingway"; authorBn = "আর্নেস্ট হেমিংওয়ে";
      descriptionEn = "Set during the Spanish Civil War, a story of loyalty, courage, and love in the face of death."; descriptionBn = "স্প্যানিশ গৃহযুদ্ধের পটভূমিতে, মৃত্যুর মুখে আনুগত্য, সাহস ও প্রেমের গল্প।";
      isbn = "9780684803357"; genre = "#fiction"; language = "#english";
      price = 420; stock = 70; rating = 4.7;
      tags = ["hemingway", "spanish-civil-war", "war", "loyalty"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780684803357-L.jpg"
    },
    {
      titleEn = "The Metamorphosis"; titleBn = "দ্য মেটামরফোসিস";
      authorEn = "Franz Kafka"; authorBn = "ফ্রান্জ কাফকা";
      descriptionEn = "A man wakes up as a giant insect — Kafka's dark, humorous, and deeply unsettling masterpiece."; descriptionBn = "একজন মানুষ একটি বিশাল পোকা হিসেবে জেগে ওঠেন — কাফকার অন্ধকার, রসিক ও গভীরভাবে অস্থির করে দেওয়া মাস্টারপিস।";
      isbn = "9780141182957"; genre = "#fiction"; language = "#english";
      price = 299; stock = 80; rating = 4.8;
      tags = ["kafka", "existential", "surreal", "dark-humour"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141182957-L.jpg"
    },
    {
      titleEn = "The Trial"; titleBn = "দ্য ট্রায়াল";
      authorEn = "Franz Kafka"; authorBn = "ফ্রান্জ কাফকা";
      descriptionEn = "A man is arrested and put on trial for a crime he never learns about — a chilling modern parable."; descriptionBn = "একজন মানুষকে গ্রেফতার করা হয় এবং এমন একটি অপরাধের জন্য বিচার করা হয় যার সম্পর্কে তিনি কখনও জানেন না।";
      isbn = "9780805210408"; genre = "#fiction"; language = "#english";
      price = 350; stock = 70; rating = 4.7;
      tags = ["kafka", "bureaucracy", "absurdist", "existential"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780805210408-L.jpg"
    },
    {
      titleEn = "One Hundred Years of Solitude"; titleBn = "ওয়ান হান্ড্রেড ইয়ার্স অব সলিচিউড";
      authorEn = "Gabriel Garcia Marquez"; authorBn = "গ্যাব্রিয়েল গার্সিয়া মার্কেজ";
      descriptionEn = "The Nobel Prize-winning saga of the Buendia family — the pinnacle of magical realism."; descriptionBn = "বুয়েন্দিয়া পরিবারের নোবেল পুরস্কার বিজয়ী মহাকাব্য — জাদু বাস্তববাদের শীর্ষ।";
      isbn = "9780060883287"; genre = "#fiction"; language = "#english";
      price = 499; stock = 80; rating = 4.9;
      tags = ["marquez", "magical-realism", "nobel", "latin-america"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780060883287-L.jpg"
    },
    {
      titleEn = "Love in the Time of Cholera"; titleBn = "লাভ ইন দ্য টাইম অব কলেরা";
      authorEn = "Gabriel Garcia Marquez"; authorBn = "গ্যাব্রিয়েল গার্সিয়া মার্কেজ";
      descriptionEn = "A man waits fifty years for the woman he loves — Marquez's most romantic and moving novel."; descriptionBn = "একজন মানুষ পঞ্চাশ বছর ধরে যে মহিলাকে ভালোবাসেন তার জন্য অপেক্ষা করেন।";
      isbn = "9780307389732"; genre = "#fiction"; language = "#english";
      price = 450; stock = 75; rating = 4.8;
      tags = ["marquez", "romance", "magical-realism", "waiting"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780307389732-L.jpg"
    },
    {
      titleEn = "Crime and Punishment"; titleBn = "ক্রাইম অ্যান্ড পানিশমেন্ট";
      authorEn = "Fyodor Dostoevsky"; authorBn = "ফিওদর দস্তয়েভস্কি";
      descriptionEn = "The psychological saga of a student who commits murder and his descent into guilt and redemption."; descriptionBn = "একজন ছাত্রের মানসিক মহাকাব্য যিনি হত্যা করেন এবং অপরাধবোধ ও মুক্তির দিকে তাঁর পতন।";
      isbn = "9780140449136"; genre = "#fiction"; language = "#english";
      price = 450; stock = 80; rating = 4.9;
      tags = ["dostoevsky", "psychological", "murder", "redemption"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140449136-L.jpg"
    },
    {
      titleEn = "The Brothers Karamazov"; titleBn = "দ্য ব্রাদার্স কারামাজভ";
      authorEn = "Fyodor Dostoevsky"; authorBn = "ফিওদর দস্তয়েভস্কি";
      descriptionEn = "Dostoevsky's final masterpiece — a philosophical family saga about faith, free will, and morality."; descriptionBn = "দস্তয়েভস্কির চূড়ান্ত মাস্টারপিস — বিশ্বাস, মুক্ত ইচ্ছা ও নৈতিকতা সম্পর্কে একটি দার্শনিক পারিবারিক মহাকাব্য।";
      isbn = "9780374528379"; genre = "#fiction"; language = "#english";
      price = 499; stock = 70; rating = 4.9;
      tags = ["dostoevsky", "philosophical", "faith", "family"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780374528379-L.jpg"
    },
    {
      titleEn = "The Idiot"; titleBn = "দ্য ইডিয়ট";
      authorEn = "Fyodor Dostoevsky"; authorBn = "ফিওদর দস্তয়েভস্কি";
      descriptionEn = "A perfectly good man enters corrupt Russian society — what happens to goodness in a flawed world?"; descriptionBn = "একজন নিখুঁত ভালো মানুষ দুর্নীতিগ্রস্ত রাশিয়ান সমাজে প্রবেশ করেন — ত্রুটিপূর্ণ পৃথিবীতে সুকৃতির কী হয়?";
      isbn = "9780140447927"; genre = "#fiction"; language = "#english";
      price = 450; stock = 65; rating = 4.8;
      tags = ["dostoevsky", "goodness", "society", "philosophical"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140447927-L.jpg"
    },
    {
      titleEn = "War and Peace"; titleBn = "ওয়ার অ্যান্ড পিস";
      authorEn = "Leo Tolstoy"; authorBn = "লিও তলস্তয়";
      descriptionEn = "Tolstoy's monumental epic — Napoleon's invasion of Russia through the eyes of five aristocratic families."; descriptionBn = "তলস্তয়ের বিশাল মহাকাব্য — পাঁচটি অভিজাত পরিবারের চোখ দিয়ে নেপোলিয়নের রাশিয়া আক্রমণ।";
      isbn = "9780140447934"; genre = "#fiction"; language = "#english";
      price = 599; stock = 60; rating = 4.9;
      tags = ["tolstoy", "epic", "napoleonic-war", "russian-literature"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140447934-L.jpg"
    },
    {
      titleEn = "Anna Karenina"; titleBn = "আনা কারেনিনা";
      authorEn = "Leo Tolstoy"; authorBn = "লিও তলস্তয়";
      descriptionEn = "The tragic story of a married woman's affair and the hypocritical society that destroys her."; descriptionBn = "একজন বিবাহিত মহিলার বিবাহবহির্ভূত সম্পর্কের করুণ গল্প এবং তাকে ধ্বংস করে দেওয়া ভণ্ড সমাজ।";
      isbn = "9780140449174"; genre = "#fiction"; language = "#english";
      price = 499; stock = 75; rating = 4.9;
      tags = ["tolstoy", "tragic", "adultery", "russian-society"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140449174-L.jpg"
    },
    {
      titleEn = "Hamlet"; titleBn = "হ্যামলেট";
      authorEn = "William Shakespeare"; authorBn = "উইলিয়াম শেক্সপিয়ার";
      descriptionEn = "The prince of Denmark confronts revenge, mortality, and madness in Shakespeare's greatest tragedy."; descriptionBn = "ডেনমার্কের যুবরাজ শেক্সপিয়ারের সর্বশ্রেষ্ঠ ট্র্যাজেডিতে প্রতিশোধ, মৃত্যুমুখিতা ও পাগলামির মুখোমুখি হন।";
      isbn = "9780743477123"; genre = "#fiction"; language = "#english";
      price = 350; stock = 90; rating = 4.9;
      tags = ["shakespeare", "tragedy", "revenge", "iconic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743477123-L.jpg"
    },
    {
      titleEn = "Othello"; titleBn = "ওথেলো";
      authorEn = "William Shakespeare"; authorBn = "উইলিয়াম শেক্সপিয়ার";
      descriptionEn = "Jealousy, betrayal, and racial prejudice in this timeless tragedy of a noble Moorish general."; descriptionBn = "একজন মহৎ মুর জেনারেলের এই কালজয়ী ট্র্যাজেডিতে ঈর্ষা, বিশ্বাসঘাতকতা ও বর্ণবৈষম্য।";
      isbn = "9780743477550"; genre = "#fiction"; language = "#english";
      price = 320; stock = 80; rating = 4.7;
      tags = ["shakespeare", "tragedy", "jealousy", "race"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743477550-L.jpg"
    },
    {
      titleEn = "Macbeth"; titleBn = "ম্যাকবেথ";
      authorEn = "William Shakespeare"; authorBn = "উইলিয়াম শেক্সপিয়ার";
      descriptionEn = "A brave soldier is consumed by ambition, tyranny, and guilt in Shakespeare's darkest play."; descriptionBn = "শেক্সপিয়ারের সবচেয়ে অন্ধকার নাটকে একজন সাহসী সৈনিক উচ্চাকাঙ্ক্ষা, স্বৈরাচার ও অপরাধবোধে গ্রাস হয়ে যান।";
      isbn = "9780743477109"; genre = "#fiction"; language = "#english";
      price = 320; stock = 85; rating = 4.8;
      tags = ["shakespeare", "tragedy", "ambition", "tyranny"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743477109-L.jpg"
    },
    {
      titleEn = "King Lear"; titleBn = "কিং লিয়ার";
      authorEn = "William Shakespeare"; authorBn = "উইলিয়াম শেক্সপিয়ার";
      descriptionEn = "An ageing king divides his kingdom among his daughters with devastating consequences."; descriptionBn = "একজন বার্ধক্যপ্রাপ্ত রাজা বিধ্বংসী পরিণতি সহ তার কন্যাদের মধ্যে তার রাজ্য ভাগ করে দেন।";
      isbn = "9780743477512"; genre = "#fiction"; language = "#english";
      price = 320; stock = 80; rating = 4.8;
      tags = ["shakespeare", "tragedy", "family", "betrayal"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743477512-L.jpg"
    },
    {
      titleEn = "Things Fall Apart"; titleBn = "থিংস ফল অ্যাপার্ট";
      authorEn = "Chinua Achebe"; authorBn = "চিনুয়া আচেবে";
      descriptionEn = "The classic African novel about Okonkwo and the destruction of Igbo society by colonialism."; descriptionBn = "ওকোনকো ও ঔপনিবেশিকতার দ্বারা ইগবো সমাজের ধ্বংস নিয়ে ক্লাসিক আফ্রিকান উপন্যাস।";
      isbn = "9780385474542"; genre = "#fiction"; language = "#english";
      price = 399; stock = 75; rating = 4.8;
      tags = ["achebe", "africa", "colonialism", "identity"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780385474542-L.jpg"
    },
    {
      titleEn = "Midnight's Children"; titleBn = "মিডনাইটস চিলড্রেন";
      authorEn = "Salman Rushdie"; authorBn = "সালমান রুশদি";
      descriptionEn = "Children born at the moment of India's independence are magically linked — a Booker Prize epic."; descriptionBn = "ভারতের স্বাধীনতার মুহূর্তে জন্ম নেওয়া শিশুরা জাদুকরীভাবে সংযুক্ত — একটি বুকার পুরস্কার মহাকাব্য।";
      isbn = "9780099578512"; genre = "#fiction"; language = "#english";
      price = 499; stock = 70; rating = 4.8;
      tags = ["rushdie", "india", "independence", "magical-realism"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780099578512-L.jpg"
    },
    {
      titleEn = "The Satanic Verses"; titleBn = "দ্য স্যাটানিক ভার্সেস";
      authorEn = "Salman Rushdie"; authorBn = "সালমান রুশদি";
      descriptionEn = "A controversial and brilliant novel about identity, religion, and the immigrant experience."; descriptionBn = "পরিচয়, ধর্ম ও অভিবাসী অভিজ্ঞতা সম্পর্কে একটি বিতর্কিত ও উজ্জ্বল উপন্যাস।";
      isbn = "9780312270001"; genre = "#fiction"; language = "#english";
      price = 499; stock = 55; rating = 4.5;
      tags = ["rushdie", "controversial", "identity", "religion"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780312270001-L.jpg"
    },
    {
      titleEn = "The God of Small Things"; titleBn = "দ্য গড অব স্মল থিংস";
      authorEn = "Arundhati Roy"; authorBn = "অরুন্ধতী রায়";
      descriptionEn = "A Booker Prize-winning debut about forbidden love and caste taboo in Kerala."; descriptionBn = "কেরালায় নিষিদ্ধ প্রেম ও জাতিভেদ নিষেধের নিয়ে বুকার পুরস্কার বিজয়ী প্রথম উপন্যাস।";
      isbn = "9780006551096"; genre = "#fiction"; language = "#english";
      price = 450; stock = 80; rating = 4.9;
      tags = ["arundhati-roy", "india", "caste", "booker"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780006551096-L.jpg"
    },
    {
      titleEn = "A Suitable Boy"; titleBn = "এ সুইটেবল বয়";
      authorEn = "Vikram Seth"; authorBn = "বিক্রম শেঠ";
      descriptionEn = "One of the longest novels in English — a sweeping portrait of post-independence India and its people."; descriptionBn = "ইংরেজিতে দীর্ঘতম উপন্যাসগুলির একটি — স্বাধীনতা-পরবর্তী ভারত ও তার মানুষের একটি বিশাল চিত্র।";
      isbn = "9780060170790"; genre = "#fiction"; language = "#english";
      price = 599; stock = 55; rating = 4.7;
      tags = ["vikram-seth", "india", "epic", "post-independence"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780060170790-L.jpg"
    },
    {
      titleEn = "Malgudi Days"; titleBn = "মালগুড়ি ডেজ";
      authorEn = "R.K. Narayan"; authorBn = "আর কে নারায়ণ";
      descriptionEn = "Enchanting short stories set in the fictional Indian town of Malgudi, full of warmth and humour."; descriptionBn = "কাল্পনিক ভারতীয় শহর মালগুড়িতে স্থাপিত মনোরম ছোটগল্প, উষ্ণতা ও রসিকতায় পূর্ণ।";
      isbn = "9780143039655"; genre = "#fiction"; language = "#english";
      price = 350; stock = 80; rating = 4.7;
      tags = ["narayan", "india", "short-stories", "malgudi"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780143039655-L.jpg"
    },
    {
      titleEn = "The Guide"; titleBn = "দ্য গাইড";
      authorEn = "R.K. Narayan"; authorBn = "আর কে নারায়ণ";
      descriptionEn = "A Sahitya Akademi Award-winning novel about a tourist guide who becomes an unlikely saint."; descriptionBn = "একজন ট্যুরিস্ট গাইড সম্পর্কে সাহিত্য আকাদেমি পুরস্কার বিজয়ী উপন্যাস যিনি অপ্রত্যাশিতভাবে একজন সাধু হয়ে ওঠেন।";
      isbn = "9780143039648"; genre = "#fiction"; language = "#english";
      price = 350; stock = 75; rating = 4.7;
      tags = ["narayan", "india", "sahitya-akademi", "spiritual"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780143039648-L.jpg"
    },
    {
      titleEn = "Wuthering Heights"; titleBn = "উদারিং হাইটস";
      authorEn = "Emily Bronte"; authorBn = "এমিলি ব্রন্টে";
      descriptionEn = "A wild and passionate love story set on the moors of Yorkshire — one of literature's greatest romances."; descriptionBn = "ইয়র্কশায়ারের মুরভূমিতে স্থাপিত একটি বন্য ও আবেগময় প্রেমের গল্প — সাহিত্যের অন্যতম মহান রোমান্স।";
      isbn = "9780141439556"; genre = "#fiction"; language = "#english";
      price = 350; stock = 75; rating = 4.7;
      tags = ["bronte", "gothic", "romance", "moors"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439556-L.jpg"
    },
    {
      titleEn = "Jane Eyre"; titleBn = "জেন আয়ার";
      authorEn = "Charlotte Bronte"; authorBn = "শার্লট ব্রন্টে";
      descriptionEn = "A governess with fierce independence and moral conviction falls in love with the mysterious Mr Rochester."; descriptionBn = "তীব্র স্বাধীনতা ও নৈতিক দৃঢ়তাসম্পন্ন একজন গভর্নেস রহস্যময় মিস্টার রচেস্টারের প্রেমে পড়েন।";
      isbn = "9780141441146"; genre = "#fiction"; language = "#english";
      price = 350; stock = 80; rating = 4.8;
      tags = ["bronte", "governess", "romance", "feminist"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg"
    },
    {
      titleEn = "To Kill a Mockingbird"; titleBn = "টু কিল অ্যা মকিংবার্ড";
      authorEn = "Harper Lee"; authorBn = "হার্পার লি";
      descriptionEn = "A Pulitzer Prize-winning novel about racial injustice and moral courage in the American South."; descriptionBn = "আমেরিকান দক্ষিণে বর্ণবৈষম্য ও নৈতিক সাহস নিয়ে একটি পুলিৎজার পুরস্কার বিজয়ী উপন্যাস।";
      isbn = "9780061935466"; genre = "#fiction"; language = "#english";
      price = 399; stock = 90; rating = 4.9;
      tags = ["harper-lee", "racism", "justice", "pulitzer"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780061935466-L.jpg"
    },
    {
      titleEn = "The Catcher in the Rye"; titleBn = "দ্য ক্যাচার ইন দ্য রাই";
      authorEn = "J.D. Salinger"; authorBn = "জে ডি সেলিঞ্জার";
      descriptionEn = "Holden Caulfield's alienated wandering through New York City — the voice of teenage rebellion."; descriptionBn = "নিউ ইয়র্ক শহরে হোল্ডেন কলফিল্ডের বিচ্ছিন্ন ঘোরাফেরা — কিশোর বিদ্রোহের কণ্ঠস্বর।";
      isbn = "9780316769174"; genre = "#fiction"; language = "#english";
      price = 350; stock = 85; rating = 4.6;
      tags = ["salinger", "teen", "rebellion", "alienation"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780316769174-L.jpg"
    },
    {
      titleEn = "Lord of the Flies"; titleBn = "লর্ড অব দ্য ফ্লাইস";
      authorEn = "William Golding"; authorBn = "উইলিয়াম গোল্ডিং";
      descriptionEn = "Stranded boys descend into savagery on a deserted island — a dark allegory of human nature."; descriptionBn = "আটকে পড়া ছেলেরা একটি নির্জন দ্বীপে বর্বরতার দিকে নেমে যায় — মানব প্রকৃতির একটি অন্ধকার রূপকথা।";
      isbn = "9780571056866"; genre = "#fiction"; language = "#english";
      price = 350; stock = 80; rating = 4.7;
      tags = ["golding", "allegory", "human-nature", "children"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780571056866-L.jpg"
    },
    {
      titleEn = "Brave New World"; titleBn = "ব্রেভ নিউ ওয়ার্ল্ড";
      authorEn = "Aldous Huxley"; authorBn = "অল্ডাস হাক্সলি";
      descriptionEn = "A chilling dystopian vision of a future world where conformity and pleasure have replaced freedom."; descriptionBn = "একটি ভবিষ্যত বিশ্বের শিহরণ-উদ্দীপক ডিস্টোপিয়ান দৃষ্টিভঙ্গি যেখানে অনুগত্য ও আনন্দ স্বাধীনতার স্থান নিয়েছে।";
      isbn = "9780060850524"; genre = "#fiction"; language = "#english";
      price = 380; stock = 75; rating = 4.7;
      tags = ["huxley", "dystopia", "conformity", "future"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg"
    },
    {
      titleEn = "Don Quixote"; titleBn = "ডন কুইক্সোট";
      authorEn = "Miguel de Cervantes"; authorBn = "মিগুয়েল ডি সার্ভান্তেস";
      descriptionEn = "The world's first novel — an idealistic knight tilts at windmills and dreams of glory."; descriptionBn = "বিশ্বের প্রথম উপন্যাস — একজন আদর্শবাদী নাইট বায়ুকলের দিকে ঝুঁকে পড়েন এবং গৌরবের স্বপ্ন দেখেন।";
      isbn = "9780060934347"; genre = "#fiction"; language = "#english";
      price = 499; stock = 60; rating = 4.8;
      tags = ["cervantes", "first-novel", "idealism", "spain"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780060934347-L.jpg"
    },
    {
      titleEn = "The Stranger"; titleBn = "দ্য স্ট্রেঞ্জার";
      authorEn = "Albert Camus"; authorBn = "আলবেয়ার কামু";
      descriptionEn = "An emotionally detached man commits a random murder — Camus's exploration of absurdism."; descriptionBn = "একজন আবেগগতভাবে বিচ্ছিন্ন মানুষ একটি এলোমেলো হত্যাকাণ্ড করে — কামুর অযৌক্তিকতার অন্বেষণ।";
      isbn = "9780679720201"; genre = "#fiction"; language = "#english";
      price = 299; stock = 80; rating = 4.7;
      tags = ["camus", "absurdism", "existential", "french"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679720201-L.jpg"
    },
    {
      titleEn = "The Alchemist"; titleBn = "দ্য আলকেমিস্ট";
      authorEn = "Paulo Coelho"; authorBn = "পাওলো কোয়েলো";
      descriptionEn = "A shepherd boy's journey to find treasure leads him to self-discovery and wisdom."; descriptionBn = "রত্নভান্ডার খুঁজে পেতে একজন রাখালের যাত্রা তাকে আত্ম-আবিষ্কার ও জ্ঞানের দিকে নিয়ে যায়।";
      isbn = "9780062315007"; genre = "#fiction"; language = "#english";
      price = 350; stock = 100; rating = 4.7;
      tags = ["coelho", "journey", "self-discovery", "inspirational"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
    },
    {
      titleEn = "Siddhartha"; titleBn = "সিদ্ধার্থ";
      authorEn = "Hermann Hesse"; authorBn = "হেরমান হেসে";
      descriptionEn = "A young man's spiritual journey from privilege to enlightenment in ancient India."; descriptionBn = "প্রাচীন ভারতে বিশেষাধিকার থেকে আলোকায়নের দিকে একজন তরুণের আধ্যাত্মিক যাত্রা।";
      isbn = "9780553208849"; genre = "#fiction"; language = "#english";
      price = 320; stock = 85; rating = 4.8;
      tags = ["hesse", "spiritual", "buddhism", "india"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553208849-L.jpg"
    },
    {
      titleEn = "The Count of Monte Cristo"; titleBn = "দ্য কাউন্ট অব মন্টে ক্রিস্টো";
      authorEn = "Alexandre Dumas"; authorBn = "আলেক্সান্ডার ডুমা";
      descriptionEn = "A man unjustly imprisoned escapes and returns with a new identity to take revenge — a timeless adventure."; descriptionBn = "অন্যায়ভাবে কারাবন্দী একজন মানুষ পালিয়ে যান এবং প্রতিশোধ নিতে নতুন পরিচয়ে ফিরে আসেন।";
      isbn = "9780140449266"; genre = "#fiction"; language = "#english";
      price = 499; stock = 70; rating = 4.9;
      tags = ["dumas", "revenge", "adventure", "classic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140449266-L.jpg"
    },
    {
      titleEn = "Les Misérables"; titleBn = "লে মিজেরাব্ল";
      authorEn = "Victor Hugo"; authorBn = "ভিক্টর হুগো";
      descriptionEn = "The sweeping epic of Jean Valjean's redemption amid social inequality in 19th-century France."; descriptionBn = "১৯শ শতকের ফ্রান্সে সামাজিক বৈষম্যের মধ্যে জাঁ ভালজাঁর মুক্তির বিশাল মহাকাব্য।";
      isbn = "9780140444308"; genre = "#fiction"; language = "#english";
      price = 599; stock = 65; rating = 4.9;
      tags = ["hugo", "redemption", "social-justice", "epic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140444308-L.jpg"
    },
    {
      titleEn = "The Hunchback of Notre-Dame"; titleBn = "দ্য হাঞ্চব্যাক অব নটর-ডেম";
      authorEn = "Victor Hugo"; authorBn = "ভিক্টর হুগো";
      descriptionEn = "The tragic story of Quasimodo and Esmeralda in medieval Paris — a gothic masterpiece."; descriptionBn = "মধ্যযুগীয় প্যারিসে কোয়াসিমোডো ও এসমেরালদার করুণ গল্প — একটি গথিক মাস্টারপিস।";
      isbn = "9780140443530"; genre = "#fiction"; language = "#english";
      price = 450; stock = 60; rating = 4.7;
      tags = ["hugo", "gothic", "tragedy", "paris"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140443530-L.jpg"
    },
    {
      titleEn = "Madame Bovary"; titleBn = "মাদাম বোভারি";
      authorEn = "Gustave Flaubert"; authorBn = "গুস্তাভ ফ্লবেয়ার";
      descriptionEn = "A provincial doctor's wife dreams of romance and luxury, leading to ruin — a masterpiece of realism."; descriptionBn = "একজন প্রাদেশিক ডাক্তারের স্ত্রী রোমান্স ও বিলাসিতার স্বপ্ন দেখেন, যা ধ্বংসের দিকে নিয়ে যায়।";
      isbn = "9780140449129"; genre = "#fiction"; language = "#english";
      price = 380; stock = 70; rating = 4.7;
      tags = ["flaubert", "realism", "romance", "french-classic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140449129-L.jpg"
    },
    {
      titleEn = "In Search of Lost Time (Volume 1)"; titleBn = "ইন সার্চ অব লস্ট টাইম (প্রথম খণ্ড)";
      authorEn = "Marcel Proust"; authorBn = "মার্সেল প্রুস্ট";
      descriptionEn = "Proust's monumental novel about memory, time, and art begins with a famous madeleine."; descriptionBn = "স্মৃতি, সময় ও শিল্প সম্পর্কে প্রুস্তের বিশাল উপন্যাস একটি বিখ্যাত মাদেলেইন দিয়ে শুরু হয়।";
      isbn = "9780300053944"; genre = "#fiction"; language = "#english";
      price = 499; stock = 50; rating = 4.8;
      tags = ["proust", "memory", "time", "modernist"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780300053944-L.jpg"
    },
    {
      titleEn = "Ulysses"; titleBn = "ইউলিসিস";
      authorEn = "James Joyce"; authorBn = "জেমস জয়েস";
      descriptionEn = "A single day in Dublin told through stream of consciousness — the most influential modernist novel."; descriptionBn = "স্মৃতির প্রবাহের মাধ্যমে ডাবলিনে একটি একক দিন বলা হয়েছে — সবচেয়ে প্রভাবশালী আধুনিকতাবাদী উপন্যাস।";
      isbn = "9780679722762"; genre = "#fiction"; language = "#english";
      price = 499; stock = 50; rating = 4.6;
      tags = ["joyce", "modernist", "stream-of-consciousness", "ireland"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679722762-L.jpg"
    },
    {
      titleEn = "Mrs Dalloway"; titleBn = "মিসেস ডালোওয়ে";
      authorEn = "Virginia Woolf"; authorBn = "ভার্জিনিয়া উলফ";
      descriptionEn = "A single day in London traced through inner consciousness — a landmark of feminist modernism."; descriptionBn = "অভ্যন্তরীণ চেতনার মাধ্যমে লন্ডনে একটি একক দিন অনুসরণ করা — নারীবাদী আধুনিকতাবাদের একটি মাইলফলক।";
      isbn = "9780156628709"; genre = "#fiction"; language = "#english";
      price = 350; stock = 70; rating = 4.6;
      tags = ["woolf", "modernist", "feminist", "consciousness"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780156628709-L.jpg"
    },
    {
      titleEn = "To the Lighthouse"; titleBn = "টু দ্য লাইটহাউস";
      authorEn = "Virginia Woolf"; authorBn = "ভার্জিনিয়া উলফ";
      descriptionEn = "Time, grief, and the inner lives of a family on a Scottish island — Woolf's most celebrated novel."; descriptionBn = "একটি স্কটিশ দ্বীপে একটি পরিবারের সময়, শোক ও অভ্যন্তরীণ জীবন — উলফের সবচেয়ে বিখ্যাত উপন্যাস।";
      isbn = "9780156907395"; genre = "#fiction"; language = "#english";
      price = 350; stock = 65; rating = 4.7;
      tags = ["woolf", "modernist", "grief", "consciousness"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780156907395-L.jpg"
    },
    {
      titleEn = "The Great Gatsby"; titleBn = "দ্য গ্রেট গ্যাটসবি";
      authorEn = "F. Scott Fitzgerald"; authorBn = "এফ স্কট ফিটজেরাল্ড";
      descriptionEn = "The American Dream unmasked — the glittering, hollow world of Jay Gatsby and the Roaring Twenties."; descriptionBn = "আমেরিকান স্বপ্ন উন্মোচিত — জে গ্যাটসবির চকচকে, ফাঁকা বিশ্ব এবং গর্জমান বিশের দশক।";
      isbn = "9780743273565"; genre = "#fiction"; language = "#english";
      price = 350; stock = 90; rating = 4.7;
      tags = ["fitzgerald", "american-dream", "jazz-age", "classic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg"
    },
    {
      titleEn = "Of Mice and Men"; titleBn = "অব মাইস অ্যান্ড মেন";
      authorEn = "John Steinbeck"; authorBn = "জন স্টেইনবেক";
      descriptionEn = "Two itinerant workers dream of a better life in this shattering Depression-era novella."; descriptionBn = "দুজন ভ্রাম্যমাণ শ্রমিক এই বিধ্বংসী মহামন্দার যুগের উপন্যাসে একটি ভালো জীবনের স্বপ্ন দেখেন।";
      isbn = "9780140177398"; genre = "#fiction"; language = "#english";
      price = 299; stock = 80; rating = 4.7;
      tags = ["steinbeck", "depression", "friendship", "dream"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140177398-L.jpg"
    },
    {
      titleEn = "The Grapes of Wrath"; titleBn = "দ্য গ্রেপস অব র‍্যাথ";
      authorEn = "John Steinbeck"; authorBn = "জন স্টেইনবেক";
      descriptionEn = "The Joad family's migration during the Great Depression — a Pulitzer Prize epic of human endurance."; descriptionBn = "মহামন্দার সময় জোড পরিবারের মাইগ্রেশন — মানবিক সহনশীলতার পুলিৎজার পুরস্কার মহাকাব্য।";
      isbn = "9780143039433"; genre = "#fiction"; language = "#english";
      price = 450; stock = 70; rating = 4.8;
      tags = ["steinbeck", "depression", "migration", "pulitzer"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780143039433-L.jpg"
    },
    {
      titleEn = "Beloved"; titleBn = "বিলাভড";
      authorEn = "Toni Morrison"; authorBn = "টনি মরিসন";
      descriptionEn = "A former enslaved woman is haunted by her daughter's ghost — a Pulitzer Prize-winning masterpiece."; descriptionBn = "একজন প্রাক্তন দাস মহিলা তার মেয়ের ভূত দ্বারা আবিষ্ট — একটি পুলিৎজার পুরস্কার বিজয়ী মাস্টারপিস।";
      isbn = "9781400033416"; genre = "#fiction"; language = "#english";
      price = 420; stock = 70; rating = 4.9;
      tags = ["morrison", "slavery", "haunting", "pulitzer"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781400033416-L.jpg"
    },
    {
      titleEn = "Song of Solomon"; titleBn = "সং অব সলোমন";
      authorEn = "Toni Morrison"; authorBn = "টনি মরিসন";
      descriptionEn = "A young Black man's journey of self-discovery through family history and mythology."; descriptionBn = "পারিবারিক ইতিহাস ও পুরাণের মাধ্যমে একজন তরুণ কৃষ্ণাঙ্গ মানুষের আত্ম-আবিষ্কারের যাত্রা।";
      isbn = "9781400033423"; genre = "#fiction"; language = "#english";
      price = 399; stock = 65; rating = 4.8;
      tags = ["morrison", "mythology", "identity", "afro-american"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781400033423-L.jpg"
    },
    {
      titleEn = "The Complete Works of Shakespeare"; titleBn = "শেক্সপিয়ারের সম্পূর্ণ রচনাবলী";
      authorEn = "William Shakespeare"; authorBn = "উইলিয়াম শেক্সপিয়ার";
      descriptionEn = "All of Shakespeare's plays and sonnets in one volume — the foundation of English literature."; descriptionBn = "একটি খণ্ডে শেক্সপিয়ারের সমস্ত নাটক ও সনেট — ইংরেজি সাহিত্যের ভিত্তি।";
      isbn = "9780007902231"; genre = "#fiction"; language = "#english";
      price = 699; stock = 50; rating = 4.9;
      tags = ["shakespeare", "complete-works", "plays", "sonnets"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780007902231-L.jpg"
    },
    {
      titleEn = "The Tempest"; titleBn = "দ্য টেম্পেস্ট";
      authorEn = "William Shakespeare"; authorBn = "উইলিয়াম শেক্সপিয়ার";
      descriptionEn = "A magician on a deserted island, a sprite, and a monster — Shakespeare's final romantic comedy."; descriptionBn = "একটি নির্জন দ্বীপে একজন জাদুকর, একটি পরী ও একটি দানব — শেক্সপিয়ারের চূড়ান্ত রোমান্টিক কমেডি।";
      isbn = "9780743482837"; genre = "#fiction"; language = "#english";
      price = 299; stock = 75; rating = 4.7;
      tags = ["shakespeare", "magic", "island", "comedy"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743482837-L.jpg"
    },
    {
      titleEn = "The Picture of Dorian Gray"; titleBn = "দ্য পিকচার অব ডোরিয়ান গ্রে";
      authorEn = "Oscar Wilde"; authorBn = "অস্কার ওয়াইল্ড";
      descriptionEn = "A beautiful young man's portrait bears the weight of his moral corruption while he stays young."; descriptionBn = "একজন সুদর্শন তরুণের প্রতিকৃতি তার নৈতিক দুর্নীতির বোঝা বহন করে যখন তিনি তরুণ থাকেন।";
      isbn = "9780141439570"; genre = "#fiction"; language = "#english";
      price = 320; stock = 80; rating = 4.8;
      tags = ["wilde", "gothic", "morality", "beauty"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439570-L.jpg"
    },
    {
      titleEn = "Frankenstein"; titleBn = "ফ্র্যাঙ্কেনস্টেইন";
      authorEn = "Mary Shelley"; authorBn = "ম্যারি শেলি";
      descriptionEn = "The first science fiction novel — a scientist creates a monster and faces the horror of his creation."; descriptionBn = "প্রথম বিজ্ঞান কল্পকাহিনী উপন্যাস — একজন বিজ্ঞানী একটি দানব তৈরি করেন এবং তার সৃষ্টির ভয়াবহতার মুখোমুখি হন।";
      isbn = "9780141439471"; genre = "#fiction"; language = "#english";
      price = 299; stock = 80; rating = 4.7;
      tags = ["shelley", "gothic", "science-fiction", "monster"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439471-L.jpg"
    },
    {
      titleEn = "Dracula"; titleBn = "ড্রাকুলা";
      authorEn = "Bram Stoker"; authorBn = "ব্রাম স্টোকার";
      descriptionEn = "The definitive vampire novel, told through letters and diaries, that spawned a million imitators."; descriptionBn = "চিঠি ও ডায়েরির মাধ্যমে বলা সংজ্ঞামূলক ভ্যাম্পায়ার উপন্যাস, যা লক্ষ লক্ষ অনুকরণকারী জন্ম দিয়েছে।";
      isbn = "9780141439846"; genre = "#fiction"; language = "#english";
      price = 320; stock = 75; rating = 4.7;
      tags = ["stoker", "vampire", "gothic", "horror"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439846-L.jpg"
    },
    {
      titleEn = "Moby Dick"; titleBn = "মবি ডিক";
      authorEn = "Herman Melville"; authorBn = "হারমান মেলভিল";
      descriptionEn = "Captain Ahab's obsessive hunt for the white whale — a towering achievement of American literature."; descriptionBn = "সাদা তিমির জন্য ক্যাপ্টেন আহাবের আবেশমূলক শিকার — আমেরিকান সাহিত্যের একটি বিশাল অর্জন।";
      isbn = "9780142437247"; genre = "#fiction"; language = "#english";
      price = 450; stock = 65; rating = 4.7;
      tags = ["melville", "whale", "obsession", "american-classic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780142437247-L.jpg"
    },
    {
      titleEn = "The Adventures of Huckleberry Finn"; titleBn = "দ্য অ্যাডভেঞ্চার্স অব হাকলবেরি ফিন";
      authorEn = "Mark Twain"; authorBn = "মার্ক টোয়েন";
      descriptionEn = "Huck Finn and Jim's river journey down the Mississippi — a landmark of American literature."; descriptionBn = "মিসিসিপি নদী দিয়ে হাক ফিন ও জিমের নদী যাত্রা — আমেরিকান সাহিত্যের একটি মাইলফলক।";
      isbn = "9780142437179"; genre = "#fiction"; language = "#english";
      price = 350; stock = 80; rating = 4.7;
      tags = ["twain", "adventure", "river", "american-classic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780142437179-L.jpg"
    },
    {
      titleEn = "Invisible Man"; titleBn = "ইনভিজিবল ম্যান";
      authorEn = "Ralph Ellison"; authorBn = "র‍্যালফ এলিসন";
      descriptionEn = "A Black man's invisibility in white America — a Pulitzer-level masterpiece of African-American literature."; descriptionBn = "শ্বেতাঙ্গ আমেরিকায় একজন কৃষ্ণাঙ্গ মানুষের অদৃশ্যতা — আফ্রিকান-আমেরিকান সাহিত্যের পুলিৎজার-স্তরের মাস্টারপিস।";
      isbn = "9780679732761"; genre = "#fiction"; language = "#english";
      price = 420; stock = 60; rating = 4.8;
      tags = ["ellison", "race", "identity", "american"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679732761-L.jpg"
    },
    {
      titleEn = "Slaughterhouse-Five"; titleBn = "স্লটারহাউস-ফাইভ";
      authorEn = "Kurt Vonnegut"; authorBn = "কার্ট ভনেগাট";
      descriptionEn = "A time-travelling soldier witnesses the bombing of Dresden — anti-war science fiction at its finest."; descriptionBn = "একজন সময়-ভ্রমণকারী সৈনিক ড্রেসডেন বোমা হামলা প্রত্যক্ষ করেন — সর্বোচ্চ মানের যুদ্ধ-বিরোধী বিজ্ঞান কল্পকাহিনী।";
      isbn = "9780385333481"; genre = "#fiction"; language = "#english";
      price = 380; stock = 70; rating = 4.8;
      tags = ["vonnegut", "anti-war", "time-travel", "satire"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780385333481-L.jpg"
    },
    {
      titleEn = "The Bell Jar"; titleBn = "দ্য বেল জার";
      authorEn = "Sylvia Plath"; authorBn = "সিলভিয়া প্লাথ";
      descriptionEn = "A semi-autobiographical descent into depression and recovery — a landmark feminist novel."; descriptionBn = "বিষণ্নতা ও পুনরুদ্ধারের আধা-আত্মজীবনীমূলক অবনতি — একটি মাইলফলক নারীবাদী উপন্যাস।";
      isbn = "9780061148514"; genre = "#fiction"; language = "#english";
      price = 350; stock = 70; rating = 4.6;
      tags = ["plath", "mental-health", "feminist", "semi-autobiographical"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780061148514-L.jpg"
    },
    {
      titleEn = "Catch-22"; titleBn = "ক্যাচ-২২";
      authorEn = "Joseph Heller"; authorBn = "জোসেফ হেলার";
      descriptionEn = "The definitive satire of military bureaucracy — absurdist, hilarious, and deeply anti-war."; descriptionBn = "সামরিক আমলাতন্ত্রের সংজ্ঞামূলক ব্যঙ্গ — অযৌক্তিক, হাস্যকর ও গভীরভাবে যুদ্ধ-বিরোধী।";
      isbn = "9780684833392"; genre = "#fiction"; language = "#english";
      price = 420; stock = 70; rating = 4.8;
      tags = ["heller", "war", "satire", "absurdist"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780684833392-L.jpg"
    },
    {
      titleEn = "The Kite Runner"; titleBn = "দ্য কাইট রানার";
      authorEn = "Khaled Hosseini"; authorBn = "খালেদ হোসেইনি";
      descriptionEn = "A story of friendship, betrayal, and redemption set in Afghanistan over thirty years."; descriptionBn = "ত্রিশ বছরেরও বেশি সময় ধরে আফগানিস্তানে স্থাপিত বন্ধুত্ব, বিশ্বাসঘাতকতা ও মুক্তির গল্প।";
      isbn = "9781594631931"; genre = "#fiction"; language = "#english";
      price = 399; stock = 85; rating = 4.8;
      tags = ["hosseini", "afghanistan", "redemption", "friendship"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg"
    },
    {
      titleEn = "A Thousand Splendid Suns"; titleBn = "এ থাউজ্যান্ড স্প্লেন্ডিড সান্স";
      authorEn = "Khaled Hosseini"; authorBn = "খালেদ হোসেইনি";
      descriptionEn = "Two Afghan women bound by fate and friendship in a war-torn country — profoundly moving."; descriptionBn = "যুদ্ধবিধ্বস্ত দেশে ভাগ্য ও বন্ধুত্বে বাঁধা দুজন আফগান মহিলা — গভীরভাবে হৃদয়গ্রাহী।";
      isbn = "9781594483073"; genre = "#fiction"; language = "#english";
      price = 399; stock = 80; rating = 4.8;
      tags = ["hosseini", "afghanistan", "women", "war"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781594483073-L.jpg"
    },
    {
      titleEn = "Life of Pi"; titleBn = "লাইফ অব পাই";
      authorEn = "Yann Martel"; authorBn = "ইয়ান মার্টেল";
      descriptionEn = "A boy and a Bengal tiger stranded on a lifeboat in the Pacific — a Man Booker Prize winner."; descriptionBn = "প্রশান্ত মহাসাগরে একটি ভেলায় আটকে পড়া একটি ছেলে ও একটি বাংলা বাঘ — ম্যান বুকার পুরস্কার বিজয়ী।";
      isbn = "9780156027328"; genre = "#fiction"; language = "#english";
      price = 399; stock = 80; rating = 4.7;
      tags = ["martel", "tiger", "survival", "booker"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780156027328-L.jpg"
    },
    {
      titleEn = "The Da Vinci Code"; titleBn = "দ্য দা ভিঞ্চি কোড";
      authorEn = "Dan Brown"; authorBn = "ড্যান ব্রাউন";
      descriptionEn = "A Harvard professor unravels a religious conspiracy hidden for centuries — a global bestseller."; descriptionBn = "একজন হার্ভার্ড অধ্যাপক শতাব্দী ধরে লুকানো একটি ধর্মীয় ষড়যন্ত্র উন্মোচন করেন — একটি বৈশ্বিক বেস্টসেলার।";
      isbn = "9780307474278"; genre = "#fiction"; language = "#english";
      price = 399; stock = 100; rating = 4.5;
      tags = ["dan-brown", "thriller", "conspiracy", "bestseller"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg"
    },
    {
      titleEn = "Harry Potter and the Philosopher's Stone"; titleBn = "হ্যারি পটার অ্যান্ড দ্য ফিলোসফারস স্টোন";
      authorEn = "J.K. Rowling"; authorBn = "জে কে রাউলিং";
      descriptionEn = "The orphan boy who discovers he is a wizard — the book that captured the imagination of a generation."; descriptionBn = "এতিম ছেলে যে আবিষ্কার করে সে একজন জাদুকর — যে বইটি একটি প্রজন্মের কল্পনাকে ধারণ করেছে।";
      isbn = "9780439708180"; genre = "#fiction"; language = "#english";
      price = 399; stock = 150; rating = 4.9;
      tags = ["rowling", "magic", "wizard", "iconic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg"
    },
    {
      titleEn = "The Lord of the Rings"; titleBn = "দ্য লর্ড অব দ্য রিংস";
      authorEn = "J.R.R. Tolkien"; authorBn = "জে আর আর টলকিন";
      descriptionEn = "The greatest fantasy epic ever written — Frodo's quest to destroy the One Ring."; descriptionBn = "কখনও লেখা সর্বশ্রেষ্ঠ ফ্যান্টাসি মহাকাব্য — ওয়ান রিং ধ্বংস করার জন্য ফ্রোডোর অনুসন্ধান।";
      isbn = "9780618640157"; genre = "#fiction"; language = "#english";
      price = 699; stock = 80; rating = 4.9;
      tags = ["tolkien", "fantasy", "epic", "iconic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780618640157-L.jpg"
    },
    {
      titleEn = "The Hobbit"; titleBn = "দ্য হবিট";
      authorEn = "J.R.R. Tolkien"; authorBn = "জে আর আর টলকিন";
      descriptionEn = "A hobbit's unexpected journey with dwarves and a wizard to reclaim a mountain kingdom."; descriptionBn = "একটি পর্বত রাজ্য পুনরুদ্ধার করতে বামন ও একজন জাদুকরের সাথে একটি হবিটের অপ্রত্যাশিত যাত্রা।";
      isbn = "9780547928227"; genre = "#fiction"; language = "#english";
      price = 399; stock = 90; rating = 4.8;
      tags = ["tolkien", "fantasy", "adventure", "hobbit"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg"
    },
    {
      titleEn = "Gone with the Wind"; titleBn = "গন উইথ দ্য উইন্ড";
      authorEn = "Margaret Mitchell"; authorBn = "মার্গারেট মিচেল";
      descriptionEn = "The sweeping Civil War epic about Scarlett O'Hara — a Pulitzer Prize and beloved classic."; descriptionBn = "স্কার্লেট ও'হারা সম্পর্কে গৃহযুদ্ধের বিশাল মহাকাব্য — একটি পুলিৎজার পুরস্কার ও প্রিয় ক্লাসিক।";
      isbn = "9780743273465"; genre = "#fiction"; language = "#english";
      price = 599; stock = 65; rating = 4.7;
      tags = ["mitchell", "civil-war", "romance", "pulitzer"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743273465-L.jpg"
    },
    {
      titleEn = "Rebecca"; titleBn = "রেবেকা";
      authorEn = "Daphne du Maurier"; authorBn = "ড্যাফনি ডু মরিয়ার";
      descriptionEn = "A new bride is haunted by the memory of the beautiful first wife of Manderley."; descriptionBn = "একজন নতুন কনে ম্যান্ডার্লির সুন্দর প্রথম স্ত্রীর স্মৃতি দ্বারা তাড়িত হন।";
      isbn = "9780380730407"; genre = "#fiction"; language = "#english";
      price = 350; stock = 75; rating = 4.7;
      tags = ["du-maurier", "gothic", "mystery", "haunting"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780380730407-L.jpg"
    },
    {
      titleEn = "The Remains of the Day"; titleBn = "দ্য রিমেইন্স অব দ্য ডে";
      authorEn = "Kazuo Ishiguro"; authorBn = "কাজুও ইশিগুরো";
      descriptionEn = "A devoted butler reflects on his life of service and the love he left behind — a Booker Prize winner."; descriptionBn = "একজন নিবেদিতপ্রাণ বাটলার তার সেবার জীবন ও তার পিছনে রেখে যাওয়া প্রেম নিয়ে চিন্তা করেন।";
      isbn = "9780679731726"; genre = "#fiction"; language = "#english";
      price = 399; stock = 65; rating = 4.7;
      tags = ["ishiguro", "butler", "memory", "booker"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679731726-L.jpg"
    },
    {
      titleEn = "Never Let Me Go"; titleBn = "নেভার লেট মি গো";
      authorEn = "Kazuo Ishiguro"; authorBn = "কাজুও ইশিগুরো";
      descriptionEn = "Students at a special school discover their horrifying purpose in a dystopian near-future."; descriptionBn = "একটি বিশেষ বিদ্যালয়ের ছাত্ররা ডিস্টোপিয়ান নিকট-ভবিষ্যতে তাদের ভয়াবহ উদ্দেশ্য আবিষ্কার করে।";
      isbn = "9781400078776"; genre = "#fiction"; language = "#english";
      price = 380; stock = 65; rating = 4.7;
      tags = ["ishiguro", "dystopia", "science-fiction", "heartbreaking"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781400078776-L.jpg"
    },
    {
      titleEn = "The Name of the Rose"; titleBn = "দ্য নেম অব দ্য রোজ";
      authorEn = "Umberto Eco"; authorBn = "উমবার্তো একো";
      descriptionEn = "A medieval monk investigates murders in a monastery in this literary thriller masterpiece."; descriptionBn = "এই সাহিত্যিক থ্রিলার মাস্টারপিসে একজন মধ্যযুগীয় সন্ন্যাসী একটি মঠে হত্যাকাণ্ড তদন্ত করেন।";
      isbn = "9780156001311"; genre = "#fiction"; language = "#english";
      price = 450; stock = 60; rating = 4.7;
      tags = ["eco", "medieval", "mystery", "literary-thriller"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780156001311-L.jpg"
    },
    {
      titleEn = "The Shadow of the Wind"; titleBn = "দ্য শ্যাডো অব দ্য উইন্ড";
      authorEn = "Carlos Ruiz Zafon"; authorBn = "কার্লোস রুইজ জাফন";
      descriptionEn = "A boy finds a mysterious book in post-war Barcelona, drawing him into a dark web of secrets."; descriptionBn = "যুদ্ধ-পরবর্তী বার্সেলোনায় একটি ছেলে একটি রহস্যময় বই খুঁজে পায়, তাকে গোপনীয়তার অন্ধকার জালে টেনে নিয়ে যায়।";
      isbn = "9780143034902"; genre = "#fiction"; language = "#english";
      price = 420; stock = 65; rating = 4.7;
      tags = ["zafon", "mystery", "barcelona", "gothic"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780143034902-L.jpg"
    },
    {
      titleEn = "The Tin Drum"; titleBn = "দ্য টিন ড্রাম";
      authorEn = "Gunter Grass"; authorBn = "গুন্টার গ্রাস";
      descriptionEn = "A boy decides to stop growing at the age of three and narrates the history of 20th-century Germany."; descriptionBn = "একটি ছেলে তিন বছর বয়সে বৃদ্ধি বন্ধ করার সিদ্ধান্ত নেয় এবং ২০শ শতকের জার্মানির ইতিহাস বলে।";
      isbn = "9780375727344"; genre = "#fiction"; language = "#english";
      price = 450; stock = 55; rating = 4.6;
      tags = ["grass", "german", "magical-realism", "ww2"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780375727344-L.jpg"
    },
    {
      titleEn = "The Unbearable Lightness of Being"; titleBn = "দ্য আনবেয়ারেবল লাইটনেস অব বিয়িং";
      authorEn = "Milan Kundera"; authorBn = "মিলান কুন্ডেরা";
      descriptionEn = "Love, politics, and existential weight in Soviet-era Czechoslovakia — a profound philosophical novel."; descriptionBn = "সোভিয়েত যুগের চেকোস্লোভাকিয়ায় প্রেম, রাজনীতি ও অস্তিত্বগত ভার — একটি গভীর দার্শনিক উপন্যাস।";
      isbn = "9780060932138"; genre = "#fiction"; language = "#english";
      price = 420; stock = 65; rating = 4.8;
      tags = ["kundera", "existential", "politics", "love"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780060932138-L.jpg"
    },
    {
      titleEn = "Steppenwolf"; titleBn = "স্টেপেনওল্ফ";
      authorEn = "Hermann Hesse"; authorBn = "হেরমান হেসে";
      descriptionEn = "A middle-aged man torn between civilization and primitive nature, a foundational novel of the counterculture."; descriptionBn = "সভ্যতা ও আদিম প্রকৃতির মধ্যে বিভক্ত একজন মধ্যবয়সী মানুষ, পাল্টা সংস্কৃতির একটি ভিত্তি উপন্যাস।";
      isbn = "9780312278670"; genre = "#fiction"; language = "#english";
      price = 350; stock = 65; rating = 4.6;
      tags = ["hesse", "existential", "counterculture", "identity"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780312278670-L.jpg"
    },
    {
      titleEn = "The Trial and Other Works"; titleBn = "দ্য ট্রায়াল ও অন্যান্য রচনা";
      authorEn = "Franz Kafka"; authorBn = "ফ্রান্জ কাফকা";
      descriptionEn = "Kafka's collected works including The Trial, The Castle, and Amerika in one essential volume."; descriptionBn = "একটি অপরিহার্য খণ্ডে কাফকার সংগৃহীত রচনা, দ্য ট্রায়াল, দ্য ক্যাসেল ও আমেরিকা সহ।";
      isbn = "9780679723202"; genre = "#fiction"; language = "#english";
      price = 499; stock = 55; rating = 4.8;
      tags = ["kafka", "collected", "absurdist", "existential"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679723202-L.jpg"
    },
    {
      titleEn = "Death in Venice and Other Stories"; titleBn = "ডেথ ইন ভেনিস ও অন্যান্য গল্প";
      authorEn = "Thomas Mann"; authorBn = "থমাস ম্যান";
      descriptionEn = "Mann's celebrated novella of obsession, beauty, and death in Venice — a modernist masterpiece."; descriptionBn = "ভেনিসে আসক্তি, সৌন্দর্য ও মৃত্যুর ম্যানের বিখ্যাত উপন্যাসিকা — একটি আধুনিকতাবাদী মাস্টারপিস।";
      isbn = "9780394719238"; genre = "#fiction"; language = "#english";
      price = 380; stock = 60; rating = 4.6;
      tags = ["mann", "venice", "obsession", "modernist"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780394719238-L.jpg"
    },
    {
      titleEn = "Sophie's World"; titleBn = "সোফির বিশ্ব";
      authorEn = "Jostein Gaarder"; authorBn = "ইউস্টেইন গার্ডার";
      descriptionEn = "A girl discovers a history of philosophy through mysterious letters — a bestselling philosophical novel."; descriptionBn = "একটি মেয়ে রহস্যময় চিঠির মাধ্যমে দর্শনের ইতিহাস আবিষ্কার করে — একটি বেস্টসেলিং দার্শনিক উপন্যাস।";
      isbn = "9780374530716"; genre = "#fiction"; language = "#english";
      price = 399; stock = 75; rating = 4.6;
      tags = ["gaarder", "philosophy", "history", "educational"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780374530716-L.jpg"
    },
    {
      titleEn = "Memoirs of a Geisha"; titleBn = "মেমোয়ার্স অব এ গেইশা";
      authorEn = "Arthur Golden"; authorBn = "আর্থার গোল্ডেন";
      descriptionEn = "A young girl's transformation into a legendary geisha in pre-war Japan — immersive and captivating."; descriptionBn = "যুদ্ধ-পূর্ব জাপানে একটি তরুণ মেয়ের কিংবদন্তি গেইশায় রূপান্তর — নিমজ্জনকারী ও মনোমুগ্ধকর।";
      isbn = "9780679781585"; genre = "#fiction"; language = "#english";
      price = 420; stock = 70; rating = 4.6;
      tags = ["golden", "japan", "geisha", "historical"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679781585-L.jpg"
    },
    {
      titleEn = "The Pillars of the Earth"; titleBn = "দ্য পিলার্স অব দ্য আর্থ";
      authorEn = "Ken Follett"; authorBn = "কেন ফলেট";
      descriptionEn = "The building of a cathedral in medieval England — an epic historical saga of passion and power."; descriptionBn = "মধ্যযুগীয় ইংল্যান্ডে একটি ক্যাথেড্রাল নির্মাণ — আবেগ ও ক্ষমতার একটি মহাকাব্যিক ঐতিহাসিক গল্প।";
      isbn = "9780451166890"; genre = "#fiction"; language = "#english";
      price = 599; stock = 60; rating = 4.8;
      tags = ["follett", "medieval", "cathedral", "historical"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780451166890-L.jpg"
    },
    {
      titleEn = "The Three Musketeers"; titleBn = "দ্য থ্রি মাস্কেটিয়ার্স";
      authorEn = "Alexandre Dumas"; authorBn = "আলেক্সান্ডার ডুমা";
      descriptionEn = "All for one and one for all — the swashbuckling adventures of Athos, Porthos, Aramis, and d'Artagnan."; descriptionBn = "সবার জন্য একজন এবং একজনের জন্য সবাই — আথোস, পোর্থোস, আরামিস ও ডি'আর্টাগনানের দুঃসাহসিক অ্যাডভেঞ্চার।";
      isbn = "9780140440669"; genre = "#fiction"; language = "#english";
      price = 420; stock = 75; rating = 4.8;
      tags = ["dumas", "adventure", "swordplay", "france"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140440669-L.jpg"
    },
    {
      titleEn = "Twenty Thousand Leagues Under the Sea"; titleBn = "টোয়েন্টি থাউজ্যান্ড লিগস আন্ডার দ্য সি";
      authorEn = "Jules Verne"; authorBn = "জুলস ভার্ন";
      descriptionEn = "Captain Nemo's submarine Nautilus on a mysterious voyage — classic science fiction adventure."; descriptionBn = "একটি রহস্যময় সমুদ্র যাত্রায় ক্যাপ্টেন নেমোর সাবমেরিন নটিলাস — ক্লাসিক বিজ্ঞান কল্পকাহিনী অ্যাডভেঞ্চার।";
      isbn = "9780140440577"; genre = "#fiction"; language = "#english";
      price = 350; stock = 75; rating = 4.7;
      tags = ["verne", "submarine", "adventure", "science-fiction"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140440577-L.jpg"
    },
    {
      titleEn = "Around the World in Eighty Days"; titleBn = "অ্যারাউন্ড দ্য ওয়ার্ল্ড ইন এইটি ডেজ";
      authorEn = "Jules Verne"; authorBn = "জুলস ভার্ন";
      descriptionEn = "Phileas Fogg's bet to circumnavigate the globe in 80 days — a timeless adventure classic."; descriptionBn = "৮০ দিনে পৃথিবী প্রদক্ষিণ করার জন্য ফিলিয়াস ফগের বাজি — একটি কালজয়ী অ্যাডভেঞ্চার ক্লাসিক।";
      isbn = "9780140440645"; genre = "#fiction"; language = "#english";
      price = 299; stock = 80; rating = 4.7;
      tags = ["verne", "travel", "adventure", "bet"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140440645-L.jpg"
    },
    {
      titleEn = "Treasure Island"; titleBn = "ট্রেজার আইল্যান্ড";
      authorEn = "Robert Louis Stevenson"; authorBn = "রবার্ট লুইস স্টিভেনসন";
      descriptionEn = "Jim Hawkins's quest for buried treasure and Long John Silver's pirate intrigue — the ultimate adventure."; descriptionBn = "জিম হকিন্সের লুকানো ধন খোঁজার অভিযান ও লং জন সিলভারের জলদস্যু ষড়যন্ত্র — চূড়ান্ত অ্যাডভেঞ্চার।";
      isbn = "9780140437683"; genre = "#fiction"; language = "#english";
      price = 299; stock = 85; rating = 4.7;
      tags = ["stevenson", "pirates", "treasure", "adventure"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140437683-L.jpg"
    },
    {
      titleEn = "Strange Case of Dr Jekyll and Mr Hyde"; titleBn = "স্ট্রেঞ্জ কেস অব ডক্টর জেকিল অ্যান্ড মিস্টার হাইড";
      authorEn = "Robert Louis Stevenson"; authorBn = "রবার্ট লুইস স্টিভেনসন";
      descriptionEn = "A respectable doctor's dark double life — the seminal novella about the duality of human nature."; descriptionBn = "একজন সম্মানিত ডাক্তারের অন্ধকার দ্বৈত জীবন — মানব প্রকৃতির দ্বৈততা সম্পর্কে মূল উপন্যাসিকা।";
      isbn = "9780141389509"; genre = "#fiction"; language = "#english";
      price = 299; stock = 75; rating = 4.6;
      tags = ["stevenson", "duality", "gothic", "psychology"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141389509-L.jpg"
    },
    {
      titleEn = "The Tenant of Wildfell Hall"; titleBn = "দ্য টেন্যান্ট অব উইল্ডফেল হল";
      authorEn = "Anne Bronte"; authorBn = "আনে ব্রন্টে";
      descriptionEn = "A woman flees an abusive marriage and starts a new life — a groundbreaking Victorian feminist novel."; descriptionBn = "একজন মহিলা নির্যাতনমূলক বিবাহ থেকে পালিয়ে নতুন জীবন শুরু করেন — একটি যুগান্তকারী ভিক্টোরিয়ান নারীবাদী উপন্যাস।";
      isbn = "9780141441504"; genre = "#fiction"; language = "#english";
      price = 320; stock = 70; rating = 4.6;
      tags = ["bronte", "feminist", "abuse", "victorian"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141441504-L.jpg"
    },
    {
      titleEn = "Middlemarch"; titleBn = "মিডলমার্চ";
      authorEn = "George Eliot"; authorBn = "জর্জ এলিয়ট";
      descriptionEn = "A panoramic Victorian novel about love, idealism, and the constraints placed on women."; descriptionBn = "প্রেম, আদর্শবাদ ও নারীদের উপর আরোপিত বাধা নিয়ে একটি বিস্তৃত ভিক্টোরিয়ান উপন্যাস।";
      isbn = "9780141439549"; genre = "#fiction"; language = "#english";
      price = 450; stock = 65; rating = 4.8;
      tags = ["eliot", "victorian", "women", "realism"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439549-L.jpg"
    },
    {
      titleEn = "Bleak House"; titleBn = "ব্লিক হাউস";
      authorEn = "Charles Dickens"; authorBn = "চার্লস ডিকেন্স";
      descriptionEn = "Dickens' most complex novel — a searing indictment of the Victorian legal system."; descriptionBn = "ডিকেন্সের সবচেয়ে জটিল উপন্যাস — ভিক্টোরিয়ান আইনি ব্যবস্থার একটি তীব্র অভিযোগ।";
      isbn = "9780141439723"; genre = "#fiction"; language = "#english";
      price = 499; stock = 55; rating = 4.7;
      tags = ["dickens", "legal", "victorian", "social"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780141439723-L.jpg"
    },
    {
      titleEn = "The Return of the Native"; titleBn = "দ্য রিটার্ন অব দ্য নেটিভ";
      authorEn = "Thomas Hardy"; authorBn = "থমাস হার্ডি";
      descriptionEn = "The bleak beauty of Egdon Heath and the tragic lives of those who try to escape it."; descriptionBn = "ইগডন হিথের বিষণ্ণ সৌন্দর্য ও যারা এটি থেকে পালানোর চেষ্টা করে তাদের করুণ জীবন।";
      isbn = "9780140435184"; genre = "#fiction"; language = "#english";
      price = 380; stock = 60; rating = 4.6;
      tags = ["hardy", "tragic", "moors", "social"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140435184-L.jpg"
    },
    {
      titleEn = "Tess of the d'Urbervilles"; titleBn = "টেস অব দ্য ডারবারভিলস";
      authorEn = "Thomas Hardy"; authorBn = "থমাস হার্ডি";
      descriptionEn = "The tragic story of Tess — a pure woman destroyed by a hypocritical Victorian society."; descriptionBn = "টেসের করুণ গল্প — একটি ভণ্ড ভিক্টোরিয়ান সমাজ দ্বারা ধ্বংস হওয়া একজন বিশুদ্ধ মহিলা।";
      isbn = "9780140435473"; genre = "#fiction"; language = "#english";
      price = 380; stock = 65; rating = 4.7;
      tags = ["hardy", "tragedy", "women", "victorian"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140435473-L.jpg"
    },
    {
      titleEn = "The Idiot (Penguin Classics)"; titleBn = "দ্য ইডিয়ট (পেঙ্গুইন ক্লাসিক্স)";
      authorEn = "Fyodor Dostoevsky"; authorBn = "ফিওদর দস্তয়েভস্কি";
      descriptionEn = "Prince Myshkin, pure and innocent, enters corrupt society — what becomes of goodness in a fallen world?"; descriptionBn = "যুবরাজ মিশকিন, বিশুদ্ধ ও নির্দোষ, দুর্নীতিগ্রস্ত সমাজে প্রবেশ করেন — পতিত পৃথিবীতে সুকৃতির কী হয়?";
      isbn = "9780140447927"; genre = "#fiction"; language = "#english";
      price = 450; stock = 60; rating = 4.8;
      tags = ["dostoevsky", "goodness", "innocence", "russian"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140447927-L.jpg"
    },
    {
      titleEn = "Resurrection"; titleBn = "রেসারেকশন";
      authorEn = "Leo Tolstoy"; authorBn = "লিও তলস্তয়";
      descriptionEn = "Tolstoy's final novel — an aristocrat tries to redeem himself for causing a woman's ruin."; descriptionBn = "তলস্তয়ের শেষ উপন্যাস — একজন অভিজাত ব্যক্তি একজন মহিলার ধ্বংসের কারণ হওয়ার জন্য নিজেকে মুক্ত করার চেষ্টা করেন।";
      isbn = "9780140441864"; genre = "#fiction"; language = "#english";
      price = 420; stock = 55; rating = 4.6;
      tags = ["tolstoy", "redemption", "social", "russian"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140441864-L.jpg"
    },
    {
      titleEn = "The Death of Ivan Ilyich"; titleBn = "দ্য ডেথ অব ইভান ইলিচ";
      authorEn = "Leo Tolstoy"; authorBn = "লিও তলস্তয়";
      descriptionEn = "A successful judge faces death and discovers his life was hollow — Tolstoy's powerful novella."; descriptionBn = "একজন সফল বিচারক মৃত্যুর মুখোমুখি হন এবং আবিষ্কার করেন যে তার জীবন ছিল ফাঁকা — তলস্তয়ের শক্তিশালী উপন্যাসিকা।";
      isbn = "9780553210354"; genre = "#fiction"; language = "#english";
      price = 299; stock = 70; rating = 4.7;
      tags = ["tolstoy", "death", "existential", "meaning"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553210354-L.jpg"
    },
    {
      titleEn = "Swami and Friends"; titleBn = "স্বামী অ্যান্ড ফ্রেন্ডস";
      authorEn = "R.K. Narayan"; authorBn = "আর কে নারায়ণ";
      descriptionEn = "The charming first Malgudi novel, introducing young Swaminathan and his circle of friends."; descriptionBn = "তরুণ স্বামীনাথন ও তার বন্ধুদের বৃত্তের পরিচয় দিয়ে আকর্ষণীয় প্রথম মালগুড়ি উপন্যাস।";
      isbn = "9780226568126"; genre = "#fiction"; language = "#english";
      price = 299; stock = 80; rating = 4.6;
      tags = ["narayan", "india", "childhood", "malgudi"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780226568126-L.jpg"
    },
    {
      titleEn = "Cry, the Beloved Country"; titleBn = "ক্রাই, দ্য বিলাভড কান্ট্রি";
      authorEn = "Alan Paton"; authorBn = "অ্যালান প্যাটন";
      descriptionEn = "A powerful anti-apartheid novel about a Zulu pastor searching for his son in Johannesburg."; descriptionBn = "জোহানেসবার্গে তার ছেলেকে খোঁজা একজন জুলু পাদরি সম্পর্কে একটি শক্তিশালী বর্ণবিরোধী উপন্যাস।";
      isbn = "9780743262170"; genre = "#fiction"; language = "#english";
      price = 380; stock = 60; rating = 4.7;
      tags = ["paton", "south-africa", "apartheid", "social-justice"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743262170-L.jpg"
    },
    {
      titleEn = "Ben-Hur"; titleBn = "বেন-হুর";
      authorEn = "Lew Wallace"; authorBn = "লু ওয়ালেস";
      descriptionEn = "A Jewish prince enslaved by Rome seeks revenge and finds redemption — a classic of historical fiction."; descriptionBn = "রোমের দ্বারা দাস হওয়া একজন ইহুদি রাজকুমার প্রতিশোধ খোঁজেন এবং মুক্তি পান।";
      isbn = "9781589633636"; genre = "#fiction"; language = "#english";
      price = 380; stock = 60; rating = 4.6;
      tags = ["wallace", "rome", "historical", "revenge"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781589633636-L.jpg"
    },
    {
      titleEn = "Fahrenheit 451"; titleBn = "ফারেনহাইট ৪৫১";
      authorEn = "Ray Bradbury"; authorBn = "রে ব্র্যাডবারি";
      descriptionEn = "A fireman's job is to burn books in a dystopian future where reading is banned."; descriptionBn = "একজন দমকলকর্মীর কাজ হলো একটি ডিস্টোপিয়ান ভবিষ্যতে বই পোড়ানো যেখানে পড়া নিষিদ্ধ।";
      isbn = "9781451673319"; genre = "#fiction"; language = "#english";
      price = 350; stock = 80; rating = 4.8;
      tags = ["bradbury", "dystopia", "books", "censorship"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781451673319-L.jpg"
    },
    {
      titleEn = "The Road"; titleBn = "দ্য রোড";
      authorEn = "Cormac McCarthy"; authorBn = "কর্ম্যাক ম্যাকার্থি";
      descriptionEn = "A father and son's survival journey through a post-apocalyptic world — a Pulitzer Prize masterpiece."; descriptionBn = "একটি উত্তর-প্রলয়ঙ্করী বিশ্বের মধ্য দিয়ে একজন পিতা ও পুত্রের বেঁচে থাকার যাত্রা।";
      isbn = "9780307387899"; genre = "#fiction"; language = "#english";
      price = 399; stock = 70; rating = 4.8;
      tags = ["mccarthy", "apocalyptic", "father-son", "pulitzer"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780307387899-L.jpg"
    },
    {
      titleEn = "Blood Meridian"; titleBn = "ব্লাড মেরিডিয়ান";
      authorEn = "Cormac McCarthy"; authorBn = "কর্ম্যাক ম্যাকার্থি";
      descriptionEn = "An uncompromising masterpiece about violence on the 19th-century Texas-Mexico borderland."; descriptionBn = "১৯শ শতকের টেক্সাস-মেক্সিকো সীমান্ত অঞ্চলে সহিংসতা নিয়ে একটি আপোষহীন মাস্টারপিস।";
      isbn = "9780679728757"; genre = "#fiction"; language = "#english";
      price = 420; stock = 60; rating = 4.7;
      tags = ["mccarthy", "violence", "western", "dark"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679728757-L.jpg"
    },
    {
      titleEn = "The White Tiger"; titleBn = "দ্য হোয়াইট টাইগার";
      authorEn = "Aravind Adiga"; authorBn = "অরবিন্দ আদিগা";
      descriptionEn = "A servant's darkly comic rise from poverty through crime — a Man Booker Prize winner."; descriptionBn = "অপরাধের মাধ্যমে দারিদ্র্য থেকে একজন সেবকের অন্ধকারভাবে কমিক উত্থান — একটি ম্যান বুকার পুরস্কার বিজয়ী।";
      isbn = "9781416562603"; genre = "#fiction"; language = "#english";
      price = 380; stock = 70; rating = 4.6;
      tags = ["adiga", "india", "class", "booker"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781416562603-L.jpg"
    },
    {
      titleEn = "Shantaram"; titleBn = "শান্তারাম";
      authorEn = "Gregory David Roberts"; authorBn = "গ্রেগরি ডেভিড রবার্টস";
      descriptionEn = "An escaped Australian convict finds sanctuary and a new life in the slums and underworld of Bombay."; descriptionBn = "একজন পালানো অস্ট্রেলিয়ান দোষী বোম্বের বস্তি ও পাতাল জগতে আশ্রয় ও নতুন জীবন খুঁজে পান।";
      isbn = "9780312330538"; genre = "#fiction"; language = "#english";
      price = 599; stock = 65; rating = 4.7;
      tags = ["roberts", "india", "bombay", "adventure"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780312330538-L.jpg"
    },
    {
      titleEn = "The English Patient"; titleBn = "দ্য ইংলিশ পেশেন্ট";
      authorEn = "Michael Ondaatje"; authorBn = "মাইকেল অনডাটজে";
      descriptionEn = "A burn victim's mystery in an Italian villa at the end of World War II — a Booker Prize winner."; descriptionBn = "দ্বিতীয় বিশ্বযুদ্ধের শেষে একটি ইতালীয় ভিলায় পুড়ে যাওয়া একজনের রহস্য।";
      isbn = "9780679745204"; genre = "#fiction"; language = "#english";
      price = 399; stock = 65; rating = 4.6;
      tags = ["ondaatje", "ww2", "mystery", "booker"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780679745204-L.jpg"
    },
    {
      titleEn = "The Reader"; titleBn = "দ্য রিডার";
      authorEn = "Bernhard Schlink"; authorBn = "বার্নহার্ড শ্লিঙ্ক";
      descriptionEn = "A teenage boy's affair with an older woman who later stands trial for Nazi war crimes."; descriptionBn = "একজন বয়স্ক মহিলার সাথে একজন কিশোর ছেলের সম্পর্ক যিনি পরে নাৎসি যুদ্ধাপরাধের জন্য বিচারের মুখোমুখি হন।";
      isbn = "9780375707971"; genre = "#fiction"; language = "#english";
      price = 350; stock = 70; rating = 4.6;
      tags = ["schlink", "nazi", "guilt", "love"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780375707971-L.jpg"
    },
    {
      titleEn = "Flowers for Algernon"; titleBn = "ফ্লাওয়ার্স ফর আলজার্নন";
      authorEn = "Daniel Keyes"; authorBn = "ড্যানিয়েল কিস";
      descriptionEn = "A mentally disabled man becomes a genius through surgery — a moving and award-winning science fiction."; descriptionBn = "একজন মানসিকভাবে অক্ষম মানুষ অস্ত্রোপচারের মাধ্যমে প্রতিভাবান হয়ে ওঠেন — একটি হৃদয়গ্রাহী ও পুরস্কারজয়ী বিজ্ঞান কল্পকাহিনী।";
      isbn = "9780156030304"; genre = "#fiction"; language = "#english";
      price = 350; stock = 70; rating = 4.7;
      tags = ["keyes", "intelligence", "science-fiction", "emotional"]; coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780156030304-L.jpg"
    },
  ];
}
