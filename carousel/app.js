  var slide_index = 1;  
        displaySlides(slide_index);  
  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        } 

  

        function displaySlides(n) {  
            var i;  
            var itemActive = document.getElementsByClassName("carousel-inner"); 
            var dots = document.getElementsByClassName("dot"); 
            if (n > itemActive.length) { slide_index = 1 }  
            if (n < 1) { slide_index = itemActive.length }  
            for (i = 0; i < itemActive.length; i++) {  
                itemActive[i].style.display = "none";  
            } 
              for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" active", ""); 
            // itemActive[slide_index - 1].style.display = "block"; 

        } 
         itemActive[slide_index-1].style.display = "block"; 
          dots[slide_index-1].className += " active";
}
        // function next(n) {
        //     var i;
        //     var itemActive = document.getElementsByClassName("next");
        //     if (n > itemActive.length) { slide_index = 1 }
        //         if (n < 1) { slide_index = itemActive.length }
        //             for (i = 0; i < itemActive.length; i++ ) {
        //                 itemActive[i].style.display = "none"
        //             }
        //             itemActive[slide_index - 1].style.display ="block"
        