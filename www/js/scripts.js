document.addEventListener('deviceready', onDeviceReady, false);
//window.addEventListener('load', onDeviceReady, false);
window.addEventListener('hashchange', openPage, false);
document.addEventListener('backbutton', goBack, false);

function onDeviceReady(){
    $('html').addClass(device.platform.toLowerCase());
    //    FastClick.attach(document.body);
    navigator.splashscreen.hide();
    openPage();
}
var current_user = {};
$(document)
    .on('singleTap', '.user-list .user-item', function(){
        var userIndex = $(this).index();
        current_user['userIndex'] = userIndex;
        current_user['userData'] = users[current_user['userIndex']];
        goUserPage();
    })
    .on('singleTap', '.wish-list .wish-item', function(){
        current_user['wishIndex'] = $(this).index();
        current_user['currentWish'] = users[current_user['userIndex']].wish_list[current_user['wishIndex']];
        window.location.hash = 'wish-' + current_user.currentWish.id;
        parseTemplate('_wish-item.htm', current_user.currentWish, false);
    })
    .on('singleTap', '#donate-btn', function(){
        window.location.hash = 'contribute-' + current_user.currentWish.id;
        parseTemplate('_contribute.htm', {
            user : current_user.userData,
            wish : current_user.currentWish
        }, false)
    })
    .on('singleTap', '.back-btn', goBack)
    .on('singleTap', '#quick-pick', function(){
        addPhoto(0, 1, function(url){
            pagesList.add_wish(url);
        });
    })
    .on('singleTap', '#wish-preview', function(){
        addPhoto(0, 1, function(url){
            $('#wish-preview img').attr('src', url);
        });
    }).on('submit', '#donate-form', function(){
        event.preventDefault();
        var newDonation = current_user.currentWish.donation + parseInt($(this).find('.dial').val().replace('$', ''));
        users[current_user['userIndex']].wish_list[current_user['wishIndex']].donation = newDonation;
        users[current_user['userIndex']].wish_list[current_user['wishIndex']].total = (newDonation / current_user.currentWish.price * 100).toFixed(1) + '%';
        users[current_user['userIndex']].wish_list[current_user['wishIndex']].balance = current_user.currentWish.price - newDonation;
        goBack();
    });

function goUserPage(){
    window.location.hash = 'user-' + current_user.userData.id;
    pagesList['profile']({
        user       : false,
        page_name  : 'user-' + current_user.userData.id,
        page_title : 'Profile',
        userData   : current_user.userData
    });
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
        goUserPage();
        return false;
    }else if(pageName.indexOf("wish-") !== -1){
        parseTemplate('_wish-item.htm', current_user.currentWish, false);
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