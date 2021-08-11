//imports---------------------------------------------------------------------
import './css/base.scss';
import MicroModal from 'micromodal';
import Agency from './Agency.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';
import domUpdates from './domUpdates.js';
import dayjs from 'dayjs';

import './images/travel.png';
import './images/swap.png';
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

//variables---------------------------------------------------------------
const {bookBtn, submitBookingBtn, submitLoginBtn, signInBtn, welcomeSignInBtn, userNav, loginError, bookingError, departureInput, returnInput, destSelection, numTravelersInput, userNameInput, passwordInput, upcomingTripsBtn, cardContainer, upcomingError} = domUpdates;

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
submitLoginBtn.addEventListener('click', submitUserData);
upcomingTripsBtn.addEventListener('click', displayUpcomingTrips);
window.addEventListener('load', submitTestData);

//functions -----------------------------------------------------
function submitTestData() {
  event.preventDefault();
  let userID = 14;
  let password = 'traveler';
  if (password === 'traveler' && userID <= 50 && userID > 0) {
    returnData(userID);
  }
}


function displayUpcomingTrips() {
  let futureTrips = traveler.travelerTrips.filter(journy => {
    let today = dayjs().format('YYYY/MM/DD')
    if (dayjs(journy.date).isAfter(today)) {
      return journy;
    }
  });
  if (!futureTrips.length) {
    upcomingError.classList.toggle('hidden');
  } else {
    cardContainer.innerHTML = '';
    futureTrips.forEach(element => displayNewTrip(element));
  }
}

function submitUserData() {
  event.preventDefault();
  let userID = parseInt(userNameInput.value.split('traveler')[1]);
  let password = passwordInput.value;
  if (password === 'traveler' && userID <= 50 && userID > 0) {
    loginError.classList.add('hidden');
    MicroModal.close('modal-2');
    returnData(userID);
  } else {
    MicroModal.close('modal-2');
    MicroModal.show('modal-2');
    loginError.classList.remove('hidden');
  }
}

function getData(id) {
  return Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations'), fetchData(`travelers/${id}`)])
};

function returnData(id) {
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

function bookTrip() {
  event.preventDefault()
  const numTravelers = parseInt(numTravelersInput.value);
  const destinationSelection = destSelection.value;
  const destinationObj = agency.findDestinationInfo(destinationSelection);
  const departDate = dayjs(departureInput.value).format('YYYY/MM/DD');
  const departDateReadable = dayjs(departureInput.value);
  const returnDate = dayjs(returnInput.value);
  const dur = returnDate.diff(departDate, 'day');
  const verifiedDates = checkDates(departDateReadable, returnDate); 
  const verifiedTrip = verifyTripDetails(numTravelers, destinationSelection, destinationObj, departDate, returnDate, dur);
  if (verifiedTrip && verifiedDates) {
    let trip = new Trip(bookableID, traveler, destinationObj, numTravelers, departDate, dur);
    traveler.travelerTrips.push(trip);
    traveler.travelerDestinations.push(agency.findDestinationInfo(destinationSelection));
    bookableID++;
    postBooking(trip)
    .then((res) => checkForErrors(res))
    .catch((error) => displayErrorMessage(error));
    displayNewTrip(trip);
    bookingError.classList.add('hidden');
    MicroModal.close('modal-1');
  } else {
    MicroModal.close('modal-1');
    MicroModal.show('modal-1');
    bookingError.classList.remove('hidden');
  }
};

//functions for displaying data ---------------------------------
function displayTravelerInfo(user) {
  if (!user) {
    MicroModal.show('modal-2');
  } else {
    userNav.classList.remove('hidden');
    let trips = user.travelerTrips;
    domUpdates.renderTravelerInfo(user, trips);
    domUpdates.renderFooterInfo(user);
  }
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

//helper functions -------------------------------------------------------
function checkForErrors(response) {
  if (!response.ok) {
    throw new Error('Please check to make sure you have all the imput feilds filled out!');
  }
}

function checkDates(depart, comeHome) {
  let today = dayjs();
  if (comeHome.isBefore(depart) || comeHome.isSame(depart) || depart.isBefore(today)){
    return false;
  }
  return true;
}

function verifyTripDetails(travelers, dest, destObj, depart, dateReturn, dur) {
  if (!travelers || !dest || !destObj || !depart || !dateReturn || !dur) {
    return false;
  } else {
    return true;
  }
}

export function determineStatus(booking) {
  if (booking.status === 'approved') {
    return './images/confirm.png';
  } else {
    return './images/wall-clock.png';
  };
};

