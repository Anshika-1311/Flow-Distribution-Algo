const { assignUserToAstrologer } = require('../services/flowDistributor');
const astrologers = [
  { id: 'a1', name: 'Astro1', isTop: false, weight: 1, currentConnections: 0 },
  { id: 'a2', name: 'Astro2', isTop: true, weight: 2, currentConnections: 0 }
];

test('assign user to astrologer with lowest load', () => {
  const user = { id: 'u1', name: 'User1' };
  const result = assignUserToAstrologer(user, astrologers);
  expect(result.user.assignedTo).toBe('a2');
});