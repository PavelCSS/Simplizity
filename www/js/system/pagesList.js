var pagesList = {
    'login'      : function(){
        parseTemplate('_login.htm', {page_name : 'login'}, false)
    },
    'home'       : function(){
        parseTemplate('_home.htm', {
            page_name  : 'home',
            page_title : 'User Name'
        }, false)
    },
    'profile'    : function(profile){
        if(typeof profile === 'undefined'){
            profile = {
                page_name  : 'profile',
                page_title : 'Profile',
                user_name  : 'David Culot',
                user_photo : 'https://www.seotoaster.com/media/team/small/david.jpg'
            }
        }
        parseTemplate('_profile.htm', profile, false)
    },
    'send-money' : function(){
        parseTemplate('_send-money.htm', {
            page_name  : 'send-money',
            page_title : 'Send money'
        }, false)
    },
    'quick-pick' : function(){
        parseTemplate('_quick-pick.htm', {
            page_name  : 'quick-pick',
            page_title : 'Take photo'
        }, false)
    },
    'news'       : function(){
        parseTemplate('_news.htm', {
            page_name  : 'news',
            page_title : 'News'
        }, false)
    }
}