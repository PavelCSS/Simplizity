function parseTemplate(tmpl, json, cache, callback){
    showLoading();
    json = (typeof json !== 'undefined') ? json : false;

    callback = (typeof callback == 'function') ? callback : function(html){
        $('main').replaceWith(html);
    };
    $.get(tmpl, function(response){
        if(json){
            var html = Mustache.to_html(response, json);
            cache ? pagesCache(json.page_name, html) : '';
            callback(html);
        }else{
            callback(response);
        }
        hideLoading();
    });
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