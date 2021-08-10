import './css/base.scss';
import MicroModal from 'micromodal';
import Agency from './Agency.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';
import domUpdates from './domUpdates.js';
import dayjs from 'dayjs';

import './images/travel.png';
import './images/turing-logo.png';
import './images/passport.png';
import './images/confirm.png';
import './images/airplane.png';
import './images/suitcase.png';
import './images/map.png';
import './images/destination.png';
import './images/wall-clock.png';
const {bookBtn, submitBookingBtn, submitLoginBtn, loginModal, signInBtn, welcomeSignInBtn} = domUpdates;

import {
  fetchData,
  postBooking
} from './apiCalls.js';
//variables
let travelersData, tripsData, destinationData, traveler, agency, user, bookableID;

//event listeners
signInBtn.addEventListener('click', () => {
  MicroModal.show('modal-2')
});
welcomeSignInBtn.addEventListener('click', () => {
  MicroModal.show('modal-2')
});
bookBtn.addEventListener('click', () => {
  MicroModal.show('modal-1')
});
submitBookingBtn.addEventListener('click', bookTrip);
submitLoginBtn.addEventListener('click', showUserData);

function showUserData() {
  event.preventDefault();
  let userID = parseInt(document.getElementById('user-name-input').value.split('Traveler')[1]);
  let password = document.getElementById('password-input').value;
  if (password === 'Traveler' && userID <= 50 && userID > 0) {
    MicroModal.close('modal-2');
    returnData(userID);
  }
}

function getData(id) {
  return Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations'), fetchData(`travelers/${id}`)])
};

function returnData(id) {
  // event.preventDefault();
  getData(id)
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
  if (!user) {
    MicroModal.show('modal-2');
  } else {
    let trips = user.travelerTrips;
    domUpdates.renderTravelerInfo(user, trips);
    domUpdates.renderFooterInfo(user);
  }
};

function bookTrip() {
  event.preventDefault()
  const numTravelers = parseInt(document.getElementById('select-num-travelers').value);
  const destinationSelection = document.getElementById('select-destination').value;
  const destinationObj = agency.findDestinationInfo(destinationSelection);
  const departDate = dayjs(document.getElementById('departure-date').value).format('YYYY/MM/DD');
  const returnDate = dayjs(document.getElementById('return-date').value);
  const dur = returnDate.diff(departDate, 'day');
  let trip = new Trip(bookableID, traveler, destinationObj, numTravelers, departDate, dur);
  traveler.travelerTrips.push(trip);
  traveler.travelerDestinations.push(agency.findDestinationInfo(destinationSelection));
  bookableID++;
  postBooking(trip)
  .then((res) => checkForErrors(res))
  .catch((error) => displayErrorMessage(error));
  displayNewTrip(trip);
  MicroModal.close('modal-1');
};

function displayErrorMessage(error) {
  console.log(error);
}

function displayNewTrip(newBooking) {
  domUpdates.renderNewTrip(newBooking, traveler);
}

function displayDestinationList() {
  const destintationNames = agency.getAllDestinationNames()
  domUpdates.renderDestinationList(destintationNames);
}

function checkForErrors(response) {
  console.log(response);
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

