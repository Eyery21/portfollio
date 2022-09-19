
const animationOver = document.querySelectorAll(".mouse");

animationOver.forEach(element => {
    element.addEventListener("mouseenter", (e) => {
      element.style.fontSize = "30px";
    })
    element.addEventListener("mouseout", (e) => {
      element.style.fontSize = "20px";
    })
});


