var app_name = 'Simpliziti';
var pagesList = {
    'login'       : function(){
        parseTemplate('_login.htm', {
            pageName  : 'login',
            pageTitle : app_name
        }, false)
    },
    'home'        : function(){
        parseTemplate('_home.htm', {
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
            parseTemplate('_profile.htm', profile, {
                wishListing : readTextFileReturn('_wish-list_.htm')
            }, false, function(html){
                $('main').replaceWith(html);
                //                eventsList.wish.swipe();
            });
            return false;
        }
        parseTemplate('_profile.htm', profile, {
            wishListing : readTextFileReturn('_wish-list_.htm')
        })
    },
    'sendMoney'   : function(){
        parseTemplate('_send-money.htm', {
            pageName  : 'send-money',
            pageTitle : 'Send money',
            users     : users
        })
    },
    'newRequests' : function(){
        parseTemplate('_new-requests.htm', {
            pageName     : 'new-requests',
            pageTitle    : 'New requests',
            usersRequest : usersRequest
        })
    },
    'addWish'     : function(url){
        var urlData = getJsonFromHashUrl();
        var wishItem = getUser(urlData.userId, urlData.wishId);
        if(typeof wishItem !== 'undefined'){
            parseTemplate('_add-wish.htm', {
                edit        : true,
                pageName    : 'edit-wish',
                pageTitle   : 'Edit wish',
                id          : wishItem.wish.id,
                photo       : wishItem.wish.photo,
                title       : wishItem.wish.title,
                price       : wishItem.wish.price,
                description : wishItem.wish.description,
                private     : wishItem.wish.private
            })
        }else{
            parseTemplate('_add-wish.htm', {
                pageName  : 'add-wish',
                pageTitle : 'Add wish',
                photo     : url || ''
            })
        }
    },
    'myDonation'  : function(){
        parseTemplate('_my-contribute.htm', {
            pageName  : 'my-contribute',
            pageTitle : 'My contribute',
            donations : donationsDavid
        })
    }
}