"use strict";

var message = "Hello TSDEVs\n Welcome to the official site of TS/OS\n";
var currentPosition = 0;

setInterval(function () {
  var messageElement = document.getElementsByClassName("message")[0];
  var c = message.charAt(currentPosition++);
  messageElement.innerHTML =
    messageElement.innerHTML + (c === "\n" ? "<br>" : c);
}, 100);
