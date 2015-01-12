var timer, $el;
var events = 'ontouchstart' in window ? ['touchstart', 'touchmove touchend touchcancel'] : ['mousedown', 'mousemove mouseup'];

// support for IE touch events
if (window.navigator.pointerEnabled) {
    events = ['pointerdown', 'pointermove pointerup pointercancel lostpointercapture'];
} else if (window.navigator.msPointerEnabled) {
    events = ['MSPointerDown', 'MSPointerMove MSPointerUp MSPointerCancel MSLostPointerCapture'];
}

var start = function(e) {
    if (timer) { return; }

    $el = $(e.target);
    timer = window.setTimeout(function() {
        $el.addClass('touch');
    }, 50);
};

var stop = function(e) {
    if (!timer) { return; }

    window.clearTimeout(timer);
    timer = null;

    $el = $(e.target);
    setTimeout(function() {
        $el.removeClass('touch');
    }, 10);
};

$('body').on(events[0], start);
$('body').on(events[1], stop);