function p_main(p_current, p_next, css_next) {
  document.getElementById(p_current).style.display = "none";
  document.getElementById(p_next).style.display = "block";
  
  var sheets = document.getElementsByTagName('link');
  var path = "css/";
  sheets[1].href = path.concat(css_next);

  window.scrollTo(0,0);
}

function play_song(song) {
  var player = document.getElementById(song);
  player.currentTime = 0;
  player.play();
}

function stop_song(song) {
  document.getElementById(song).pause();
}

function show_footer() {
  document.getElementById('footer').style.display = "block";
}

function hide_footer() {
  document.getElementById('footer').style.display = "none";
}