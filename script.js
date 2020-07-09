var prev = document.getElementById("prev");
var next = document.getElementById("next");

slides = document.getElementsByClassName("carousel-item");
inner = document.getElementsByClassName("carousel-inner");

console.log(inner[0].clientWidth);

counter = 0;
size = slides[0].clientWidth;

next.addEventListener("click", () => {
   if(counter == 4 ) {
      inner[0].style.transform = 'translateX(0)';
      counter = 0;
      return;
   }
   inner[0].style.transition = "transform 2s ease";
   counter++;
   console.log(counter);
   inner[0].style.transform = 'translateX('+ ((-size - 2) * counter) + 'px)';
});

prev.addEventListener("click", () => {
   counter--;
   if(counter === -1)  {
   inner[0].style.transform = 'translateX(-1600px)'; counter = 4; return
    }
   inner[0].style.transition = "transform 2s ease";
   inner[0].style.transform = 'translateX('+ ((-size - 2) * counter) + 'px)';
});