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

    var fields       = ["*"];
    navigator.contacts.find(fields, onSuccess, onError);

    window.plugin.notification.local.registerPermission();


    // find all contacts with 'Bob' in any name field
//    var options      = new ContactFindOptions();
//    options.filter   = "Bob";
//    options.multiple = true;
//    options.desiredFields = [navigator.contacts.fieldType.id];
}

function onSuccess(contacts){
    users = [];
    for(i = 0; i < contacts.length; i++){
        var newUser = {
            id             : contacts[i].id,
            name           : contacts[i].name.formatted,
            photo          : contacts[i].photos ? contacts[i].photos[0].value : 'images/no_photo.jpg',
            invited        : Math.floor((Math.random() * 2)),
            wish_list_show : Math.floor((Math.random() * 2)),
            phone          : contacts[i].phoneNumbers ? contacts[i].phoneNumbers[0].value : '',
            wish_list      : randomWish()
        }
        users.push(newUser)
    }
}

function onError(contactError) {
    console.log('onError!' + contactError);
}

function onDevicePause(){
}

var fieldPos;
var current_user = {};
$('body')
    .on('tap', '.user-item, .profile', function(e){
        e.stopImmediatePropagation();
        event.preventDefault();
        var userId = $(this).data('user-id');
        window.location.hash = 'user?userId=' + userId;
        return false;
    })
    .on('tap', '.wish-item, .wish', function(e){
        e.stopImmediatePropagation();
        event.preventDefault();
        var userId = $(this).data('user-id');
        var wishId = $(this).data('wish-id');
        current_user = getUser(userId, wishId);
        window.location.hash = 'wish?userId=' + userId + '&wishId=' + current_user.wish.id;
    })
    .on('tap', '#wish-remove', function(e){
        e.stopImmediatePropagation();
        event.preventDefault();
        var urlData = getJsonFromHashUrl();
        var newWishList = typeof localStorage.wishList !== 'undefined' ? JSON.parse(localStorage.wishList) : wishDavid;
        newWishList.splice(getUser(urlData.userId, urlData.wishId).wishIndex, 1);
        users[1].wish_list = newWishList;
        localStorage.wishList = JSON.stringify(newWishList);
        window.location.hash = 'profile';
    })
    .on('tap', '.contact-list', function(e){
        e.stopImmediatePropagation();
        event.preventDefault();
        window.location.hash = 'send-money';
    })
    .on('tap', '.my-dotation', function(e){
        e.stopImmediatePropagation();
        event.preventDefault();
        window.location.hash = 'my-donation';
    })
    .on('tap', '#donate-btn', function(e){
        e.stopImmediatePropagation();
        event.preventDefault();
        window.location.hash = 'contribute';
        parseTemplate('_contribute.htm', current_user, false);
    })
    .on('tap', '.back-btn', goBack)
    .on('tap', '#quick-pick', function(){
        addPhoto(0, 1, function(url){
//            var img = document.createElement('img');
//            img.src = url;
//            document.getElementById('wish-preview').appendChild(img);
            pagesList.add_wish(url);
            window.location.hash = 'add_wish?openPage=false';
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
//        e.stopImmediatePropagation();
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
            title   : current_user.user.name + ' sent you money!',
            message : 'You received ($' + donate + ')',
            json    : {
                userId : current_user.user.id,
                wishId : current_user.wish.id
            }
        });
        window.plugin.notification.local.onclick = function (id, state, json) {
            window.location.hash = 'wish?userId=' + JSON.parse(json).userId + '&wishId=' + JSON.parse(json).wishId;
        };
    })
    .on('submit', '#new-wish', function(e){
        event.preventDefault();
        e.stopImmediatePropagation();
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
    })
    .on('focus', 'input, select, textarea', function(e){
        fieldPos = $(this).offset().top + $(this).height();
    })
    .on('tap', '#invite', function(e){
        users[current_user.userIndex].invited = true;
        window.location.hash = 'profile?userId=' + current_user.user.id;
        goBack();
    })
    .on('tap', '#ask-wish', function(e){
    });

$(window).on('resize', function(e){
    $('main').scrollTop(fieldPos);
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
                        current_user = userCurrent;
                        return userCurrent;
                    }
                }
            }else{
                userCurrent['user'] = users[i];
                userCurrent['userIndex'] = i;
                current_user = userCurrent;
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
    if(pageName.indexOf('?') !== -1){
        pageName = pageName.substr(0, pageName.indexOf('?') + 1).replace('?', '');
    }

    if(getJsonFromHashUrl().openPage === 'false'){
        return false;
    }

    if(pageName === 'user'){
        var urlData = getJsonFromHashUrl();
        var user = getUser(urlData.userId).user;
        pagesList['profile']({
            user       : false,
            page_name  : 'user-' + user.id,
            page_title : 'Profile',
            userData   : user,
            show_block : function(){
                if(this.userData.invited && this.userData.wish_list_show){
                    return true;
                }else{
                    return false
                }
            }
        });
        return false;
    }
    if(pageName === 'wish'){
        var urlData = getJsonFromHashUrl();
        var wish = getUser(urlData.userId, urlData.wishId).wish;
        parseTemplate('_wish-item.htm', {
            wish : wish,
            user : (urlData.userId === profile.id) ? true : false
        }, false);
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

//function getJsonFromUrl() {
//    var query = location.search.substr(1);
//    var result = {};
//    query.split("&").forEach(function(part) {
//        var item = part.split("=");
//        result[item[0]] = decodeURIComponent(item[1]);
//    });
//    return result;
//}
function getJsonFromHashUrl() {
    var hash = window.location.hash;
    var query = hash.substr(hash.indexOf('?') + 1);
    var result = {};
    query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
}