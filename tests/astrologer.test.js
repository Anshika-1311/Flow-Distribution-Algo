// tests/astrologer.test.js

const { assignUserToAstrologer } = require('../services/assignmentService');  // Import the method
const astrologers = require('../data/astrologers');  // Import mock astrologer data

// Mocking the astrologer data
jest.mock('../data/astrologers', () => [
  { id: '1', name: 'Astrologer A', currentConnections: 2, boostFactor: 1, isTopAstrologer: false },
  { id: '2', name: 'Astrologer B', currentConnections: 3, boostFactor: 1.5, isTopAstrologer: true },
  { id: '3', name: 'Astrologer C', currentConnections: 1, boostFactor: 2, isTopAstrologer: false },
]);

test('assigns user to astrologer with least effective connections', () => {
  // Mock user data
  const user = { userId: 'u1', userName: 'User One' };

  // Run the algorithm to assign the user
  const assignedAstrologer = assignUserToAstrologer(user);

  // Assert that the astrologer assigned is the one with the least effective connections
  expect(assignedAstrologer).toBeDefined();
  expect(assignedAstrologer.name).toBe('Astrologer C');  // Assuming Astrologer C has the least effective connections
});