var eventsList = {
    wish : {
        swipe : function(){

            function dragElement(event){
                var elementToDrag = event.target;
                elementToDrag.style.left = event.deltaX + 'px';
//                $('#' + elementToDrag).css('left', event.deltaX + 'px');
            }

            function deleteElement(event){
                var elementToDelete = event.target;
//                $(elementToDelete).closest('.wish-item').hide();
            }

            function resetElement(event){
                var elementToReset = event.target;
//                $(elementToReset).closest('.wish-item').css('left', '0px');
            }

            var swipeOptions = { dragLockToAxis : true, dragBlockHorizontal : true };

            function initTouchListeners(touchableElement){
                var touchControl = new Hammer(touchableElement, swipeOptions);
                touchControl.on("panright", dragElement).on("swiperight", deleteElement).on("release", resetElement);
            }

            var listItems = document.querySelectorAll('.wish-item');
            [].map.call(listItems, function(el) {
                var newEl = document.getElementById(el.id);
                initTouchListeners(newEl);
            });
        }
    }
};