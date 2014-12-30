//var menuOverlay = document.createElement("div");
//menuOverlay.className = "mobile-overlay menu-overlay";
//document.body.appendChild(menuOverlay);
//
//var dropdownOverlay = document.createElement("div");
//dropdownOverlay.className = "mobile-overlay dropdown-overlay";
//document.body.appendChild(dropdownOverlay);

$('.dropdown-btn').each(function(){
    var menu = $(this).data('menu'), position = $(this).data('menu-position'), height = $(this).data('menu-height');
    $(menu).addClass('dropdown-menu ' + position).height(height);
});
var switchMenu = false;
$(document).on('mousedown touchstart', function(e){
    var container = $(".dropdown-menu");
    if(switchMenu && (container.has(e.target).length === 0)){
        $('body').removeAttr('data-menu-open');
        $('.menu-btn, .dropdown-btn').removeClass('active');
        $('.dropdown-menu, .mobile-overlay').removeClass('open');
        switchMenu = false;
        return false;
    }
});
//$('.mobile-overlay').on('mousedown touchstart', function(){
//    $('body').removeAttr('data-menu-open');
//    $('.menu-btn, .dropdown-btn').removeClass('active');
//    $('.dropdown-menu, .mobile-overlay').removeClass('open');
//});

$(document).on('singleTap', '.menu-btn',function(e){
    event.preventDefault();
    showMenu($(this))
}).on('singleTap', '.dropdown-btn',function(){
    event.preventDefault();
    showDropdown($(this))
}).on('singleTap', '.sub-menu-btn', function(){
    event.preventDefault();
    $(this).toggleClass('active').nextAll('ul').toggleClass('open');
});

function showMenu($this){
    var menuPosition = $this.data('menu-position');
    $('.mobile-overlay, .dropdown-menu').removeClass('open');
    if(!$this.hasClass('active')){
        $('.menu-btn, .dropdown-btn').removeClass('active');
        $('body').attr('data-menu-open', menuPosition);
        $('.menu-overlay').addClass('open');
    }else{
        $('body').removeAttr('data-menu-open');
    }
    $this.toggleClass('active');
}

function showDropdown($this){
    var menu = $this.data('menu');
    $('.mobile-overlay').removeClass('open');
    $('body').removeAttr('data-menu-open');
    if(!$this.hasClass('active')){
        $('.menu-btn, .dropdown-btn').removeClass('active');
        $('.dropdown-menu').removeClass('open');
        $('.dropdown-overlay').addClass('open');
        switchMenu = true;
    }
    $this.toggleClass('active');
    $(menu).toggleClass('open');
}