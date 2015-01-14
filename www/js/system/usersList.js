var wishDavid = [
    {
        id          : 24,
        title       : 'Brooks Adrenaline GTS 14',
        description : 'I bought these shoes in suede, and love the fit. I wish they were offered in a nude or skin toned. I love the nude leather sandals that are offered in the department stores. The color is sophisticated and because of the nude color it blends in with any frock. I love these shoes but would love them more in nude, get busy Flexus! I am waiting!',
        unit        : '$',
        price       : 100,
        donation    : 50,
        photo       : 'images/Brooks Adrenaline GTS 14.jpg',
        total       : (50 / 100 * 100).toFixed(1) + '%',
        peoples     : 23,
        balance     : 100 - 50
    },
    {
        id          : 25,
        title       : 'Ted Baker Comptan',
        description : 'These teal suede shoes are perfect for casual outings. The feature classic lace up fastening with coordinating laces, decorative stitch detailing and a contrast brown rubber sole.',
        unit        : '$',
        price       : 280,
        donation    : 100,
        photo       : 'images/Ted Baker Comptan.jpg',
        total       : (100 / 280 * 100).toFixed(1) + '%',
        peoples     : 9,
        balance     : 280 - 100
    }
];

var users = [
    {
        id        : 1,
        name      : 'Michel Leconte',
        photo     : 'http://www.seotoaster.com/media/team/small/michel.jpg',
        contact   : true,
        phone     : '(123) 456 7890',
        wish_list : [
            {
                id          : 20,
                title       : 'Sony PlayStation 4 - 500 GB - Glacier white',
                description : 'The PlayStation 4 system provides dynamic, connected gaming, powerful graphics and speed, intelligent personalization, deeply integrated social capabilities, and innovative second-screen features. Combining unparalleled content, immersive gaming experiences, all of your favorite digital entertainment apps, and PlayStation exclusives, the PS4 system focuses on the gamers. PlayStation 4 was designed from the ground up to ensure that game creators can unleash their imaginations to develop the very best games and deliver new play experiences never before possible. With ultra-fast customized processors and high-performance unified system memory, PS4 is the home to games with rich, high-fidelity graphics and deeply immersive experiences that shatter expectations.',
                unit        : '$',
                price       : 450,
                donation    : 150,
                photo       : 'images/Sony PlayStation 4 - 500 GB - Glacier white.jpeg',
                total       : (150 / 450 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 450 - 150
            },
            {
                id          : 21,
                title       : 'Fujifilm X100S 16.3 MP Digital Camera',
                description : 'Since the age of film photography, the history of Fujifilm has paralleled the path of the professional photographer. The story is the endless pursuit of unparalleled photographic expression, and the X series was born. What is the meaning of a camera or photos in your life? Now you can hold the answer to explore the depths these questions. Fujifilm X. It is the promise of unprecedented photographic pleasure. ',
                unit        : '$',
                price       : 799,
                donation    : 130,
                photo       : 'images/Fujifilm X100S 16.3 MP Digital Camera.jpeg',
                total       : (130 / 799 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 799 - 130
            }
        ]
    },
    {
        id      : 2,
        name    : 'David Culot',
        photo   : 'http://www.seotoaster.com/media/team/small/david.jpg',
        contact   : true,
        phone     : '(123) 456 7890',
        wish_list : typeof localStorage.wishList !== 'undefined' ? JSON.parse(localStorage.wishList) : wishDavid
    },
    {
        id        : 3,
        name      : 'Chris',
        photo     : 'http://www.seotoaster.com/media/team/small/chris.jpg',
        contact   : true,
        phone     : '(123) 456 7890',
        wish_list : [
            {
                id          : 22,
                title       : 'Beats by Dr. Dre Studio Wireless Headphones',
                description : "Dre Studio Wireless Headphones feature Bluetooth wireless technology and are capable of a range of operation of up to 30 feet. The headphones are powered by Beats Acoustic Engine DSP to reproduce your audio. Beats' Adaptive Noise Cancelling technology can be used to help eliminate noise from your commute whether you're listening to your music or not. On-ear cup controls allow you to answer calls skip tracks and adjust volume without reaching for your portable device. Not limited to wireless function the Studio Wireless headphones include a standard 3.5mm audio cable and a RemoteTalk cable with mic and remote allowing you to use the headphones with wired sources as well. The built-in rechargeable battery can provide up to 12 hours of wireless or 20 hours of wired operation. To preserve battery life the Auto On/Off feature will automatically turn the headphones off when you unplug them from a wired connection. The battery's remaining life is displayed via the Battery Fuel Gauge and it can be recharged with the included USB cable and adapter. A cleaning cloth and hard shell carrying case are included. 900-00107-01 SWHPB.",
                unit        : '$',
                price       : 228,
                donation    : 100,
                photo       : 'images/Beats by Dr. Dre Studio Wireless Headphones.jpeg',
                total       : (100 / 228 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 228 - 100
            },
            {
                id          : 23,
                title       : "Brooks PureFlow 3 Women's Running Shoes",
                description : "Brooks PureFlow 3 - Women's Running Shoes : Brite Pink/Black/Silver : The Brooks PureFlow 2 provides just the right amount of cushioning, and nothing more.",
                unit        : '$',
                price       : 80,
                donation    : 67,
                photo       : "images/Teal Suede Shoe.jpg",
                total       : (67 / 80 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 80 - 67
            },
            {
                id          : 24,
                title       : 'Brooks Adrenaline GTS 14',
                description : 'I bought these shoes in suede, and love the fit. I wish they were offered in a nude or skin toned. I love the nude leather sandals that are offered in the department stores. The color is sophisticated and because of the nude color it blends in with any frock. I love these shoes but would love them more in nude, get busy Flexus! I am waiting!',
                unit        : '$',
                price       : 100,
                donation    : 50,
                photo       : 'images/Brooks Adrenaline GTS 14.jpg',
                total       : (50 / 100 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 100 - 50
            },
            {
                id          : 25,
                title       : 'Ted Baker Comptan',
                description : 'These teal suede shoes are perfect for casual outings. The feature classic lace up fastening with coordinating laces, decorative stitch detailing and a contrast brown rubber sole.',
                unit        : '$',
                price       : 280,
                donation    : 100,
                photo       : 'images/Ted Baker Comptan.jpg',
                total       : (100 / 200 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 280 - 100
            }
        ]
    },
    {
        id        : 4,
        name      : 'Anna',
        photo     : 'http://www.seotoaster.com/media/team/small/anna.jpg',
        contact   : true,
        phone     : '(123) 456 7890',
        wish_list : [
            {
                id          : 26,
                title       : 'Teal Suede Shoe',
                description : 'These teal suede shoes are perfect for casual outings. The feature classic lace up fastening with coordinating laces, decorative stitch detailing and a contrast brown rubber sole.',
                unit        : '$',
                price       : 30,
                donation    : 10,
                photo       : 'images/Teal Suede Shoe.jpg',
                total       : (10 / 30 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 30 - 10
            },
            {
                id          : 27,
                title       : "Tissot Quickster Men's Quartz Blue Dial Watch with Blue Leather Strap",
                description : "Cal. 3135 automatic movement, 31 jewels, green dial, applied white luminous baton, dot and dagger numerals, sapphire crystal, round screw back case, steel and white luminous mercedes hands, uni-directional green ceramic bezel, magnified aperture for date at 3 o’clock, screw down crown, stainless steel Rolex Oyster bracelet with Rolex Oysterlock clasp, case, dial and movement signed 40mm diam.",
                unit        : '$',
                price       : 700,
                donation    : 100,
                photo       : "images/MICHAEL KORS LADIES' PARKER CHRONOGRAPH WATCH.jpg",
                total       : (100 / 700 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 700 - 100
            },
            {
                id             : 28,
                title          : "Tissot Quickster Men's Quartz Chronograph Black Dial Watch",
                description    : 'The Quickster is a new family of Tissot watches and is the watch of choice for sports fans. With a black leather strap topped with scratch-resistant sapphire crystal and a quartz movement Swiss made it guarantees perfect reliability. The design is timeless and the piece whilst sporty and elegant.',
                unit           : '$',
                price          : 495,
                donation       : 134,
                donation_class : 'error-bg',
                photo          : "images/Tissot Quickster Men's Quartz Chronograph Black Dial Watch.jpg",
                total          : (134 / 495 * 100).toFixed(1) + '%',
                peoples        : 234,
                balance        : 495 - 134
            },
            {
                id          : 24,
                title       : 'Brooks Adrenaline GTS 14',
                description : 'I bought these shoes in suede, and love the fit. I wish they were offered in a nude or skin toned. I love the nude leather sandals that are offered in the department stores. The color is sophisticated and because of the nude color it blends in with any frock. I love these shoes but would love them more in nude, get busy Flexus! I am waiting!',
                unit        : '$',
                price       : 100,
                donation    : 50,
                photo       : 'images/Brooks Adrenaline GTS 14.jpg',
                total       : (50 / 100 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 100 - 50
            },
            {
                id          : 25,
                title       : 'Ted Baker Comptan',
                description : 'These teal suede shoes are perfect for casual outings. The feature classic lace up fastening with coordinating laces, decorative stitch detailing and a contrast brown rubber sole.',
                unit        : '$',
                price       : 280,
                donation    : 100,
                photo       : 'images/Ted Baker Comptan.jpg',
                total       : (100 / 280 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 280 - 100
            }
        ]
    },
    {
        id      : 5,
        name    : 'Eugene',
        photo   : 'http://www.seotoaster.com/media/team/small/eugene.jpg',
        contact : false,
        phone   : '(123) 456 7890'
    },
    {
        id        : 6,
        name      : 'Pavel',
        photo     : 'http://www.seotoaster.com/media/team/small/pavel-k.jpg',
        contact   : true,
        phone     : '(123) 456 7890',
        wish_list : [
            {
                id          : 26,
                title       : 'Teal Suede Shoe',
                description : 'These teal suede shoes are perfect for casual outings. The feature classic lace up fastening with coordinating laces, decorative stitch detailing and a contrast brown rubber sole.',
                unit        : '$',
                price       : 30,
                donation    : 10,
                photo       : 'images/Teal Suede Shoe.jpg',
                total       : (10 / 30 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 30 - 10
            },
            {
                id          : 27,
                title       : "Tissot Quickster Men's Quartz Blue Dial Watch with Blue Leather Strap",
                description : "Cal. 3135 automatic movement, 31 jewels, green dial, applied white luminous baton, dot and dagger numerals, sapphire crystal, round screw back case, steel and white luminous mercedes hands, uni-directional green ceramic bezel, magnified aperture for date at 3 o’clock, screw down crown, stainless steel Rolex Oyster bracelet with Rolex Oysterlock clasp, case, dial and movement signed 40mm diam.",
                unit        : '$',
                price       : 700,
                donation    : 100,
                photo       : "images/MICHAEL KORS LADIES' PARKER CHRONOGRAPH WATCH.jpg",
                total       : (100 / 700 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 700 - 100
            },
            {
                id             : 28,
                title          : "Tissot Quickster Men's Quartz Chronograph Black Dial Watch",
                description    : 'The Quickster is a new family of Tissot watches and is the watch of choice for sports fans. With a black leather strap topped with scratch-resistant sapphire crystal and a quartz movement Swiss made it guarantees perfect reliability. The design is timeless and the piece whilst sporty and elegant.',
                unit           : '$',
                price          : 495,
                donation       : 134,
                donation_class : 'error-bg',
                photo          : "images/Tissot Quickster Men's Quartz Chronograph Black Dial Watch.jpg",
                total          : (134 / 495 * 100).toFixed(1) + '%',
                peoples        : 234,
                balance        : 495 - 134
            },
            {
                id          : 24,
                title       : 'Brooks Adrenaline GTS 14',
                description : 'I bought these shoes in suede, and love the fit. I wish they were offered in a nude or skin toned. I love the nude leather sandals that are offered in the department stores. The color is sophisticated and because of the nude color it blends in with any frock. I love these shoes but would love them more in nude, get busy Flexus! I am waiting!',
                unit        : '$',
                price       : 100,
                donation    : 50,
                photo       : 'images/Brooks Adrenaline GTS 14.jpg',
                total       : (50 / 100 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 100 - 50
            },
            {
                id          : 25,
                title       : 'Ted Baker Comptan',
                description : 'These teal suede shoes are perfect for casual outings. The feature classic lace up fastening with coordinating laces, decorative stitch detailing and a contrast brown rubber sole.',
                unit        : '$',
                price       : 280,
                donation    : 100,
                photo       : 'images/Ted Baker Comptan.jpg',
                total       : (100 / 280 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 280 - 100
            }
        ]
    },
    {
        id      : 7,
        name    : 'Dasha',
        photo   : 'http://www.seotoaster.com/media/team/small/dasha.jpg',
        contact : false,
        phone   : '(123) 456 7890'
    },
    {
        id      : 8,
        name    : 'Anastacia',
        photo   : 'http://www.seotoaster.com/media/team/small/anastacia.jpg',
        contact : false,
        phone   : '(123) 456 7890'
    }
];

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