`use strict`;

// TOP FADE //----------------------------------
const header = document.querySelector(".header");
const headerWrapper = document.querySelector(".header__wrapper");
const htmlTag = document.documentElement;

function fadeHeader() {
  let top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 5) {
    header.classList.add("u-invisible");
    htmlTag.style = "scroll-behavior: smooth";
  } else {
    header.classList.remove("u-invisible");
    htmlTag.style = "scroll-behavior: auto";
  }
}

fadeHeader();
window.onscroll = function () {
  setTimeout(fadeHeader, 50);
};
//-----------------------------------------------

// SPLIDE JS //----------------------------------
const mediaVideo = new Splide(".media__show--video", {
  type: "loop",
  rewind: true,
  perPage: 1,
  perMove: 1,
  pagination: false,
  lazyLoad: "sequential",
  keyboard: "focused",
  width: "85%",
  gap: "5rem",
  padding: {
    right: "20rem",
    left: "20rem",
  },

  video: {
    mute: true,
  },
}).mount(window.splide.Extensions);

const mediaImage = new Splide(".media__show--images", {
  type: "loop",
  rewind: true,
  perPage: 2,
  perMove: 1,
  pagination: false,
  lazyLoad: "nearby",
  keyboard: "focused",
  width: "95%",
  gap: "5rem",
  padding: {
    right: "20rem",
    left: "20rem",
  },

  video: {
    mute: true,
  },
}).mount(window.splide.Extensions);
//-----------------------------------------------

// WAYPOINT JS //----------------------------------
const bg2 = document.querySelector(".background--2");
const bg3 = document.querySelector(".background--3");

const secondBg = new Waypoint({
  element: document.querySelector(".js-waypoint-mid"),
  handler: function () {
    bg2.classList.toggle("u-visible");
  },
  offset: "50%",
});

const thirdBg = new Waypoint({
  element: document.querySelector(".js-waypoint-bot"),
  handler: function () {
    bg3.classList.toggle("u-visible");
  },
  offset: "bottom-in-view",
});
//-----------------------------------------------
