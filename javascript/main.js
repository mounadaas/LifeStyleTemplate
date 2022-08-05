let sect = document.querySelector(".ten");
let spans = document.querySelectorAll(".progres span");
window.onscroll = function(){
    if(window.scrollY > sect.offsetTop){
        spans.forEach((span) =>{
        span.style.width = span.dataset.width;
       });
    }
};
