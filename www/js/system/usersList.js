//function total(){
//    return (this.donation / this.price * 100).toFixed(1) + '%';
//}
//function balance(){
//    return this.price - this.donation;
//}
var wishList = [
    {
        id          : 2,
        title       : 'Smart Wristband Watch Bracelet',
        description : 'Fashionable, modern. Love the colors and it connects to my phone. Want it! Want it!',
        unit        : '$',
        price       : 180,
        donation    : 10,
        photo       : 'images/wish/2.JPG',
        total       : (180 / 10 * 100).toFixed(1) + '%',
        peoples     : 5,
        balance     : 180 - 10,
        private     : 0
    },
    {
        id          : 3,
        title       : 'Canon EOS Rebel Camera',
        description : 'This is the camera I have always wanted to become a professional photographer!',
        unit        : '$',
        price       : 349,
        donation    : 120,
        photo       : 'images/wish/3.JPG',
        total       : (120 / 349 * 100).toFixed(1) + '%',
        peoples     : 7,
        balance     : 349 - 120,
        private     : 1
    },
    {
        id          : 4,
        title       : 'Dial Black Watch',
        description : 'Fashionable, luxury... This is just a perfect watch for me !',
        unit        : '$',
        price       : 49,
        donation    : 12,
        photo       : 'images/wish/4.JPG',
        total       : (12 / 49 * 100).toFixed(1) + '%',
        peoples     : 7,
        balance     : 49 - 12,
        private     : 1
    },
    {
        id          : 5,
        title       : 'Turn Signal',
        description : 'They are so cool and will look great on my Harley!',
        unit        : '$',
        price       : 110,
        donation    : 2,
        photo       : 'images/wish/5.JPG',
        total       : (2 / 110 * 100).toFixed(1) + '%',
        peoples     : 1,
        balance     : 110 - 2,
        private     : 1
    },
    {
        id          : 8,
        title       : 'HUGO BOSS Slim Fit',
        description : 'Great suit to go to work or to a restaurant, I really like it !',
        unit        : '$',
        price       : 299,
        donation    : 218,
        photo       : 'images/wish/8.JPG',
        total       : (218 / 299 * 100).toFixed(1) + '%',
        peoples     : 24,
        balance     : 299 - 218,
        private     : 1
    },
    {
        id          : 10,
        title       : 'Michael Kors Men\'s Watch',
        description : 'I saw this guy wearing it at the fair. It\'s nice it\'s heavy, great color. All I want in a watch.',
        unit        : '$',
        price       : 176,
        donation    : 118,
        photo       : 'images/wish/10.JPG',
        total       : (118 / 176 * 100).toFixed(1) + '%',
        peoples     : 24,
        balance     : 176 - 118,
        private     : 1
    },
    {
        id          : 11,
        title       : 'Hugo Boss Polo Shirt',
        description : 'Love the stripes, always loved the style.',
        unit        : '$',
        price       : 85,
        donation    : 18,
        photo       : 'images/wish/11.jpeg',
        total       : (18 / 85 * 100).toFixed(1) + '%',
        peoples     : 24,
        balance     : 85 - 18,
        private     : 1
    },
    {
        id          : 20,
        title       : 'Sony PlayStation',
        description : 'This is just a great present for my kids',
        unit        : '$',
        price       : 450,
        donation    : 150,
        photo       : 'images/wish/Sony PlayStation 4 - 500 GB - Glacier white.jpeg',
        total       : (150 / 450 * 100).toFixed(1) + '%',
        peoples     : 23,
        balance     : 450 - 150,
        private     : 1
    },
    {
        id          : 22,
        title       : 'Wireless Headphones',
        description : "I can't stand the wires anymore, Modern times oblige! Plus, I read only good reviews about those.",
        unit        : '$',
        price       : 228,
        donation    : 100,
        photo       : 'images/wish/Beats by Dr. Dre Studio Wireless Headphones.jpeg',
        total       : (100 / 228 * 100).toFixed(1) + '%',
        peoples     : 23,
        balance     : 228 - 100,
        private     : 1
    },
    {
        id          : 23,
        title       : "Women's Running Shoes",
        description : "Great shoes to go jogging or just walking with my friends",
        unit        : '$',
        price       : 80,
        donation    : 67,
        photo       : "images/wish/Teal Suede Shoe.jpg",
        total       : (67 / 80 * 100).toFixed(1) + '%',
        peoples     : 9,
        balance     : 80 - 67,
        private     : 1
    },
    {
        id          : 26,
        title       : 'Teal Suede Shoe',
        description : 'Fashionable, light and so comfortable! I definitely want these ones...',
        unit        : '$',
        price       : 30,
        donation    : 10,
        photo       : 'images/wish/Teal Suede Shoe.jpg',
        total       : (10 / 30 * 100).toFixed(1) + '%',
        peoples     : 23,
        balance     : 30 - 10,
        private     : 1
    },
    {
        id          : 27,
        title       : "Men's Quartz Blue Dial Watch",
        description : "Great present for my husband!",
        unit        : '$',
        price       : 700,
        donation    : 100,
        photo       : "images/wish/MICHAEL KORS LADIES' PARKER CHRONOGRAPH WATCH.jpg",
        total       : (100 / 700 * 100).toFixed(1) + '%',
        peoples     : 9,
        balance     : 700 - 100,
        private     : 0
    },
    {
        id            : 28,
        title         : "Black Dial Watch",
        description   : 'Cool, stylish black dial watch - I really really want it!',
        unit          : '$',
        price         : 495,
        donation      : 134,
        donationClass : 'error-bg',
        photo         : "images/wish/Tissot Quickster Men's Quartz Chronograph Black Dial Watch.jpg",
        total         : (134 / 495 * 100).toFixed(1) + '%',
        peoples       : 234,
        balance       : 495 - 134,
        private       : 1
    }
];
var wishListWoman = [
    {
        id          : 1,
        title       : 'Women Pointy Shoes',
        description : 'Stylish red shoes I have always dreamt of',
        unit        : '$',
        price       : 290,
        donation    : 150,
        photo       : 'images/wish/1.JPG',
        total       : (150 / 290 * 100).toFixed(1) + '%',
        peoples     : 3,
        balance     : 290 - 150,
        private     : 0
    },
    {
        id          : 6,
        title       : 'Great evening shoulder bag',
        description : 'I like so much this colorful bag, it\'s form and the nice heart!',
        unit        : '$',
        price       : 37,
        donation    : 28,
        photo       : 'images/wish/6.JPG',
        total       : (28 / 37 * 100).toFixed(1) + '%',
        peoples     : 1,
        balance     : 37 - 28,
        private     : 1
    },
    {
        id          : 7,
        title       : 'Sexy Women Mini Dress',
        description : 'I adore this dress, it\'s so glamorous',
        unit        : '$',
        price       : 39,
        donation    : 28,
        photo       : 'images/wish/7.JPG',
        total       : (28 / 39 * 100).toFixed(1) + '%',
        peoples     : 8,
        balance     : 39 - 28,
        private     : 1
    },
    {
        id          : 9,
        title       : 'Diamond Ring',
        description : 'This ring will look wonderful on my finger',
        unit        : '$',
        price       : 1199,
        donation    : 518,
        photo       : 'images/wish/9.JPG',
        total       : (518 / 1199 * 100).toFixed(1) + '%',
        peoples     : 24,
        balance     : 1199 - 518,
        private     : 1
    }
];

