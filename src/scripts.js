// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import MicroModal from 'micromodal';
import Agency from './Agency.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';
import domUpdates from './domUpdates.js';

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
let travelersData, tripsData, destinationData, traveler, agency, trip;
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
      agency = new Agency(travelersData, tripsData, destinationData)
      traveler = new Traveler(agency.findTraveler(2), agency.getTrips(2), agency.getDestinations(2));
      displayTravelerInfo(traveler, agency);
    })
};

function displayTravelerInfo(user, agency) {
  let trip = user.travelerTrips[1];
  let destination = user.findDestination(trip.destinationID);
  domUpdates.renderTravelerInfo(trip, destination, user);
}
