'use strict';

// IMAGE VARIABLES
// For creating images
Image.theImages = document.getElementById('images');
Image.clickCounter = 0;
Image.allImages = [];
Image.imagesLast = [];
Image.imagesCurrent = [];
retrieveLocalStorage();

// CONSTRUCTOR FOR IMAGES
function Image(name, format, id) {
  this.name = name;
  this.format = format;
  this.filepath = 'img/' + name + format;
  this.id = id;
  this.shown = 0;
  this.clicked = 0;
  this.converted = 0;
  Image.allImages.push(this);
};

// GENERATE RANDOM WHOLE NUMBER FROM 0 to 19
function randomNumber() {
  return Math.floor(Math.random() * (19 - 0) + 0);
}

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
  var at = [];
  at[0] = randomNumber();
  at[1] = randomNumber();

  while(at[0] === at[1]) {
    console.error('Duplicate! Trying again!');
    at[1] = randomNumber();
  }

  at[2] = randomNumber();
  while(at[2] === at[0] || at[2] === at[1]) {
    console.error('Duplicate! Trying again!');
    at[2] = makeRandom();
  }

  makeImage(at[0]);
  makeImage(at[1]);
  makeImage(at[2]);

  Image.imagesCurrent.push(Image.allImages[at[0]]);
  Image.imagesCurrent.push(Image.allImages[at[1]]);
  Image.imagesCurrent.push(Image.allImages[at[2]]);
  console.log('First render\'s imagesCurrent IDs: ' + Image.imagesCurrent[0].id + ', ' + Image.imagesCurrent[1].id + ', ' + Image.imagesCurrent[2].id);
};

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
    Image.theImages.innerHTML = '';
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
      Image.allImages[i].converted = Image.allImages[i].clicked / Image.allImages[i].shown;
      console.log(event.target.id + ' has ' + Image.allImages[i].clicked + ' votes out of ' + Image.allImages[i].shown + ' views');
    }
  }
  // Store current images in Image.imagesLast array
  // before replacing them with new images
  Image.imagesLast = Image.imagesCurrent;
  Image.imagesCurrent = [];
  console.log('imagesLast current IDs: ' + Image.imagesLast[0].id + ', ' + Image.imagesLast[1].id + ', ' + Image.imagesLast[2].id);
  // console.log('Most recently rendered images: ' + Image.imagesLast);
  var i = 0;
  Image.theImages.innerHTML = '';

  validateNumbers();

  storeToLocalStorage();
}

function validateNumbers () {
  var at = [];
  at[0] = randomNumber();
  at[1] = randomNumber();

  while (at[0] === Image.imagesLast[0].id || at[0] === Image.imagesLast[1].id || at[0] === Image.imagesLast[2].id) {
    console.error('Duplicate! Trying again!');
    at[0] = randomNumber();
  }

  while(at[1] === at[0] || at[1] === Image.imagesLast[0].id || at[1] === Image.imagesLast[1].id || at[1] === Image.imagesLast[2].id) {
    console.error('Duplicate! Trying again!');
    at[1] = randomNumber();
  }

  at[2] = randomNumber();
  while(at[2] === at[0] || at[2] === at[1] || at[2] === Image.imagesLast[0].id || at[2] === Image.imagesLast[1].id || at[2] === Image.imagesLast[2].id) {
    console.error('Duplicate! Trying again!');
    at[2] = randomNumber();
  }
  console.log('Selected random numbers: ' + at);

  makeImage(at[0]);
  makeImage(at[1]);
  makeImage(at[2]);

  Image.imagesCurrent.push(Image.allImages[at[0]]);
  Image.imagesCurrent.push(Image.allImages[at[1]]);
  Image.imagesCurrent.push(Image.allImages[at[2]]);

  console.log('Final imagesLast IDs per cycle: ' + Image.imagesLast[0].id + ', ' + Image.imagesLast[1].id + ', ' + Image.imagesLast[2].id);
  console.log('Final imagesCurrent IDs per cycle: ' + Image.imagesCurrent[0].id + ', ' + Image.imagesCurrent[1].id + ', ' + Image.imagesCurrent[2].id);
}

// store data in localStorage every time the data changes
function storeToLocalStorage() {
  localStorage.setItem('images', JSON.stringify(Image.allImages));
}

