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

//load video

// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '1',
          width: '1',
          videoId: 'VhXP8RC_v9I',
          events: {
            'onReady': onPlayerReady
          } //no error now
        });
      }

      // 4. The API will call this function when the video player is ready. =autoplay
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;

      function stopVideo() {
        player.stopVideo();
      }

//load video end




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
    icon.className="fa fa-volume-off fa-lg";
    muteVideo();
    console.log(cookie);
  }
  else if(state==false) {
    setCookie("mute", "false", 100);
    icon.className="fa fa-volume-up fa-lg";
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
