import { determineStatus } from "./scripts";

//Nav buttons
const bookBtn = document.getElementById('book-btn');
const cardContainer = document.getElementById('card-container');
const footerDisplay = document.getElementById('footer-info');
const selection = document.getElementById('select-destination');
const submitBookingBtn = document.getElementById('submit-booking-btn');
const submitLoginBtn = document.getElementById('submit-login-btn');

const domUpdates = {
  //render methods
  renderTravelerInfo(traveler, trips) {
    cardContainer.innerHTML = ``;
    trips.forEach(trip => {
     let totalCost = traveler.getTripCost(trip.id).total;
     let destination = traveler.findDestination(trip.destinationID);
     let tripStatus = determineStatus(trip);
     cardContainer.innerHTML += `
      <article class="travelCard">
            <div class="headerContent">
              
              <div class="headerInfo">
                <div class="locationIconHolder">
                  <img src="./images/passport.png" alt="location icon" class="locationIcon">
                  <h2>${destination.destination}</h2>
                </div> 
                <div class="confirmationHolder">
                  <h3>status: ${trip.status}</h3>
                  <img src="${tripStatus}" alt="confirmation status icon" class="statusIcon"> 
                </div>       
              </div>
              <div class="destinationImg">
                <img src=${destination.image} alt="${destination.alt}" class="destinationImg" >
              </div>
            </div>
            <div class="bodyContent">
              <div class="departureIconHolder">
                <img src="./images/airplane.png" alt="takeoff icon" class="takeoffIcon">
                <h3>Departs: ${trip.date}</h3>
              </div>
              <h4>Cost: $${totalCost}</h4>
              <h4>number of travelers: ${trip.travelers}</h4>
            </div>
          </article>
     `
   })
  },

  renderFooterInfo(traveler) {
    footerDisplay.innerHTML = ``;
    footerDisplay.innerHTML = `
      <h4 class="footerHeading" id="greeting">Hello, ${traveler.name}!</h4>
      <h4 class="footerHeading" id="total-spent">This Years Total $${traveler.getYearlyCost('2021')}</h4>
      `
  },

  renderDestinationList(names) {
    selection.innerHTML = '<option value="placeholder">Select a destination</option>';
    names.forEach(name => {
      selection.innerHTML += `<option value=${name}>${name}</option>`
    });
  },

  //not working yet, possibly not needed if after a booking we can just kick off render traveler info instead
  renderNewTrip(newBooking, traveler) {
    let totalCost = traveler.getTripCost(newBooking.id).total;
     let destination = traveler.findDestination(newBooking.destinationID);
     let tripStatus = determineStatus(newBooking);
     console.log(newBooking);
    cardContainer.innerHTML += `
      <article class="travelCard">
            <div class="headerContent">
              
              <div class="headerInfo">
                <div class="locationIconHolder">
                  <img src="./images/passport.png" alt="location icon" class="locationIcon">
                  <h2>${destination.destination}</h2>
                </div> 
                <div class="confirmationHolder">
                  <h3>status: ${trip.status}</h3>
                  <img src="${tripStatus}" alt="confirmation status icon" class="statusIcon"> 
                </div>       
              </div>
              <div class="destinationImg">
                <img src=${destination.image} alt="${destination.alt}" class="destinationImg" >
              </div>
            </div>
            <div class="bodyContent">
              <div class="departureIconHolder">
                <img src="./images/airplane.png" alt="takeoff icon" class="takeoffIcon">
                <h3>Departs: ${trip.date}</h3>
              </div>
              <h4>Cost: $${totalCost}</h4>
              <h4>number of travelers: ${trip.travelers}</h4>
            </div>
          </article>
     `

  },
//query selectors

  bookBtn,
  submitBookingBtn,
  submitLoginBtn
}

export default domUpdates;