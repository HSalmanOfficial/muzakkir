var buttonsOfDrum = document.querySelectorAll(".drum").length;

for (i = 0; i < buttonsOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // This is an anonymous function
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    // buttonInnerHTML value is considered "key" value in makeSound function.
    buttonAnimation(buttonInnerHTML);
    // buttonInnerHTML value is considered "currentKey" value in makeSound function.
  });
}

// we called an anonymous function below but we can pass in a parameter, we can name it, event to tap into the keydown to see what key was pressed. This can also be checked by writing console.log(event); and checking in Chrome Developer Tools.

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var zikr1 = new Audio("sounds/zikr-1.mp3");
      zikr1.play();
      break;

    case "a":
      var zikr2 = new Audio("sounds/zikr-2.mp3");
      zikr2.play();
      break;

    case "s":
      var zikr3 = new Audio("sounds/zikr-3.mp3");
      zikr3.play();
      break;

    case "d":
      var zikr4 = new Audio("sounds/zikr-4.mp3");
      zikr4.play();
      break;

    case "j":
      var zikr5 = new Audio("sounds/zikr-5.mp3");
      zikr5.play();
      break;

    case "k":
      var zikr6 = new Audio("sounds/zikr-6.mp3");
      zikr6.play();
      break;

    case "l":
      var zikr7 = new Audio("sounds/zikr-7.mp3");
      zikr7.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100)
}
