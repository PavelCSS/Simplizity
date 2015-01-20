var eventsList = {
    wish : {
        swipe : function(){

            function dragElement(event){
                var elementToDrag = event.target;
                console.log(event);
                // deltaX tracks the distance dragged along the x-axis since the initial touch.
                $('li.wish-item').has().css('left', event.deltaX + 'px');
            }

            function deleteElement(event){
                console.log('delete')
                var elementToDelete = event.target;
                // Stop detecting touches on element when it's no longer needed. Can prevent odd behaviour.
//                event.gesture.stopDetect();
                $(elementToDelete).closest('.wish-item').hide();
            }

            function resetElement(event){
                console.log('reset')
                var elementToReset = event.target;
                $(elementToReset).closest('.wish-item').css('left', '0px');
            }

            // Swipe options as recommended by:
            // https://github.com/EightMedia/hammer.js/wiki/Tips-&-Tricks#horizontal-swipe-and-drag
            var swipeOptions = { dragLockToAxis : true, dragBlockHorizontal : true };

            $('.wish-item').hammer(swipeOptions).on("panright", dragElement).on("swiperight", deleteElement).on("release", resetElement);
        }
    }
};