class Astrologer {
    constructor(id, name, isTopAstrologer = false, boostFactor = 1) {
      this.id = id;
      this.name = name;
      this.isTopAstrologer = isTopAstrologer;
      this.boostFactor = boostFactor;
      this.currentConnections = 0;
      this.effectiveConnections = 0;
    }
  }
  
  module.exports = Astrologer;  