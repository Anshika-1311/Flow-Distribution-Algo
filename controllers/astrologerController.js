const astrologers = require('../data/astrologers.json');
const { assignUserToAstrologer, toggleTopAstrologer } = require('../services/flowDistributor');

exports.getAstrologers = (req, res) => {
  res.json(astrologers);
};

exports.connectUser = (req, res) => {
  const user = req.body;
  const result = assignUserToAstrologer(user, astrologers);
  res.json(result);
};

exports.toggleAstrologer = (req, res) => {
  const { id, isTop } = req.body;
  const result = toggleTopAstrologer(id, isTop, astrologers);
  res.json(result);
};
