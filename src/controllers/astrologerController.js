const astrologers = require('../data/astrologers');  // Import astrologers data

// Assign user to astrologer based on effectiveConnections and boostFactor
exports.assignUserToAstrologer = (req, res) => {
  const { userId, userName } = req.body;

  if (!userId || !userName) {
    return res.status(400).json({ error: 'Missing userId or userName' });
  }

  // Step 1: Calculate effectiveConnections for each astrologer
  astrologers.forEach(astro => {
    astro.effectiveConnections = astro.currentConnections / astro.boostFactor;
  });

  // Step 2: Sort astrologers to find the most eligible one
  astrologers.sort((a, b) => {
    // First, compare effectiveConnections
    if (a.effectiveConnections !== b.effectiveConnections) {
      return a.effectiveConnections - b.effectiveConnections;
    }
    // If effectiveConnections are equal, check if they are top astrologers
    if (b.isTopAstrologer !== a.isTopAstrologer) {
      return b.isTopAstrologer - a.isTopAstrologer;
    }
    // If they are still equal, compare by boostFactor
    return b.boostFactor - a.boostFactor;
  });

  // Step 3: Assign user to the most eligible astrologer
  const assignedAstrologer = astrologers[0]; // Most eligible astrologer after sorting
  assignedAstrologer.currentConnections += 1; // Increment current connections for this astrologer

  res.status(200).json({
    message: 'User assigned successfully',
    assignedTo: assignedAstrologer,
  });
};

// Update boost factor for an astrologer
exports.updateBoostFactor = (req, res) => {
  const { id } = req.params;
  const { boostFactor } = req.body;

  const astrologer = astrologers.find(a => a.id === id);
  if (!astrologer) {
    return res.status(404).json({ message: 'Astrologer not found' });
  }

  // Update boost factor and determine if the astrologer is a top astrologer
  astrologer.boostFactor = boostFactor;
  astrologer.isTopAstrologer = boostFactor > 1;

  res.json({
    message: 'Boost factor updated',
    astrologer,
  });
};