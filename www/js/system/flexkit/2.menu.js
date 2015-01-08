$('.dropdown-btn').each(function(){
    var menu = $(this).data('menu'), position = $(this).data('menu-position'), height = $(this).data('menu-height');
    $(menu).addClass('dropdown-menu ' + position).height(height);
});

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