console.log('where is this popping up?');

var myPicture = vRViewPlayer('#pretty-cat', {
  image: 'cat.jpg',
  is_stereo: false
});
window.addEventListener('load', myPicture);
myPicture.on('ready', function(event) {
  myPicture.addHotspot('creating-hotspot-1', {
    pitch: 0,
    yaw: 0,
    radius: 0.10,
    distance: 1
  });
});
myPicture.on('click', function(event) {
  console.log('register all click events');
  if (event.id == 'creating-hotspot-1') {
    alert('i bEen cLIKed!');
  }
});
