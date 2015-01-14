document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('pause', onDevicePause, false);
//window.addEventListener('load', onDeviceReady, false);
window.addEventListener('hashchange', openPage, false);
document.addEventListener('backbutton', goBack, false);

function onDeviceReady(){
    StatusBar.hide();
    $('html').addClass(device.platform.toLowerCase());
    //    FastClick.attach(document.body);
    navigator.splashscreen.hide();
    openPage();
    window.plugin.notification.local.registerPermission();
}

function onDevicePause(){
}

var current_user = {};
$('body')
    .on('tap', '.user-item, .profile', function(){
        event.originalEvent.preventDefault();
        var userId = $(this).data('user-id');
        window.location.hash = 'user-' + userId;
        return false;
    })
    .on('tap', '.wish-item, .wish', function(){
        var userId = $(this).data('user-id');
        var wishId = $(this).data('wish-id');
        current_user = getUser(userId, wishId);
        window.location.hash = 'wish-' + current_user.wish.id;
    })
    .on('tap', '#donate-btn', function(e){
        e.originalEvent.preventDefault();
        e.originalEvent.stopPropagation();
        window.location.hash = 'contribute-' + current_user.wish.id;
        parseTemplate('_contribute.htm', {
            user : current_user.user,
            wish : current_user.wish
        }, false);
    })
    .on('tap', '.back-btn', goBack)
    .on('tap', '#quick-pick', function(){
        addPhoto(1, 1, function(url){
//            var img = document.createElement('img');
//            img.src = url;
//            document.getElementById('wish-preview').appendChild(img);
            pagesList.add_wish(url);
        }, function(){
            window.location.hash = 'home';
        });
    })
    .on('tap', '#wish-preview', function(){
        addPhoto(1, 1, function(url){
            var img = document.createElement('img');
            img.src = url;
            document.getElementById('wish-preview').appendChild(img);
            $('#new-wish').find('#wishPhoto').val(url);
        }, function(){
            hideLoading();
        });
    })
    .on('submit', '#donate-form', function(){
        event.preventDefault();
        var donate = parseInt($(this).find('.dial').val().replace('$', ''));
        var newDonate = current_user.wish.donation + donate;
        users[current_user.userIndex].wish_list[current_user.wishIndex].donation = newDonate;
        users[current_user.userIndex].wish_list[current_user.wishIndex].total = (newDonate / current_user.wish.price * 100).toFixed(1) + '%';
        users[current_user.userIndex].wish_list[current_user.wishIndex].balance = current_user.wish.price - newDonate;
        parseTemplate('_contribute.htm', {
            user   : current_user.user,
            wish   : current_user.wish,
            donate : donate
        }, false);

        window.plugin.notification.local.add({
            title   : 'User name',
            message : $(this).find('#message').val()
        });
    })
    .on('submit', '#new-wish', function(){
        event.preventDefault();
        var newWishList = typeof localStorage.wishList !== 'undefined' ? JSON.parse(localStorage.wishList) : wishDavid;
        newWishList.push({
            id          : Math.floor((Math.random() * 100) + 1),
            title       : $(this).find('#wishTitle').val(),
            description : $(this).find('#wishDescription').val(),
            unit        : '$',
            price       : $(this).find('#wishPrice').val(),
            donation    : 0,
            photo       : $(this).find('#wishPhoto').val(),
            total       : '0%',
            peoples     : 0,
            balance     : $(this).find('#wishPrice').val()
        });
        users[1].wish_list = newWishList;
        localStorage.wishList = JSON.stringify(newWishList);
        window.location.hash = 'profile';
    });

function getUser(userId, wishId){
    var userCurrent = {}
    wishId = typeof wishId === 'undefined' ? false : wishId;
    for(i = 0; i < users.length; i++){
        if(users[i].id == userId){
            if(wishId){
                for(j = 0; j < users[i].wish_list.length; j++){
                    if(users[i].wish_list[j].id == wishId){
                        userCurrent['user'] = users[i];
                        userCurrent['wish'] = users[i].wish_list[j];
                        userCurrent['userIndex'] = i;
                        userCurrent['wishIndex'] = j;
                        return userCurrent;
                    }
                }
            }else{
                userCurrent['user'] = users[i];
                userCurrent['userIndex'] = i;
                return userCurrent;
            }
        }
    }
}

function goBack(){
    var pageName = window.location.hash.replace('#', '');
    if(pageName !== 'home'){
        window.history.back();
    }
}

function openPage(){
    //    event.preventDefault();
    var pageName = window.location.hash.replace('#', '');

    if(pageName.indexOf("user-") !== -1){
        pagesList['profile']({
            user       : false,
            page_name  : 'user-' + pageName.replace('user-', ''),
            page_title : 'Profile',
            userData   : getUser(pageName.replace('user-', '')*1).user
        });
        current_user = getUser(pageName.replace('user-', '')*1);
        return false;
    }
    if(pageName.indexOf("wish-") !== -1){
        parseTemplate('_wish-item.htm', current_user.wish, false);
        return false;
    }

    pageName = (!pageName && (localStorage.getItem("login") === 'true')) ? 'home' : pageName;

    if(pageName === 'login'){
        localStorage.removeItem('pageList');
        localStorage.removeItem("login");
    }

    var pages = localStorage.getItem('pageList');
    pages = pages ? JSON.parse(pages) : false;

    if(pageName && (typeof pages[pageName] !== 'undefined')){
        goPage(pageName);
        return true;
    }else if(localStorage.getItem("login") !== 'true'){
        pageName = 'login';
    }else if(typeof pagesList[pageName] === 'undefined'){
        return false;
    }

    pagesList[pageName]();
}

function showLoading(){
    $('html').addClass('loading');
}

function hideLoading(){
    $('html').removeClass('loading');
}

function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
}