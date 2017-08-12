 console.log('where is this popping up?');

var myPicture = vRViewPlayer('#pretty-cat', {
  image: 'IMG_0560.JPG',
  is_stereo: false
});
window.addEventListener('load', myPicture);
myPicture.on('ready', function(event) {
  myPicture.addHotspot('creating-hotspot-Living room', {
    pitch: -5,
    yaw: 10,
    radius: 0.04,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-Top', {
    pitch: 25,
    yaw: 0,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-Computer', {
    pitch: -25,
    yaw: -45,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-Left', {
    pitch: 0,
    yaw: 25,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-Kitchen', {
    pitch: 0,
    yaw: -180,
    radius: 0.10,
    distance: 1
  });
});
myPicture.on('click', function(event) {
  console.log('register all click events');
  if (event.id == 'creating-hotspot-Living room') {
    alert('Welcome to my living room! This is where I watch TV.');
  }
  if (event.id == 'creating-hotspot-Top') {
    alert('You clicked my top!');
  }
  if (event.id == 'creating-hotspot-Computer') {
    myPicture.setContent({
     image: 'IMG_0559.JPG',
     is_stereo: false
    });
};
  if (event.id == 'creating-hotspot-Left') {
    alert('You clicked my left!');
  }
  if (event.id == 'creating-hotspot-Kitchen') {
    alert('This is my kitchen! This is where I prepare good food.');
  }
});
