const Astrologer = require('../models/astrologer');

// Creating astrologers with and without custom boostFactor and isTopAstrologer
const astrologers = [
  new Astrologer('1', 'Astro A'),                          // Default boostFactor = 1
  new Astrologer('2', 'Astro B', true, 2),                // Top astrologer with boostFactor = 2
  new Astrologer('3', 'Astro C'),                         // Default boostFactor = 1
];

module.exports = astrologers;