var app_name = 'Simpliziti';
var pagesList = {
    'login'        : function(){
        parseTemplate('_login.tmpl', {
            pageName  : 'login',
            pageTitle : app_name
        }, false)
    },
    'home'         : function(){
        parseTemplate('_home.tmpl', {
            pageName      : 'home',
            pageTitle     : app_name,
            user          : dinoProfile,
            usersSent     : usersSent,
            usersRequest  : usersRequest,
            usersBirthday : usersBirthday,
            trendList : [wishList[10], wishList[5], wishList[3]]
        }, false);
    },
    'profile'      : function(profile){
        if(typeof profile === 'undefined'){
            profile = {
                user      : true,
                pageName  : 'profile',
                pageTitle : 'Profile',
                userData  : dinoProfile
            };
            parseTemplate('_profile.tmpl', profile, {
                wishListing : readTextFileReturn('_wish-list_.tmpl')
            }, false, function(html){
                $('main').replaceWith(html);
                eventsList.wish.swipe();
            });
            return false;
        }
        parseTemplate('_profile.tmpl', profile, {
            wishListing : readTextFileReturn('_wish-list_.tmpl')
        });
    },
    'trendingPage'      : function(profile){
        parseTemplate('_trending-page.tmpl', {
            pageName  : 'trending-page',
            pageTitle : 'Trending page',
            trendList : [wishList[10], wishList[5], wishList[3]]
        });
    },
    'sendMoney'    : function(){
//        var newUserList = users.sort(function(a, b){
//            if(a.name > b.name){
//                return 1;
//            }
//            if(a.name < b.name){
//                return -1;
//            }
//            return 0;
//        });
        parseTemplate('_send-money.tmpl', {
            pageName  : 'send-money',
            pageTitle : 'Contribute',
            users     : users
        });
    },
    'userList'    : function(){
        parseTemplate('_user-list.tmpl', {
            pageName  : 'user-list',
            pageTitle : 'Contact list',
            users     : users
        });
    },
    'newRequests'  : function(){
        parseTemplate('_new-requests.tmpl', {
            pageName     : 'new-requests',
            pageTitle    : 'New Requests',
            usersRequest : usersRequest
        });
    },
    'addWish'      : function(url){
        var urlData = getJsonFromHashUrl();
        var wishItem = getUser(urlData.userId, urlData.wishId).wish || getWish(urlData.wishId);
        if(typeof wishItem !== 'undefined' && wishItem){
            parseTemplate('_add-wish.tmpl', {
                edit        : urlData.userId ? true : false,
                pageName    : 'edit-wish',
                pageTitle   : 'Edit Wish',
                id          : wishItem.id,
                photo       : wishItem.photo,
                title       : wishItem.title,
                price       : wishItem.price,
                description : urlData.userId ? wishItem.description : '',
                private     : urlData.userId ? wishItem.private : ''
            });
        }else{
            parseTemplate('_add-wish.tmpl', {
                pageName  : 'add-wish',
                pageTitle : 'Add Wish',
                photo     : url || ''
            });
        }
    },
    'myDonation'   : function(){
        parseTemplate('_my-contribute.tmpl', {
            pageName  : 'my-contribute',
            pageTitle : 'My contribute',
            donations : donationsDino
        })
    },
    'donationMe'   : function(){
        var urlData = getJsonFromHashUrl();
        var user = getUser(urlData.userId).user;
        parseTemplate('_contribute-me.tmpl', user)
    },
    'donationList' : function(){
        parseTemplate('_contribute-list.tmpl', {
            users : usersSent
        })
    },
    'settings'     : function(){
        parseTemplate('_settings.tmpl', {
            pageName  : 'settings',
            pageTitle : 'My account',
            userData  : dinoProfile
        })
    },
    'comment'      : function(){
        parseTemplate('_comment.tmpl', {
            pageName  : 'comment',
            pageTitle : 'Comment'
        })
    },
    'register'     : function(){
        parseTemplate('_register.tmpl', {
            pageName  : 'register',
            pageTitle : 'Register'
        })
    }
}