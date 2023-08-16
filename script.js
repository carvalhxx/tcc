function clearPlaceholder(input) {
    input.setAttribute('data-placeholder', input.getAttribute('placeholder'));
    input.setAttribute('placeholder', '');
}

function restorePlaceholder(input) {
    input.setAttribute('placeholder', input.getAttribute('data-placeholder'));
    input.removeAttribute('data-placeholder');
}
 const carousel = document.querySelector(".carousel");
 firstImg = carousel.querySelectorAll("img")[0];
 const arrowIcons = document.querySelectorAll(".wrapper i");


 let isDragStart = false, prevPageX, prevScrollLeft;
 let firstImgWidth = firstImg.clientWidth + 14;

 arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        console.log(icon)
    });
 });


 const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
 }

 

 const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
 }

 const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
 }
 carousel.addEventListener("mousedown", dragStart);
 carousel.addEventListener("mousemove", dragging);
 carousel.addEventListener("mouseup", dragStop);

 document.addEventListener("DOMContentLoaded", function() {
   const footer = document.querySelector(".ft");

   function showFooterOnScroll() {
       const windowHeight = window.innerHeight;
       const documentHeight = document.body.scrollHeight;
       const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

       if (windowHeight + scrollTop >= documentHeight) {
           footer.style.display = "block";
       } else {
           footer.style.display = "none";
       }
   }

   window.addEventListener("scroll", showFooterOnScroll);
});


