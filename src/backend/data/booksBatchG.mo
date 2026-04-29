module {
  public let books : [{
    titleEn: Text; titleBn: Text; authorEn: Text; authorBn: Text;
    descriptionEn: Text; descriptionBn: Text;
    isbn: Text; genre: Text; language: Text;
    price: Nat; stock: Nat; rating: Float;
    tags: [Text]; coverImageUrl: Text
  }] = [
    {
      titleEn = "NCERT Mathematics Class 9";
      titleBn = "এনসিইআরটি গণিত নবম শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "Official NCERT Mathematics textbook for Class 9 covering number systems, polynomials, coordinate geometry, and more.";
      descriptionBn = "নবম শ্রেণির জন্য সরকারি এনসিইআরটি গণিত পাঠ্যপুস্তক।";
      isbn = "9788174506061";
      genre = "#academic";
      language = "#english";
      price = 85;
      stock = 200;
      rating = 4.5;
      tags = ["ncert", "mathematics", "class9", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506061-L.jpg";
    },
    {
      titleEn = "NCERT Mathematics Class 10";
      titleBn = "এনসিইআরটি গণিত দশম শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "Official NCERT Mathematics textbook for Class 10 covering real numbers, polynomials, quadratic equations, triangles, and statistics.";
      descriptionBn = "দশম শ্রেণির জন্য সরকারি এনসিইআরটি গণিত পাঠ্যপুস্তক।";
      isbn = "9788174506078";
      genre = "#academic";
      language = "#english";
      price = 85;
      stock = 200;
      rating = 4.5;
      tags = ["ncert", "mathematics", "class10", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506078-L.jpg";
    },
    {
      titleEn = "NCERT Mathematics Part I Class 11";
      titleBn = "এনসিইআরটি গণিত প্রথম খণ্ড একাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Mathematics Part I for Class 11 covering sets, relations, trigonometry, and complex numbers.";
      descriptionBn = "একাদশ শ্রেণির এনসিইআরটি গণিত প্রথম খণ্ড।";
      isbn = "9788174506085";
      genre = "#academic";
      language = "#english";
      price = 95;
      stock = 180;
      rating = 4.4;
      tags = ["ncert", "mathematics", "class11", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506085-L.jpg";
    },
    {
      titleEn = "NCERT Mathematics Part II Class 11";
      titleBn = "এনসিইআরটি গণিত দ্বিতীয় খণ্ড একাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Mathematics Part II for Class 11 covering limits, derivatives, statistics, and probability.";
      descriptionBn = "একাদশ শ্রেণির এনসিইআরটি গণিত দ্বিতীয় খণ্ড।";
      isbn = "9788174506092";
      genre = "#academic";
      language = "#english";
      price = 95;
      stock = 180;
      rating = 4.4;
      tags = ["ncert", "mathematics", "class11", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506092-L.jpg";
    },
    {
      titleEn = "NCERT Mathematics Part I Class 12";
      titleBn = "এনসিইআরটি গণিত প্রথম খণ্ড দ্বাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Mathematics Part I for Class 12 covering relations, functions, matrices, determinants, and calculus.";
      descriptionBn = "দ্বাদশ শ্রেণির এনসিইআরটি গণিত প্রথম খণ্ড।";
      isbn = "9788174506108";
      genre = "#academic";
      language = "#english";
      price = 95;
      stock = 175;
      rating = 4.6;
      tags = ["ncert", "mathematics", "class12", "cbse", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506108-L.jpg";
    },
    {
      titleEn = "NCERT Mathematics Part II Class 12";
      titleBn = "এনসিইআরটি গণিত দ্বিতীয় খণ্ড দ্বাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Mathematics Part II for Class 12 covering integrals, differential equations, vectors, 3D geometry, and probability.";
      descriptionBn = "দ্বাদশ শ্রেণির এনসিইআরটি গণিত দ্বিতীয় খণ্ড।";
      isbn = "9788174506115";
      genre = "#academic";
      language = "#english";
      price = 95;
      stock = 175;
      rating = 4.6;
      tags = ["ncert", "mathematics", "class12", "cbse", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506115-L.jpg";
    },
    {
      titleEn = "NCERT Physics Part I Class 11";
      titleBn = "এনসিইআরটি পদার্থবিজ্ঞান প্রথম খণ্ড একাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Physics Part I for Class 11 covering physical world, units, motion, and laws of motion.";
      descriptionBn = "একাদশ শ্রেণির এনসিইআরটি পদার্থবিজ্ঞান প্রথম খণ্ড।";
      isbn = "9788174506122";
      genre = "#academic";
      language = "#english";
      price = 105;
      stock = 160;
      rating = 4.5;
      tags = ["ncert", "physics", "class11", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506122-L.jpg";
    },
    {
      titleEn = "NCERT Physics Part II Class 11";
      titleBn = "এনসিইআরটি পদার্থবিজ্ঞান দ্বিতীয় খণ্ড একাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Physics Part II for Class 11 covering thermal properties, thermodynamics, kinetic theory, oscillations, and waves.";
      descriptionBn = "একাদশ শ্রেণির এনসিইআরটি পদার্থবিজ্ঞান দ্বিতীয় খণ্ড।";
      isbn = "9788174506139";
      genre = "#academic";
      language = "#english";
      price = 105;
      stock = 160;
      rating = 4.5;
      tags = ["ncert", "physics", "class11", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506139-L.jpg";
    },
    {
      titleEn = "NCERT Physics Part I Class 12";
      titleBn = "এনসিইআরটি পদার্থবিজ্ঞান প্রথম খণ্ড দ্বাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Physics Part I for Class 12 covering electrostatics, current electricity, and magnetic effects.";
      descriptionBn = "দ্বাদশ শ্রেণির এনসিইআরটি পদার্থবিজ্ঞান প্রথম খণ্ড।";
      isbn = "9788174506146";
      genre = "#academic";
      language = "#english";
      price = 110;
      stock = 155;
      rating = 4.7;
      tags = ["ncert", "physics", "class12", "cbse", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506146-L.jpg";
    },
    {
      titleEn = "NCERT Physics Part II Class 12";
      titleBn = "এনসিইআরটি পদার্থবিজ্ঞান দ্বিতীয় খণ্ড দ্বাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Physics Part II for Class 12 covering electromagnetic waves, optics, dual nature, atoms, nuclei, and semiconductors.";
      descriptionBn = "দ্বাদশ শ্রেণির এনসিইআরটি পদার্থবিজ্ঞান দ্বিতীয় খণ্ড।";
      isbn = "9788174506153";
      genre = "#academic";
      language = "#english";
      price = 110;
      stock = 155;
      rating = 4.7;
      tags = ["ncert", "physics", "class12", "cbse", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506153-L.jpg";
    },
    {
      titleEn = "NCERT Chemistry Part I Class 11";
      titleBn = "এনসিইআরটি রসায়ন প্রথম খণ্ড একাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Chemistry Part I for Class 11 covering basic concepts, atomic structure, chemical bonding, and states of matter.";
      descriptionBn = "একাদশ শ্রেণির এনসিইআরটি রসায়ন প্রথম খণ্ড।";
      isbn = "9788174506160";
      genre = "#academic";
      language = "#english";
      price = 100;
      stock = 150;
      rating = 4.4;
      tags = ["ncert", "chemistry", "class11", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506160-L.jpg";
    },
    {
      titleEn = "NCERT Chemistry Part II Class 11";
      titleBn = "এনসিইআরটি রসায়ন দ্বিতীয় খণ্ড একাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Chemistry Part II for Class 11 covering thermodynamics, equilibrium, redox reactions, hydrogen, and organic chemistry basics.";
      descriptionBn = "একাদশ শ্রেণির এনসিইআরটি রসায়ন দ্বিতীয় খণ্ড।";
      isbn = "9788174506177";
      genre = "#academic";
      language = "#english";
      price = 100;
      stock = 150;
      rating = 4.4;
      tags = ["ncert", "chemistry", "class11", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506177-L.jpg";
    },
    {
      titleEn = "NCERT Chemistry Part I Class 12";
      titleBn = "এনসিইআরটি রসায়ন প্রথম খণ্ড দ্বাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Chemistry Part I for Class 12 covering solid state, solutions, electrochemistry, chemical kinetics, and surface chemistry.";
      descriptionBn = "দ্বাদশ শ্রেণির এনসিইআরটি রসায়ন প্রথম খণ্ড।";
      isbn = "9788174506184";
      genre = "#academic";
      language = "#english";
      price = 110;
      stock = 145;
      rating = 4.6;
      tags = ["ncert", "chemistry", "class12", "cbse", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506184-L.jpg";
    },
    {
      titleEn = "NCERT Chemistry Part II Class 12";
      titleBn = "এনসিইআরটি রসায়ন দ্বিতীয় খণ্ড দ্বাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Chemistry Part II for Class 12 covering p-block, d-block, coordination compounds, haloalkanes, alcohols, and biomolecules.";
      descriptionBn = "দ্বাদশ শ্রেণির এনসিইআরটি রসায়ন দ্বিতীয় খণ্ড।";
      isbn = "9788174506191";
      genre = "#academic";
      language = "#english";
      price = 110;
      stock = 145;
      rating = 4.6;
      tags = ["ncert", "chemistry", "class12", "cbse", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506191-L.jpg";
    },
    {
      titleEn = "NCERT Biology Class 11";
      titleBn = "এনসিইআরটি জীববিজ্ঞান একাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Biology for Class 11 covering diversity of living organisms, structural organisation, cell biology, plant physiology, and human physiology.";
      descriptionBn = "একাদশ শ্রেণির এনসিইআরটি জীববিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788174506207";
      genre = "#academic";
      language = "#english";
      price = 110;
      stock = 140;
      rating = 4.5;
      tags = ["ncert", "biology", "class11", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506207-L.jpg";
    },
    {
      titleEn = "NCERT Biology Class 12";
      titleBn = "এনসিইআরটি জীববিজ্ঞান দ্বাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Biology for Class 12 covering reproduction, genetics, evolution, human health, biotechnology, and ecology.";
      descriptionBn = "দ্বাদশ শ্রেণির এনসিইআরটি জীববিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788174506214";
      genre = "#academic";
      language = "#english";
      price = 115;
      stock = 140;
      rating = 4.7;
      tags = ["ncert", "biology", "class12", "cbse", "board", "neet"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506214-L.jpg";
    },
    {
      titleEn = "Concepts of Physics Vol. 1";
      titleBn = "কনসেপ্টস অফ ফিজিক্স প্রথম খণ্ড";
      authorEn = "H.C. Verma";
      authorBn = "এইচ.সি. ভার্মা";
      descriptionEn = "H.C. Verma's legendary physics textbook Vol 1 covering mechanics, waves, and heat — essential for IIT JEE preparation.";
      descriptionBn = "এইচ.সি. ভার্মার বিখ্যাত পদার্থবিজ্ঞান পাঠ্যপুস্তক প্রথম খণ্ড।";
      isbn = "9788177091878";
      genre = "#academic";
      language = "#english";
      price = 350;
      stock = 300;
      rating = 4.9;
      tags = ["hcverma", "physics", "iitjee", "reference", "mechanics"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177091878-L.jpg";
    },
    {
      titleEn = "Concepts of Physics Vol. 2";
      titleBn = "কনসেপ্টস অফ ফিজিক্স দ্বিতীয় খণ্ড";
      authorEn = "H.C. Verma";
      authorBn = "এইচ.সি. ভার্মা";
      descriptionEn = "H.C. Verma's legendary physics textbook Vol 2 covering electricity, magnetism, optics, and modern physics — essential for IIT JEE.";
      descriptionBn = "এইচ.সি. ভার্মার বিখ্যাত পদার্থবিজ্ঞান পাঠ্যপুস্তক দ্বিতীয় খণ্ড।";
      isbn = "9788177092325";
      genre = "#academic";
      language = "#english";
      price = 350;
      stock = 300;
      rating = 4.9;
      tags = ["hcverma", "physics", "iitjee", "reference", "electricity"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788177092325-L.jpg";
    },
    {
      titleEn = "Mathematics for Class 9 by R.D. Sharma";
      titleBn = "আর.ডি. শর্মা গণিত নবম শ্রেণি";
      authorEn = "R.D. Sharma";
      authorBn = "আর.ডি. শর্মা";
      descriptionEn = "R.D. Sharma's comprehensive mathematics textbook for Class 9 with hundreds of solved examples and exercises.";
      descriptionBn = "নবম শ্রেণির জন্য আর.ডি. শর্মার ব্যাপক গণিত পাঠ্যপুস্তক।";
      isbn = "9789352530427";
      genre = "#academic";
      language = "#english";
      price = 299;
      stock = 250;
      rating = 4.7;
      tags = ["rdsharma", "mathematics", "class9", "cbse", "reference"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352530427-L.jpg";
    },
    {
      titleEn = "Mathematics for Class 10 by R.D. Sharma";
      titleBn = "আর.ডি. শর্মা গণিত দশম শ্রেণি";
      authorEn = "R.D. Sharma";
      authorBn = "আর.ডি. শর্মা";
      descriptionEn = "R.D. Sharma's comprehensive mathematics textbook for Class 10 with detailed solutions for board exam preparation.";
      descriptionBn = "দশম শ্রেণির জন্য আর.ডি. শর্মার ব্যাপক গণিত পাঠ্যপুস্তক।";
      isbn = "9789352530434";
      genre = "#academic";
      language = "#english";
      price = 299;
      stock = 250;
      rating = 4.7;
      tags = ["rdsharma", "mathematics", "class10", "cbse", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352530434-L.jpg";
    },
    {
      titleEn = "Mathematics for Class 11 by R.D. Sharma";
      titleBn = "আর.ডি. শর্মা গণিত একাদশ শ্রেণি";
      authorEn = "R.D. Sharma";
      authorBn = "আর.ডি. শর্মা";
      descriptionEn = "R.D. Sharma Mathematics for Class 11 — comprehensive coverage with solved examples for CBSE and competitive exam prep.";
      descriptionBn = "একাদশ শ্রেণির জন্য আর.ডি. শর্মার গণিত পাঠ্যপুস্তক।";
      isbn = "9789352530441";
      genre = "#academic";
      language = "#english";
      price = 349;
      stock = 220;
      rating = 4.7;
      tags = ["rdsharma", "mathematics", "class11", "cbse", "iitjee"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352530441-L.jpg";
    },
    {
      titleEn = "Mathematics for Class 12 by R.D. Sharma Vol 1";
      titleBn = "আর.ডি. শর্মা গণিত দ্বাদশ শ্রেণি প্রথম খণ্ড";
      authorEn = "R.D. Sharma";
      authorBn = "আর.ডি. শর্মা";
      descriptionEn = "R.D. Sharma Mathematics Vol 1 for Class 12 covering relations, functions, matrices, and calculus with comprehensive solutions.";
      descriptionBn = "দ্বাদশ শ্রেণির জন্য আর.ডি. শর্মার গণিত প্রথম খণ্ড।";
      isbn = "9789352530458";
      genre = "#academic";
      language = "#english";
      price = 349;
      stock = 220;
      rating = 4.8;
      tags = ["rdsharma", "mathematics", "class12", "cbse", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352530458-L.jpg";
    },
    {
      titleEn = "New Simplified Physics Class 11 by S.L. Arora";
      titleBn = "এস.এল. অরোরা পদার্থবিজ্ঞান একাদশ শ্রেণি";
      authorEn = "S.L. Arora";
      authorBn = "এস.এল. অরোরা";
      descriptionEn = "S.L. Arora's comprehensive physics textbook for Class 11 with solved numericals and conceptual explanations.";
      descriptionBn = "একাদশ শ্রেণির জন্য এস.এল. অরোরার পদার্থবিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9789351762553";
      genre = "#academic";
      language = "#english";
      price = 325;
      stock = 180;
      rating = 4.6;
      tags = ["slarora", "physics", "class11", "cbse", "numericals"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789351762553-L.jpg";
    },
    {
      titleEn = "New Simplified Physics Class 12 by S.L. Arora";
      titleBn = "এস.এল. অরোরা পদার্থবিজ্ঞান দ্বাদশ শ্রেণি";
      authorEn = "S.L. Arora";
      authorBn = "এস.এল. অরোরা";
      descriptionEn = "S.L. Arora's comprehensive physics textbook for Class 12 with detailed numericals for board and JEE preparation.";
      descriptionBn = "দ্বাদশ শ্রেণির জন্য এস.এল. অরোরার পদার্থবিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9789351762560";
      genre = "#academic";
      language = "#english";
      price = 325;
      stock = 180;
      rating = 4.6;
      tags = ["slarora", "physics", "class12", "cbse", "board", "jee"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789351762560-L.jpg";
    },
    {
      titleEn = "Problems in Physical Chemistry by N. Avasthi";
      titleBn = "ভৌত রসায়নের সমস্যা - এন. অবস্থী";
      authorEn = "N. Avasthi";
      authorBn = "এন. অবস্থী";
      descriptionEn = "Comprehensive problem book for physical chemistry covering thermodynamics, electrochemistry, and chemical kinetics for JEE Advanced.";
      descriptionBn = "জেইই অ্যাডভান্সড-এর জন্য ভৌত রসায়নের সমস্যা সংকলন।";
      isbn = "9789385966149";
      genre = "#academic";
      language = "#english";
      price = 299;
      stock = 150;
      rating = 4.7;
      tags = ["chemistry", "physical", "jee", "advanced", "problems"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789385966149-L.jpg";
    },
    {
      titleEn = "Numerical Chemistry by P. Bahadur";
      titleBn = "নিউমেরিক্যাল কেমিস্ট্রি - পি. বাহাদুর";
      authorEn = "P. Bahadur";
      authorBn = "পি. বাহাদুর";
      descriptionEn = "P. Bahadur's Numerical Chemistry — the definitive problem-solving guide for IIT JEE chemistry with thousands of solved problems.";
      descriptionBn = "আইআইটি জেইই রসায়নের জন্য পি. বাহাদুরের নিউমেরিক্যাল কেমিস্ট্রি।";
      isbn = "9789352030736";
      genre = "#academic";
      language = "#english";
      price = 350;
      stock = 200;
      rating = 4.8;
      tags = ["pbahadur", "chemistry", "iitjee", "numerical", "problems"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352030736-L.jpg";
    },
    {
      titleEn = "Waves and Thermodynamics by D.C. Pandey";
      titleBn = "তরঙ্গ ও তাপগতিবিদ্যা - ডি.সি. পান্ডে";
      authorEn = "D.C. Pandey";
      authorBn = "ডি.সি. পান্ডে";
      descriptionEn = "D.C. Pandey's Waves and Thermodynamics — part of the Arihant Physics series for IIT JEE with solved problems.";
      descriptionBn = "আইআইটি জেইই-র জন্য ডি.সি. পান্ডের তরঙ্গ ও তাপগতিবিদ্যা।";
      isbn = "9789313196945";
      genre = "#academic";
      language = "#english";
      price = 299;
      stock = 170;
      rating = 4.7;
      tags = ["dcpandey", "physics", "waves", "thermodynamics", "iitjee"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789313196945-L.jpg";
    },
    {
      titleEn = "Electricity and Magnetism by D.C. Pandey";
      titleBn = "বিদ্যুৎ ও চুম্বকত্ব - ডি.সি. পান্ডে";
      authorEn = "D.C. Pandey";
      authorBn = "ডি.সি. পান্ডে";
      descriptionEn = "D.C. Pandey's Electricity and Magnetism covering electrostatics, capacitors, current electricity, and magnetism for JEE.";
      descriptionBn = "জেইই-র জন্য ডি.সি. পান্ডের বিদ্যুৎ ও চুম্বকত্ব।";
      isbn = "9789313196952";
      genre = "#academic";
      language = "#english";
      price = 299;
      stock = 170;
      rating = 4.7;
      tags = ["dcpandey", "physics", "electricity", "magnetism", "iitjee"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789313196952-L.jpg";
    },
    {
      titleEn = "Optics and Modern Physics by D.C. Pandey";
      titleBn = "আলোকবিজ্ঞান ও আধুনিক পদার্থবিজ্ঞান - ডি.সি. পান্ডে";
      authorEn = "D.C. Pandey";
      authorBn = "ডি.সি. পান্ডে";
      descriptionEn = "D.C. Pandey's Optics and Modern Physics for IIT JEE with comprehensive coverage of ray optics, wave optics, and quantum physics.";
      descriptionBn = "আইআইটি জেইই-র জন্য ডি.সি. পান্ডের আলোকবিজ্ঞান ও আধুনিক পদার্থবিজ্ঞান।";
      isbn = "9789313196969";
      genre = "#academic";
      language = "#english";
      price = 299;
      stock = 165;
      rating = 4.7;
      tags = ["dcpandey", "physics", "optics", "modern", "iitjee"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789313196969-L.jpg";
    },
    {
      titleEn = "Mechanics Part 1 by D.C. Pandey";
      titleBn = "মেকানিক্স প্রথম খণ্ড - ডি.সি. পান্ডে";
      authorEn = "D.C. Pandey";
      authorBn = "ডি.সি. পান্ডে";
      descriptionEn = "D.C. Pandey's Mechanics Part 1 for IIT JEE covering kinematics, laws of motion, work-energy theorem, and circular motion.";
      descriptionBn = "আইআইটি জেইই-র জন্য ডি.সি. পান্ডের মেকানিক্স প্রথম খণ্ড।";
      isbn = "9789313196976";
      genre = "#academic";
      language = "#english";
      price = 299;
      stock = 175;
      rating = 4.8;
      tags = ["dcpandey", "physics", "mechanics", "kinematics", "iitjee"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789313196976-L.jpg";
    },
    {
      titleEn = "Pradeep's New Course Biology Class 11";
      titleBn = "প্রদীপ বায়োলজি একাদশ শ্রেণি";
      authorEn = "P.S. Dhami, G. Chopra, H.N. Srivastava";
      authorBn = "পি.এস. ধামি";
      descriptionEn = "Pradeep's comprehensive biology textbook for Class 11 with NCERT solutions, diagrams, and additional questions for board and NEET.";
      descriptionBn = "একাদশ শ্রেণির জন্য প্রদীপের ব্যাপক জীববিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9789352036813";
      genre = "#academic";
      language = "#english";
      price = 320;
      stock = 145;
      rating = 4.6;
      tags = ["pradeep", "biology", "class11", "cbse", "neet"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352036813-L.jpg";
    },
    {
      titleEn = "Pradeep's New Course Biology Class 12";
      titleBn = "প্রদীপ বায়োলজি দ্বাদশ শ্রেণি";
      authorEn = "P.S. Dhami, G. Chopra, H.N. Srivastava";
      authorBn = "পি.এস. ধামি";
      descriptionEn = "Pradeep's comprehensive biology textbook for Class 12 covering genetics, reproduction, ecology, and biotechnology for board and NEET.";
      descriptionBn = "দ্বাদশ শ্রেণির জন্য প্রদীপের ব্যাপক জীববিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9789352036820";
      genre = "#academic";
      language = "#english";
      price = 320;
      stock = 145;
      rating = 4.6;
      tags = ["pradeep", "biology", "class12", "cbse", "neet", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352036820-L.jpg";
    },
    {
      titleEn = "Oswaal CBSE Question Bank Class 10 Mathematics";
      titleBn = "অসওয়াল সিবিএসই প্রশ্নব্যাংক দশম শ্রেণি গণিত";
      authorEn = "Oswaal Editorial Board";
      authorBn = "অসওয়াল সম্পাদকীয় বোর্ড";
      descriptionEn = "Oswaal CBSE Question Bank for Class 10 Mathematics with chapter-wise questions, solved papers, and board exam patterns.";
      descriptionBn = "দশম শ্রেণির সিবিএসই গণিতের জন্য অসওয়াল প্রশ্নব্যাংক।";
      isbn = "9789354238321";
      genre = "#academic";
      language = "#english";
      price = 249;
      stock = 220;
      rating = 4.5;
      tags = ["oswaal", "cbse", "mathematics", "class10", "board", "questionbank"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789354238321-L.jpg";
    },
    {
      titleEn = "Oswaal CBSE Question Bank Class 12 Physics";
      titleBn = "অসওয়াল সিবিএসই প্রশ্নব্যাংক দ্বাদশ শ্রেণি পদার্থবিজ্ঞান";
      authorEn = "Oswaal Editorial Board";
      authorBn = "অসওয়াল সম্পাদকীয় বোর্ড";
      descriptionEn = "Oswaal CBSE Question Bank for Class 12 Physics with chapter-wise MCQs, numericals, and previous year board papers.";
      descriptionBn = "দ্বাদশ শ্রেণির সিবিএসই পদার্থবিজ্ঞানের জন্য অসওয়াল প্রশ্নব্যাংক।";
      isbn = "9789354238338";
      genre = "#academic";
      language = "#english";
      price = 249;
      stock = 200;
      rating = 4.5;
      tags = ["oswaal", "cbse", "physics", "class12", "board", "questionbank"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789354238338-L.jpg";
    },
    {
      titleEn = "Oswaal CBSE Question Bank Class 12 Chemistry";
      titleBn = "অসওয়াল সিবিএসই প্রশ্নব্যাংক দ্বাদশ শ্রেণি রসায়ন";
      authorEn = "Oswaal Editorial Board";
      authorBn = "অসওয়াল সম্পাদকীয় বোর্ড";
      descriptionEn = "Oswaal CBSE Question Bank for Class 12 Chemistry with chapter-wise questions and previous year papers for board preparation.";
      descriptionBn = "দ্বাদশ শ্রেণির সিবিএসই রসায়নের জন্য অসওয়াল প্রশ্নব্যাংক।";
      isbn = "9789354238345";
      genre = "#academic";
      language = "#english";
      price = 249;
      stock = 200;
      rating = 4.5;
      tags = ["oswaal", "cbse", "chemistry", "class12", "board", "questionbank"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789354238345-L.jpg";
    },
    {
      titleEn = "Oswaal CBSE Question Bank Class 12 Biology";
      titleBn = "অসওয়াল সিবিএসই প্রশ্নব্যাংক দ্বাদশ শ্রেণি জীববিজ্ঞান";
      authorEn = "Oswaal Editorial Board";
      authorBn = "অসওয়াল সম্পাদকীয় বোর্ড";
      descriptionEn = "Oswaal CBSE Question Bank for Class 12 Biology with NEET-style MCQs, chapter summaries, and board exam papers.";
      descriptionBn = "দ্বাদশ শ্রেণির সিবিএসই জীববিজ্ঞানের জন্য অসওয়াল প্রশ্নব্যাংক।";
      isbn = "9789354238352";
      genre = "#academic";
      language = "#english";
      price = 249;
      stock = 195;
      rating = 4.5;
      tags = ["oswaal", "cbse", "biology", "class12", "neet", "questionbank"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789354238352-L.jpg";
    },
    {
      titleEn = "NCERT Science Class 9";
      titleBn = "এনসিইআরটি বিজ্ঞান নবম শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Science for Class 9 covering matter, atoms, cells, motion, force, gravitation, and natural resources.";
      descriptionBn = "নবম শ্রেণির এনসিইআরটি বিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788174506221";
      genre = "#academic";
      language = "#english";
      price = 90;
      stock = 180;
      rating = 4.4;
      tags = ["ncert", "science", "class9", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506221-L.jpg";
    },
    {
      titleEn = "NCERT Science Class 10";
      titleBn = "এনসিইআরটি বিজ্ঞান দশম শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Science for Class 10 covering chemical reactions, acids/bases, metals, life processes, light, electricity, and environment.";
      descriptionBn = "দশম শ্রেণির এনসিইআরটি বিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788174506238";
      genre = "#academic";
      language = "#english";
      price = 90;
      stock = 180;
      rating = 4.5;
      tags = ["ncert", "science", "class10", "cbse", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506238-L.jpg";
    },
    {
      titleEn = "NCERT Social Science Class 9 (History)";
      titleBn = "এনসিইআরটি সামাজিক বিজ্ঞান ইতিহাস নবম শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT India and the Contemporary World I for Class 9 covering French Revolution, socialism, Nazism, and rural livelihoods.";
      descriptionBn = "নবম শ্রেণির এনসিইআরটি ইতিহাস পাঠ্যপুস্তক।";
      isbn = "9788174506245";
      genre = "#academic";
      language = "#english";
      price = 79;
      stock = 160;
      rating = 4.3;
      tags = ["ncert", "history", "class9", "cbse", "socialscience"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506245-L.jpg";
    },
    {
      titleEn = "NCERT Political Science Class 9";
      titleBn = "এনসিইআরটি রাজনৈতিক বিজ্ঞান নবম শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Democratic Politics I for Class 9 covering democracy, constitutional design, electoral politics, and working of institutions.";
      descriptionBn = "নবম শ্রেণির এনসিইআরটি রাজনৈতিক বিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788174506252";
      genre = "#academic";
      language = "#english";
      price = 79;
      stock = 155;
      rating = 4.3;
      tags = ["ncert", "political", "class9", "cbse", "democracy"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506252-L.jpg";
    },
    {
      titleEn = "NCERT Economics Class 9";
      titleBn = "এনসিইআরটি অর্থনীতি নবম শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Economics for Class 9 covering the story of village Palampur, people as a resource, poverty, and food security in India.";
      descriptionBn = "নবম শ্রেণির এনসিইআরটি অর্থনীতি পাঠ্যপুস্তক।";
      isbn = "9788174506269";
      genre = "#academic";
      language = "#english";
      price = 79;
      stock = 150;
      rating = 4.2;
      tags = ["ncert", "economics", "class9", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506269-L.jpg";
    },
    {
      titleEn = "NCERT Geography Class 10";
      titleBn = "এনসিইআরটি ভূগোল দশম শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Contemporary India II for Class 10 covering resources, forests, agriculture, manufacturing, and transport.";
      descriptionBn = "দশম শ্রেণির এনসিইআরটি ভূগোল পাঠ্যপুস্তক।";
      isbn = "9788174506276";
      genre = "#academic";
      language = "#english";
      price = 79;
      stock = 160;
      rating = 4.3;
      tags = ["ncert", "geography", "class10", "cbse", "india"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506276-L.jpg";
    },
    {
      titleEn = "NCERT English First Flight Class 10";
      titleBn = "এনসিইআরটি ইংরেজি ফার্স্ট ফ্লাইট দশম শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT First Flight English textbook for Class 10 with prose and poetry selections for CBSE board examination.";
      descriptionBn = "দশম শ্রেণির এনসিইআরটি ইংরেজি পাঠ্যপুস্তক।";
      isbn = "9788174506283";
      genre = "#academic";
      language = "#english";
      price = 79;
      stock = 170;
      rating = 4.2;
      tags = ["ncert", "english", "class10", "cbse", "prose", "poetry"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506283-L.jpg";
    },
    {
      titleEn = "NCERT Hindi Kshitij Class 9";
      titleBn = "এনসিইআরটি হিন্দি ক্ষিতিজ নবম শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Kshitij Hindi textbook for Class 9 with Kabir, Mirabai, Sumitranandan Pant, and Mahadevi Varma selections.";
      descriptionBn = "নবম শ্রেণির এনসিইআরটি হিন্দি ক্ষিতিজ পাঠ্যপুস্তক।";
      isbn = "9788174506290";
      genre = "#academic";
      language = "#english";
      price = 79;
      stock = 140;
      rating = 4.1;
      tags = ["ncert", "hindi", "class9", "cbse", "kshitij"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506290-L.jpg";
    },
    {
      titleEn = "WBBSE Mathematics Class 9 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ গণিত নবম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "West Bengal Board of Secondary Education official Mathematics textbook for Class 9 in Bengali medium.";
      descriptionBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদের নবম শ্রেণির বাংলা মাধ্যমের গণিত পাঠ্যপুস্তক।";
      isbn = "9788192576527";
      genre = "#academic";
      language = "#bengali";
      price = 89;
      stock = 250;
      rating = 4.3;
      tags = ["wbbse", "mathematics", "class9", "bengali", "westbengal"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576527-L.jpg";
    },
    {
      titleEn = "WBBSE Mathematics Class 10 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ গণিত দশম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "West Bengal Board of Secondary Education official Mathematics textbook for Class 10 in Bengali medium for Madhyamik examination.";
      descriptionBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদের দশম শ্রেণির বাংলা মাধ্যমের গণিত পাঠ্যপুস্তক।";
      isbn = "9788192576534";
      genre = "#academic";
      language = "#bengali";
      price = 89;
      stock = 280;
      rating = 4.4;
      tags = ["wbbse", "mathematics", "class10", "bengali", "madhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576534-L.jpg";
    },
    {
      titleEn = "WBBSE Physical Science Class 9 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ ভৌতবিজ্ঞান নবম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "WBBSE official Physical Science textbook for Class 9 in Bengali medium covering measurement, force, and matter.";
      descriptionBn = "নবম শ্রেণির পশ্চিমবঙ্গ বোর্ডের ভৌতবিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788192576541";
      genre = "#academic";
      language = "#bengali";
      price = 89;
      stock = 240;
      rating = 4.3;
      tags = ["wbbse", "physicalscience", "class9", "bengali", "westbengal"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576541-L.jpg";
    },
    {
      titleEn = "WBBSE Physical Science Class 10 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ ভৌতবিজ্ঞান দশম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "WBBSE official Physical Science textbook for Class 10 in Bengali medium for Madhyamik Board Examination.";
      descriptionBn = "দশম শ্রেণির পশ্চিমবঙ্গ বোর্ডের ভৌতবিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788192576558";
      genre = "#academic";
      language = "#bengali";
      price = 89;
      stock = 260;
      rating = 4.4;
      tags = ["wbbse", "physicalscience", "class10", "bengali", "madhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576558-L.jpg";
    },
    {
      titleEn = "WBBSE Life Science Class 9 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ জীবন বিজ্ঞান নবম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "WBBSE official Life Science textbook for Class 9 in Bengali medium covering cell biology, plant life, and heredity.";
      descriptionBn = "নবম শ্রেণির পশ্চিমবঙ্গ বোর্ডের জীবন বিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788192576565";
      genre = "#academic";
      language = "#bengali";
      price = 89;
      stock = 230;
      rating = 4.3;
      tags = ["wbbse", "lifescience", "class9", "bengali", "westbengal"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576565-L.jpg";
    },
    {
      titleEn = "WBBSE Life Science Class 10 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ জীবন বিজ্ঞান দশম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "WBBSE official Life Science textbook for Class 10 in Bengali medium for Madhyamik Board Examination.";
      descriptionBn = "দশম শ্রেণির পশ্চিমবঙ্গ বোর্ডের জীবন বিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788192576572";
      genre = "#academic";
      language = "#bengali";
      price = 89;
      stock = 260;
      rating = 4.4;
      tags = ["wbbse", "lifescience", "class10", "bengali", "madhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576572-L.jpg";
    },
    {
      titleEn = "WBBSE Bengali (First Language) Class 9";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ বাংলা প্রথম ভাষা নবম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "WBBSE official Bengali First Language textbook for Class 9 with literary prose, poetry, and grammar exercises.";
      descriptionBn = "নবম শ্রেণির পশ্চিমবঙ্গ বোর্ডের বাংলা প্রথম ভাষার পাঠ্যপুস্তক।";
      isbn = "9788192576589";
      genre = "#academic";
      language = "#bengali";
      price = 79;
      stock = 270;
      rating = 4.2;
      tags = ["wbbse", "bengali", "class9", "language", "westbengal"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576589-L.jpg";
    },
    {
      titleEn = "WBBSE Bengali (First Language) Class 10";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ বাংলা প্রথম ভাষা দশম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "WBBSE official Bengali First Language textbook for Class 10 for Madhyamik examination with selected prose and poetry.";
      descriptionBn = "দশম শ্রেণির পশ্চিমবঙ্গ বোর্ডের বাংলা প্রথম ভাষার পাঠ্যপুস্তক।";
      isbn = "9788192576596";
      genre = "#academic";
      language = "#bengali";
      price = 79;
      stock = 290;
      rating = 4.3;
      tags = ["wbbse", "bengali", "class10", "madhyamik", "language"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576596-L.jpg";
    },
    {
      titleEn = "WBBSE History Class 9 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ ইতিহাস নবম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "WBBSE official History textbook for Class 9 in Bengali medium covering medieval and modern world history.";
      descriptionBn = "নবম শ্রেণির পশ্চিমবঙ্গ বোর্ডের বাংলা মাধ্যমের ইতিহাস পাঠ্যপুস্তক।";
      isbn = "9788192576602";
      genre = "#academic";
      language = "#bengali";
      price = 79;
      stock = 220;
      rating = 4.2;
      tags = ["wbbse", "history", "class9", "bengali", "westbengal"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576602-L.jpg";
    },
    {
      titleEn = "WBBSE History Class 10 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ ইতিহাস দশম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "WBBSE official History textbook for Class 10 in Bengali medium covering Indian independence and world history for Madhyamik.";
      descriptionBn = "দশম শ্রেণির পশ্চিমবঙ্গ বোর্ডের বাংলা মাধ্যমের ইতিহাস পাঠ্যপুস্তক।";
      isbn = "9788192576619";
      genre = "#academic";
      language = "#bengali";
      price = 79;
      stock = 240;
      rating = 4.3;
      tags = ["wbbse", "history", "class10", "bengali", "madhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576619-L.jpg";
    },
    {
      titleEn = "WBBSE Geography Class 9 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ ভূগোল নবম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "WBBSE official Geography textbook for Class 9 in Bengali medium covering atmosphere, hydrosphere, and lithosphere.";
      descriptionBn = "নবম শ্রেণির পশ্চিমবঙ্গ বোর্ডের বাংলা মাধ্যমের ভূগোল পাঠ্যপুস্তক।";
      isbn = "9788192576626";
      genre = "#academic";
      language = "#bengali";
      price = 79;
      stock = 220;
      rating = 4.2;
      tags = ["wbbse", "geography", "class9", "bengali", "westbengal"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576626-L.jpg";
    },
    {
      titleEn = "WBBSE Geography Class 10 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ ভূগোল দশম শ্রেণি";
      authorEn = "WBBSE";
      authorBn = "পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ";
      descriptionEn = "WBBSE official Geography textbook for Class 10 in Bengali medium for Madhyamik board examination.";
      descriptionBn = "দশম শ্রেণির পশ্চিমবঙ্গ বোর্ডের বাংলা মাধ্যমের ভূগোল পাঠ্যপুস্তক।";
      isbn = "9788192576633";
      genre = "#academic";
      language = "#bengali";
      price = 79;
      stock = 240;
      rating = 4.3;
      tags = ["wbbse", "geography", "class10", "bengali", "madhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576633-L.jpg";
    },
    {
      titleEn = "ICSE Mathematics Class 9 by R.D. Ballard";
      titleBn = "আইসিএসই গণিত নবম শ্রেণি";
      authorEn = "R.D. Ballard";
      authorBn = "আর.ডি. বলার্ড";
      descriptionEn = "Comprehensive ICSE Mathematics for Class 9 covering all topics in the CISCE syllabus with worked examples and exercises.";
      descriptionBn = "আইসিএসই নবম শ্রেণির সম্পূর্ণ গণিত পাঠ্যপুস্তক।";
      isbn = "9789386713223";
      genre = "#academic";
      language = "#english";
      price = 299;
      stock = 150;
      rating = 4.5;
      tags = ["icse", "mathematics", "class9", "cisce"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789386713223-L.jpg";
    },
    {
      titleEn = "ICSE Mathematics Class 10 by S.K. Gupta";
      titleBn = "আইসিএসই গণিত দশম শ্রেণি";
      authorEn = "S.K. Gupta";
      authorBn = "এস.কে. গুপ্ত";
      descriptionEn = "S.K. Gupta's ICSE Mathematics for Class 10 with comprehensive coverage of the CISCE syllabus and past paper solutions.";
      descriptionBn = "আইসিএসই দশম শ্রেণির গণিত পাঠ্যপুস্তক।";
      isbn = "9789386713230";
      genre = "#academic";
      language = "#english";
      price = 299;
      stock = 150;
      rating = 4.5;
      tags = ["icse", "mathematics", "class10", "cisce", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789386713230-L.jpg";
    },
    {
      titleEn = "ICSE Physics Class 9 by P.K. Garg";
      titleBn = "আইসিএসই পদার্থবিজ্ঞান নবম শ্রেণি";
      authorEn = "P.K. Garg";
      authorBn = "পি.কে. গার্গ";
      descriptionEn = "P.K. Garg's ICSE Physics for Class 9 covering measurement, motion, force, and sound with diagrams and solved problems.";
      descriptionBn = "আইসিএসই নবম শ্রেণির পদার্থবিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9789386713247";
      genre = "#academic";
      language = "#english";
      price = 280;
      stock = 130;
      rating = 4.4;
      tags = ["icse", "physics", "class9", "cisce"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789386713247-L.jpg";
    },
    {
      titleEn = "ICSE Chemistry Class 9 by Viraf J. Dalal";
      titleBn = "আইসিএসই রসায়ন নবম শ্রেণি";
      authorEn = "Viraf J. Dalal";
      authorBn = "বিরাফ জে. দালাল";
      descriptionEn = "Viraf Dalal's ICSE Chemistry for Class 9 — the most popular ICSE chemistry textbook with detailed explanations and past papers.";
      descriptionBn = "আইসিএসই নবম শ্রেণির রসায়ন পাঠ্যপুস্তক।";
      isbn = "9789386713254";
      genre = "#academic";
      language = "#english";
      price = 280;
      stock = 130;
      rating = 4.6;
      tags = ["icse", "chemistry", "class9", "cisce", "dalal"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789386713254-L.jpg";
    },
    {
      titleEn = "ICSE Biology Class 9 by Sarita Aggarwal";
      titleBn = "আইসিএসই জীববিজ্ঞান নবম শ্রেণি";
      authorEn = "Sarita Aggarwal";
      authorBn = "সারিতা আগারওয়াল";
      descriptionEn = "ICSE Biology for Class 9 covering cell theory, nutrition, photosynthesis, and human organ systems with diagrams.";
      descriptionBn = "আইসিএসই নবম শ্রেণির জীববিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9789386713261";
      genre = "#academic";
      language = "#english";
      price = 280;
      stock = 125;
      rating = 4.4;
      tags = ["icse", "biology", "class9", "cisce"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789386713261-L.jpg";
    },
    {
      titleEn = "Organic Chemistry by O.P. Tandon";
      titleBn = "জৈব রসায়ন - ও.পি. তান্ডন";
      authorEn = "O.P. Tandon";
      authorBn = "ও.পি. তান্ডন";
      descriptionEn = "O.P. Tandon's comprehensive Organic Chemistry for JEE and NEET — covers all reactions, mechanisms, and named reactions in detail.";
      descriptionBn = "জেইই ও নিট-এর জন্য ও.পি. তান্ডনের জৈব রসায়ন।";
      isbn = "9789352714001";
      genre = "#academic";
      language = "#english";
      price = 325;
      stock = 175;
      rating = 4.7;
      tags = ["optandon", "chemistry", "organic", "iitjee", "neet"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352714001-L.jpg";
    },
    {
      titleEn = "Inorganic Chemistry by O.P. Tandon";
      titleBn = "অজৈব রসায়ন - ও.পি. তান্ডন";
      authorEn = "O.P. Tandon";
      authorBn = "ও.পি. তান্ডন";
      descriptionEn = "O.P. Tandon's Inorganic Chemistry for JEE and NEET covering s, p, d, f block elements and coordination chemistry.";
      descriptionBn = "জেইই ও নিট-এর জন্য ও.পি. তান্ডনের অজৈব রসায়ন।";
      isbn = "9789352714018";
      genre = "#academic";
      language = "#english";
      price = 325;
      stock = 175;
      rating = 4.7;
      tags = ["optandon", "chemistry", "inorganic", "iitjee", "neet"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352714018-L.jpg";
    },
    {
      titleEn = "Cengage Mathematics Algebra";
      titleBn = "সেনগেজ গণিত বীজগণিত";
      authorEn = "G. Tewani";
      authorBn = "জি. তেওয়ানি";
      descriptionEn = "Cengage Mathematics Algebra for JEE Main and Advanced — comprehensive coverage with solved examples and previous year questions.";
      descriptionBn = "জেইই মেন ও অ্যাডভান্সড-এর জন্য সেনগেজ গণিত বীজগণিত।";
      isbn = "9789388774048";
      genre = "#academic";
      language = "#english";
      price = 349;
      stock = 160;
      rating = 4.7;
      tags = ["cengage", "mathematics", "algebra", "iitjee", "reference"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789388774048-L.jpg";
    },
    {
      titleEn = "Cengage Mathematics Trigonometry";
      titleBn = "সেনগেজ গণিত ত্রিকোণমিতি";
      authorEn = "G. Tewani";
      authorBn = "জি. তেওয়ানি";
      descriptionEn = "Cengage Mathematics Trigonometry for JEE with complete coverage of all trigonometric functions and their applications.";
      descriptionBn = "জেইই-র জন্য সেনগেজ গণিত ত্রিকোণমিতি।";
      isbn = "9789388774055";
      genre = "#academic";
      language = "#english";
      price = 299;
      stock = 150;
      rating = 4.6;
      tags = ["cengage", "mathematics", "trigonometry", "iitjee", "reference"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789388774055-L.jpg";
    },
    {
      titleEn = "Cengage Mathematics Coordinate Geometry";
      titleBn = "সেনগেজ গণিত স্থানাঙ্ক জ্যামিতি";
      authorEn = "G. Tewani";
      authorBn = "জি. তেওয়ানি";
      descriptionEn = "Cengage Coordinate Geometry for JEE covering straight lines, circles, parabola, ellipse, and hyperbola.";
      descriptionBn = "জেইই-র জন্য সেনগেজ স্থানাঙ্ক জ্যামিতি।";
      isbn = "9789388774062";
      genre = "#academic";
      language = "#english";
      price = 299;
      stock = 150;
      rating = 4.6;
      tags = ["cengage", "mathematics", "coordinategeometry", "iitjee", "conic"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789388774062-L.jpg";
    },
    {
      titleEn = "Cengage Mathematics Calculus";
      titleBn = "সেনগেজ গণিত ক্যালকুলাস";
      authorEn = "G. Tewani";
      authorBn = "জি. তেওয়ানি";
      descriptionEn = "Cengage Mathematics Calculus for JEE covering limits, continuity, differentiation, integration, and differential equations.";
      descriptionBn = "জেইই-র জন্য সেনগেজ গণিত ক্যালকুলাস।";
      isbn = "9789388774079";
      genre = "#academic";
      language = "#english";
      price = 349;
      stock = 155;
      rating = 4.7;
      tags = ["cengage", "mathematics", "calculus", "iitjee", "integration"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789388774079-L.jpg";
    },
    {
      titleEn = "Errorless Physics for JEE";
      titleBn = "এরোরলেস পদার্থবিজ্ঞান জেইই";
      authorEn = "Universal Self Scorer";
      authorBn = "ইউনিভার্সাল সেলফ স্কোরার";
      descriptionEn = "Universal Errorless Physics — massive objective question bank covering all JEE Main and Advanced topics with detailed solutions.";
      descriptionBn = "জেইই মেন ও অ্যাডভান্সড-এর জন্য বিশাল পদার্থবিজ্ঞানের প্রশ্নসংকলন।";
      isbn = "9789389966039";
      genre = "#academic";
      language = "#english";
      price = 380;
      stock = 140;
      rating = 4.5;
      tags = ["errorless", "physics", "iitjee", "objective", "questionbank"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789389966039-L.jpg";
    },
    {
      titleEn = "Errorless Chemistry for JEE";
      titleBn = "এরোরলেস রসায়ন জেইই";
      authorEn = "Universal Self Scorer";
      authorBn = "ইউনিভার্সাল সেলফ স্কোরার";
      descriptionEn = "Universal Errorless Chemistry — objective question bank covering all JEE Main chemistry topics with past year analysis.";
      descriptionBn = "জেইই মেন-এর জন্য বিশাল রসায়নের প্রশ্নসংকলন।";
      isbn = "9789389966046";
      genre = "#academic";
      language = "#english";
      price = 380;
      stock = 140;
      rating = 4.5;
      tags = ["errorless", "chemistry", "iitjee", "objective", "questionbank"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789389966046-L.jpg";
    },
    {
      titleEn = "NCERT Exemplar Problems in Physics Class 12";
      titleBn = "এনসিইআরটি এক্সেমপ্লার পদার্থবিজ্ঞান দ্বাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Exemplar Problems for Class 12 Physics with higher-order thinking questions for CBSE board and competitive exams.";
      descriptionBn = "দ্বাদশ শ্রেণির এনসিইআরটি এক্সেমপ্লার পদার্থবিজ্ঞান সমস্যাসংকলন।";
      isbn = "9788174506306";
      genre = "#academic";
      language = "#english";
      price = 120;
      stock = 130;
      rating = 4.5;
      tags = ["ncert", "exemplar", "physics", "class12", "cbse"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506306-L.jpg";
    },
    {
      titleEn = "NCERT Exemplar Problems in Mathematics Class 12";
      titleBn = "এনসিইআরটি এক্সেমপ্লার গণিত দ্বাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Exemplar Problems for Class 12 Mathematics with challenging questions for board exams and JEE preparation.";
      descriptionBn = "দ্বাদশ শ্রেণির এনসিইআরটি এক্সেমপ্লার গণিত সমস্যাসংকলন।";
      isbn = "9788174506313";
      genre = "#academic";
      language = "#english";
      price = 120;
      stock = 130;
      rating = 4.5;
      tags = ["ncert", "exemplar", "mathematics", "class12", "cbse", "jee"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506313-L.jpg";
    },
    {
      titleEn = "NCERT Exemplar Problems in Chemistry Class 12";
      titleBn = "এনসিইআরটি এক্সেমপ্লার রসায়ন দ্বাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Exemplar Problems for Class 12 Chemistry with higher-order questions for board and NEET preparation.";
      descriptionBn = "দ্বাদশ শ্রেণির এনসিইআরটি এক্সেমপ্লার রসায়ন সমস্যাসংকলন।";
      isbn = "9788174506320";
      genre = "#academic";
      language = "#english";
      price = 120;
      stock = 125;
      rating = 4.5;
      tags = ["ncert", "exemplar", "chemistry", "class12", "neet"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506320-L.jpg";
    },
    {
      titleEn = "NCERT Exemplar Problems in Biology Class 12";
      titleBn = "এনসিইআরটি এক্সেমপ্লার জীববিজ্ঞান দ্বাদশ শ্রেণি";
      authorEn = "NCERT";
      authorBn = "এনসিইআরটি";
      descriptionEn = "NCERT Exemplar Problems for Class 12 Biology with NEET-style MCQs and challenging questions.";
      descriptionBn = "দ্বাদশ শ্রেণির এনসিইআরটি এক্সেমপ্লার জীববিজ্ঞান সমস্যাসংকলন।";
      isbn = "9788174506337";
      genre = "#academic";
      language = "#english";
      price = 120;
      stock = 125;
      rating = 4.5;
      tags = ["ncert", "exemplar", "biology", "class12", "neet"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788174506337-L.jpg";
    },
    {
      titleEn = "41 Years IIT JEE Advanced + 17 Years JEE Main Chapterwise Physics";
      titleBn = "৪১ বছরের আইআইটি জেইই অ্যাডভান্সড পদার্থবিজ্ঞান";
      authorEn = "D.C. Pandey";
      authorBn = "ডি.সি. পান্ডে";
      descriptionEn = "D.C. Pandey's collection of 41 years of IIT JEE Advanced and 17 years JEE Main Physics papers chapterwise with solutions.";
      descriptionBn = "৪১ বছরের আইআইটি জেইই পদার্থবিজ্ঞান প্রশ্নপত্র সংকলন।";
      isbn = "9789313197058";
      genre = "#academic";
      language = "#english";
      price = 350;
      stock = 180;
      rating = 4.8;
      tags = ["iitjee", "physics", "previousyears", "dcpandey", "arihant"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789313197058-L.jpg";
    },
    {
      titleEn = "41 Years IIT JEE Advanced + 17 Years JEE Main Chapterwise Chemistry";
      titleBn = "৪১ বছরের আইআইটি জেইই অ্যাডভান্সড রসায়ন";
      authorEn = "Ranjeet Shahi";
      authorBn = "রঞ্জিত শাহী";
      descriptionEn = "41 years of IIT JEE and 17 years JEE Main chapterwise Chemistry questions with detailed solutions by Arihant.";
      descriptionBn = "৪১ বছরের আইআইটি জেইই রসায়ন প্রশ্নপত্র সংকলন।";
      isbn = "9789313197065";
      genre = "#academic";
      language = "#english";
      price = 350;
      stock = 175;
      rating = 4.8;
      tags = ["iitjee", "chemistry", "previousyears", "arihant"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789313197065-L.jpg";
    },
    {
      titleEn = "MTG NEET Champion Biology";
      titleBn = "এমটিজি নিট চ্যাম্পিয়ন জীববিজ্ঞান";
      authorEn = "MTG Editorial Board";
      authorBn = "এমটিজি সম্পাদকীয় বোর্ড";
      descriptionEn = "MTG NEET Champion Biology — comprehensive objective question bank with 10,000+ MCQs for NEET preparation.";
      descriptionBn = "নিট পরীক্ষার জন্য এমটিজির ব্যাপক জীববিজ্ঞান প্রশ্নসংকলন।";
      isbn = "9789387378513";
      genre = "#academic";
      language = "#english";
      price = 320;
      stock = 160;
      rating = 4.6;
      tags = ["mtg", "neet", "biology", "objective", "questionbank"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789387378513-L.jpg";
    },
    {
      titleEn = "MTG 33 Years NEET-AIPMT Chapterwise Solutions Biology";
      titleBn = "এমটিজি ৩৩ বছরের নিট-এআইপিএমটি জীববিজ্ঞান সমাধান";
      authorEn = "MTG Editorial Board";
      authorBn = "এমটিজি সম্পাদকীয় বোর্ড";
      descriptionEn = "MTG 33 years of NEET and AIPMT chapterwise solved papers for Biology with detailed solutions and analysis.";
      descriptionBn = "৩৩ বছরের নিট-এআইপিএমটি জীববিজ্ঞান প্রশ্নপত্র সংকলন ও সমাধান।";
      isbn = "9789387378520";
      genre = "#academic";
      language = "#english";
      price = 325;
      stock = 155;
      rating = 4.7;
      tags = ["mtg", "neet", "biology", "previousyears", "aipmt"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789387378520-L.jpg";
    },
    {
      titleEn = "Trueman's Elementary Biology Vol 1";
      titleBn = "ট্রুম্যান এলিমেন্টারি বায়োলজি প্রথম খণ্ড";
      authorEn = "K.N. Bhatia, M.P. Tyagi";
      authorBn = "কে.এন. ভাটিয়া";
      descriptionEn = "Trueman's Elementary Biology Vol 1 for Class 11 — a comprehensive reference covering all NCERT topics plus additional NEET content.";
      descriptionBn = "একাদশ শ্রেণির জন্য ট্রুম্যানের ব্যাপক জীববিজ্ঞান প্রথম খণ্ড।";
      isbn = "9789384934040";
      genre = "#academic";
      language = "#english";
      price = 310;
      stock = 145;
      rating = 4.6;
      tags = ["trueman", "biology", "class11", "neet", "reference"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789384934040-L.jpg";
    },
    {
      titleEn = "Trueman's Elementary Biology Vol 2";
      titleBn = "ট্রুম্যান এলিমেন্টারি বায়োলজি দ্বিতীয় খণ্ড";
      authorEn = "K.N. Bhatia, M.P. Tyagi";
      authorBn = "কে.এন. ভাটিয়া";
      descriptionEn = "Trueman's Elementary Biology Vol 2 for Class 12 — comprehensive NEET reference covering genetics, ecology, and biotechnology.";
      descriptionBn = "দ্বাদশ শ্রেণির জন্য ট্রুম্যানের ব্যাপক জীববিজ্ঞান দ্বিতীয় খণ্ড।";
      isbn = "9789384934057";
      genre = "#academic";
      language = "#english";
      price = 310;
      stock = 145;
      rating = 4.6;
      tags = ["trueman", "biology", "class12", "neet", "reference"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789384934057-L.jpg";
    },
    {
      titleEn = "WBBSE Mathematics Class 11 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ গণিত একাদশ শ্রেণি";
      authorEn = "WBCHSE";
      authorBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ";
      descriptionEn = "West Bengal Council of Higher Secondary Education official Mathematics textbook for Class 11 in Bengali medium.";
      descriptionBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদের একাদশ শ্রেণির বাংলা মাধ্যমের গণিত পাঠ্যপুস্তক।";
      isbn = "9788192576640";
      genre = "#academic";
      language = "#bengali";
      price = 99;
      stock = 220;
      rating = 4.3;
      tags = ["wbchse", "mathematics", "class11", "bengali", "uchhamadhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576640-L.jpg";
    },
    {
      titleEn = "WBBSE Mathematics Class 12 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ গণিত দ্বাদশ শ্রেণি";
      authorEn = "WBCHSE";
      authorBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ";
      descriptionEn = "West Bengal Council of Higher Secondary Education official Mathematics textbook for Class 12 for Uchha Madhyamik examination.";
      descriptionBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদের দ্বাদশ শ্রেণির বাংলা মাধ্যমের গণিত পাঠ্যপুস্তক।";
      isbn = "9788192576657";
      genre = "#academic";
      language = "#bengali";
      price = 99;
      stock = 230;
      rating = 4.4;
      tags = ["wbchse", "mathematics", "class12", "bengali", "uchhamadhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576657-L.jpg";
    },
    {
      titleEn = "WBCHSE Physics Class 11 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ পদার্থবিজ্ঞান একাদশ শ্রেণি";
      authorEn = "WBCHSE";
      authorBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ";
      descriptionEn = "WBCHSE official Physics textbook for Class 11 in Bengali medium covering mechanics, waves, and thermodynamics.";
      descriptionBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদের একাদশ শ্রেণির পদার্থবিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788192576664";
      genre = "#academic";
      language = "#bengali";
      price = 99;
      stock = 210;
      rating = 4.3;
      tags = ["wbchse", "physics", "class11", "bengali", "uchhamadhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576664-L.jpg";
    },
    {
      titleEn = "WBCHSE Physics Class 12 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ পদার্থবিজ্ঞান দ্বাদশ শ্রেণি";
      authorEn = "WBCHSE";
      authorBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ";
      descriptionEn = "WBCHSE official Physics textbook for Class 12 for Uchha Madhyamik board examination in Bengali medium.";
      descriptionBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদের দ্বাদশ শ্রেণির পদার্থবিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788192576671";
      genre = "#academic";
      language = "#bengali";
      price = 99;
      stock = 210;
      rating = 4.4;
      tags = ["wbchse", "physics", "class12", "bengali", "uchhamadhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576671-L.jpg";
    },
    {
      titleEn = "WBCHSE Chemistry Class 11 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ রসায়ন একাদশ শ্রেণি";
      authorEn = "WBCHSE";
      authorBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ";
      descriptionEn = "WBCHSE official Chemistry textbook for Class 11 in Bengali medium covering atomic structure, bonding, and organic chemistry.";
      descriptionBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদের একাদশ শ্রেণির রসায়ন পাঠ্যপুস্তক।";
      isbn = "9788192576688";
      genre = "#academic";
      language = "#bengali";
      price = 99;
      stock = 200;
      rating = 4.3;
      tags = ["wbchse", "chemistry", "class11", "bengali", "uchhamadhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576688-L.jpg";
    },
    {
      titleEn = "WBCHSE Chemistry Class 12 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ রসায়ন দ্বাদশ শ্রেণি";
      authorEn = "WBCHSE";
      authorBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ";
      descriptionEn = "WBCHSE official Chemistry textbook for Class 12 for Uchha Madhyamik board examination covering electrochemistry and organic synthesis.";
      descriptionBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদের দ্বাদশ শ্রেণির রসায়ন পাঠ্যপুস্তক।";
      isbn = "9788192576695";
      genre = "#academic";
      language = "#bengali";
      price = 99;
      stock = 200;
      rating = 4.4;
      tags = ["wbchse", "chemistry", "class12", "bengali", "uchhamadhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576695-L.jpg";
    },
    {
      titleEn = "WBCHSE Biology Class 11 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ জীববিজ্ঞান একাদশ শ্রেণি";
      authorEn = "WBCHSE";
      authorBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ";
      descriptionEn = "WBCHSE official Biology textbook for Class 11 in Bengali medium covering botany, zoology, and biochemistry.";
      descriptionBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদের একাদশ শ্রেণির জীববিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788192576701";
      genre = "#academic";
      language = "#bengali";
      price = 99;
      stock = 195;
      rating = 4.3;
      tags = ["wbchse", "biology", "class11", "bengali", "uchhamadhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576701-L.jpg";
    },
    {
      titleEn = "WBCHSE Biology Class 12 (Bengali Medium)";
      titleBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ জীববিজ্ঞান দ্বাদশ শ্রেণি";
      authorEn = "WBCHSE";
      authorBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদ";
      descriptionEn = "WBCHSE official Biology textbook for Class 12 for Uchha Madhyamik board examination covering genetics, biotechnology, and ecology.";
      descriptionBn = "পশ্চিমবঙ্গ উচ্চমাধ্যমিক শিক্ষা সংসদের দ্বাদশ শ্রেণির জীববিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9788192576718";
      genre = "#academic";
      language = "#bengali";
      price = 99;
      stock = 195;
      rating = 4.4;
      tags = ["wbchse", "biology", "class12", "bengali", "uchhamadhyamik"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9788192576718-L.jpg";
    },
    {
      titleEn = "S. Chand's Mathematics for Class 9";
      titleBn = "এস. চাঁদ গণিত নবম শ্রেণি";
      authorEn = "R.S. Aggarwal";
      authorBn = "আর.এস. আগারওয়াল";
      descriptionEn = "R.S. Aggarwal's Mathematics for Class 9 published by S. Chand — popular CBSE reference with extensive exercises and solutions.";
      descriptionBn = "এস. চাঁদ প্রকাশনীর নবম শ্রেণির আর.এস. আগারওয়ালের গণিত।";
      isbn = "9789352530601";
      genre = "#academic";
      language = "#english";
      price = 275;
      stock = 200;
      rating = 4.6;
      tags = ["schand", "mathematics", "class9", "cbse", "rsaggarwal"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352530601-L.jpg";
    },
    {
      titleEn = "S. Chand's Mathematics for Class 10";
      titleBn = "এস. চাঁদ গণিত দশম শ্রেণি";
      authorEn = "R.S. Aggarwal";
      authorBn = "আর.এস. আগারওয়াল";
      descriptionEn = "R.S. Aggarwal's Mathematics for Class 10 — the definitive CBSE board reference with chapter-wise solved examples and exercises.";
      descriptionBn = "এস. চাঁদ প্রকাশনীর দশম শ্রেণির আর.এস. আগারওয়ালের গণিত।";
      isbn = "9789352530618";
      genre = "#academic";
      language = "#english";
      price = 275;
      stock = 200;
      rating = 4.6;
      tags = ["schand", "mathematics", "class10", "cbse", "board", "rsaggarwal"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352530618-L.jpg";
    },
    {
      titleEn = "Lakhmir Singh and Manjit Kaur Science Class 9";
      titleBn = "লাখমির সিং বিজ্ঞান নবম শ্রেণি";
      authorEn = "Lakhmir Singh, Manjit Kaur";
      authorBn = "লাখমির সিং, মনজিত কৌর";
      descriptionEn = "Lakhmir Singh and Manjit Kaur's comprehensive Science for Class 9 — covers physics, chemistry, and biology with detailed explanations.";
      descriptionBn = "নবম শ্রেণির জন্য লাখমির সিং ও মনজিত কৌরের ব্যাপক বিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9789352530656";
      genre = "#academic";
      language = "#english";
      price = 295;
      stock = 160;
      rating = 4.5;
      tags = ["lakhmir", "science", "class9", "cbse", "physics", "chemistry"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352530656-L.jpg";
    },
    {
      titleEn = "Lakhmir Singh and Manjit Kaur Science Class 10";
      titleBn = "লাখমির সিং বিজ্ঞান দশম শ্রেণি";
      authorEn = "Lakhmir Singh, Manjit Kaur";
      authorBn = "লাখমির সিং, মনজিত কৌর";
      descriptionEn = "Lakhmir Singh and Manjit Kaur Science Class 10 covering all CBSE topics for board exam preparation.";
      descriptionBn = "দশম শ্রেণির জন্য লাখমির সিং ও মনজিত কৌরের ব্যাপক বিজ্ঞান পাঠ্যপুস্তক।";
      isbn = "9789352530663";
      genre = "#academic";
      language = "#english";
      price = 295;
      stock = 165;
      rating = 4.5;
      tags = ["lakhmir", "science", "class10", "cbse", "board"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352530663-L.jpg";
    },
    {
      titleEn = "Comprehensive Chemistry Class 11 by NOOTAN";
      titleBn = "নূতন ব্যাপক রসায়ন একাদশ শ্রেণি";
      authorEn = "N. Avasthi";
      authorBn = "এন. অবস্থী";
      descriptionEn = "Nootan Comprehensive Chemistry for Class 11 with detailed theory, numerical problems, and objective questions for CBSE and competitive exams.";
      descriptionBn = "একাদশ শ্রেণির জন্য নূতনের ব্যাপক রসায়ন পাঠ্যপুস্তক।";
      isbn = "9789352530687";
      genre = "#academic";
      language = "#english";
      price = 310;
      stock = 145;
      rating = 4.5;
      tags = ["nootan", "chemistry", "class11", "cbse", "comprehensive"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352530687-L.jpg";
    },
    {
      titleEn = "Comprehensive Chemistry Class 12 by NOOTAN";
      titleBn = "নূতন ব্যাপক রসায়ন দ্বাদশ শ্রেণি";
      authorEn = "N. Avasthi";
      authorBn = "এন. অবস্থী";
      descriptionEn = "Nootan Comprehensive Chemistry for Class 12 with board exam focus, detailed theory, and solved past papers.";
      descriptionBn = "দ্বাদশ শ্রেণির জন্য নূতনের ব্যাপক রসায়ন পাঠ্যপুস্তক।";
      isbn = "9789352530694";
      genre = "#academic";
      language = "#english";
      price = 310;
      stock = 145;
      rating = 4.5;
      tags = ["nootan", "chemistry", "class12", "cbse", "board", "comprehensive"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789352530694-L.jpg";
    },
    {
      titleEn = "Together With Science Class 10";
      titleBn = "টুগেদার উইথ বিজ্ঞান দশম শ্রেণি";
      authorEn = "Rachna Sagar";
      authorBn = "রচনা সাগর";
      descriptionEn = "Together With Science Class 10 by Rachna Sagar — CBSE board exam guide with solved NCERT questions and practice papers.";
      descriptionBn = "দশম শ্রেণির জন্য রচনা সাগরের টুগেদার উইথ বিজ্ঞান গাইড।";
      isbn = "9789389811131";
      genre = "#academic";
      language = "#english";
      price = 225;
      stock = 180;
      rating = 4.4;
      tags = ["togetherwith", "science", "class10", "cbse", "board", "rachnasagar"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789389811131-L.jpg";
    },
    {
      titleEn = "Target NEET by Disha Publication";
      titleBn = "টার্গেট নিট - দিশা পাবলিকেশন";
      authorEn = "Disha Experts";
      authorBn = "দিশা বিশেষজ্ঞ";
      descriptionEn = "Disha's Target NEET — comprehensive guide for NEET UG preparation covering Physics, Chemistry, and Biology with mock tests.";
      descriptionBn = "নিট ইউজি পরীক্ষার জন্য দিশার ব্যাপক গাইড।";
      isbn = "9789389235722";
      genre = "#academic";
      language = "#english";
      price = 350;
      stock = 170;
      rating = 4.6;
      tags = ["disha", "neet", "physics", "chemistry", "biology", "mocktest"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789389235722-L.jpg";
    },
    {
      titleEn = "Arihant Handbook of Physics";
      titleBn = "অরিহন্ত পদার্থবিজ্ঞান হ্যান্ডবুক";
      authorEn = "Nipendra Bhatnagar";
      authorBn = "নিপেন্দ্র ভাটনাগর";
      descriptionEn = "Arihant Handbook of Physics — a quick reference guide covering all important formulas, definitions, and concepts for Class 11 and 12.";
      descriptionBn = "একাদশ ও দ্বাদশ শ্রেণির সমস্ত গুরুত্বপূর্ণ সূত্র ও ধারণার দ্রুত রেফারেন্স গাইড।";
      isbn = "9789313195336";
      genre = "#academic";
      language = "#english";
      price = 185;
      stock = 250;
      rating = 4.6;
      tags = ["arihant", "physics", "handbook", "formulas", "quickreference"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789313195336-L.jpg";
    },
    {
      titleEn = "Arihant Handbook of Chemistry";
      titleBn = "অরিহন্ত রসায়ন হ্যান্ডবুক";
      authorEn = "Arihant Experts";
      authorBn = "অরিহন্ত বিশেষজ্ঞ";
      descriptionEn = "Arihant Handbook of Chemistry — a compact quick revision guide with all important reactions, formulas, and concepts for board and JEE.";
      descriptionBn = "বোর্ড ও জেইই-র জন্য রসায়নের দ্রুত রেফারেন্স হ্যান্ডবুক।";
      isbn = "9789313195343";
      genre = "#academic";
      language = "#english";
      price = 185;
      stock = 250;
      rating = 4.6;
      tags = ["arihant", "chemistry", "handbook", "formulas", "quickreference"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789313195343-L.jpg";
    },
    {
      titleEn = "Arihant Handbook of Mathematics";
      titleBn = "অরিহন্ত গণিত হ্যান্ডবুক";
      authorEn = "Arihant Experts";
      authorBn = "অরিহন্ত বিশেষজ্ঞ";
      descriptionEn = "Arihant Handbook of Mathematics — quick revision guide covering all important formulas, identities, and theorems for board and JEE.";
      descriptionBn = "বোর্ড ও জেইই-র জন্য গণিতের দ্রুত রেফারেন্স হ্যান্ডবুক।";
      isbn = "9789313195350";
      genre = "#academic";
      language = "#english";
      price = 185;
      stock = 250;
      rating = 4.6;
      tags = ["arihant", "mathematics", "handbook", "formulas", "quickreference"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789313195350-L.jpg";
    },
    {
      titleEn = "Arihant Handbook of Biology";
      titleBn = "অরিহন্ত জীববিজ্ঞান হ্যান্ডবুক";
      authorEn = "Arihant Experts";
      authorBn = "অরিহন্ত বিশেষজ্ঞ";
      descriptionEn = "Arihant Handbook of Biology — quick revision guide with all important diagrams, definitions, and key points for NEET and boards.";
      descriptionBn = "নিট ও বোর্ড-এর জন্য জীববিজ্ঞানের দ্রুত রেফারেন্স হ্যান্ডবুক।";
      isbn = "9789313195367";
      genre = "#academic";
      language = "#english";
      price = 185;
      stock = 245;
      rating = 4.5;
      tags = ["arihant", "biology", "handbook", "neet", "quickreference"];
      coverImageUrl = "https://covers.openlibrary.org/b/isbn/9789313195367-L.jpg";
    },
  ];
}
