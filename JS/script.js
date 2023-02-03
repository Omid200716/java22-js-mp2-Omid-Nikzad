//prompt method for att tar emot user name
const addUserName = prompt("Enter you name please!");
const name = document.querySelector(".userName");
name.innerText = addUserName;

//sound effekt
const sadSound = new Audio("Sound/sad.wav");
const happySound = new Audio("Sound/good.wav");
// divContainer som behåller alla
const divContainer = document.querySelector(".divContainer");
const imageBox = document.querySelectorAll(".items");
const button = document.querySelector(".button");

//med hjälp av for loopen addEventlistere tillägg i alla image elementer
for (let i = 0; i < imageBox.length; i++) {
  imageBox[i].addEventListener("click", () => {
    //ett random nummer for Cpu val
    const randomN = Math.floor((Math.random() * 10) / 4);
    // console.log(randomN + " computer");

    divContainer.innerHTML = "";
    cpuLogic(randomN);
    gameLogic(i, randomN);
  });
}

// med hjälp av den här function gömma man user val image
function hiddenElement() {
  for (let i = 0; i < imageBox.length; i++) {
    imageBox[i].classList.add("hidden");
  }
}

let userPoint = 0;
let cpuPoint = 0;

// med hjälp av den här function sätt man vår vilkor till cpu
function cpuLogic(random22) {
  if (random22 == 0) {
    const image1 = document.createElement("img");
    divContainer.append(image1);
    image1.src = "Image/paper.png";
    createElement("papper");
  }
  if (random22 == 1) {
    const image2 = document.createElement("img");
    divContainer.append(image2);
    image2.src = "Image/rock.png";
    createElement("rock");
  } else if (random22 == 2) {
    const image3 = document.createElement("img");
    divContainer.append(image3);
    image3.src = "Image/scissor.png";
    createElement("scissor");
  }
}

userPoint = 0;
cpuPoint = 0;

// Den här function gör hela spel logic.
function gameLogic(user, cpu) {
  const userP = document.querySelector(".userP");
  const cpuP = document.querySelector(".cpuP");

  if (user == 0 && cpu == 1) {
    userPoint++;
    userP.innerText = userPoint;
    createElement(`${addUserName} gets point!`);
  } else if (user == 1 && cpu == 0) {
    cpuPoint++;
    cpuP.innerText = cpuPoint;
    createElement("Cpu gets point!");
  }
  if (user == 2 && cpu == 0) {
    userPoint++;
    userP.innerText = userPoint;
    createElement(`${addUserName} gets point!`);
  } else if (user == 0 && cpu == 2) {
    cpuPoint++;
    cpuP.innerText = cpuPoint;
    createElement("Cpu gets point!");
  }
  if (user == 2 && cpu == 1) {
    cpuPoint++;
    cpuP.innerText = cpuPoint;
    createElement(`Cpu gets point!`);
  } else if (user == 1 && cpu == 2) {
    userPoint++;
    userP.innerText = userPoint;
    createElement(`${addUserName} gets point!`);
  }
  if (
    (user == 0 && cpu == 0) ||
    (user == 1 && cpu == 1) ||
    (user == 2 && cpu == 2)
  ) {
    createElement("Equal");
  }

  if (userPoint == 3) {
    happySound.play();
    hiddenElement();
    message(`${addUserName} wins the game!`);
  } else if (cpuPoint == 3) {
    sadSound.play();
    hiddenElement();
    message("Cpu wins the game!");
  }
}

// bara skappar nya h4 elementer
function createElement(data) {
  const element = document.createElement("h4");
  divContainer.append(element);
  element.innerText = data;
}

//bara skappar nya h1 elementer
function message(input) {
  const winMessage = document.querySelector(".message2");
  divContainer.append(winMessage);
  winMessage.innerText = input;
}
