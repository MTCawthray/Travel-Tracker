import chai from 'chai';
const expect = chai.expect;

import Agency from '../src/Agency.js';
import Traveler from '../src/Traveler.js';
import sampleTravelers from '../src/sample-data/sample-traveler-data.js';
import sampleTrips from '../src/sample-data/sample-trips-data.js';
import sampleDestinations from '../src/sample-data/sample-destinations-data.js';

describe('Agency', () => {

  let travelers, trips, destinations, agency;

  beforeEach(() => {
    travelers = sampleTravelers;
    trips = sampleTrips;
    destinations = sampleDestinations;
    agency = new Agency(travelers, trips, destinations);
  })

  it('should be a function', () => {
    expect(Agency).to.be.a('function');
  });

  it('should be an instance of a class', () => {
    expect(agency).to.be.an.instanceOf(Agency);
  });

  it('should hold travelers data', () => {
    expect(agency.travelers).to.eql(travelers);
  });

  it('should hold trips data', () => {
    expect(agency.trips).to.eql(trips);
  });

  it('should hold destination data', () => {
    expect(agency.destinations).to.eql(destinations);
  });


describe('findTraveler()', () => {

  it('should be a function', () => {
    expect(agency.findTraveler).to.be.a('function');
  });

  it('should return a traveler object', () => {
    expect(agency.findTraveler(1)).to.eql(travelers[0]);
    expect(agency.findTraveler(2)).to.eql(travelers[1]);
  });

  it('should return a message if invalid id is passed as an argument', () => {
    expect(agency.findTraveler()).to.equal('Please input a valid user ID.');
    expect(agency.findTraveler('a')).to.equal('Please input a valid user ID.');
    expect(agency.findTraveler(5)).to.equal('Please input a valid user ID.');
  });
});

describe('getTrips()', () => {

  it('should be a function', () => {
    expect(agency.getTrips).to.be.a('function');
  });

  it('should return an array of a user\'s trips', () => {
    expect(agency.getTrips(1)).to.eql([sampleTrips[0], sampleTrips[1], sampleTrips[2]]);
  });

  it('should return a message when an invalid id is passed', () => {
    expect(agency.getTrips('b')).to.equal('Please input a valid user ID.');
  });
});

describe('getDestinations()', () => {

  it('should be a function', () => {
    expect(agency.getDestinations).to.be.a('function');
  });

  it('should return an array of a user\'s destinations', () => {
    expect(agency.getDestinations(2)).to.eql([sampleDestinations[3], sampleDestinations[4], sampleDestinations[5]]);
  });

  it('should return a message when an invalid id is used', () => {
    expect(agency.getDestinations(-4)).to.equal('Please input a valid user ID.');

    expect(agency.getDestinations('z')).to.equal('Please input a valid user ID.');
  });
});

describe('getAllDestinationNames()', () => {

  it('should be a function', () => {
    expect(agency.getAllDestinationNames).to.be.a('function');
  });

  it('should return an array of all of the destinations', () => {
    expect(agency.getAllDestinationNames()).to.eql(agency.destinations.map(dest => dest.destination));
  });

});

describe('findDestinationInfo()', () => {

  it('should be a function', () => {
    expect(agency.findDestinationInfo).to.be.a('function');
  });

  it('should return a destination object that matches the name passed', () => {
    expect(agency.findDestinationInfo('Toronto, Canada')).to.eql(destinations[1]);
  });

})
});

