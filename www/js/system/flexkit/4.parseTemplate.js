function parseTemplate(tmpl, json, partial, cache, callback){
    $('body').removeAttr('data-menu-open');
    showLoading();
    json = (typeof json !== 'undefined') ? json : false;
    partial = (typeof partial !== 'undefined') ? partial : false;
    cache = (typeof cache !== 'undefined') ? cache : false;

    callback = (typeof callback === 'function') ? callback : function(html){
        $('main').replaceWith(html);
    };
    readTextFile(tmpl, function(response){
        if(json){
            var html = Mustache.to_html(response, json, partial);
            cache ? pagesCache(json.pageName, html) : '';
            callback(html);
        }else{
            callback(response);
        }
        hideLoading();
    });
}

function readTextFile(file, callback){
    if(typeof callback !== 'function'){
        return false
    }
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function(){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                callback(rawFile.responseText);
            }
        }
    }
    rawFile.send();
}

function readTextFileReturn(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function(){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                return rawFile.responseText;
            }
        }
    };
    rawFile.send();
    return rawFile.responseText;
}

function pagesCache(pageName, value){
    var newPage = {};
    if(typeof localStorage.pageList !== 'undefined'){
        var pages = JSON.parse(localStorage.pageList);
        newPage[pageName] = value;
        var json = $.extend(pages, newPage);
        localStorage.pageList = JSON.stringify(json);
    }else{
        newPage[pageName] = value;
        localStorage.pageList = JSON.stringify(newPage);
    }
}

function goPage(pageName){
    if(typeof localStorage.pageList !== 'undefined'){
        var pages = JSON.parse(localStorage.pageList);
        $('main').replaceWith(pages[pageName]);
//        eval('(' + pages[pageName] + ')');
    }
}