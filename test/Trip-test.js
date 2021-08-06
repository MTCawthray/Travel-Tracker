import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler.js';
import Agency from '../src/Agency.js';
import Trip from '../src/Trip.js';
import sampleTrips from '../src/sample-data/sample-trips-data.js';
import sampleDestinations from '../src/sample-data/sample-destinations-data.js'
import sampleTravelers from '../src/sample-data/sample-traveler-data.js';

describe('Trip class', () => {

  let agency, trip1, trip2, traveler1, traveler2, tripsData, travelersData, destinationsData;

  beforeEach(() => {
    travelersData = sampleTravelers;
    tripsData = sampleTrips;
    destinationsData = sampleDestinations;
    agency = new Agency(travelersData, tripsData, destinationsData);
    traveler1 = new Traveler(agency.findTraveler(1));
    traveler2 = new Traveler(agency.findTraveler(2));
    trip1 = new Trip(agency.getTrips(traveler1.id)[0]);
    trip2 = new Trip(agency.getTrips(traveler2.id[0]));

  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of the Trip class', () => {
    expect(trip1).to.be.an.instanceOf(Trip);
    expect(trip2).to.be.an.instanceOf(Trip);
  });

  it('should hold trip data', () => {
    expect(trip1.id).to.equal(117);
    expect(trip1.userID).to.equal(1);
    expect(trip1.destinationID).to.equal(28);
    expect(trip1.travelers).to.equal(3);
    expect(trip1.date).to.equal('2021/01/09');
    expect(trip1.duration).to.equal(15);
    expect(trip1.status).to.equal('approved');
    expect(trip1.suggestedActivities).to.eql([]);
  });

});