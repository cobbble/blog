var talkToMe = document.getElementById("talk-to-me")
var popup = document.getElementById("popup")
var close = document.getElementById("popup-close")

function wechat(){
  talkToMe.onclick=function(){
    popup.style.display = "block"
  }
  close.onclick = function() {
    popup.style.display = "none"
  }

  window.onclick = function(event) {
    if (event.target == popup)
      popup.style.display = "none"
  }
}

module.exports = wechat;
