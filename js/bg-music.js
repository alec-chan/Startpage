(function() {
  //read mute cookie initially when page is opened to set icon and sound
  var cookie = getCookie("mute");
  var video = iframe.getElementById("yt");
  var icon = document.getElementById("icon");
  if(cookie == "false"){
    //don't mute sound
    icon.class="fa fa-volume-up fa-lg";
  }
  else if (cookie == "true") {
    //mute
    icon.class="fa fa-volume-off fa-lg";
    video.mute();
  }
  else if(cookie == ""){
    setCookie("mute", "false", 100);
    icon.class="fa fa-volume-up fa-lg";
  }

  toggle = document.getElementById("bg-toggle");
  toggle.onclick = function(){
    if(cookie == "false"){
      setCookie("mute", "true", 100);
      icon.class="fa fa-volume-off fa-lg";
      video.mute();
    }
    else if(cookie=="true"){
      setCookie("mute", "false", 100);
      icon.class="fa fa-volume-up fa-lg";
      video.unMute();
    }
  };

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
})
