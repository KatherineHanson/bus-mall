'use strict';

// GLOBAL VARIABLES
// For creating images
Image.theImages = document.getElementById('images');
Image.clickCounter = 0;
Image.allImages = [];
Image.imagesLast = [];
Image.imagesCurrent = [];

// CONSTRUCTOR FOR IMAGES
function Image(name, format, id, identifier) {
  this.name = name;
  this.format = format;
  this.filepath = 'img/' + name + format;
  this.id = id;
  this.shown = 0;
  this.clicked = 0;
  this.identifier = identifier;
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
      Image.allImages[i].clicked++;
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
