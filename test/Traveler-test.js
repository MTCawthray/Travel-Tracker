import chai from 'chai';
import Traveler from '../src/Traveler.js';
import sampleTravelers from '../src/sample-data/sample-traveler-data.js';
const expect = chai.expect;

describe('Traveler class', () => {
let travelersData, traveler1;

  beforeEach(() => {
    travelersData = sampleTravelers;
    traveler1 = new Traveler(travelersData);
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of the Traveler class', () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
  })

  it('should hold travelers data', () => {
    expect(traveler1.travelersData).to.eql(travelersData);
  })
});
