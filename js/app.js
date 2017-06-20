'use strict';

// GLOBAL VARIABLES
// For creating images
var theImages = document.getElementById('images');
var clickCounter = 0;

// CONSTRUCTOR FOR IMAGES
function Image(displayName, filepath, id) {
  this.displayName = displayName;
  this.filepath = filepath;
  this.id = id;
  this.shown = 0;
  this.clicked = 0;
  Image.all.push(this);
};

// GENERATE RANDOM WHOLE NUMBER FROM 0 to 19
function randomNumber() {
  return Math.floor(Math.random() * (19 - 0) + 0);
};

// INSTANTIATE IMAGE OBJECTS
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

// RENDER STARTER IMAGES
Image.render = function() {
  // <img>        create img
  var a = randomNumber();
  document.getElementById('left').src = Image.all[a].filepath;
  Image.all[a].shown += 1;
  // <img>        create img
  var b = randomNumber();
  document.getElementById('center').src = Image.all[b].filepath;
  Image.all[b].shown += 1;
  // <img>        create img
  var c = randomNumber();
  document.getElementById('right').src = Image.all[c].filepath;
  Image.all[c].shown += 1;
};

// EVENT LISTENER FOR HANDLING CLICKING OF IMAGES
theImages.addEventListener('click', handleClickWithLimiter());

// LIMITER ON AMOUNT OF TIMES handleClick CAN BE return
function handleClickWithLimiter(event) {
  // on click, add 1 to click counter
  // if click counter > 25
  //  do nothing
  // else
  //  run handleClick
  clickCounter += 1;
  console.log(clickCounter);
  if (clickCounter > 25) {
  } else {
    handleClick();
  }
};

// EVENT HANDLER
function handleClick(event) {
  var left = document.getElementById('left');
  var center = document.getElementById('center');
  var right = document.getElementById('right');
  console.log(left);
  console.log(center);
  console.log(right);

  // If user clicks left image
  if(event.target.id === 'left') {
    var j = 0;
    while (j < 1) {
      for (var k = 0; k < Image.all.length; k++) {
        var randomLeft = randomNumber();
        if(randomLeft === Image.all[k]) {
          Image.all[k].clicked += 1;
          console.log(Image.all[k].displayName + ' was clicked ' + Image.all[k].clicked + ' times.');
          var leftFilepath = Image.all[k].filepath;
          j++;
        }
      }
    }
  }
  // If user clicks center image
  if(event.target.id === 'center') {
    var j = 0;
    while (j < 1) {
      for (var k = 0; k < Image.all.length; k++) {
        var randomCenter = randomNumber();
        if(randomCenter === Image.all[k].id && randomCenter != randomLeft) {
          Image.all[k].clicked += 1;
          console.log(Image.all[k].displayName + ' was clicked ' + Image.all[k].clicked + ' times.');
          var centerFilepath = Image.all[k].filepath;
          j++;
        }
      }
    }
  }
  // If user clicks right image
  if(event.target.id === 'right') {
    var j = 0;
    while (j < 1) {
      for (var k = 0; k < Image.all.length; k++) {
        var randomRight = randomNumber();
        if(randomRight === Image.all[k].id && randomRight != randomLeft && randomRight != randomCenter) {
          Image.all[k].clicked += 1;
          console.log(Image.all[k].displayName + ' was clicked ' + Image.all[k].clicked + ' times.');
          var rightFilepath = Image.all[k].filepath;
          j++;
        }
      }
    }
  }
};

Image.render();
