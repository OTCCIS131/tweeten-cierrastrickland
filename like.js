var button = document.getElementById('likebutton'),
 clickcount = 50
button.onclick = function() {
  clickcount += 1;
  button.innerHTML = "Click me: " + clickcount;
};