var eventsList = {
    wish : {
        swipe : function(){

            var elPos = {}, elWidth = 0;
            function initElement(event){
                var element = event.currentElement;
                elWidth = element.offsetWidth;
            }

            function dragElement(event){
                var elementToDrag = event.currentElement;
                elementToDrag.style.left = (elPos[elementToDrag.getAttribute("data-wish-id")] + event.deltaX) + 'px';
            }

            function resetElement(event){
                var elementToReset = event.currentElement;
                if(elWidth / 3 > (elPos[elementToReset.getAttribute("data-wish-id")] + event.deltaX)){
                    elementToReset.style.left = 0;
                    elPos[elementToReset.getAttribute("data-wish-id")] = 0;
                }else{
                    elPos[elementToReset.getAttribute("data-wish-id")] = elWidth - elWidth / 4;
                    elementToReset.style.left = elPos[elementToReset.getAttribute("data-wish-id")] + 'px';
                }
            }

            function openElement(event){
                var elementOpen = event.currentElement;
                elWidth = elementOpen.offsetWidth;
                elPos[elementOpen.getAttribute("data-wish-id")] = elWidth - elWidth / 4;
                elementOpen.style.right = elPos[elementOpen.getAttribute("data-wish-id")] + 'px';
            }
            function closeElement(event){
                var elementClose = event.currentElement;
                elementClose.style.right = 0;
                elPos[elementClose.getAttribute("data-wish-id")] = 0;
            }

            var swipeOptions = {};

            var listItems = document.querySelectorAll('.wish-item .drag-block');
            Hammer.each(listItems, function(item, index, src) {
                elPos[item.getAttribute("data-wish-id")] = 0;
                swipeOptions.inputTarget = item;
                var touchControl = new Hammer(item, swipeOptions);
                touchControl
//                    .on("panstart", initElement)
                    .on("swiperight", closeElement)
                    .on("swipeleft", openElement);
//                    .on("panright panleft", dragElement)
//                    .on("panend", resetElement);

            });

//            [].map.call(listItems, function(el) {
//                var newEl = document.getElementById(el.id);
//                initTouchListeners(newEl);

//                el.addEventListener("touchstart", logc, false);
//                el.addEventListener("touchend", logc, false);
//                el.addEventListener("touchcancel", logc, false);
//                el.addEventListener("touchleave", logc, false);
//                el.addEventListener("touchmove", logc, false);
//            });

            function logc(e){
                console.log(e.target.id +'>'+ e.type)
            }
        }
    }
};