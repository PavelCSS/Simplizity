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

$(document)
    .on('singleTap', '.user-list .user-item', function(){
        var userId = $(this).data('user-id');
        window.location.hash = 'user-' + userId;
        pagesList['profile']({
            users      : false,
            page_name  : 'user-' + userId,
            page_title : 'Profile',
            user_name  : $(this).data('user-name'),
            user_photo : $(this).find('img').attr('src')
        });
    })
    .on('singleTap', '.back-btn', goBack)
    .on('singleTap', '#quick-pick', function(){
        addPhoto(0, 1, function(url){
            pagesList.quickPick(url);
        });
    });

function goBack(){
    var pageName = window.location.hash.replace('#', '');
    if(pageName !== 'home'){
        window.history.back();
    }
}

function openPage(){
    //    event.preventDefault();
    switchMenu = false;
    var pageName = window.location.hash.replace('#', '');

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
