var canvas = document.querySelector(".line");
// Set display size (css pixels).
var size = 11.338582677;
canvas.style.width = size + "px";

// Set actual size in memory (scaled to account for extra pixel density).
var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
document.querySelector(".dRatio").innerText =
  "Device Pixel Ratio: " + window.devicePixelRatio;
canvas.style.width = Math.floor(size * scale) + "px";

// Normalize coordinate system to use css pixels.

var x = size / 2;
var y = size / 2;

var textString = "I love MDN";
