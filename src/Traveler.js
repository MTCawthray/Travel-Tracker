class Traveler {
  constructor(travelerData, trips, destinations) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.travelerTrips = trips;
    this.travelerDestinations = destinations;
  }
}

export default Traveler;