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
  fetchData,
  postBooking
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
      bookableID = agency.trips.length +1;
      displayTravelerInfo(traveler);
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
  const numTravelers = parseInt(document.getElementById('select-num-travelers').value);
  const destinationSelection = document.getElementById('select-destination').value;
  const destinationObj = agency.findDestinationInfo(destinationSelection);
  const departDate = dayjs(document.getElementById('departure-date').value).format('YYYY/MM/DD');
  const returnDate = dayjs(document.getElementById('return-date').value);
  const dur = returnDate.diff(departDate, 'day');
  trip = new Trip(bookableID, traveler, destinationObj, numTravelers, departDate, dur);
  bookableID++;
  postBooking(trip)
  .then((res) => checkForErrors(res))
  .then((trip) => displayNewTrip(trip))
  .catch((error) => displayErrorMessage(error));
  displayTravelerInfo(traveler);
  
};

function displayErrorMessage(error) {
  console.log(error);
}

function displayNewTrip(newBooking) {
  domUpdates.renderNewTrip(newBooking, traveler);
}

function checkForErrors(response) {
  console.log(response.body);
  if (!response.ok) {
    throw new Error('Please check to make sure you have all the imput feilds filled out!');
  }
}

export function determineStatus(booking) {
  if (booking.status === 'approved') {
    return './images/confirm.png';
  } else {
    return './images/wall-clock.png';
  };
};

