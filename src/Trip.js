class Trip {
  constructor(tripID, user, dest, numTravelers, depart, dur) {
    this.id = tripID;
    this.userID = user.id;
    this.destinationID = dest.id;
    this.travelers = numTravelers;
    this.date = depart;
    this.duration = dur;
    this.status = 'pending';
    this.suggestedActivities = [];
  }
}

export default Trip;