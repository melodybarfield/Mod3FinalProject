window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}
