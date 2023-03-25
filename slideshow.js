// ------------------For 2023------------------------------------------------
let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }

// ------------------For 2022------------------------------------------------

let slideIndexTwo = 1;
        showSlidesTwo(slideIndexTwo);
        
        function plusSlidesTwo(p) {
          showSlidesTwo(slideIndexTwo += p);
        }
        
        function currentSlideTwo(p) {
          showSlidesTwo(slideIndexTwo = p);
        }
        
        function showSlidesTwo(p) {
          let j;
          let slidesTwo = document.getElementsByClassName("mySlidesTwo");
          let dotsTwo = document.getElementsByClassName("dotTwo");
          if (p > slidesTwo.length) {slideIndexTwo = 1}    
          if (p < 1) {slideIndexTwo = slidesTwo.length}
          for (j = 0; j < slidesTwo.length; j++) {
            slidesTwo[j].style.display = "none";  
          }
          for (j = 0; j < dotsTwo.length; j++) {
            dotsTwo[j].className = dotsTwo[j].className.replace(" activeTwo", "");
          }
          slidesTwo[slideIndexTwo-1].style.display = "block";  
          dotsTwo[slideIndexTwo-1].className += " activeTwo";
        }

// ------------------For 2021------------------------------------------------
let slideIndexThree = 1;
        showSlidesThree(slideIndexThree);
        
        function plusSlidesThree(r) {
          showSlidesThree(slideIndexThree += r);
        }
        
        function currentSlideThree(r) {
          showSlidesThree(slideIndexThree = r);
        }
        
        function showSlidesThree(r) {
          let k;
          let slidesThree = document.getElementsByClassName("mySlidesThree");
          let dotsThree = document.getElementsByClassName("dotThree");
          if (r > slidesThree.length) {slideIndexThree = 1}    
          if (r < 1) {slideIndexThree = slidesThree.length}
          for (k = 0; k < slidesThree.length; k++) {
            slidesThree[k].style.display = "none";  
          }
          for (k = 0; k < dotsThree.length; k++) {
            dotsThree[k].className = dotsThree[k].className.replace(" activeThree", "");
          }
          slidesThree[slideIndexThree-1].style.display = "block";  
          dotsThree[slideIndexThree-1].className += " activeThree";
        }