// retrieve stored data on page load
function retrieveLocalStorage() {
  // if localStorage exists
  if (localStorage.length > 0) {
    // retrieve, parse, assign to array of objects
    Image.allImages = JSON.parse(localStorage.getItem('images'));
  } else {
    // make instances from constructor, display images
    new Image('bag', '.jpg', 0);
    new Image('banana', '.jpg', 1);
    new Image('bathroom', '.jpg', 2);
    new Image('boots', '.jpg', 3);
    new Image('breakfast', '.jpg', 4);
    new Image('bubblegum', '.jpg', 5);
    new Image('chair', '.jpg', 6);
    new Image('cthulhu', '.jpg', 7);
    new Image('dog-duck', '.jpg', 8);
    new Image('dragon', '.jpg', 9);
    new Image('pen', '.jpg', 10);
    new Image('pet-sweep', '.jpg', 11);
    new Image('scissors', '.jpg', 12);
    new Image('shark', '.jpg', 13);
    new Image('sweep', '.png', 14);
    new Image('tauntaun', '.jpg', 15);
    new Image('unicorn', '.jpg', 16);
    new Image('usb', '.gif', 17);
    new Image('water-can', '.jpg', 18);
    new Image('wine-glass', '.jpg', 19);
  }
}

Image.render();

// console.table(Image.theImages.all);

// ++++++++++++++++++++++++++++++++++++++++++++
// CHART - Variable and function declarations
// ++++++++++++++++++++++++++++++++++++++++++++

// Arrays to hold data for the chart
var names = [];
var clicks = [];
var imageChart;
var chartDrawn = false;

function updateChartArrays() {
  for (var i = 0; i < Image.allImages.length; i++) {
    names[i] = Image.allImages[i].name;
    clicks[i] = Image.allImages[i].clicked;
  }
}

function showImagesAsList() {
  var imageList = document.getElementById('image-list');
  imageList.innerHTML = '';
  imageList.hidden = false;
  imageList.textContent = 'CLICK ON THIS LIST TO HIDE IT';
  for (var i = 0; i < Image.allImages.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = Image.allImages[i].name + ', ' + Image.allImages[i].clicked + ' votes';
    imageList.appendChild(liEl);
  };
};

function tallyVote(thisImage) {
  for (var i = 0; i < Image.allImages.length; i++) {
    if (thisImage === Image.allImages[i].name) {
      // Image.allImages[i].clicked++;
      updateChartArrays();
    }
  }
}

// ++++++++++++++++++++++++++++++++++++++++++++
// CHART STUFF
// Charts rendered using Chart JS v.2.6.0
// http://www.chartjs.org/
// ++++++++++++++++++++++++++++++++++++++++++++

var data = {
  labels: names, // names array we declared earlier
  datasets: [
    {
      data: clicks, // clicks array we declared earlier
      backgroundColor: [
        'bisque',
        'darkgray',
        'burlywood',
        'teal',
        'navy',
        'blueviolet',
        'darkgreen',
        'orchid',
        'olive',
        'brown',
        'coral',
        'cyan',
        'crimson',
        'darkmagenta',
        'darkgoldenrod',
        'darksalmon',
        'mistyrose',
        'rebeccapurple',
        'slateblue',
        'yellowgreen',
        'royalblue',
        'sienna',
        'slategray',
        'palevioletred',
        'seagreen'
      ],
      hoverBackgroundColor: [
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white'
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('image-chart').getContext('2d');
  imageChart = new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}

function hideChart() {
  document.getElementById('image-chart').hidden = true;
}

// ++++++++++++++++++++++++++++++++++++++++++++
// EVENT LISTENERS
// ++++++++++++++++++++++++++++++++++++++++++++

function init() {
  Image.theImages.addEventListener('click', handleClickWithLimiter);

  document.getElementById('draw-chart').addEventListener('click', function(){
    drawChart();
    // setTimeout(hideChart, 5000);
  });

  document.getElementById('list-button').addEventListener('click', function(){
    showImagesAsList();
  });

  // document.getElementById('list-button').addEventListener('click', showImagesAsList);

  document.getElementById('image-list').addEventListener('click', function(){
    document.getElementById('image-list').hidden = true;
  });

  document.getElementById('images').addEventListener('click', function(event){
    if (event.target.id !== 'images') {
      tallyVote(event.target.id);
    };

    if (chartDrawn) {
      imageChart.update();
    }
  });
}

init();
