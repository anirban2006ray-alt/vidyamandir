module {
  public let books : [{
    titleEn : Text;
    titleBn : Text;
    authorEn : Text;
    authorBn : Text;
    descriptionEn : Text;
    descriptionBn : Text;
    isbn : Text;
    genre : Text;
    language : Text;
    price : Nat;
    stock : Nat;
    rating : Float;
    tags : [Text];
    coverImageUrl : Text;
  }] = [
    {
      titleEn = "A Brief History of Time";
      titleBn = "সময়ের সংক্ষিপ্ত ইতিহাস";
      authorEn = "Stephen Hawking";
      authorBn = "স্টিফেন হকিং";
      descriptionEn = "A landmark exploration of the cosmos, black holes, and the nature of time by the world's most famous theoretical physicist.";
      descriptionBn = "বিশ্বখ্যাত পদার্থবিদ স্টিফেন হকিংয়ের মহাবিশ্ব, কৃষ্ণগহ্বর ও সময়ের প্রকৃতি নিয়ে যুগান্তকারী রচনা।";
      isbn = "9780553380163";
      genre = "science";
      language = "english";
      price = 499;
      stock = 80;
      rating = 4.8;
      tags = ["physics", "cosmology", "black holes", "hawking", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg";
    },
    {
      titleEn = "The Selfish Gene";
      titleBn = "স্বার্থপর জিন";
      authorEn = "Richard Dawkins";
      authorBn = "রিচার্ড ডকিন্স";
      descriptionEn = "Dawkins's landmark work introduces the gene-centred view of evolution, arguing that genes are the primary units of natural selection.";
      descriptionBn = "ডকিন্সের যুগান্তকারী গ্রন্থ যেখানে বিবর্তনকে জিনের দৃষ্টিকোণ থেকে ব্যাখ্যা করা হয়েছে।";
      isbn = "9780199291151";
      genre = "science";
      language = "english";
      price = 549;
      stock = 70;
      rating = 4.7;
      tags = ["evolution", "genetics", "biology", "dawkins", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780199291151-L.jpg";
    },
    {
      titleEn = "Cosmos";
      titleBn = "কসমস";
      authorEn = "Carl Sagan";
      authorBn = "কার্ল সেগান";
      descriptionEn = "Carl Sagan's masterpiece about the universe, life, and civilisation—one of the best-selling science books of all time.";
      descriptionBn = "মহাবিশ্ব, জীবন ও সভ্যতা নিয়ে কার্ল সেগানের অমর রচনা—সর্বকালের সেরা বিজ্ঞান বইগুলোর একটি।";
      isbn = "9780345539434";
      genre = "science";
      language = "english";
      price = 599;
      stock = 65;
      rating = 4.9;
      tags = ["astronomy", "cosmology", "sagan", "universe", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780345539434-L.jpg";
    },
    {
      titleEn = "Surely You're Joking, Mr. Feynman!";
      titleBn = "আপনি নিশ্চয়ই রসিকতা করছেন, মিস্টার ফাইনম্যান!";
      authorEn = "Richard P. Feynman";
      authorBn = "রিচার্ড পি. ফাইনম্যান";
      descriptionEn = "The witty, irreverent memoirs of Nobel Prize-winning physicist Richard Feynman, filled with adventures in science and life.";
      descriptionBn = "নোবেলজয়ী পদার্থবিদ রিচার্ড ফাইনম্যানের রসময় ও অপ্রচলিত স্মৃতিকথা।";
      isbn = "9780393316049";
      genre = "science";
      language = "english";
      price = 499;
      stock = 60;
      rating = 4.8;
      tags = ["physics", "memoir", "feynman", "humor", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780393316049-L.jpg";
    },
    {
      titleEn = "On the Origin of Species";
      titleBn = "প্রজাতির উৎপত্তি সম্পর্কে";
      authorEn = "Charles Darwin";
      authorBn = "চার্লস ডারউইন";
      descriptionEn = "Darwin's foundational work introducing the theory of natural selection, which transformed our understanding of life on Earth.";
      descriptionBn = "প্রাকৃতিক নির্বাচনের তত্ত্ব উপস্থাপনকারী ডারউইনের ঐতিহাসিক গ্রন্থ।";
      isbn = "9780140432053";
      genre = "science";
      language = "english";
      price = 449;
      stock = 55;
      rating = 4.7;
      tags = ["evolution", "biology", "darwin", "natural selection", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780140432053-L.jpg";
    },
    {
      titleEn = "Astrophysics for People in a Hurry";
      titleBn = "ব্যস্ত মানুষের জন্য অ্যাস্ট্রোফিজিক্স";
      authorEn = "Neil deGrasse Tyson";
      authorBn = "নিল ডিগ্রাস টাইসন";
      descriptionEn = "A compact, entertaining guide to the universe's greatest mysteries—dark matter, dark energy, and the Big Bang—by America's foremost astrophysicist.";
      descriptionBn = "আমেরিকার শ্রেষ্ঠ জ্যোতিঃপদার্থবিদ টাইসনের লেখা মহাবিশ্বের রহস্য নিয়ে সংক্ষিপ্ত ও উপভোগ্য গাইড।";
      isbn = "9780393609394";
      genre = "science";
      language = "english";
      price = 399;
      stock = 90;
      rating = 4.6;
      tags = ["astrophysics", "cosmology", "tyson", "dark matter", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780393609394-L.jpg";
    },
    {
      titleEn = "The Code Book";
      titleBn = "কোড বুক";
      authorEn = "Simon Singh";
      authorBn = "সাইমন সিং";
      descriptionEn = "The fascinating history of codes and ciphers from ancient Egypt to the quantum age, by bestselling science author Simon Singh.";
      descriptionBn = "প্রাচীন মিশর থেকে কোয়ান্টাম যুগ পর্যন্ত কোড ও সাইফারের চমকপ্রদ ইতিহাস।";
      isbn = "9780385495325";
      genre = "science";
      language = "english";
      price = 499;
      stock = 50;
      rating = 4.5;
      tags = ["cryptography", "codes", "history", "technology", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780385495325-L.jpg";
    },
    {
      titleEn = "Clean Code";
      titleBn = "ক্লিন কোড";
      authorEn = "Robert C. Martin";
      authorBn = "রবার্ট সি. মার্টিন";
      descriptionEn = "A handbook of agile software craftsmanship. Teaches how to write code that is readable, maintainable, and elegant.";
      descriptionBn = "অ্যাজাইল সফটওয়্যার কারুকার্যের হ্যান্ডবুক। পাঠযোগ্য, রক্ষণযোগ্য ও মার্জিত কোড লেখার শিক্ষা।";
      isbn = "9780132350884";
      genre = "academic";
      language = "english";
      price = 699;
      stock = 75;
      rating = 4.7;
      tags = ["programming", "software engineering", "best practices", "agile", "coding"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg";
    },
    {
      titleEn = "The Pragmatic Programmer";
      titleBn = "দ্য প্র্যাগমাটিক প্রোগ্রামার";
      authorEn = "David Thomas and Andrew Hunt";
      authorBn = "ডেভিড থমাস এবং অ্যান্ড্রু হান্ট";
      descriptionEn = "Your journey to mastery—timeless advice on programming practices, careers, and technical excellence for every developer.";
      descriptionBn = "প্রতিটি ডেভেলপারের দক্ষতা অর্জনের যাত্রা—প্রোগ্রামিং অনুশীলন ও প্রযুক্তিগত শ্রেষ্ঠত্বের চিরন্তন পরামর্শ।";
      isbn = "9780135957059";
      genre = "academic";
      language = "english";
      price = 749;
      stock = 60;
      rating = 4.8;
      tags = ["programming", "software engineering", "career", "best practices", "coding"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg";
    },
    {
      titleEn = "Introduction to Algorithms";
      titleBn = "অ্যালগরিদমের ভূমিকা";
      authorEn = "Cormen, Leiserson, Rivest, Stein";
      authorBn = "কোর্মেন, লেইজারসন, রিভেস্ট, স্টেইন";
      descriptionEn = "The definitive textbook on computer algorithms—comprehensive, rigorous, and used in universities worldwide (CLRS).";
      descriptionBn = "কম্পিউটার অ্যালগরিদমের সর্বোচ্চ পাঠ্যপুস্তক—ব্যাপক, কঠোর এবং বিশ্বব্যাপী বিশ্ববিদ্যালয়ে ব্যবহৃত।";
      isbn = "9780262033848";
      genre = "academic";
      language = "english";
      price = 899;
      stock = 40;
      rating = 4.8;
      tags = ["algorithms", "computer science", "data structures", "textbook", "CLRS"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg";
    },
    {
      titleEn = "Python Crash Course";
      titleBn = "পাইথন ক্র্যাশ কোর্স";
      authorEn = "Eric Matthes";
      authorBn = "এরিক ম্যাথেস";
      descriptionEn = "A fast-paced, thorough introduction to programming with Python—projects include a game, data visualisations, and web apps.";
      descriptionBn = "পাইথন প্রোগ্রামিংয়ের দ্রুতগতির, সম্পূর্ণ পরিচয়—প্রকল্পে গেম, ডেটা ভিজ্যুয়ালাইজেশন ও ওয়েব অ্যাপ অন্তর্ভুক্ত।";
      isbn = "9781593279288";
      genre = "academic";
      language = "english";
      price = 649;
      stock = 85;
      rating = 4.7;
      tags = ["python", "programming", "beginners", "coding", "projects"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781593279288-L.jpg";
    },
    {
      titleEn = "JavaScript: The Good Parts";
      titleBn = "জাভাস্ক্রিপ্ট: দ্য গুড পার্টস";
      authorEn = "Douglas Crockford";
      authorBn = "ডগলাস ক্রকফোর্ড";
      descriptionEn = "A deep dive into the elegant, expressive parts of JavaScript—helping developers write better, cleaner code.";
      descriptionBn = "জাভাস্ক্রিপ্টের মার্জিত ও প্রকাশমূলক অংশের গভীর অন্বেষণ—ডেভেলপারদের ভালো ও পরিষ্কার কোড লিখতে সহায়তা করে।";
      isbn = "9780596517748";
      genre = "academic";
      language = "english";
      price = 549;
      stock = 70;
      rating = 4.5;
      tags = ["javascript", "programming", "web development", "coding", "frontend"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780596517748-L.jpg";
    },
    {
      titleEn = "Head First Design Patterns";
      titleBn = "হেড ফার্স্ট ডিজাইন প্যাটার্নস";
      authorEn = "Eric Freeman and Elisabeth Robson";
      authorBn = "এরিক ফ্রিম্যান এবং এলিজাবেথ রবসন";
      descriptionEn = "A brain-friendly guide to design patterns that makes object-oriented design principles stick.";
      descriptionBn = "ডিজাইন প্যাটার্নের মস্তিষ্কবান্ধব গাইড যা অবজেক্ট-ওরিয়েন্টেড ডিজাইন নীতিগুলো মনে রাখতে সাহায্য করে।";
      isbn = "9780596007126";
      genre = "academic";
      language = "english";
      price = 699;
      stock = 55;
      rating = 4.6;
      tags = ["design patterns", "programming", "object oriented", "software engineering", "coding"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780596007126-L.jpg";
    },
    {
      titleEn = "The Innovators";
      titleBn = "দ্য ইনোভেটর্স";
      authorEn = "Walter Isaacson";
      authorBn = "ওয়াল্টার আইজ্যাকসন";
      descriptionEn = "How a group of inventors, hackers, geniuses, and geeks created the digital revolution—a sweeping history of the computer age.";
      descriptionBn = "কিভাবে উদ্ভাবক, হ্যাকার, প্রতিভা ও গিক্সদের একটি দল ডিজিটাল বিপ্লব তৈরি করেছিল।";
      isbn = "9781476708706";
      genre = "science";
      language = "english";
      price = 599;
      stock = 50;
      rating = 4.6;
      tags = ["technology", "history", "innovation", "computing", "digital revolution"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781476708706-L.jpg";
    },
    {
      titleEn = "Zero to One";
      titleBn = "জিরো টু ওয়ান";
      authorEn = "Peter Thiel";
      authorBn = "পিটার থিয়েল";
      descriptionEn = "Notes on startups and how to build the future—Peter Thiel's counterintuitive thinking about business and technology.";
      descriptionBn = "স্টার্টআপ সম্পর্কে নোট এবং ভবিষ্যৎ কীভাবে গড়তে হয়—পিটার থিয়েলের ব্যবসা ও প্রযুক্তি সম্পর্কে অপ্রচলিত চিন্তা।";
      isbn = "9780804139021";
      genre = "science";
      language = "english";
      price = 499;
      stock = 65;
      rating = 4.5;
      tags = ["startup", "entrepreneurship", "technology", "business", "innovation"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780804139021-L.jpg";
    },
    {
      titleEn = "Cracking the Coding Interview";
      titleBn = "ক্র্যাকিং দ্য কোডিং ইন্টারভিউ";
      authorEn = "Gayle Laakmann McDowell";
      authorBn = "গেইল লাকমান ম্যাকডোয়েল";
      descriptionEn = "189 programming questions and solutions—the definitive guide to acing technical software engineering interviews.";
      descriptionBn = "১৮৯টি প্রোগ্রামিং প্রশ্ন ও সমাধান—সফটওয়্যার ইঞ্জিনিয়ারিং ইন্টারভিউতে সফল হওয়ার চূড়ান্ত গাইড।";
      isbn = "9780984782857";
      genre = "academic";
      language = "english";
      price = 799;
      stock = 75;
      rating = 4.8;
      tags = ["interview", "coding", "algorithms", "data structures", "career"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780984782857-L.jpg";
    },
    {
      titleEn = "The Grand Design";
      titleBn = "দ্য গ্র্যান্ড ডিজাইন";
      authorEn = "Stephen Hawking and Leonard Mlodinow";
      authorBn = "স্টিফেন হকিং এবং লিওনার্ড ম্লোডিনো";
      descriptionEn = "Hawking and Mlodinow address the deepest questions of science—why is there something rather than nothing, and why this universe?";
      descriptionBn = "হকিং ও ম্লোডিনো বিজ্ঞানের গভীরতম প্রশ্নগুলো সামলান—কেন শূন্যের বদলে কিছু আছে?";
      isbn = "9780553805376";
      genre = "science";
      language = "english";
      price = 499;
      stock = 55;
      rating = 4.5;
      tags = ["physics", "cosmology", "hawking", "quantum mechanics", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553805376-L.jpg";
    },
    {
      titleEn = "The Double Helix";
      titleBn = "ডাবল হেলিক্স";
      authorEn = "James D. Watson";
      authorBn = "জেমস ডি. ওয়াটসন";
      descriptionEn = "Watson's personal account of the discovery of the structure of DNA—science, rivalry, and breakthrough.";
      descriptionBn = "ডিএনএর কাঠামো আবিষ্কারের ওয়াটসনের ব্যক্তিগত বিবরণ—বিজ্ঞান, প্রতিদ্বন্দ্বিতা ও অগ্রগতি।";
      isbn = "9780743216302";
      genre = "science";
      language = "english";
      price = 449;
      stock = 50;
      rating = 4.4;
      tags = ["DNA", "genetics", "molecular biology", "memoir", "discovery"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780743216302-L.jpg";
    },
    {
      titleEn = "Quantum Theory Cannot Hurt You";
      titleBn = "কোয়ান্টাম থিওরি আপনাকে আঘাত করতে পারবে না";
      authorEn = "Marcus Chown";
      authorBn = "মার্কাস চাউন";
      descriptionEn = "A witty, accessible introduction to quantum mechanics and relativity for the complete non-scientist.";
      descriptionBn = "সম্পূর্ণ অবিজ্ঞানীদের জন্য কোয়ান্টাম মেকানিক্স ও আপেক্ষিকতার মজাদার ও সহজবোধ্য পরিচয়।";
      isbn = "9780571225699";
      genre = "science";
      language = "english";
      price = 399;
      stock = 60;
      rating = 4.4;
      tags = ["quantum mechanics", "relativity", "physics", "popular science", "beginners"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780571225699-L.jpg";
    },
    {
      titleEn = "The Elegant Universe";
      titleBn = "মার্জিত মহাবিশ্ব";
      authorEn = "Brian Greene";
      authorBn = "ব্রায়ান গ্রিন";
      descriptionEn = "Superstrings, hidden dimensions, and the quest for the ultimate theory—Greene's acclaimed guide to string theory.";
      descriptionBn = "সুপারস্ট্রিং, লুকানো মাত্রা ও চূড়ান্ত তত্ত্বের সন্ধান—গ্রিনের প্রশংসিত স্ট্রিং থিওরি গাইড।";
      isbn = "9780375708114";
      genre = "science";
      language = "english";
      price = 549;
      stock = 55;
      rating = 4.6;
      tags = ["string theory", "physics", "cosmology", "quantum mechanics", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780375708114-L.jpg";
    },
    {
      titleEn = "The Feynman Lectures on Physics Vol. 1";
      titleBn = "ফাইনম্যান লেকচার্স অন ফিজিক্স খণ্ড ১";
      authorEn = "Richard P. Feynman";
      authorBn = "রিচার্ড পি. ফাইনম্যান";
      descriptionEn = "The classic introduction to mechanics, radiation, and heat—Feynman's legendary lectures compiled for students and enthusiasts.";
      descriptionBn = "মেকানিক্স, বিকিরণ ও তাপের ক্লাসিক পরিচয়—ফাইনম্যানের কিংবদন্তি বক্তৃতামালা।";
      isbn = "9780465023820";
      genre = "academic";
      language = "english";
      price = 799;
      stock = 40;
      rating = 4.9;
      tags = ["physics", "mechanics", "feynman", "textbook", "lectures"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780465023820-L.jpg";
    },
    {
      titleEn = "What Is Life?";
      titleBn = "জীবন কী?";
      authorEn = "Erwin Schrodinger";
      authorBn = "এরউইন শ্রোডিংগার";
      descriptionEn = "Schrodinger's influential essay exploring the physical basis of life—a founding document of molecular biology.";
      descriptionBn = "জীবনের ভৌত ভিত্তি অন্বেষণকারী শ্রোডিংগারের প্রভাবশালী প্রবন্ধ—আণবিক জীববিজ্ঞানের প্রতিষ্ঠাকালীন দলিল।";
      isbn = "9781107604667";
      genre = "science";
      language = "english";
      price = 399;
      stock = 45;
      rating = 4.5;
      tags = ["biology", "physics", "schrodinger", "molecular biology", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781107604667-L.jpg";
    },
    {
      titleEn = "The Demon in the Machine";
      titleBn = "যন্ত্রের মধ্যে দানব";
      authorEn = "Paul Davies";
      authorBn = "পল ডেভিস";
      descriptionEn = "Davies explores the mystery of biological information—how physics and information theory illuminate the nature of life.";
      descriptionBn = "ডেভিস জৈবিক তথ্যের রহস্য অন্বেষণ করেন—পদার্থবিজ্ঞান ও তথ্য তত্ত্ব কিভাবে জীবনের প্রকৃতি আলোকিত করে।";
      isbn = "9780226731650";
      genre = "science";
      language = "english";
      price = 499;
      stock = 40;
      rating = 4.3;
      tags = ["biology", "information theory", "physics", "life", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780226731650-L.jpg";
    },
    {
      titleEn = "The Order of Time";
      titleBn = "সময়ের পরম্পরা";
      authorEn = "Carlo Rovelli";
      authorBn = "কার্লো রোভেলি";
      descriptionEn = "A lyrical exploration of the physics of time—why it flows, why it exists, and what happens when it ends.";
      descriptionBn = "সময়ের পদার্থবিজ্ঞানের কাব্যময় অন্বেষণ—এটি কেন প্রবাহিত হয়, কেন বিদ্যমান এবং শেষ হলে কী ঘটে।";
      isbn = "9780735216112";
      genre = "science";
      language = "english";
      price = 499;
      stock = 55;
      rating = 4.6;
      tags = ["time", "physics", "quantum gravity", "philosophy", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780735216112-L.jpg";
    },
    {
      titleEn = "Seven Brief Lessons on Physics";
      titleBn = "পদার্থবিজ্ঞানের সাতটি সংক্ষিপ্ত পাঠ";
      authorEn = "Carlo Rovelli";
      authorBn = "কার্লো রোভেলি";
      descriptionEn = "A slim, beautiful guide to the greatest revolutions in modern physics—from general relativity to quantum loops.";
      descriptionBn = "আধুনিক পদার্থবিজ্ঞানের সর্বশ্রেষ্ঠ বিপ্লবগুলোর একটি পাতলা, সুন্দর গাইড।";
      isbn = "9780399184413";
      genre = "science";
      language = "english";
      price = 349;
      stock = 70;
      rating = 4.5;
      tags = ["physics", "relativity", "quantum mechanics", "rovelli", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780399184413-L.jpg";
    },
    {
      titleEn = "The Martian";
      titleBn = "দ্য মার্টিয়ান";
      authorEn = "Andy Weir";
      authorBn = "অ্যান্ডি ওয়্যার";
      descriptionEn = "An astronaut stranded on Mars must survive alone with only his ingenuity and knowledge of science—a thrilling science-fiction page-turner.";
      descriptionBn = "মঙ্গলগ্রহে আটকা পড়া একজন মহাকাশচারী শুধুমাত্র বিজ্ঞান জ্ঞান দিয়ে টিকে থাকার চেষ্টা করে।";
      isbn = "9780553418026";
      genre = "science";
      language = "english";
      price = 449;
      stock = 65;
      rating = 4.7;
      tags = ["science fiction", "mars", "survival", "space", "astronaut"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg";
    },
    {
      titleEn = "The Gene: An Intimate History";
      titleBn = "জিন: একটি ঘনিষ্ঠ ইতিহাস";
      authorEn = "Siddhartha Mukherjee";
      authorBn = "সিদ্ধার্থ মুখার্জি";
      descriptionEn = "Pulitzer Prize-winner Mukherjee tells the fascinating story of the gene—its discovery, its manipulation, and its future.";
      descriptionBn = "পুলিৎজার বিজয়ী মুখার্জি জিনের আকর্ষণীয় কাহিনী বলেন—আবিষ্কার, কারসাজি ও ভবিষ্যৎ।";
      isbn = "9781476733524";
      genre = "science";
      language = "english";
      price = 649;
      stock = 55;
      rating = 4.7;
      tags = ["genetics", "DNA", "biology", "mukherjee", "history of science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781476733524-L.jpg";
    },
    {
      titleEn = "The Emperor of All Maladies";
      titleBn = "সকল রোগের সম্রাট";
      authorEn = "Siddhartha Mukherjee";
      authorBn = "সিদ্ধার্থ মুখার্জি";
      descriptionEn = "A biography of cancer—the history, science, and human stories behind one of humanity's oldest and most feared diseases.";
      descriptionBn = "ক্যান্সারের জীবনী—মানবজাতির প্রাচীনতম ও সবচেয়ে ভয়ঙ্কর রোগগুলোর একটির ইতিহাস ও বিজ্ঞান।";
      isbn = "9781439170915";
      genre = "science";
      language = "english";
      price = 599;
      stock = 50;
      rating = 4.8;
      tags = ["cancer", "medicine", "biology", "mukherjee", "history of medicine"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781439170915-L.jpg";
    },
    {
      titleEn = "Thinking, Fast and Slow";
      titleBn = "ভাবা, দ্রুত ও ধীর";
      authorEn = "Daniel Kahneman";
      authorBn = "ড্যানিয়েল কাহনেম্যান";
      descriptionEn = "Nobel laureate Kahneman reveals the two systems that drive the way we think and make choices—fast intuition and slow reason.";
      descriptionBn = "নোবেলজয়ী কাহনেম্যান দুটি চিন্তার পদ্ধতি উন্মোচন করেন—দ্রুত স্বজ্ঞাত ও ধীর যুক্তি।";
      isbn = "9780374533557";
      genre = "science";
      language = "english";
      price = 549;
      stock = 80;
      rating = 4.6;
      tags = ["psychology", "behavioral economics", "decision making", "cognitive science", "kahneman"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg";
    },
    {
      titleEn = "The Structure of Scientific Revolutions";
      titleBn = "বৈজ্ঞানিক বিপ্লবের কাঠামো";
      authorEn = "Thomas S. Kuhn";
      authorBn = "থমাস এস. কুন";
      descriptionEn = "Kuhn's landmark book on how science actually progresses—through paradigm shifts rather than steady accumulation of knowledge.";
      descriptionBn = "বিজ্ঞান আসলে কিভাবে এগিয়ে যায়—জ্ঞানের নিয়মিত সঞ্চয়ের বদলে প্যারাডাইম শিফটের মাধ্যমে।";
      isbn = "9780226458120";
      genre = "science";
      language = "english";
      price = 499;
      stock = 45;
      rating = 4.5;
      tags = ["philosophy of science", "paradigm", "history of science", "kuhn", "academic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780226458120-L.jpg";
    },
    {
      titleEn = "The Sixth Extinction";
      titleBn = "ষষ্ঠ বিলুপ্তি";
      authorEn = "Elizabeth Kolbert";
      authorBn = "এলিজাবেথ কোলবার্ট";
      descriptionEn = "Pulitzer Prize-winning investigation into Earth's current mass extinction event—caused by human activity.";
      descriptionBn = "পৃথিবীর চলমান গণবিলুপ্তির পুলিৎজার বিজয়ী অনুসন্ধান—মানবিক কর্মকাণ্ডের কারণে।";
      isbn = "9781250062185";
      genre = "science";
      language = "english";
      price = 499;
      stock = 50;
      rating = 4.6;
      tags = ["extinction", "ecology", "climate", "biology", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781250062185-L.jpg";
    },
    {
      titleEn = "Sapiens: A Brief History of Humankind";
      titleBn = "স্যাপিয়েন্স: মানবজাতির সংক্ষিপ্ত ইতিহাস";
      authorEn = "Yuval Noah Harari";
      authorBn = "ইউভাল নোয়া হারারি";
      descriptionEn = "A daring overview of the entire sweep of human history—from the Stone Age to the 21st century.";
      descriptionBn = "প্রস্তর যুগ থেকে একবিংশ শতাব্দী পর্যন্ত মানব ইতিহাসের সাহসী সংক্ষিপ্তসার।";
      isbn = "9780062316097";
      genre = "science";
      language = "english";
      price = 599;
      stock = 90;
      rating = 4.7;
      tags = ["history", "anthropology", "evolution", "civilization", "harari"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg";
    },
    {
      titleEn = "Homo Deus: A Brief History of Tomorrow";
      titleBn = "হোমো ডিউস: আগামীর সংক্ষিপ্ত ইতিহাস";
      authorEn = "Yuval Noah Harari";
      authorBn = "ইউভাল নোয়া হারারি";
      descriptionEn = "Harari explores the future of humanity—artificial intelligence, genetic engineering, and the age of god-like superhumans.";
      descriptionBn = "হারারি মানবতার ভবিষ্যৎ অন্বেষণ করেন—কৃত্রিম বুদ্ধিমত্তা, জিনগত প্রকৌশল ও দেবতুল্য সুপারমানবদের যুগ।";
      isbn = "9780062464316";
      genre = "science";
      language = "english";
      price = 599;
      stock = 70;
      rating = 4.5;
      tags = ["future", "AI", "transhumanism", "technology", "harari"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062464316-L.jpg";
    },
    {
      titleEn = "The Immortal Life of Henrietta Lacks";
      titleBn = "হেনরিয়েটা ল্যাক্সের অমর জীবন";
      authorEn = "Rebecca Skloot";
      authorBn = "রেবেকা স্ক্লুট";
      descriptionEn = "The extraordinary story of HeLa cells—the first immortal human cells grown in culture and their profound impact on medicine.";
      descriptionBn = "HeLa কোষের অসাধারণ কাহিনী—সংস্কৃতিতে জন্মানো প্রথম অমর মানব কোষ ও চিকিৎসায় তার গভীর প্রভাব।";
      isbn = "9781400052189";
      genre = "science";
      language = "english";
      price = 499;
      stock = 50;
      rating = 4.7;
      tags = ["medicine", "biology", "cells", "ethics", "history of science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781400052189-L.jpg";
    },
    {
      titleEn = "The Hidden Life of Trees";
      titleBn = "গাছের লুকানো জীবন";
      authorEn = "Peter Wohlleben";
      authorBn = "পিটার ওলেবেন";
      descriptionEn = "A forester reveals how trees communicate, nurture each other, and feel pain—a revolutionary understanding of forests.";
      descriptionBn = "একজন বনপাল উন্মোচন করেন কিভাবে গাছ যোগাযোগ করে, একে অপরকে পালন করে ও ব্যথা অনুভব করে।";
      isbn = "9781771642484";
      genre = "science";
      language = "english";
      price = 449;
      stock = 55;
      rating = 4.5;
      tags = ["trees", "forest", "ecology", "nature", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781771642484-L.jpg";
    },
    {
      titleEn = "The Art of Computer Programming Vol. 1";
      titleBn = "কম্পিউটার প্রোগ্রামিংয়ের শিল্পকলা খণ্ড ১";
      authorEn = "Donald E. Knuth";
      authorBn = "ডোনাল্ড ই. ক্নুথ";
      descriptionEn = "The definitive reference on algorithms and data structures—Knuth's monumental work, considered the Bible of computer science.";
      descriptionBn = "অ্যালগরিদম ও ডেটা স্ট্রাকচারের সর্বোচ্চ রেফারেন্স—কম্পিউটার বিজ্ঞানের বাইবেল বলে বিবেচিত।";
      isbn = "9780201896831";
      genre = "academic";
      language = "english";
      price = 899;
      stock = 30;
      rating = 4.8;
      tags = ["algorithms", "computer science", "knuth", "textbook", "programming"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780201896831-L.jpg";
    },
    {
      titleEn = "Computer Networks";
      titleBn = "কম্পিউটার নেটওয়ার্ক";
      authorEn = "Andrew S. Tanenbaum";
      authorBn = "অ্যান্ড্রু এস. ট্যানেনবাম";
      descriptionEn = "The classic textbook on how computer networks work—covering all major protocols and network layers with clarity and depth.";
      descriptionBn = "কম্পিউটার নেটওয়ার্ক কিভাবে কাজ করে তার ক্লাসিক পাঠ্যপুস্তক।";
      isbn = "9780132126953";
      genre = "academic";
      language = "english";
      price = 799;
      stock = 40;
      rating = 4.6;
      tags = ["networking", "computer science", "protocols", "textbook", "TCP/IP"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780132126953-L.jpg";
    },
    {
      titleEn = "Operating System Concepts";
      titleBn = "অপারেটিং সিস্টেম কনসেপ্টস";
      authorEn = "Abraham Silberschatz";
      authorBn = "আব্রাহাম সিলবারশাৎজ";
      descriptionEn = "The standard OS textbook—covering processes, memory, storage, and security in modern operating systems.";
      descriptionBn = "আদর্শ অপারেটিং সিস্টেম পাঠ্যপুস্তক—আধুনিক অপারেটিং সিস্টেমে প্রক্রিয়া, মেমোরি, স্টোরেজ ও নিরাপত্তা।";
      isbn = "9781118063330";
      genre = "academic";
      language = "english";
      price = 849;
      stock = 35;
      rating = 4.5;
      tags = ["operating systems", "computer science", "textbook", "processes", "memory"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781118063330-L.jpg";
    },
    {
      titleEn = "Database System Concepts";
      titleBn = "ডেটাবেস সিস্টেম কনসেপ্টস";
      authorEn = "Silberschatz, Korth, Sudarshan";
      authorBn = "সিলবারশাৎজ, কোর্থ, সুদর্শন";
      descriptionEn = "The comprehensive textbook on database systems—SQL, transactions, storage, and query processing.";
      descriptionBn = "ডেটাবেস সিস্টেমের ব্যাপক পাঠ্যপুস্তক—SQL, ট্রানজেকশন, স্টোরেজ ও কোয়েরি প্রসেসিং।";
      isbn = "9780078022159";
      genre = "academic";
      language = "english";
      price = 849;
      stock = 35;
      rating = 4.5;
      tags = ["database", "SQL", "computer science", "textbook", "transactions"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780078022159-L.jpg";
    },
    {
      titleEn = "Artificial Intelligence: A Modern Approach";
      titleBn = "কৃত্রিম বুদ্ধিমত্তা: একটি আধুনিক পদ্ধতি";
      authorEn = "Stuart Russell and Peter Norvig";
      authorBn = "স্টুয়ার্ট রাসেল এবং পিটার নরভিগ";
      descriptionEn = "The definitive AI textbook—comprehensive coverage of machine learning, search, planning, perception, and more.";
      descriptionBn = "সর্বোচ্চ AI পাঠ্যপুস্তক—মেশিন লার্নিং, সার্চ, পরিকল্পনা ও উপলব্ধির ব্যাপক আলোচনা।";
      isbn = "9780136042594";
      genre = "academic";
      language = "english";
      price = 899;
      stock = 40;
      rating = 4.8;
      tags = ["AI", "machine learning", "computer science", "textbook", "Russell Norvig"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780136042594-L.jpg";
    },
    {
      titleEn = "Deep Learning";
      titleBn = "ডিপ লার্নিং";
      authorEn = "Ian Goodfellow, Yoshua Bengio, Aaron Courville";
      authorBn = "ইয়ান গুডফেলো, ইয়োশুয়া বেনজিও, অ্যারন কোর্ভিল";
      descriptionEn = "The textbook for modern deep learning—covering neural networks, regularization, optimization, and advanced architectures.";
      descriptionBn = "আধুনিক ডিপ লার্নিংয়ের পাঠ্যপুস্তক—নিউরাল নেটওয়ার্ক, রেগুলারাইজেশন ও অ্যাডভান্সড আর্কিটেকচার।";
      isbn = "9780262035613";
      genre = "academic";
      language = "english";
      price = 899;
      stock = 45;
      rating = 4.8;
      tags = ["deep learning", "neural networks", "AI", "machine learning", "textbook"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780262035613-L.jpg";
    },
    {
      titleEn = "The Design of Everyday Things";
      titleBn = "প্রতিদিনের জিনিসের ডিজাইন";
      authorEn = "Don Norman";
      authorBn = "ডন নরম্যান";
      descriptionEn = "A classic treatise on how design shapes human behaviour—essential reading for anyone who designs products or interfaces.";
      descriptionBn = "ডিজাইন কিভাবে মানব আচরণ গঠন করে তার ক্লাসিক গ্রন্থ—পণ্য বা ইন্টারফেস ডিজাইনকারীদের জন্য অপরিহার্য।";
      isbn = "9780465050659";
      genre = "science";
      language = "english";
      price = 549;
      stock = 55;
      rating = 4.6;
      tags = ["design", "UX", "usability", "psychology", "product design"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg";
    },
    {
      titleEn = "The Signal and the Noise";
      titleBn = "সংকেত ও শব্দ";
      authorEn = "Nate Silver";
      authorBn = "নেট সিলভার";
      descriptionEn = "Why most predictions fail—and some don't. Silver examines forecasting in sports, politics, economics, and science.";
      descriptionBn = "কেন বেশিরভাগ ভবিষ্যদ্বাণী ব্যর্থ হয়—এবং কেউ কেউ হয় না। স্পোর্টস, রাজনীতি ও বিজ্ঞানে পূর্বাভাসের পরীক্ষা।";
      isbn = "9780143125082";
      genre = "science";
      language = "english";
      price = 499;
      stock = 50;
      rating = 4.4;
      tags = ["statistics", "prediction", "data science", "forecasting", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780143125082-L.jpg";
    },
    {
      titleEn = "Outliers: The Story of Success";
      titleBn = "আউটলায়ার্স: সাফল্যের গল্প";
      authorEn = "Malcolm Gladwell";
      authorBn = "ম্যালকম গ্ল্যাডওয়েল";
      descriptionEn = "Gladwell examines what makes high-achievers different—the surprising science of success, talent, and opportunity.";
      descriptionBn = "গ্ল্যাডওয়েল পরীক্ষা করেন উচ্চ-অর্জনকারীরা কেন আলাদা—সাফল্য, প্রতিভা ও সুযোগের বিস্ময়কর বিজ্ঞান।";
      isbn = "9780316017930";
      genre = "science";
      language = "english";
      price = 449;
      stock = 70;
      rating = 4.5;
      tags = ["success", "psychology", "sociology", "gladwell", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780316017930-L.jpg";
    },
    {
      titleEn = "The Tipping Point";
      titleBn = "দ্য টিপিং পয়েন্ট";
      authorEn = "Malcolm Gladwell";
      authorBn = "ম্যালকম গ্ল্যাডওয়েল";
      descriptionEn = "How little things can make a big difference—the sociology of epidemics, trends, and social change.";
      descriptionBn = "ছোট জিনিস কিভাবে বড় পার্থক্য করতে পারে—মহামারী, প্রবণতা ও সামাজিক পরিবর্তনের সমাজবিজ্ঞান।";
      isbn = "9780316346627";
      genre = "science";
      language = "english";
      price = 449;
      stock = 65;
      rating = 4.4;
      tags = ["sociology", "trends", "social change", "gladwell", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780316346627-L.jpg";
    },
    {
      titleEn = "How to Think Like a Computer Scientist";
      titleBn = "কম্পিউটার বিজ্ঞানীর মতো ভাবতে শেখা";
      authorEn = "Allen Downey";
      authorBn = "অ্যালেন ডাউনি";
      descriptionEn = "An introduction to programming and computational thinking using Python—ideal for beginners and students.";
      descriptionBn = "পাইথন ব্যবহার করে প্রোগ্রামিং ও কম্পিউটেশনাল চিন্তার পরিচয়—শিক্ষার্থীদের জন্য আদর্শ।";
      isbn = "9781491939369";
      genre = "academic";
      language = "english";
      price = 549;
      stock = 60;
      rating = 4.4;
      tags = ["python", "computer science", "programming", "beginners", "computational thinking"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781491939369-L.jpg";
    },
    {
      titleEn = "Structure and Interpretation of Computer Programs";
      titleBn = "কম্পিউটার প্রোগ্রামের কাঠামো ও ব্যাখ্যা";
      authorEn = "Harold Abelson and Gerald Jay Sussman";
      authorBn = "হ্যারল্ড আবেলসন এবং জেরাল্ড জে. সাসমান";
      descriptionEn = "The legendary MIT textbook on computer science fundamentals—abstract data, recursion, interpretation, and compilers.";
      descriptionBn = "কম্পিউটার বিজ্ঞানের মূলনীতির কিংবদন্তি MIT পাঠ্যপুস্তক।";
      isbn = "9780262510875";
      genre = "academic";
      language = "english";
      price = 799;
      stock = 30;
      rating = 4.7;
      tags = ["computer science", "SICP", "lisp", "programming", "MIT"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780262510875-L.jpg";
    },
    {
      titleEn = "The Phoenix Project";
      titleBn = "দ্য ফিনিক্স প্রজেক্ট";
      authorEn = "Gene Kim, Kevin Behr, George Spafford";
      authorBn = "জিন কিম, কেভিন বেহর, জর্জ স্পাফোর্ড";
      descriptionEn = "A novel about IT, DevOps, and how to transform a struggling business—essential reading for modern technology teams.";
      descriptionBn = "IT, DevOps ও একটি সংগ্রামরত ব্যবসাকে রূপান্তরিত করার উপন্যাস।";
      isbn = "9781942788294";
      genre = "academic";
      language = "english";
      price = 599;
      stock = 50;
      rating = 4.6;
      tags = ["DevOps", "IT", "management", "agile", "technology"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781942788294-L.jpg";
    },
    {
      titleEn = "Refactoring: Improving the Design of Existing Code";
      titleBn = "রিফ্যাক্টরিং: বিদ্যমান কোডের ডিজাইন উন্নত করা";
      authorEn = "Martin Fowler";
      authorBn = "মার্টিন ফাউলার";
      descriptionEn = "The classic guide to restructuring existing code to make it easier to understand and cheaper to modify.";
      descriptionBn = "বিদ্যমান কোড পুনর্গঠনের ক্লাসিক গাইড—বোঝা সহজ করতে ও পরিবর্তন সস্তা করতে।";
      isbn = "9780201485677";
      genre = "academic";
      language = "english";
      price = 699;
      stock = 45;
      rating = 4.7;
      tags = ["refactoring", "software engineering", "programming", "code quality", "best practices"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780201485677-L.jpg";
    },
    {
      titleEn = "Domain-Driven Design";
      titleBn = "ডোমেইন-ড্রিভেন ডিজাইন";
      authorEn = "Eric Evans";
      authorBn = "এরিক ইভান্স";
      descriptionEn = "Tackling complexity in the heart of software—Evans's seminal work on building systems that match business domains.";
      descriptionBn = "সফটওয়্যারের হৃদয়ে জটিলতা মোকাবেলা—ব্যবসায়িক ডোমেইনের সাথে মেলে এমন সিস্টেম নির্মাণে ইভান্সের গুরুত্বপূর্ণ কাজ।";
      isbn = "9780321125217";
      genre = "academic";
      language = "english";
      price = 749;
      stock = 35;
      rating = 4.6;
      tags = ["DDD", "software architecture", "programming", "design patterns", "domain modeling"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780321125217-L.jpg";
    },
    {
      titleEn = "Code: The Hidden Language of Computer Hardware and Software";
      titleBn = "কোড: কম্পিউটার হার্ডওয়্যার ও সফটওয়্যারের লুকানো ভাষা";
      authorEn = "Charles Petzold";
      authorBn = "চার্লস পেটজোল্ড";
      descriptionEn = "An engaging exploration of how computers work at the lowest level—from Morse code to machine language.";
      descriptionBn = "কম্পিউটার কিভাবে সর্বনিম্ন স্তরে কাজ করে তার আকর্ষণীয় অন্বেষণ—মোর্স কোড থেকে মেশিন ভাষা পর্যন্ত।";
      isbn = "9780735611313";
      genre = "academic";
      language = "english";
      price = 599;
      stock = 50;
      rating = 4.7;
      tags = ["computer science", "hardware", "low level", "programming", "fundamentals"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780735611313-L.jpg";
    },
    {
      titleEn = "The Lean Startup";
      titleBn = "দ্য লিন স্টার্টআপ";
      authorEn = "Eric Ries";
      authorBn = "এরিক রিস";
      descriptionEn = "How today's entrepreneurs use continuous innovation to create radically successful businesses.";
      descriptionBn = "আজকের উদ্যোক্তারা কিভাবে ক্রমাগত উদ্ভাবন ব্যবহার করে মৌলিকভাবে সফল ব্যবসা তৈরি করেন।";
      isbn = "9780307887894";
      genre = "science";
      language = "english";
      price = 499;
      stock = 65;
      rating = 4.4;
      tags = ["startup", "entrepreneurship", "lean", "innovation", "business"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg";
    },
    {
      titleEn = "The Second Machine Age";
      titleBn = "দ্বিতীয় মেশিন যুগ";
      authorEn = "Erik Brynjolfsson and Andrew McAfee";
      authorBn = "এরিক ব্রিনজলফসন এবং অ্যান্ড্রু ম্যাকাফি";
      descriptionEn = "How digital technologies are transforming the economy and society—and what it means for work, progress, and prosperity.";
      descriptionBn = "কিভাবে ডিজিটাল প্রযুক্তি অর্থনীতি ও সমাজকে রূপান্তরিত করছে।";
      isbn = "9780393350647";
      genre = "science";
      language = "english";
      price = 549;
      stock = 50;
      rating = 4.4;
      tags = ["technology", "economy", "AI", "automation", "future of work"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780393350647-L.jpg";
    },
    {
      titleEn = "The Brain: The Story of You";
      titleBn = "মস্তিষ্ক: তোমার গল্প";
      authorEn = "David Eagleman";
      authorBn = "ডেভিড ইগলম্যান";
      descriptionEn = "A journey into the human brain—how it shapes identity, memory, perception, and consciousness.";
      descriptionBn = "মানব মস্তিষ্কে একটি যাত্রা—এটি কিভাবে পরিচয়, স্মৃতি, উপলব্ধি ও চেতনাকে গঠন করে।";
      isbn = "9780307950604";
      genre = "science";
      language = "english";
      price = 499;
      stock = 60;
      rating = 4.6;
      tags = ["neuroscience", "brain", "consciousness", "psychology", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780307950604-L.jpg";
    },
    {
      titleEn = "Phantoms in the Brain";
      titleBn = "মস্তিষ্কে ভূত";
      authorEn = "V.S. Ramachandran and Sandra Blakeslee";
      authorBn = "ভি.এস. রামচন্দ্রন এবং স্যান্ড্রা ব্লেকস্লি";
      descriptionEn = "Ramachandran uses curious neurological patients to explore the mysteries of the human brain and consciousness.";
      descriptionBn = "রামচন্দ্রন মানব মস্তিষ্ক ও চেতনার রহস্য অন্বেষণে কৌতূহলী স্নায়বিক রোগীদের ব্যবহার করেন।";
      isbn = "9780688172176";
      genre = "science";
      language = "english";
      price = 499;
      stock = 45;
      rating = 4.6;
      tags = ["neuroscience", "brain", "consciousness", "ramachandran", "popular science"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780688172176-L.jpg";
    },
    {
      titleEn = "Guns, Germs, and Steel";
      titleBn = "বন্দুক, জীবাণু ও ইস্পাত";
      authorEn = "Jared Diamond";
      authorBn = "জ্যারেড ডায়মন্ড";
      descriptionEn = "Why did some civilisations conquer others? Diamond's Pulitzer Prize-winning explanation of human history through geography and biology.";
      descriptionBn = "কেন কিছু সভ্যতা অন্যদের জয় করল? ভূগোল ও জীববিজ্ঞানের মাধ্যমে মানব ইতিহাসের পুলিৎজার বিজয়ী ব্যাখ্যা।";
      isbn = "9780393354324";
      genre = "science";
      language = "english";
      price = 599;
      stock = 55;
      rating = 4.6;
      tags = ["history", "anthropology", "geography", "civilization", "diamond"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780393354324-L.jpg";
    },
    {
      titleEn = "The Innovator's Dilemma";
      titleBn = "উদ্ভাবকের দ্বিধা";
      authorEn = "Clayton M. Christensen";
      authorBn = "ক্লেটন এম. ক্রিস্টেনসেন";
      descriptionEn = "Why great companies can lose their market leadership—and how disruptive technologies transform industries.";
      descriptionBn = "কেন মহান কোম্পানিগুলো তাদের বাজারের নেতৃত্ব হারাতে পারে—এবং কিভাবে বিঘ্নকারী প্রযুক্তি শিল্পকে রূপান্তরিত করে।";
      isbn = "9780062060242";
      genre = "science";
      language = "english";
      price = 549;
      stock = 50;
      rating = 4.5;
      tags = ["innovation", "disruption", "technology", "business strategy", "management"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780062060242-L.jpg";
    },
    {
      titleEn = "Physics for Scientists and Engineers";
      titleBn = "বিজ্ঞানী ও প্রকৌশলীদের জন্য পদার্থবিজ্ঞান";
      authorEn = "Paul E. Tipler and Gene Mosca";
      authorBn = "পল ই. টিপলার এবং জিন মোসকা";
      descriptionEn = "Comprehensive university physics textbook covering mechanics, waves, thermodynamics, electricity, magnetism, and modern physics.";
      descriptionBn = "মেকানিক্স, তরঙ্গ, তাপগতিবিদ্যা, বিদ্যুৎ, চুম্বকত্ব ও আধুনিক পদার্থবিজ্ঞান আচ্ছাদনকারী ব্যাপক বিশ্ববিদ্যালয় পাঠ্যপুস্তক।";
      isbn = "9781429202657";
      genre = "academic";
      language = "english";
      price = 899;
      stock = 40;
      rating = 4.5;
      tags = ["physics", "university", "mechanics", "textbook", "engineering"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781429202657-L.jpg";
    },
    {
      titleEn = "Organic Chemistry";
      titleBn = "জৈব রসায়ন";
      authorEn = "Paula Yurkanis Bruice";
      authorBn = "পলা ইউরকানিস ব্রুস";
      descriptionEn = "A comprehensive, student-friendly introduction to organic chemistry with a focus on reactions, mechanisms, and applications.";
      descriptionBn = "বিক্রিয়া, প্রক্রিয়া ও প্রয়োগের উপর দৃষ্টি নিবদ্ধ করে জৈব রসায়নের ব্যাপক পাঠ্যপুস্তক।";
      isbn = "9780321971371";
      genre = "academic";
      language = "english";
      price = 849;
      stock = 35;
      rating = 4.5;
      tags = ["chemistry", "organic chemistry", "reactions", "textbook", "university"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780321971371-L.jpg";
    },
    {
      titleEn = "Molecular Biology of the Cell";
      titleBn = "কোষের আণবিক জীববিজ্ঞান";
      authorEn = "Bruce Alberts et al.";
      authorBn = "ব্রুস অ্যালবার্টস প্রমুখ";
      descriptionEn = "The standard reference for molecular and cell biology—detailed, comprehensive, and beautifully illustrated.";
      descriptionBn = "আণবিক ও কোষ জীববিজ্ঞানের আদর্শ রেফারেন্স—বিস্তারিত, ব্যাপক ও সুন্দরভাবে চিত্রিত।";
      isbn = "9780815344643";
      genre = "academic";
      language = "english";
      price = 899;
      stock = 30;
      rating = 4.7;
      tags = ["cell biology", "molecular biology", "genetics", "textbook", "biology"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780815344643-L.jpg";
    },
    {
      titleEn = "Calculus: Early Transcendentals";
      titleBn = "ক্যালকুলাস: আর্লি ট্রান্সসেন্ডেন্টালস";
      authorEn = "James Stewart";
      authorBn = "জেমস স্টুয়ার্ট";
      descriptionEn = "The most popular calculus textbook in the world—clear explanations, beautiful illustrations, and comprehensive exercises.";
      descriptionBn = "বিশ্বের সবচেয়ে জনপ্রিয় ক্যালকুলাস পাঠ্যপুস্তক—স্পষ্ট ব্যাখ্যা ও ব্যাপক অনুশীলনী।";
      isbn = "9781285741550";
      genre = "academic";
      language = "english";
      price = 849;
      stock = 45;
      rating = 4.6;
      tags = ["calculus", "mathematics", "textbook", "university", "STEM"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9781285741550-L.jpg";
    },
    {
      titleEn = "Linear Algebra and Its Applications";
      titleBn = "রৈখিক বীজগণিত ও তার প্রয়োগ";
      authorEn = "Gilbert Strang";
      authorBn = "গিলবার্ট স্ট্র্যাং";
      descriptionEn = "MIT's beloved linear algebra textbook—covers vectors, matrices, eigenvalues, and applications in data science and engineering.";
      descriptionBn = "MIT-এর প্রিয় রৈখিক বীজগণিত পাঠ্যপুস্তক—ভেক্টর, ম্যাট্রিক্স, আইগেনভ্যালু ও ডেটা সায়েন্সে প্রয়োগ।";
      isbn = "9780030105678";
      genre = "academic";
      language = "english";
      price = 799;
      stock = 40;
      rating = 4.7;
      tags = ["linear algebra", "mathematics", "textbook", "data science", "MIT"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780030105678-L.jpg";
    },
    {
      titleEn = "Discrete Mathematics and Its Applications";
      titleBn = "বিযুক্ত গণিত ও তার প্রয়োগ";
      authorEn = "Kenneth H. Rosen";
      authorBn = "কেনেথ এইচ. রোজেন";
      descriptionEn = "The standard textbook on discrete mathematics—logic, sets, combinatorics, graphs, and algorithms for computer science students.";
      descriptionBn = "বিযুক্ত গণিতের আদর্শ পাঠ্যপুস্তক—যুক্তি, সেট, সমন্বয়বিদ্যা ও কম্পিউটার বিজ্ঞান শিক্ষার্থীদের জন্য।";
      isbn = "9780073383095";
      genre = "academic";
      language = "english";
      price = 799;
      stock = 40;
      rating = 4.5;
      tags = ["discrete math", "computer science", "logic", "textbook", "algorithms"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780073383095-L.jpg";
    },
    {
      titleEn = "Biology: The Science of Life";
      titleBn = "জীববিজ্ঞান: জীবনের বিজ্ঞান";
      authorEn = "Robert A. Wallace";
      authorBn = "রবার্ট এ. ওয়ালেস";
      descriptionEn = "A comprehensive university biology textbook covering cell biology, genetics, evolution, ecology, and plant and animal biology.";
      descriptionBn = "কোষ জীববিজ্ঞান, জিনতত্ত্ব, বিবর্তন ও বাস্তুবিদ্যা আচ্ছাদনকারী ব্যাপক বিশ্ববিদ্যালয় জীববিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9780673469892";
      genre = "academic";
      language = "english";
      price = 849;
      stock = 35;
      rating = 4.4;
      tags = ["biology", "ecology", "genetics", "textbook", "university"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780673469892-L.jpg";
    },
    {
      titleEn = "Engineering Mathematics";
      titleBn = "ইঞ্জিনিয়ারিং গণিত";
      authorEn = "K.A. Stroud";
      authorBn = "কে.এ. স্ট্রাউড";
      descriptionEn = "The classic self-study engineering mathematics textbook—covering calculus, complex numbers, Laplace transforms, and statistics.";
      descriptionBn = "ক্লাসিক স্ব-অধ্যয়ন ইঞ্জিনিয়ারিং গণিত পাঠ্যপুস্তক—ক্যালকুলাস, জটিল সংখ্যা ও লাপ্লাস রূপান্তর।";
      isbn = "9780831134709";
      genre = "academic";
      language = "english";
      price = 799;
      stock = 45;
      rating = 4.6;
      tags = ["engineering", "mathematics", "calculus", "textbook", "STEM"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780831134709-L.jpg";
    },
    {
      titleEn = "Bijnaner Aloy";
      titleBn = "বিজ্ঞানের আলোয়";
      authorEn = "Satyendranath Bose";
      authorBn = "সত্যেন্দ্রনাথ বসু";
      descriptionEn = "Collected popular science essays in Bengali by the great Indian physicist who co-founded Bose-Einstein statistics.";
      descriptionBn = "বোস-আইনস্টাইন পরিসংখ্যানের সহ-প্রতিষ্ঠাতা মহান ভারতীয় পদার্থবিদের বাংলায় বিজ্ঞান রচনা সমগ্র।";
      isbn = "9788170664000";
      genre = "science";
      language = "bengali";
      price = 350;
      stock = 55;
      rating = 4.7;
      tags = ["physics", "bengali science", "bose", "popular science", "bengali"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788170664000-L.jpg";
    },
    {
      titleEn = "Bigyan O Bishwayan";
      titleBn = "বিজ্ঞান ও বিশ্বায়ন";
      authorEn = "Meghnad Saha";
      authorBn = "মেঘনাদ সাহা";
      descriptionEn = "Essays on science, society, and globalisation by the great Indian astrophysicist Meghnad Saha.";
      descriptionBn = "মহান ভারতীয় জ্যোতিঃপদার্থবিদ মেঘনাদ সাহার বিজ্ঞান, সমাজ ও বিশ্বায়ন বিষয়ক প্রবন্ধ সংকলন।";
      isbn = "9788185971100";
      genre = "science";
      language = "bengali";
      price = 320;
      stock = 45;
      rating = 4.5;
      tags = ["physics", "bengali science", "saha", "astrophysics", "bengali"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788185971100-L.jpg";
    },
    {
      titleEn = "Bigyan Rahasya";
      titleBn = "বিজ্ঞান রহস্য";
      authorEn = "Jagadish Chandra Bose";
      authorBn = "জগদীশচন্দ্র বসু";
      descriptionEn = "Popular science writings by J.C. Bose, the pioneer of radio science and plant physiology in India.";
      descriptionBn = "ভারতে বেতার বিজ্ঞান ও উদ্ভিদ শরীরবিদ্যার অগ্রদূত জে.সি. বসুর বিজ্ঞান রচনা।";
      isbn = "9788170665502";
      genre = "science";
      language = "bengali";
      price = 299;
      stock = 50;
      rating = 4.6;
      tags = ["physics", "botany", "JC Bose", "bengali science", "bengali"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788170665502-L.jpg";
    },
    {
      titleEn = "Anu Parmanu";
      titleBn = "অণু-পরমাণু";
      authorEn = "Sirshendu Mukhopadhyay";
      authorBn = "শীর্ষেন্দু মুখোপাধ্যায়";
      descriptionEn = "A Bengali science book explaining atoms, molecules, and the building blocks of matter for young readers.";
      descriptionBn = "তরুণ পাঠকদের জন্য পরমাণু, অণু ও পদার্থের গঠন ব্যাখ্যাকারী একটি বাংলা বিজ্ঞান বই।";
      isbn = "9788172150456";
      genre = "science";
      language = "bengali";
      price = 299;
      stock = 60;
      rating = 4.3;
      tags = ["chemistry", "atoms", "bengali science", "young readers", "bengali"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788172150456-L.jpg";
    },
    {
      titleEn = "Biswa Bigyan Kosh";
      titleBn = "বিশ্ব বিজ্ঞান কোষ";
      authorEn = "Various Editors";
      authorBn = "বিভিন্ন সম্পাদক";
      descriptionEn = "A comprehensive Bengali encyclopaedia of world science—covering physics, chemistry, biology, astronomy, and technology.";
      descriptionBn = "বিশ্ব বিজ্ঞানের ব্যাপক বাংলা বিশ্বকোষ—পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান ও জ্যোতির্বিজ্ঞান।";
      isbn = "9788170665601";
      genre = "science";
      language = "bengali";
      price = 450;
      stock = 40;
      rating = 4.4;
      tags = ["encyclopedia", "science", "bengali", "reference", "education"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788170665601-L.jpg";
    },
    {
      titleEn = "Aakash Chena Akash";
      titleBn = "আকাশ চেনা আকাশ";
      authorEn = "Debiprasad Chattopadhyaya";
      authorBn = "দেবীপ্রসাদ চট্টোপাধ্যায়";
      descriptionEn = "A Bengali introduction to astronomy and the night sky—constellations, planets, and the wonders of space for general readers.";
      descriptionBn = "জ্যোতির্বিজ্ঞান ও রাতের আকাশের বাংলা পরিচয়—নক্ষত্রমণ্ডল, গ্রহ ও মহাকাশের বিস্ময়।";
      isbn = "9788170665700";
      genre = "science";
      language = "bengali";
      price = 320;
      stock = 50;
      rating = 4.5;
      tags = ["astronomy", "stars", "planets", "bengali science", "bengali"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788170665700-L.jpg";
    },
    {
      titleEn = "Robo Bigyan";
      titleBn = "রোবো বিজ্ঞান";
      authorEn = "Parthasarathi Mukhopadhyay";
      authorBn = "পার্থসারথি মুখোপাধ্যায়";
      descriptionEn = "An accessible Bengali introduction to robotics and automation—how robots work and where they are heading.";
      descriptionBn = "রোবোটিক্স ও অটোমেশনের সহজবোধ্য বাংলা পরিচয়—রোবট কিভাবে কাজ করে ও তার ভবিষ্যৎ।";
      isbn = "9788189026140";
      genre = "science";
      language = "bengali";
      price = 299;
      stock = 45;
      rating = 4.2;
      tags = ["robotics", "automation", "technology", "bengali science", "bengali"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788189026140-L.jpg";
    },
    {
      titleEn = "Kompyutar Bigyan";
      titleBn = "কম্পিউটার বিজ্ঞান";
      authorEn = "Anirban Bose";
      authorBn = "অনির্বাণ বসু";
      descriptionEn = "An introductory Bengali textbook on computer science covering hardware, software, networking, and programming basics.";
      descriptionBn = "হার্ডওয়্যার, সফটওয়্যার, নেটওয়ার্কিং ও প্রোগ্রামিংয়ের মূলনীতি আচ্ছাদনকারী বাংলা কম্পিউটার বিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788189026248";
      genre = "academic";
      language = "bengali";
      price = 399;
      stock = 55;
      rating = 4.3;
      tags = ["computer science", "bengali", "textbook", "programming", "technology"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788189026248-L.jpg";
    },
    {
      titleEn = "Godel, Escher, Bach: An Eternal Golden Braid";
      titleBn = "গোডেল, এশার, বাখ: একটি চিরন্তন সোনালি বিনুনি";
      authorEn = "Douglas R. Hofstadter";
      authorBn = "ডগলাস আর. হফস্টাডার";
      descriptionEn = "A Pulitzer Prize-winning exploration of consciousness, self-reference, and formal systems—weaving together mathematics, music, and art.";
      descriptionBn = "চেতনা, স্ব-রেফারেন্স ও আনুষ্ঠানিক পদ্ধতির পুলিৎজার বিজয়ী অন্বেষণ—গণিত, সংগীত ও শিল্পকলার সমন্বয়।";
      isbn = "9780465026562";
      genre = "science";
      language = "english";
      price = 699;
      stock = 35;
      rating = 4.7;
      tags = ["mathematics", "consciousness", "logic", "AI", "classic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780465026562-L.jpg";
    },
    {
      titleEn = "The C Programming Language";
      titleBn = "সি প্রোগ্রামিং ভাষা";
      authorEn = "Brian W. Kernighan and Dennis M. Ritchie";
      authorBn = "ব্রায়ান ডব্লিউ. কেরনিগান এবং ডেনিস এম. রিচি";
      descriptionEn = "The definitive book on C—by its creators. Compact, elegant, and still the best reference for C programming.";
      descriptionBn = "সি-এর নির্মাতাদের দ্বারা লেখা চূড়ান্ত C বই—সংক্ষিপ্ত, মার্জিত ও এখনও সেরা রেফারেন্স।";
      isbn = "9780131103627";
      genre = "academic";
      language = "english";
      price = 599;
      stock = 55;
      rating = 4.7;
      tags = ["C programming", "systems programming", "classic", "kernighan", "ritchie"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9780131103627-L.jpg";
    },
  ];
}
