// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/passport.png';
import './images/confirm.png';
import './images/airplane.png';
import './images/suitcase.png';
import './images/map.png';
import './images/destination.png';

import {
  fetchData
} from './apiCalls.js';
//variables
let travelersData, tripsData, destinationData;
//event listeners
window.addEventListener('load', returnData);

function getData() {
  return Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
};

function returnData() {
  getData()
    .then(promiseArray => {
      travelersData = promiseArray[0].travelers;
      tripsData = promiseArray[1].trips;
      destinationData = promiseArray[2].destinations;
      console.log(destinationData);
    })
};

console.log('This is the JavaScript entry file - your code begins here.');
