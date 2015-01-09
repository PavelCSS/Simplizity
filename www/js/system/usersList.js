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
                title       : 'Modern design watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 2500,
                donation    : 1500,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (1500 / 2500 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 2500 - 1500
            },
            {
                id          : 21,
                title       : 'Watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 200,
                donation    : 100,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (100 / 200 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 200 - 100
            }
        ]
    },
    {
        id      : 2,
        name    : 'David Culot',
        photo   : 'http://www.seotoaster.com/media/team/small/david.jpg',
        contact : false,
        phone   : '(123) 456 7890'
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
                title       : 'Modern design watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 2500,
                donation    : 1500,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (1500 / 2500 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 2500 - 1500
            },
            {
                id          : 23,
                title       : 'Watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 200,
                donation    : 100,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (100 / 200 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 200 - 100
            },
            {
                id          : 24,
                title       : 'Modern design watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 2500,
                donation    : 1500,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (1500 / 2500 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 2500 - 1500
            },
            {
                id          : 25,
                title       : 'Watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 200,
                donation    : 100,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (100 / 200 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 200 - 100
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
                title       : 'Modern design watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 2500,
                donation    : 1500,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (1500 / 2500 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 2500 - 1500
            },
            {
                id          : 27,
                title       : 'Watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 200,
                donation    : 100,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (100 / 200 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 200 - 100
            },
            {
                id             : 28,
                title          : 'Modern design watch',
                description    : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit           : '$',
                price          : 500,
                donation       : 134,
                donation_class : 'error-bg',
                photo          : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total          : (134 / 500 * 100).toFixed(1) + '%',
                peoples        : 234,
                balance        : 500 - 134
            },
            {
                id          : 29,
                title       : 'Watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 200,
                donation    : 187,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (187 / 200 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 200 - 187
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
                id          : 22,
                title       : 'Modern design watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 2500,
                donation    : 1500,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (1500 / 2500 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 2500 - 1500
            },
            {
                id          : 23,
                title       : 'Watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 200,
                donation    : 100,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (100 / 200 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 200 - 100
            },
            {
                id          : 24,
                title       : 'Modern design watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 2500,
                donation    : 1500,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (1500 / 2500 * 100).toFixed(1) + '%',
                peoples     : 23,
                balance     : 2500 - 1500
            },
            {
                id          : 25,
                title       : 'Watch',
                description : 'Hey, Luke! May the Force be with you. Hey, Luke! May the Force be with you.',
                unit        : '$',
                price       : 200,
                donation    : 100,
                photo       : 'http://pixabay.com/static/uploads/photo/2013/09/18/22/03/moscow-183661_150.jpg',
                total       : (100 / 200 * 100).toFixed(1) + '%',
                peoples     : 9,
                balance     : 200 - 100
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
]