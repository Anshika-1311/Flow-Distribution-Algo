const { getNextAstrologer } = require('../services/flowDistributor');
const astrologers = require('../data/astrologers');
const assignments = require('../data/assignments');

exports.getAllAssignments = (req, res) => {
  res.json({ assignments });
};

exports.assignUser = (req, res) => {
  const astrologer = getNextAstrologer(astrologers);
  astrologer.currentConnections++;

  res.json({
    message: 'User assigned successfully',
    assignedTo: astrologer
  });
};