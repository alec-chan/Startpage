//read mute cookie initially when page is opened to set icon and sound
window.onload = function() {
  var cookie = getCookie("mute");
  var icon = document.getElementById("icon");
  console.log(cookie);
  console.log(player);
  var toggle = document.getElementById("bg-toggle");
  toggle.onclick = function(){

    if(cookie == "false"){
      toggleBtn(true);
    }
    else if(cookie=="true"){
      toggleBtn(false);
    }
  };

};

function checkCookieState(){
  var cookie = getCookie("mute");
  if(cookie == "false"){
    toggleBtn(false);
  }
  else if (cookie == "true") {
    toggleBtn(true);
  }
  else if(cookie == ""){
    toggleBtn(false);
  }
}

function toggleBtn(state){
  var cookie = getCookie("mute");
  var icon = document.getElementById("icon");
  if(state==true){
    setCookie("mute", "true", 100);
    icon.class="fa fa-volume-off fa-lg";
    muteVideo();
    console.log(cookie);
  }
  else if(state==false) {
    setCookie("mute", "false", 100);
    icon.class="fa fa-volume-up fa-lg";
    unMuteVideo();
    console.log(cookie);
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
