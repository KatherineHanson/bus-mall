'use strict';

// GLOBAL VARIABLES
// For creating images
Image.theImages = document.getElementById('images');
Image.clickCounter = 0;
Image.allImages = [];
Image.imagesLast = [];
Image.imagesCurrent = [];

// CONSTRUCTOR FOR IMAGES
function Image(name, format, id) {
  this.name = name;
  this.format = format;
  this.filepath = 'img/' + name + format;
  this.id = id;
  this.shown = 0;
  this.clicked = 0;
  Image.allImages.push(this);
};

// GENERATE RANDOM WHOLE NUMBER FROM 0 to 19
function randomNumber() {
  return Math.floor(Math.random() * (19 - 0) + 0);
};

// INSTANTIATE IMAGE OBJECTS
new Image('bag', '.jpg', 1);
new Image('banana', '.jpg', 2);
new Image('bathroom', '.jpg', 3);
new Image('boots', '.jpg', 4);
new Image('breakfast', '.jpg', 5);
new Image('bubblegum', '.jpg', 6);
new Image('chair', '.jpg', 7);
new Image('cthulhu', '.jpg', 8);
new Image('dog-duck', '.jpg', 9);
new Image('dragon', '.jpg', 10);
new Image('pen', '.jpg', 11);
new Image('pet-sweep', '.jpg', 12);
new Image('scissors', '.jpg', 13);
new Image('shark', '.jpg', 14);
new Image('sweep', '.png', 15);
new Image('tauntaun', '.jpg', 16);
new Image('unicorn', '.jpg', 17);
new Image('usb', '.gif', 18);
new Image('water-can', '.jpg', 19);
new Image('wine-glass', '.jpg', 20);

function makeImage(index) {
  var imgEl = document.createElement('img');
  imgEl.src = Image.allImages[index].filepath;
  imgEl.id = Image.allImages[index].name;
  Image.theImages.appendChild(imgEl);
  Image.allImages[index].shown += 1;
  // console.log('This image has ' + Image.allImages[a].shown + ' views');
};

// RENDER STARTER IMAGES
Image.render = function() {
  randomNumber();
  makeImage(randomNumber());
  makeImage(randomNumber());
  makeImage(randomNumber());
};

// EVENT LISTENER FOR HANDLING CLICKING OF IMAGES
Image.theImages.addEventListener('click', handleClickWithLimiter);

// LIMITER ON AMOUNT OF TIMES handleClick CAN BE return
function handleClickWithLimiter(event) {
//   // on click, add 1 to click counter
//   // if click counter > 25
//   //  do nothing
//   // else
//   //  run handleClick
  Image.clickCounter += 1;
  console.log('Clicked ' + Image.clickCounter);
  if (Image.clickCounter > 25) {
  } else {
    handleClick(event);
  }
};

// EVENT HANDLER
function handleClick(event) {
  // Add 1 to clicked property of Image.imagesCurrent image that has been clicked
  for(var i = 0; i < Image.allImages.length; i++) {
    // console.log(Image.allImages[i]);
    if(event.target.id === Image.allImages[i].name) {
      Image.allImages[i].clicked += 1;
      console.log(event.target.id + ' has ' + Image.allImages[i].clicked + ' votes out of ' + Image.allImages[i].shown + ' views');
    }
  }
  // Store current images in Image.imagesLast array
  // before replacing them with new images
  Image.imagesLast = Image.imagesCurrent;
  Image.imagesCurrent = [];
  console.log('imagesLast is ' + Image.imagesLast);
  // console.log('Most recently rendered images: ' + Image.imagesLast);
  var i = 0;
  Image.theImages.innerHTML = '';
  while (i < 3) {
    var b = randomNumber();
    if (searchImagesLast(b) === true) {
      if (searchImagesCurrent(b) === true) {
        console.log('test');
        makeImage(b);
        Image.imagesCurrent.push(Image.allImages[b]);
        Image.allImages[b].shown += 1;
        i += 1;
      }
    }
  }
};

function searchImagesLast(index) {
  for(var c = 0; c < Image.allImages.length; c++) {
    if(Image.allImages[index].name != Image.imagesLast.name) {
      return true;
    }
  }
}

function searchImagesCurrent(index) {
  for(var d = 0; d < Image.allImages.length; d++) {
    if(Image.allImages[index].name != Image.imagesCurrent.name) {
      return true;
    }
  }
}

  // loop over each element in Image.allImages array. For each element,
  //  loop over Image.imagesLast array. For each element,
  //    if Image.allImages array element's name does not match Image.imagesLast array's displayName
  //    and

