$(document).on('tap', '.menu-btn',function(e){
    event.preventDefault();
    showMenu($(this))
}).on('tap', '.dropdown-btn',function(){
    event.preventDefault();
    showDropdown($(this))
}).on('tap', '.sub-menu-btn', function(){
    event.preventDefault();
    $(this).toggleClass('active').nextAll('ul').toggleClass('open');
}).on('touchmove', '.menu-btn.active, .dropdown-btn.active',function(e){
    $('.dropdown-menu').removeClass('open');
    $('body').removeAttr('data-menu-open');
    $('.menu-btn, .dropdown-btn').removeClass('active');
});

function showMenu($this){
    var menuPosition = $this.data('menu-position');
    $('.dropdown-menu').removeClass('open');
    if(!$this.hasClass('active')){
        $('.menu-btn, .dropdown-btn').removeClass('active');
        $('body').attr('data-menu-open', menuPosition);
    }else{
        $('body').removeAttr('data-menu-open');
    }
    $this.toggleClass('active');
}

function showDropdown($this){
    var menu = $this.data('menu');
    $('body').removeAttr('data-menu-open');
    if(!$this.hasClass('active')){
        $('.menu-btn, .dropdown-btn').removeClass('active');
        $('.dropdown-menu').removeClass('open');
        $this.addClass('active');
        $(menu).addClass('open');
    }else{
        $('.dropdown-btn').removeClass('active');
        $('.dropdown-menu').removeClass('open');
    }
}