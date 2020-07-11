{
  const welcome = () => {
    console.log("Tym razem umiem więcej 😃");
  };

  const toggleTitle = () => {
    const title = document.querySelector(".title");
    const titleChangeButton = document.querySelector(".titleChangeButton");


    title.classList.toggle("newTitle");


    if (title.classList.contains("newTitle")) {
      title.innerText = "Fotograf Marcelina Golińska";
      titleChangeButton.innerText = "Zmień tytuł na stary";

    }
    else {
      title.innerText = "Marcelina Golińska - fotograf";
      titleChangeButton.innerText = "Zmień tytuł strony";

    }
  };
  const init = () => {
    const titleChangeButton = document.querySelector(".main__titleButton");
    titleChangeButton.addEventListener("click", toggleTitle);


    welcome();

  };

  init();

}