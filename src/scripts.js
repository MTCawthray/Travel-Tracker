import './css/base.scss';
// import MicroModal from 'micromodal';
import Agency from './Agency.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';
import domUpdates from './domUpdates.js';
import dayjs from 'dayjs';

import './images/turing-logo.png';
import './images/passport.png';
import './images/confirm.png';
import './images/airplane.png';
import './images/suitcase.png';
import './images/map.png';
import './images/destination.png';
import './images/wall-clock.png';

import {
  fetchData
} from './apiCalls.js';
//variables
let travelersData, tripsData, destinationData, traveler, agency, user;

//event listeners
window.addEventListener('load', returnData);

function getData() {
  return Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations'), fetchData(`travelers/${'1'}`)])
};

function returnData() {
  getData()
    .then(promiseArray => {
      travelersData = promiseArray[0].travelers;
      tripsData = promiseArray[1].trips;
      destinationData = promiseArray[2].destinations;
      user = promiseArray[3]
      agency = new Agency(travelersData, tripsData, destinationData)
      traveler = new Traveler(user, agency.getTrips(user.id), agency.getDestinations(user.id));
      displayTravelerInfo(traveler, agency);
    })
};

function displayTravelerInfo(user) {
  let trips = user.travelerTrips;
  domUpdates.renderTravelerInfo(user, trips);
  domUpdates.renderFooterInfo(user);
};

export function determineStatus(booking) {
  if (booking.status === 'approved') {
    return './images/confirm.png';
  } else {
    return './images/wall-clock.png';
  };
};

