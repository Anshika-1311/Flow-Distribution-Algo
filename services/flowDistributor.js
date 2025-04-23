function getNextAstrologer(astrologers) {
  const weighted = astrologers.map(a => ({
    ...a,
    effectiveConnections: a.currentConnections / (a.boostFactor || 1)
  }));

  weighted.sort((a, b) => a.effectiveConnections - b.effectiveConnections);
  return weighted[0];
}

module.exports = { getNextAstrologer };