'use strict';

// GLOBAL VARIABLES
// For creating table
var theImages = document.getElementById('images');

// EVENT LISTENER FOR HANDLING CLICKING OF IMAGES
theImages.addEventListener('click', handleClick);

var img1Clicks = 0;
var img2Clicks = 0;
var img3Clicks = 0;

// EVENT HANDLER
function handleClick(event) {

  // if(event.target.id === 'stooges') {
  //   alert('Click on the H2s only!');
  // }

  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');

  // for (var i = 0; i < Image.length; i++) {
  // }

  if(event.target.id === 'img1') {
    img1Clicks += 1;
    console.log(' has been clicked ' + img1Clicks + ' times.');
  }
  if(event.target.id === 'img2') {
    img2Clicks += 1;
    console.log(' has been clicked ' + img2Clicks + ' times.');
  }
  if(event.target.id === 'img3') {
    img3Clicks += 1;
    console.log(' has been clicked ' + img3Clicks + ' times.');
  }
}

// CONSTRUCTOR FOR IMAGES
function Image(displayName, filepath, id) {
  this.displayName = displayName;
  this.filepath = filepath;
  this.id = id;
  Image.all.push(this);
};

// Instantiate Image objects
Image.all = [];
new Image('R2-D2 Small Luggage Bag', 'img/bag.jpg', 1);
new Image('Banana-slicer', 'img/banana.jpg', 2);
new Image('Tablet-holding Toilet Toll', 'img/bathroom.jpg', 3);
new Image('Open-Toe Rain Boots', 'img/boots.jpg', 4);
new Image('Combination Toaster Oven/Coffee-Maker/Griddle', 'img/breakfast.jpg', 5);
new Image('Meatball Bubble Gum', 'img/bubblegum.jpg', 6);
new Image('Curved-Seat Chair', 'img/chair.jpg', 7);
new Image('Cthulhu Figurine', 'img/cthulhu.jpg', 8);
new Image('Duck Beak for Dogs', 'img/dog-duck.jpg', 9);
new Image('Dragon Meat', 'img/dragon.jpg', 10);
new Image('Eating Utensil Pen Caps', 'img/pen.jpg', 11);
new Image('Pet Sweep', 'img/pet-sweep.jpg', 12);
new Image('Pizza Stencil Scissors', 'img/scissors.jpg', 13);
new Image('Shark Sleeping Bag', 'img/shark.jpg', 14);
new Image('Baby Sweep', 'img/sweep.png', 15);
new Image('Tauntaun Sleeping Bag', 'img/tauntaun.jpg', 16);
new Image('Unicorn Meat', 'img/unicorn.jpg', 17);
new Image('Tentacle USB', 'img/usb.gif', 18);
new Image('Self-Filling Water Can', 'img/water-can.jpg', 19);
new Image('Narrow Opening Wine Glass', 'img/wine-glass.jpg', 20);

// RENDER IMAGES
Image.render = function() {
  // <img>        create img
  document.getElementById('img1').src = 'img/shark.jpg';
};

Image.render();