//   var left = document.getElementById('left');
//   var center = document.getElementById('center');
//   var right = document.getElementById('right');
//   // console.log(left);
//   // console.log(center);
//   // console.log(right);
//
//   // If user clicks left image
//   if(event.target.id === 'left') {
//     for (var k = 0; k < Image.allImages.length; k++) {
//       // console.log('Iteration ' + k);
//       var randomLeft1 = randomNumber() + 1;
//       var randomCenter1 = randomNumber() + 1;
//       var randomRight1 = randomNumber() + 1;
//       if(randomLeft1 === Image.allImages[k].id) {
//         Image.allImages[k].clicked += 1;
//         console.log(Image.allImages[k].displayName + ' was clicked ' + Image.allImages[k].clicked + ' times.');
//         document.getElementById('left').src = Image.allImages[k].filepath;
//       }
//       if(randomCenter1 === Image.allImages[k].id && randomCenter1 != randomLeft1) {
//         Image.allImages[k].clicked += 1;
//         console.log(Image.allImages[k].displayName + ' was clicked ' + Image.allImages[k].clicked + ' times.');
//         document.getElementById('center').src = Image.allImages[k].filepath;
//       }
//       if(randomRight1 === Image.allImages[k].id && randomRight1 != randomLeft1 && randomRight1 != randomCenter1) {
//         Image.allImages[k].clicked += 1;
//         console.log(Image.allImages[k].displayName + ' was clicked ' + Image.allImages[k].clicked + ' times.');
//         document.getElementById('right').src = Image.allImages[k].filepath;
//       }
//     }
//   }
//   // If user clicks center image
//   if(event.target.id === 'center') {
//     for (var i = 0; i < Image.allImages.length; i++) {
//       // console.log('Iteration ' + i);
//       var randomLeft2 = randomNumber() + 1;
//       var randomCenter2 = randomNumber() + 1;
//       var randomRight2 = randomNumber() + 1;
//       if(randomLeft2 === Image.allImages[i].id && randomLeft2 != randomLeft1 && randomLeft2 != randomCenter1 && randomLeft2 != randomRight1) {
//         Image.allImages[i].clicked += 1;
//         console.log(Image.allImages[i].displayName + ' was clicked ' + Image.allImages[i].clicked + ' times.');
//         document.getElementById('left').src = Image.allImages[i].filepath;
//       }
//       if(randomCenter2 === Image.allImages[i].id && randomCenter2 != randomLeft1 && randomCenter2 != randomCenter1 && randomCenter2 != randomRight1 && randomCenter2 != randomLeft2) {
//         Image.allImages[i].clicked += 1;
//         console.log(Image.allImages[i].displayName + ' was clicked ' + Image.allImages[i].clicked + ' times.');
//         document.getElementById('center').src = Image.allImages[i].filepath;
//       }
//       if(randomRight2 === Image.allImages[i].id && randomRight2 != randomLeft1 && randomRight2 != randomCenter1 && randomRight2 != randomRight1 && randomRight2 != randomLeft2 && randomRight2 != randomCenter2) {
//         Image.allImages[i].clicked += 1;
//         console.log(Image.allImages[i].displayName + ' was clicked ' + Image.allImages[i].clicked + ' times.');
//         document.getElementById('right').src = Image.allImages[i].filepath;
//       }
//     }
//   }
//   // If user clicks right image
//   if(event.target.id === 'right') {
//     for (var j = 0; j < Image.allImages.length; j++) {
//       // console.log('Iteration ' + j);
//       var randomLeft3 = randomNumber() + 1;
//       var randomCenter3 = randomNumber() + 1;
//       var randomRight3 = randomNumber() + 1;
//       if(randomLeft3 === Image.allImages[j].id && randomLeft3 != randomLeft1 && randomLeft3 != randomCenter1 && randomLeft3 != randomRight1 && randomLeft3 != randomLeft2 && randomLeft3 != randomCenter2 && randomLeft3 != randomRight2 && randomLeft3 != randomCenter3 && randomLeft3 != randomRight3) {
//         Image.allImages[j].clicked += 1;
//         console.log(Image.allImages[j].displayName + ' was clicked ' + Image.allImages[j].clicked + ' times.');
//         document.getElementById('left').src = Image.allImages[j].filepath;
//       }
//       if(randomCenter3 === Image.allImages[j].id && randomCenter3 != randomLeft1 && randomCenter3 != randomCenter1 && randomCenter3 != randomRight1 && randomCenter3 != randomLeft2 && randomCenter3 != randomCenter2 && randomCenter3 != randomRight2 && randomCenter3 != randomLeft3 && randomCenter3 != randomRight3) {
//         Image.allImages[j].clicked += 1;
//         console.log(Image.allImages[j].displayName + ' was clicked ' + Image.allImages[j].clicked + ' times.');
//         document.getElementById('center').src = Image.allImages[j].filepath;
//       }
//       if(randomRight3 === Image.allImages[j].id && randomRight3 != randomLeft1 && randomRight3 != randomCenter1 && randomRight3 != randomRight1 && randomRight3 != randomLeft2 && randomRight3 != randomCenter2 && randomRight3 != randomRight2 && randomRight3 != randomLeft3 && randomRight3 != randomCenter3) {
//         Image.allImages[j].clicked += 1;
//         console.log(Image.allImages[j].displayName + ' was clicked ' + Image.allImages[j].clicked + ' times.');
//         document.getElementById('right').src = Image.allImages[j].filepath;
//       }
//     }
//   }


Image.render();
// console.table(Image.theImages.all);
