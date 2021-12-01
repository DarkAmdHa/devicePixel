let screenWidth = 0,
  screenHeight = 0;

window.onload = function () {
  fod.complete(function (data) {
    screenWidth = data.device["screenmmwidth"];
    screenHeight = data.device["screenmmheight"];
    if (screenWidth != 0 && screenHeight != 0) {
      document.querySelector(
        ".screenWidth"
      ).innerHTML = `<p>Found Width and Height</p> <p>Screen Width: ${screenWidth}</p> <p>Screen Height: ${screenHeight}</p>`;
      const ratioW = window.innerWidth / screenWidth;
      const size = 5;
      document.querySelector(".line").style.width = size * ratioW + "px";
    }
  });
};
