const astrologers = require('../data/astrologers');

exports.updateBoostFactor = (req, res) => {
  const { id } = req.params;
  const { boostFactor } = req.body;

  const astro = astrologers.find(a => a.id === id);
  if (!astro) return res.status(404).json({ message: 'Astrologer not found' });

  astro.boostFactor = boostFactor;
  astro.isTopAstrologer = boostFactor > 1;

  res.json({ message: 'Boost factor updated', astrologer: astro });
};