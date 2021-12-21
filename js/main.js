// header
(function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__nav");
  const body = document.querySelector(".body");
  const laungeButton = document.querySelector(".header__launge");
  const launge = document.querySelector(".header__launge-list");
  const settings = document.querySelector(".header__settings");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  burger.addEventListener("click", () => {
    body.classList.toggle("active");
  });
  burger.addEventListener("click", () => {
    settings.classList.toggle("active");
  });
  laungeButton.addEventListener("click", () => {
    laungeButton.classList.toggle("active");
  });
  laungeButton.addEventListener("click", () => {
    launge.classList.toggle("active");
  });
})();
