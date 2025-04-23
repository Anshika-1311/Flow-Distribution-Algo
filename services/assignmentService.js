const astrologers = require('../astrologerData');

function assignUserToAstrologer(user) {
  const weightedPool = [];

  astrologers.forEach(astro => {
    const weight = astro.isTopAstrologer ? astro.weight : 1;
    for (let i = 0; i < weight; i++) {
      weightedPool.push(astro);
    }
  });

  weightedPool.sort((a, b) => a.currentLoad - b.currentLoad);

  const selected = weightedPool[0];
  selected.currentLoad += 1;

  console.log(`Assigned ${user.userName} to ${selected.name}`);
  return selected;
}

module.exports = { assignUserToAstrologer };