var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for(var a = 1; a <= 5; a++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + a + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(i) {
    var imgSrc = i.target.getAttribute('src');
    displayImage(imgSrc);
  }
}

function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  var btnClass = btn.getAttribute('class');
if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
}
