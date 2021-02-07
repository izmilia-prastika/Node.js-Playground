var flight = require('./flight');

flight.setOrigin('Washington DC');
flight.setDestination('Bali');
flight.setNumber(100);

console.log(flight.getInfo());