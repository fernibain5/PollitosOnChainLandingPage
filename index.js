let widthScreen = screen.width;

let contactUsEl = document.querySelector("#contact-us");
let header = document.querySelector("#header");
let subscribe = document.querySelector("#subscribe");
// let  = <img id="md" class="btn-image" src="images/btn-medium.png" alt="" />

// let  = <img id="tw" class="btn-image" src="images/btn-twitter.png" alt="" />

// let  = <img id="yt" class="btn-image" src="images/btn-youtube.png" alt="" />
// let  = <img id="dsc" class="btn-image" src="images/btn-discord.png" alt="" />

contactUsEl.style.width = widthScreen * 0.07 + "px";
header.style.width = widthScreen * 0.38 + "px";
subscribe.style.width = widthScreen * 0.18 + "px";

parentRow01 = document.querySelector("#fst-row");
parentRow02 = document.querySelector("#snd-row");

const tw = document.createElement("img");
const md = document.createElement("img");
const yt = document.createElement("img");
const dsc = document.createElement("img");

tw.setAttribute("src", "images/btn-twitter.png");
md.setAttribute("src", "images/btn-medium.png");
yt.setAttribute("src", "images/btn-youtube.png");
dsc.setAttribute("src", "images/btn-discord.png");

tw.setAttribute("class", "btn-image");
md.setAttribute("class", "btn-image");
yt.setAttribute("class", "btn-image");
dsc.setAttribute("class", "btn-image");

a1 = document.getElementById("01");
a2 = document.getElementById("02");
a3 = document.getElementById("03");
a4 = document.getElementById("04");

let img = document.getElementById("pp");
let time = 1000; // time in milliseconds

/*  Animate Image */

// var image = document.getElementById("pp");
// window.setTimeout(changeImage, millisecondsToEndOfAnimation);
// function changeImage() {
//   image.src = "images/BlueBirds8.jpg";
// }

/* Storing user's device details in a variable*/
let details = navigator.userAgent;

/* Creating a regular expression
      containing some mobile devices keywords
      to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details
      it returns boolean value*/
let isMobileDevice = regexp.test(details);

// img.hidden = true; // set img to hidden on load
// setTimeout(() => {
//   img.hidden = false; // after timeout show img
// }, time);

if (isMobileDevice) {
  a1["href"] = "https://twitter.com/PollitosOnChain";
  a2["href"] = "https://medium.com/@pollitosonchain";
  a3["href"] = "https://www.youtube.com/channel/UC6BLGTtIySZ2B7NXlxxtSuw";
  a4["href"] = "https://discord.gg/nkqsTpPJ";

  a1.appendChild(tw);
  a2.appendChild(md);
  a3.appendChild(yt);
  a4.appendChild(dsc);
} else {
  a1.appendChild(md);
  a2.appendChild(tw);
  a3.appendChild(dsc);
  a4.appendChild(yt);



}
