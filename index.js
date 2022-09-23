
const animationOver = document.querySelectorAll(".mouse");

animationOver.forEach(element => {
    element.addEventListener("mouseenter", (e) => {
      element.style.fontSize = "30px";
    })
    element.addEventListener("mouseout", (e) => {
      element.style.fontSize = "20px";
    })
});


const target = document.getElementById("target");
let array = ["bienvenue", "sur", "mon", "site"];
let worldIndex = 0;
let letterIndex = 0;

const creatLettter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[worldIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2000);
}; 

const loop = () => {
  setTimeout(() => {
    // si on ne reviens pas 0
    if (worldIndex >= array.length) {
      worldIndex = 0;
      letterIndex = 0;
      loop();
    //   alors création d'une nouvelle lettre
    } else if (letterIndex < array[worldIndex].length) {
      creatLettter();
      letterIndex++;
      loop();
    }
    // alors changement de mot
    else {
      worldIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2000);
    }
  }, 80);
};
loop();
