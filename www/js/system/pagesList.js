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
            user          : users[0],
            usersSent     : usersSent,
            usersBirthday : usersBirthday
        }, false);
    },
    'profile'     : function(profile){
        if(typeof profile === 'undefined'){
            profile = {
                user      : true,
                pageName  : 'profile',
                pageTitle : 'Profile',
                userData  : users[0]
            };
            parseTemplate('_profile.htm', profile, false, function(html){
                $('main').replaceWith(html);
                eventsList.wish.swipe();
            });
            return false;
        }
        parseTemplate('_profile.htm', profile, false)
    },
    'send-money'  : function(){
        parseTemplate('_send-money.htm', {
            pageName  : 'send-money',
            pageTitle : 'Send money',
            users     : users
        }, false)
    },
    'add_wish'    : function(url){
        parseTemplate('_add-wish.htm', {
            pageName  : 'Add wish',
            pageTitle : 'Add wish',
            wishImage : url || ''
        }, false)
    },
    'my-donation' : function(){
        parseTemplate('_my-contribute.htm', {
            pageName  : 'my-contribute',
            pageTitle : 'My contribute',
            donations : donationsDavid
        }, false)
    }
}