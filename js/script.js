function welcome () {
  console.log("Tym razem umiem więcej 😃");
}

welcome();
let titleChangeButton = document.querySelector(".main__titleButton");
let title = document.querySelector(".title");
let newTitle = document.querySelector(".newTitle");
titleChangeButton.addEventListener("click", function () {
  title.classList.toggle("newTitle");

  if (title.classList.contains("newTitle")) {
    title.innerText = "Fotograf Marcelina Golińska";
    titleChangeButton.innerText = "Zmień tytuł na stary";
  } else {
    title.innerText = "Marcelina Golińska - fotograf";
    titleChangeButton.innerText = "Zmień tytuł strony";
  }
});
console.log("Tytuł strony został zmieniony");
