console.log('where is this popping up?');

var myPicture = vRViewPlayer('#pretty-cat', {
  image: 'IMG_0560.JPG',
  is_stereo: false
});
window.addEventListener('load', myPicture);
myPicture.on('ready', function(event) {
  myPicture.addHotspot('creating-hotspot-Center', {
    pitch: 0,
    yaw: 0,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-Top', {
    pitch: 25,
    yaw: 0,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-Bottom', {
    pitch: -25,
    yaw: 0,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-Left', {
    pitch: 0,
    yaw: 25,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-Right', {
    pitch: 0,
    yaw: -25,
    radius: 0.10,
    distance: 1
  });
});
myPicture.on('click', function(event) {
  console.log('register all click events');
  if (event.id == 'creating-hotspot-Center') {
    alert('You clicked my center!');
  }
  if (event.id == 'creating-hotspot-Top') {
    alert('You clicked my top!');
  }
  if (event.id == 'creating-hotspot-Bottom') {
    alert('You clicked my bottom!');
  }
  if (event.id == 'creating-hotspot-Left') {
    alert('You clicked my left!');
  }
  if (event.id == 'creating-hotspot-Right') {
    alert('You clicked my right!');
  }
});
