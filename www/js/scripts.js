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

//    var fields       = ["*"];
//    navigator.contacts.find(fields, onSuccessContact, onErrorContact);

    window.plugin.notification.local.hasPermission(function (granted) {
        if(!granted){
            window.plugin.notification.local.registerPermission();
        }
    });
}

function onSuccessContact(contacts){
    users = [profile];
    for(i = 0; i < contacts.length; i++){
        if(contacts[i].phoneNumbers !== null){
            var newUser = {
                id             : contacts[i].id,
                name           : contacts[i].name.formatted,
                photo          : contacts[i].photos ? contacts[i].photos[0].value : 'images/no_photo.jpg',
                invited        : Math.floor((Math.random() * 2)),
                wishListShowm  : Math.floor((Math.random() * 2)),
                phone          : contacts[i].phoneNumbers[0].value,
                wishList       : randomWish()
            }
            users.push(newUser)
        }
    }
}

function onErrorContact(contactError) {
    console.log('onError!' + contactError);
}

function onDevicePause(){
}

var fieldPos,
    current_user = {};

$('body')
    .on('tap', '.wish', function(e){
        e.stopImmediatePropagation();
        var userId = $(this).data('user-id');
        var wishId = $(this).data('wish-id');
        current_user = getUser(userId, wishId);
        window.location.hash = 'wish?userId=' + userId + '&wishId=' + current_user.wish.id;
    })
    .on('tap', '.showList', function(e){
        e.stopImmediatePropagation();
        $(this).toggleClass('disabled')
    })
    .on('tap', '.user-item, .profile', function(e){
        e.stopImmediatePropagation();
        var userId = $(this).data('user-id');
        window.location.hash = 'user?userId=' + userId;
        return false;
    })
    .on('tap', '.wish-private', function(e){
        e.stopImmediatePropagation();
        var $parentLi = $(this).closest('.wish-item').length ? $(this).closest('.wish-item') : $(this).parent();
        $parentLi.find('.wish-private').toggle();
        var urlData = getJsonFromHashUrl();
        var newWishList = wishDino;
//        var newWishList = typeof localStorage.wishList !== 'undefined' ? JSON.parse(localStorage.wishList) : wishDino;
        var newWishIndex = urlData.wishId ? getUser(urlData.userId, urlData.wishId).wishIndex : getUser($parentLi.data('user-id'), $parentLi.data('wish-id')).wishIndex;
        newWishList[newWishIndex].private = !newWishList[newWishIndex].private;
        dinoProfile.wishList = newWishList;
//        localStorage.wishList = JSON.stringify(newWishList);
        return false;
    })
    .on('tap', '#wish-remove', function(e){
        e.stopImmediatePropagation();
        var urlData = getJsonFromHashUrl();
        var newWishList = wishDino;
//        var newWishList = typeof localStorage.wishList !== 'undefined' ? JSON.parse(localStorage.wishList) : wishDino;
        newWishList.splice(getUser(urlData.userId, urlData.wishId).wishIndex, 1);
        dinoProfile.wishList = newWishList;
//        localStorage.wishList = JSON.stringify(newWishList);
        goBack();
    })
    .on('tap', '.wish-remove', function(e){
        var $parentLi = $(this).closest('.wish-item');
        $parentLi.remove();
        var newWishList = wishDino;
//        var newWishList = typeof localStorage.wishList !== 'undefined' ? JSON.parse(localStorage.wishList) : wishDino;
        newWishList.splice(getUser($parentLi.data('user-id'), $parentLi.data('wish-id')).wishIndex, 1);
        dinoProfile.wishList = newWishList;
//        localStorage.wishList = JSON.stringify(newWishList);
    })
    .on('tap', '.contact-list', function(e){
        e.stopImmediatePropagation();
        window.location.hash = 'sendMoney';
    })
    .on('tap', '.my-dotation', function(e){
        e.stopImmediatePropagation();
        window.location.hash = 'myDonation';
    })
    .on('tap', '.dotation-me', function(e){
        e.stopImmediatePropagation();
        var userId = $(this).data('user-id');
        window.location.hash = 'donationMe?userId=' + userId;
    })
    .on('tap', '#dotation-list', function(e){
        e.stopImmediatePropagation();
        window.location.hash = 'donationList';
    })
    .on('tap', '.newRequests', function(e){
        e.stopImmediatePropagation();
        window.location.hash = 'newRequests';
    })
    .on('tap', '#donate-btn', function(e){
//        e.stopImmediatePropagation();
        window.location.hash = 'contribute';
        parseTemplate('_contribute.tmpl', current_user);
    })
    .on('tap', '.back-btn', goBack)
    .on('tap', '#quick-pick', function(e){
        addPhoto(1, 1, function(url){
            pagesList.addWish(url);
            window.location.hash = 'addWish?openPage=false';
        }, function(){
            window.location.hash = 'home';
        });
    })
    .on('tap', '#wish-preview', function(e){
        addPhoto(1, 1, function(url){
            var img = document.createElement('img');
            img.src = url;
            document.getElementById('wish-preview').appendChild(img);
            $('#new-wish').find('#wishPhoto').val(url);
        }, function(){
            hideLoading();
        });
    })
    .on('submit', '#donate-form', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        var donate = parseInt($(this).find('.dial').val().replace('$', ''));
        var newDonate = current_user.wish.donation + donate;
        users[current_user.userIndex].wishList[current_user.wishIndex].donation = newDonate;
        users[current_user.userIndex].wishList[current_user.wishIndex].total = (newDonate / current_user.wish.price * 100).toFixed(0) + '%';
        users[current_user.userIndex].wishList[current_user.wishIndex].balance = current_user.wish.price - newDonate;
        parseTemplate('_contribute.tmpl', {
            user   : current_user.user,
            wish   : current_user.wish,
            donate : donate
        });

        window.plugin.notification.local.add({
            autoCancel : true,
            id         : current_user.user.id,
            title      : 'You sent you money!',
            message    : 'You sent $' + donate + ' to ' + current_user.user.name,
            json       : JSON.stringify({
                userId : current_user.user.id,
                wishId : current_user.wish.id
            })
        });
        window.plugin.notification.local.onclick = function (id, state, json) {
            window.plugin.notification.local.cancel(id);
            window.location.hash = 'wish?userId=' + JSON.parse(json).userId + '&wishId=' + JSON.parse(json).wishId;
        };
    })
    .on('tap', '#new-wish button', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        var newWishList = wishDino;
//        var newWishList = typeof localStorage.wishList !== 'undefined' ? JSON.parse(localStorage.wishList) : wishDino;
        newWishList.push({
            id          : Math.floor((Math.random() * 100) + 1),
            title       : $(this).parent('form').find('#wishTitle').val(),
            description : $(this).parent('form').find('#wishDescription').val(),
            unit        : '$',
            price       : $(this).parent('form').find('#wishPrice').val(),
            donation    : 0,
            photo       : $(this).parent('form').find('#wishPhoto').val(),
            total       : '0%',
            peoples     : 0,
            balance     : $(this).parent('form').find('#wishPrice').val(),
            private     : $(e.target).attr('id') === 'private' ? 1 : 0
        });
        dinoProfile.wishList = newWishList;
//        localStorage.wishList = JSON.stringify(newWishList);
        window.location.hash = 'profile';
    })
    .on('submit', '#edit-wish', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        var newWishList = wishDino;
//        var newWishList = typeof localStorage.wishList !== 'undefined' ? JSON.parse(localStorage.wishList) : wishDino;
        var urlData = getJsonFromHashUrl();
        var newWishIndex = getUser(urlData.userId, urlData.wishId).wishIndex;
        newWishList[newWishIndex].title = $(this).find('#wishTitle').val();
        newWishList[newWishIndex].description = $(this).find('#wishDescription').val();
        newWishList[newWishIndex].price = $(this).find('#wishPrice').val();
        newWishList[newWishIndex].photo = $(this).find('#wishPhoto').val();
        newWishList[newWishIndex].total = (newWishList[newWishIndex].donation / newWishList[newWishIndex].price * 100).toFixed(1) + '%';
        newWishList[newWishIndex].balance = newWishList[newWishIndex].price - newWishList[newWishIndex].total;
        dinoProfile.wishList = newWishList;
//        localStorage.wishList = JSON.stringify(newWishList);
        goBack();
    })
    .on('submit', '#login-forms', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        var login = $(this).find('#login').val();
        var password = $(this).find('#password').val();
        if(!(login === "Dinoaccount1") && !(password === "dinoaccount1")){
            $(this).find('input').addClass('error');
            navigator.notification.alert("Invalid Login or Password");
            return false;
        }
        localStorage.setItem('login', true);
        window.location.replace("#home");
    })
    .on('focus', 'input, select, textarea', function(e){
        fieldPos = $(this).offset().top + $(this).height();
    })
    .on('tap', '#invite', function(e){
        users[current_user.userIndex].invited = true;
        window.location.hash = 'user?userId=' + current_user.user.id + 'invite=true';
        window.plugin.notification.local.add({
            autoCancel : true,
            id         : current_user.user.id,
            title      : 'You invited somebody!',
            message    : 'You invited ' + current_user.user.name + ' to join Simpliziti'
        });
        goBack();
    })
    .on('tap', '#ask-wish', function(e){
        users[current_user.userIndex].wishListShow = true;
        window.location.hash = 'user?userId=' + current_user.user.id + '&showList=true';
        window.plugin.notification.local.add({
            autoCancel : true,
            id         : current_user.user.id,
            title      : 'You sent a request!',
            message    : 'You just sent a request to see ' + current_user.user.name + '\'s list asks to share your simlist',
            json       : JSON.stringify({
                userId : current_user.user.id
            })
        });
        window.plugin.notification.local.onclick = function (id, state, json) {
            window.plugin.notification.local.cancel(id);
            window.location.hash = 'user?userId=' + JSON.parse(json).userId;
        };
        goBack();
    })
    .on('tap', '#donated', function(e){
        window.location.replace("#home");
//        window.location.hash = 'home';
    })
    .on('tap', '.message', function(e){
        window.location.hash = 'comment';
    })
    .on('tap', '#send-message', function(e){
        var message = $(this).parent().find('textarea').val();
        window.plugin.notification.local.add({
            autoCancel : true,
            id         : 'message',
            title      : 'You sent a messsage!',
            message    : message
        });
        window.plugin.notification.local.onclick = function (id, state, json) {
            window.plugin.notification.local.cancel(id);
            window.location.hash = 'comment';
        };
    });

