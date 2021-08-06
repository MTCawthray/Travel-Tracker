const domUpdates = {
  renderTravelerInfo(tripInfo, destinationInfo, traveler) {
   let cardContainer = document.getElementById('card-container');
   let totalCost = traveler.getTripCost(tripInfo.id).total
   console.log(totalCost);
   cardContainer.innerHTML = ``;
   cardContainer.innerHTML = `
    <article class="travelCard">
          <div class="headerContent">
            <img src=${destinationInfo.image} alt="${destinationInfo.alt}" class="destinationImg" >
            <div class="locationIconHolder">
              <img src="./images/passport.png" alt="location icon" class="locationIcon">
              <h2>${destinationInfo.destination}</h2>
            </div> 
            <div class="confirmationHolder">
              <h3>status: ${tripInfo.status}</h3>
              <img src="./images/confirm.png" alt="confirmation status icon" class="statusIcon"> 
            </div>        
          </div>
          <div class="bodyContent">
            <div class="departureIconHolder">
              <img src="./images/airplane.png" alt="takeoff icon" class="takeoffIcon">
              <h3>Departs: ${tripInfo.date}</h3>
            </div>
            <h4>Cost: $${totalCost}</h4>
            <h4>number of travelers: ${tripInfo.travelers}</h4>
          </div>
        </article>
   `
  }

}

export default domUpdates;