var wishDino = [
    {
        id          : 24,
        title       : 'Brooks Adrenaline Shoes',
        description : 'Incredible, fashionable and comfortable new shoes for training.',
        unit        : '$',
        price       : 100,
        donation    : 50,
        photo       : 'images/wish/Brooks Adrenaline GTS 14.jpg',
        total       : (50 / 100 * 100).toFixed(1) + '%',
        peoples     : 23,
        balance     : 100 - 50,
        private     : 1
    },
    {
        id          : 25,
        title       : 'Ted Baker Comptan',
        description : 'I like these, good for winter.',
        unit        : '$',
        price       : 280,
        donation    : 100,
        photo       : 'images/wish/Ted Baker Comptan.jpg',
        total       : (100 / 280 * 100).toFixed(1) + '%',
        peoples     : 9,
        balance     : 280 - 100,
        private     : 0
    },
    {
        id          : 21,
        title       : 'Fujifilm Digital Camera',
        description : 'My dream camera!  Make effort to save for this for upcoming trip.',
        unit        : '$',
        price       : 799,
        donation    : 130,
        photo       : 'images/wish/Fujifilm X100S 16.3 MP Digital Camera.jpeg',
        total       : (130 / 799 * 100).toFixed(1) + '%',
        peoples     : 9,
        balance     : 799 - 130,
        private     : 0
    }
];
var donationsDinoMade = [
    {
        id       : 1,
        name     : 'Alexandra Gallardo',
        photo    : 'images/users/Alexandra Gallardo.jpg',
        donation : 35,
        unit     : '$',
        date     : 'Aug 12 2014'
    },
    {
        id       : 3,
        name     : 'Alejandro Tani',
        photo    : 'images/users/Alejandro Tani.jpg',
        donation : 355,
        unit     : '$',
        date     : 'Sep 12 2015'
    },
    {
        id       : 6,
        name     : 'Alberto Echegaray',
        photo    : 'images/users/Alberto Echegaray.jpg',
        donation : 5,
        unit     : '$',
        date     : 'Aug 12 2015'
    },
    {
        id       : 7,
        name     : 'Alia Haj-Hasan',
        photo    : 'images/users/Alia Haj-Hasan.jpg',
        donation : 25,
        unit     : '$',
        date     : 'Aug 12 2015'
    },
    {
        id       : 23,
        name     : 'Chris Cronan',
        photo    : 'images/users/Chris Cronan.jpg',
        donation : 55,
        unit     : '$',
        date     : 'Aug 10 2015'
    }
];
var donationsDinoReceived = [
    {
        id       : 1,
        name     : 'Alexandra Gallardo',
        photo    : 'images/users/Alexandra Gallardo.jpg',
        donation : 35,
        unit     : '$',
        date     : 'Aug 12 2014'
    },
    {
        id       : 3,
        name     : 'Alejandro Tani',
        photo    : 'images/users/Alejandro Tani.jpg',
        donation : 355,
        unit     : '$',
        date     : 'Sep 12 2015'
    },
    {
        id       : 6,
        name     : 'Alberto Echegaray',
        photo    : 'images/users/Alberto Echegaray.jpg',
        donation : 5,
        unit     : '$',
        date     : 'Aug 12 2015'
    }
];
var dinoProfile = {
    id           : 0,
    login        : 'dino777',
    password     : 'dino777',
    name         : 'Dino LaCapra',
    photo        : 'images/users/Dino LAcapra.jpg',
    invited      : true,
    phone        : '(123) 456 7890',
    wishListShow : true,
    wishList     : wishDino
    //    wishList     : typeof localStorage.wishList !== 'undefined' ? JSON.parse(localStorage.wishList) : wishDino
};
var users = [
    {
        id           : 1,
        name         : 'Alberto Echegaray',
        photo        : 'images/users/Alberto Echegaray.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 1,
        publickShow  : 0,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 2,
        name         : 'Alejandro Bermudez',
        photo        : 'images/users/Alejandro Bermudez.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 1,
        publickShow  : 0,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 3,
        name         : 'Alejandro Tani',
        photo        : 'images/users/Alejandro Tani.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 0,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 5,
        name         : 'Alexandra Gallardo',
        photo        : 'images/users/Alexandra Gallardo.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 1,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 6,
        name         : 'Alfredo Arteaga',
        photo        : 'images/users/Alfredo Arteaga.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 1,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 7,
        name         : 'Alia Haj-Hasan',
        photo        : 'images/users/Alia Haj-Hasan.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 1,
        publickShow  : 0,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 8,
        name         : 'Alicia Maza',
        photo        : 'images/users/Alicia Maza.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 9,
        name         : 'Ameerh Naran',
        photo        : 'images/users/Ameerh Naran.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 1,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 10,
        name         : 'Amit Luthra',
        photo        : 'images/users/Amit Luthra.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 1,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 11,
        name         : 'Amy Wiborg',
        photo        : 'images/users/Amy Wiborg.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 12,
        name         : 'Ana Novoa',
        photo        : 'images/users/Ana Novoa.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 13,
        name         : 'Anastasia Slivker',
        photo        : 'images/users/Anastasia Slivker.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 14,
        name         : 'Andy Benavides',
        photo        : 'images/users/Andy Benavides.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 15,
        name         : 'Arturo Siso',
        photo        : 'images/users/Arturo Siso.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 16,
        name         : 'Ashlee Cronan Dirocco',
        photo        : 'images/users/Ashlee Cronan Dirocco.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 17,
        name         : 'Bailasan Badwan',
        photo        : 'images/users/Bailasan Badwan.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 18,
        name         : 'Ben Nemtin',
        photo        : 'images/users/Ben Nemtin.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 90,
        name         : 'Ben Imad',
        photo        : 'images/users/Ben Imad.png',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 19,
        name         : 'Brooke Johnson',
        photo        : 'images/users/Brooke Johnson.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 20,
        name         : 'Carlos Bonilla',
        photo        : 'images/users/Carlos Bonilla.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 21,
        name         : 'Carlos Robledo',
        photo        : 'images/users/Carlos Robledo.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 22,
        name         : 'Catul Kiti',
        photo        : 'images/users/Catul Kiti.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 23,
        name         : 'Chris Cronan',
        photo        : 'images/users/Chris Cronan.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 24,
        name         : 'Christina Floyd Di Donna',
        photo        : 'images/users/Christina Floyd Di Donna.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 25,
        name         : 'Cindy Huang',
        photo        : 'images/users/Cindy Huang.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 26,
        name         : "Colin O'Higgins",
        photo        : "images/users/Colin O'Higgins.jpg",
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 27,
        name         : 'Coryn Blina',
        photo        : 'images/users/Coryn Blina.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 150,
        donateWish   : wishDino[1]
    },
    {
        id           : 28,
        name         : 'Cristian LaCapra',
        photo        : 'images/users/Cristian LaCapra.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 100,
        donateWish   : wishDino[2]
    },
    {
        id           : 29,
        name         : 'Cristina Marie Hosmer',
        photo        : 'images/users/Cristina Marie Hosmer.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 30,
        name         : 'Cristy Marero',
        photo        : 'images/users/Cristy Marero.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 31,
        name         : 'Dan Haime',
        photo        : 'images/users/Dan Haime.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 32,
        name         : 'Eliana Prada',
        photo        : 'images/users/Eliana Prada.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 33,
        name         : 'Elizabeth Brady',
        photo        : 'images/users/Elizabeth Brady.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 34,
        name         : 'Elizabeth Gonzalez',
        photo        : 'images/users/Elizabeth Gonzalez.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 35,
        name         : 'Floriana Acosta',
        photo        : 'images/users/Floriana Acosta.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 36,
        name         : 'Francisco De Borno',
        photo        : 'images/users/Francisco De Borno.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 37,
        name         : 'Garry Toussaint',
        photo        : 'images/users/Garry Toussaint.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 38,
        name         : 'Giani LaCarpa',
        photo        : 'images/users/Giani LaCarpa.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 39,
        name         : 'Gina Cannoniga',
        photo        : 'images/users/Gina Cannoniga.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 40,
        name         : 'Greta Tufvesson',
        photo        : 'images/users/Greta Tufvesson.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 41,
        name         : 'Hope Kercher',
        photo        : 'images/users/Hope Kercher.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 42,
        name         : 'Jan Spencer',
        photo        : 'images/users/Jan Spencer.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWishWoman(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 43,
        name         : 'Jean Michel Beltrand',
        photo        : 'images/users/Jean Michel Beltrand.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 44,
        name         : 'Jean-Jacques Kassis',
        photo        : 'images/users/Jean-Jacques Kassis.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 45,
        name         : 'Joe Estrella',
        photo        : 'images/users/Joe Estrella.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 46,
        name         : 'Jorge Arevalo',
        photo        : 'images/users/Jorge Arevalo.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 47,
        name         : 'Joseph Peter',
        photo        : 'images/users/Joseph Peter.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 48,
        name         : 'Juan Carlos De Jongh',
        photo        : 'images/users/Juan Carlos De Jongh.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 49,
        name         : 'Juan Carlos Ventura',
        photo        : 'images/users/Juan Carlos Ventura.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 50,
        name         : 'Juan Diego Calle',
        photo        : 'images/users/Juan Diego Calle.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 51,
        name         : 'Karim Salameh',
        photo        : 'images/users/Karim Salameh.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 52,
        name         : 'Kevin Lazan',
        photo        : 'images/users/Kevin Lazan.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 53,
        name         : 'Lara Husseiny',
        photo        : 'images/users/Lara Husseiny.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 54,
        name         : 'Luis Fernando Botero',
        photo        : 'images/users/Luis Fernando Botero.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 55,
        name         : 'Marco Ciocca',
        photo        : 'images/users/Marco Ciocca.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 56,
        name         : 'Marco Rodriguez-Diaz',
        photo        : 'images/users/Marco Rodriguez-Diaz.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 57,
        name         : 'Margie Pemberton',
        photo        : 'images/users/Margie Pemberton.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 58,
        name         : 'Maria Teresa Lopez',
        photo        : 'images/users/Maria Teresa Lopez.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 59,
        name         : 'Marina Sanchez McEvoy',
        photo        : 'images/users/Marina Sanchez McEvoy.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 60,
        name         : 'Martin Corredera Silvan',
        photo        : 'images/users/Martin Corredera Silvan.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 61,
        name         : 'Metin Mutlu',
        photo        : 'images/users/Metin Mutlu.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 62,
        name         : 'Michael Karim',
        photo        : 'images/users/Michael Karim.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 63,
        name         : 'Miguel Angel Gonzalez',
        photo        : 'images/users/Miguel Angel Gonzalez.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 64,
        name         : 'Miguel Reyes',
        photo        : 'images/users/Miguel Reyes.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 65,
        name         : 'Mohamed Nasser Edine',
        photo        : 'images/users/Mohamed Nasser Edine.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 66,
        name         : 'Moira Reyes',
        photo        : 'images/users/Moira Reyes.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 67,
        name         : 'Monica Dowling',
        photo        : 'images/users/Monica Dowling.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 30,
        donateWish   : wishDino[0]
    },
    {
        id           : 68,
        name         : 'Palash Ahmed',
        photo        : 'images/users/Palash Ahmed.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 69,
        name         : 'Paola Rubio',
        photo        : 'images/users/Paola Rubio.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 70,
        name         : 'Paolo Vismara',
        photo        : 'images/users/Paolo Vismara.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 71,
        name         : 'Pauldine France',
        photo        : 'images/users/Pauldine France.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 72,
        name         : 'Pedro Rodriguez',
        photo        : 'images/users/Pedro Rodriguez.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 73,
        name         : 'Peter Hoffman',
        photo        : 'images/users/Peter Hoffman.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 74,
        name         : 'Raul Abuchaibe',
        photo        : 'images/users/Raul Abuchaibe.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 75,
        name         : 'Rob Oristaglio',
        photo        : 'images/users/Rob Oristaglio.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 76,
        name         : 'Robb LaKritz',
        photo        : 'images/users/Robb LaKritz.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 77,
        name         : 'Roberto Pascual',
        photo        : 'images/users/Roberto Pascual.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 78,
        name         : 'Ruben Gonzalez',
        photo        : 'images/users/Ruben Gonzalez.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 79,
        name         : 'Ryan Bateman',
        photo        : 'images/users/Ryan Bateman.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 80,
        name         : 'Salim Elkhou',
        photo        : 'images/users/Salim Elkhou.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 81,
        name         : 'Shara Levy',
        photo        : 'images/users/Shara Levy.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 82,
        name         : 'Sumaya Abughazaleh',
        photo        : 'images/users/Sumaya Abughazaleh.jpg',
        invited      : 1,
        wishListShow : 1,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 50,
        donateWish   : wishDino[2]
    },
    {
        id           : 83,
        name         : 'Thelma Rocha',
        photo        : 'images/users/Thelma Rocha.jpg',
        invited      : 1,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1,
        donateMe     : 50,
        donateWish   : wishDino[1]
    },
    {
        id           : 84,
        name         : 'Tini Courtney',
        photo        : 'images/users/Tini Courtney.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 85,
        name         : 'Tom Sansone',
        photo        : 'images/users/Tom Sansone.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 86,
        name         : 'Tom Staz',
        photo        : 'images/users/Tom Staz.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 87,
        name         : 'Veronica Arroyo',
        photo        : 'images/users/Veronica Arroyo.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 88,
        name         : 'William McCullough',
        photo        : 'images/users/William McCullough.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    },
    {
        id           : 89,
        name         : 'Zhana Londoner',
        photo        : 'images/users/Zhana Londoner.jpg',
        invited      : 0,
        wishListShow : 0,
        phone        : '(123) 456 7890',
        wishList     : randomWish(),
        privateShow  : 0,
        publickShow  : 1
    }
];

var usersSent = [
    users[0], users[81], users[26]
], usersRequest = [
    users[1], users[4], users[47]
], usersBirthday = [
    users[60], users[4], users[48]
];

var trendList = [
    {
        id          : 24,
        title       : 'iPhone 6 Gold',
//        description : 'Fashionable, modern. Love the colors and it connects to my phone. Want it! Want it!',
        unit        : '$',
        price       : 700,
        photo       : 'images/wish/iphone6.jpg'
    },
    {
        id          : 34,
        title       : 'MacBook Pro 13"',
//        description : 'This is the camera I have always wanted to become a professional photographer!',
        unit        : '$',
        price       : 1500,
        photo       : 'images/wish/macbook.jpg'
    },
    {
        id          : 45,
        title       : 'iPad',
//        description : 'Fashionable, luxury... This is just a perfect watch for me !',
        unit        : '$',
        price       : 600,
        photo       : 'images/wish/ipad.png'
    }
]

function randomWish(count){
    count = (typeof count !== 'undefined') ? count : 2;
    var i = 0, wishIndex = [], newWishList = [];
    while(i < ((typeof count !== 'undefined') ? count : Math.floor((Math.random() * wishList.length)))){
        i++;
        var index = Math.floor((Math.random() * (wishList.length - 1)));
        if(wishIndex.indexOf(index) === -1){
            newWishList.push(wishList[index]);
            wishIndex.push(index);
        }
    }
    return newWishList;
}

function randomWishWoman(count){
    count = (typeof count !== 'undefined') ? count : 2;
    var i = 0, wishIndex = [], newWishList = [];
    while(i < ((typeof count !== 'undefined') ? count : Math.floor((Math.random() * wishListWoman.length)))){
        i++;
        var index = Math.floor((Math.random() * (wishListWoman.length - 1)));
        if(wishIndex.indexOf(index) === -1){
            newWishList.push(wishListWoman[index]);
            wishIndex.push(index);
        }
    }
    return newWishList;
}

function randomUser(count){
    var i = 0, userIndex = [], newUserList = [];
    while(i < (count ? count : Math.floor((Math.random() * users.length)))){
        i++;
        var index = Math.floor((Math.random() * (users.length - 1)));
        if(userIndex.indexOf(index) === -1){
            newUserList.push(users[index]);
            userIndex.push(index);
        }
    }
    return newUserList;
}

//if(typeof localStorage.wishList === 'undefined'){
//    localStorage.wishList = JSON.stringify(users[1]);
//}

function addLocalStorage(objName, obj){
    if(typeof localStorage[objName] !== 'undefined'){
        var parseLocalStorage = JSON.parse(localStorage[objName]);
        var json = $.extend(parseLocalStorage, obj);
        localStorage[objName] = JSON.stringify(json);
    }else{
        localStorage[objName] = JSON.stringify(obj);
    }
}