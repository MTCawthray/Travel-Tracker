class Agency {
  constructor(travelers, trips, destinations) {
    this.travelers = travelers;
    this.trips = trips;
    this.destinations = destinations;
  }

  findTraveler(id) {
    if (id > 0 && id <= this.travelers.length) {
    return this.travelers.find(traveler => traveler.id === id);
    };
    return 'Please input a valid user ID.';
  }

  getTrips(id) {
    if (id > 0 && id <= this.travelers.length) {
      return this.trips.filter(trip => trip.userID === id);
    }
    return 'Please input a valid user ID.';
  }

  getDestinations(id) {
    if (id > 0 && id <= this.travelers.length) {
      let trips = this.getTrips(id);
      return trips.map(trip => {
        return this.destinations.find(place => trip.destinationID === place.id)
      })
    }
    return 'Please input a valid user ID.';
  }

  getAllDestinationNames() {
    return this.destinations.map(dest => dest.destination);
  }

}

export default Agency;