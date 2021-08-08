import './css/base.scss';
import MicroModal from 'micromodal';
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
let travelersData, tripsData, destinationData, traveler, agency, user, trip, bookableID;
const bookBtn = document.getElementById('book-btn');
const submitBookingBtn = document.getElementById('submit-booking-btn');

//event listeners
window.addEventListener('load', returnData);
bookBtn.addEventListener('click', MicroModal.init);
submitBookingBtn.addEventListener('click', bookTrip);

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
      bookableID = traveler.travelerTrips.length +1;
      displayTravelerInfo(traveler, agency);
      displayDestinationList();
    })
};

function displayTravelerInfo(user) {
  let trips = user.travelerTrips;
  domUpdates.renderTravelerInfo(user, trips);
  domUpdates.renderFooterInfo(user);
};

function displayDestinationList() {
  const destintationNames = agency.getAllDestinationNames()
  domUpdates.renderDestinationList(destintationNames);
}

function bookTrip() {
  
  const numTravelers = document.getElementById('select-num-travelers').value;
  const destination = document.getElementById('select-destination').value;
  //will likely need method in agency to return destination obj
  const departDate = document.getElementById('departure-date').value;
  const returnDate = document.getElementById('return-date').value;
  //Then we can kick off a post request with the data we have from our form
  const dur =//need method in agency to determine duration of trip to pass in as dur
  trip = new Trip(bookableID, traveler, destination, numTravelers, departDate, dur)
  
};

export function determineStatus(booking) {
  if (booking.status === 'approved') {
    return './images/confirm.png';
  } else {
    return './images/wall-clock.png';
  };
};

