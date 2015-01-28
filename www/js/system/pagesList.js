var app_name = 'Simpliziti';
var pagesList = {
    'login'       : function(){
        parseTemplate('_login.tmpl', {
            pageName  : 'login',
            pageTitle : app_name
        }, false)
    },
    'home'        : function(){
        parseTemplate('_home.tmpl', {
            pageName      : 'home',
            pageTitle     : app_name,
            user          : dinoProfile,
            usersSent     : usersSent,
            usersRequest  : usersRequest,
            usersBirthday : usersBirthday
        }, false);
    },
    'profile'     : function(profile){
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
                //                eventsList.wish.swipe();
            });
            return false;
        }
        parseTemplate('_profile.tmpl', profile, {
            wishListing : readTextFileReturn('_wish-list_.tmpl')
        })
    },
    'sendMoney'   : function(){
        parseTemplate('_send-money.tmpl', {
            pageName  : 'send-money',
            pageTitle : 'Contribute',
            users     : users
        })
    },
    'newRequests' : function(){
        parseTemplate('_new-requests.tmpl', {
            pageName     : 'new-requests',
            pageTitle    : 'New requests',
            usersRequest : usersRequest
        })
    },
    'addWish'     : function(url){
        var urlData = getJsonFromHashUrl();
        var wishItem = getUser(urlData.userId, urlData.wishId);
        if(typeof wishItem !== 'undefined' && wishItem){
            parseTemplate('_add-wish.tmpl', {
                edit        : true,
                pageName    : 'edit-wish',
                pageTitle   : 'Edit item',
                id          : wishItem.wish.id,
                photo       : wishItem.wish.photo,
                title       : wishItem.wish.title,
                price       : wishItem.wish.price,
                description : wishItem.wish.description,
                private     : wishItem.wish.private
            })
        }else{
            parseTemplate('_add-wish.tmpl', {
                pageName  : 'add-wish',
                pageTitle : 'Add item',
                photo     : url || ''
            })
        }
    },
    'myDonation'  : function(){
        parseTemplate('_my-contribute.tmpl', {
            pageName  : 'my-contribute',
            pageTitle : 'My contribute',
            donations : donationsDino
        })
    },
    'donationMe'  : function(){
        var urlData = getJsonFromHashUrl();
        var user = getUser(urlData.userId).user;
        parseTemplate('_contribute-me.tmpl', user)
    },
    'donationList'  : function(){
        parseTemplate('_contribute-list.tmpl', {
            users : usersSent
        })
    },
    'settings'  : function(){
        parseTemplate('_settings.tmpl', profile = {
            pageName  : 'settings',
            pageTitle : 'My account',
            userData  : dinoProfile
        })
    }
}