class Traveler {
  constructor(travelerData, trips, destinations) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.travelerTrips = trips;
    this.travelerDestinations = destinations;
  }

  findDestination(destID) {
    let destinationIDs = this.travelerDestinations.map(dest => dest.id);
    if (destID > 0 && destinationIDs.includes(destID)) {
      return this.travelerDestinations.find(destination => destID === destination.id);
    } else {
      return 'Sorry, we couldn\'t find that destination id.';
    }
  }
 
  getTripCost(tripID) {
    if (this.travelerTrips.find(trip => trip.id === tripID)) {
      let bookedTrip = this.travelerTrips.find(trip => trip.id === tripID);
      let destination = this.travelerDestinations.find(place => place.id === bookedTrip.destinationID);
      let lodgingCost = destination.estimatedLodgingCostPerDay;
      let flightCost = destination.estimatedFlightCostPerPerson;
      let agentFee = (lodgingCost + flightCost) * .1;
      let costBreakdown = {
        flight: flightCost,
        lodging: lodgingCost,
        fee: agentFee,
        total: flightCost + lodgingCost + agentFee
      }
      return costBreakdown;
    }
  return 'Please enter a valid trip ID.';
  }

  getTotalCostAllTrips() {
    if (this.travelerTrips.length > 0) {
      return this.travelerTrips.reduce((acc, trip) => {
        let tripCost = this.getTripCost(trip.id);
        acc += tripCost.total
        return acc;
      }, 0)
    }
    return 0;
  }

  getYearlyCost(currentYear) {
    let thisYearsTrips = this.travelerTrips.filter(trip => {
      let year = trip.date.split('/')[0];
      if (year === currentYear) {
        return trip;
      }
    });
    if (thisYearsTrips.length > 0) {
      return thisYearsTrips.reduce((acc, trip) => {
        let tripCost = this.getTripCost(trip.id);
        acc += tripCost.total;
        return acc;
      }, 0);
    }
    return 0;
  }

}

export default Traveler;