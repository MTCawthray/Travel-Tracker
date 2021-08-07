const domUpdates = {
  renderTravelerInfo(traveler, trips) {
    let cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ``;
    trips.forEach(trip => {
     let totalCost = traveler.getTripCost(trip.id).total;
     let destination = traveler.findDestination(trip.destinationID);
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
                  <img src="${'./images/confirm.png'}" alt="confirmation status icon" class="statusIcon"> 
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
    let footerDisplay = document.getElementById('footer-info');
    footerDisplay.innerHTML = ``;
    footerDisplay.innerHTML = `
      <h4 class="footerHeading" id="greeting">Hello, ${traveler.name}!</h4>
      <h4 class="footerHeading" id="total-spent">This Years Total $${traveler.getYearlyCost('2021')}</h4>
      `
  }

}

export default domUpdates;