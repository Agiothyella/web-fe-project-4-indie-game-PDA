`use strict`;

const header = document.querySelector(".header");

function fadeHeader() {
  let top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 1) {
    header.classList.add("u-invisible");
  } else {
    header.classList.remove("u-invisible");
  }
}

window.onscroll = function () {
  fadeHeader();
};
