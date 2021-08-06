class Traveler {
  constructor(travelerData, trips, destinations) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.travelerTrips = trips;
    this.travelerDestinations = destinations;
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
}

export default Traveler;