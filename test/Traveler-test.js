import chai from 'chai';
import Traveler from '../src/Traveler.js';
import Agency from '../src/Agency.js';
import sampleTrips from '../src/sample-data/sample-trips-data.js';
import sampleDestinations from '../src/sample-data/sample-destinations-data.js'
import sampleTravelers from '../src/sample-data/sample-traveler-data.js';
const expect = chai.expect;

describe('Traveler class', () => {
let travelersData, tripsData, destinationsData, traveler1, traveler2, traveler3, agency;

  beforeEach(() => {
    travelersData = sampleTravelers;
    tripsData = sampleTrips;
    destinationsData = sampleDestinations;
    agency = new Agency(travelersData, tripsData, destinationsData);
    traveler1 = new Traveler(agency.findTraveler(1), agency.getTrips(1), agency.getDestinations(1));
    traveler2 = new Traveler(agency.findTraveler(2), agency.getTrips(2), agency.getDestinations(2));
    traveler3 = new Traveler(agency.findTraveler(3), agency.getTrips(3), agency.getDestinations(3));
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of the Traveler class', () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
  })

  it('should hold travelers data', () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler2.name).to.equal('Rachael Vaughten');
    expect(traveler3.type).to.equal('shopper');
    expect(traveler1.travelerTrips[0].date).to.equal('2021/01/09');
    expect(traveler2.travelerDestinations[2].destination).to.equal('Miami, Florida');
  })

describe('getTripCost()', () => {

  it('should be a function', () => {
    expect(traveler1.getTripCost).to.be.a('function');
  });

  it('should return the cost for a specified trip', () => {
    expect(traveler1.getTripCost(89)).to.eql({flight: 450, lodging: 90, fee: 54, total: 594})
  });

  it('should return a message if trip is invalid', ()=> {
    expect(traveler1.getTripCost(431)).to.equal('Please enter a valid trip ID.');

    expect(traveler1.getTripCost('bananna')).to.equal('Please enter a valid trip ID.');
  });

});
});