$(window).on('resize', function(e){
    $('main').scrollTop(fieldPos);
});

function getUser(userId, wishId){
    if(typeof userId === 'undefined'){
        return false;
    }
    var userCurrent = {}
    userId = parseInt(userId);
    wishId = typeof wishId === 'undefined' ? false : parseInt(wishId);
    if(userId !== dinoProfile.id){
        for(i = 0; i < users.length; i++){
            if(users[i].id == userId){
                if(wishId){
                    for(j = 0; j < users[i].wishList.length; j++){
                        if(users[i].wishList[j].id == wishId){
                            userCurrent['user'] = users[i];
                            userCurrent['wish'] = users[i].wishList[j];
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
    }else{
        if(wishId){
            for(j = 0; j < dinoProfile.wishList.length; j++){
                if(dinoProfile.wishList[j].id == wishId){
                    userCurrent['user'] = dinoProfile;
                    userCurrent['wish'] = dinoProfile.wishList[j];
                    userCurrent['userIndex'] = false;
                    userCurrent['wishIndex'] = j;
                    current_user = userCurrent;
                    return userCurrent;
                }
            }
        }else{
            userCurrent['user'] = dinoProfile;
            userCurrent['userIndex'] = false;
            current_user = userCurrent;
            return userCurrent;
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
            user      : false,
            pageName  : 'user-' + user.id,
            pageTitle : 'Profile',
            userData  : user,
            showBlock : function(){
                if(this.userData.invited && this.userData.wishListShow){
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
        parseTemplate('_wish-item.tmpl', {
            wish : wish,
            user : (parseInt(urlData.userId) === dinoProfile.id) ? true : false
        });
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
    }else if(localStorage.getItem("login") !== 'true' && pageName !== 'register'){
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

//window.addEventListener('scroll', function() {
//    clearTimeout(timer);
//    if(!document.body.classList.contains('disable-hover')) {
//        document.body.classList.add('disable-hover')
//    }
//
//    var timer = setTimeout(function(){
//        document.body.classList.remove('disable-hover')
//    },500);
//}, false);