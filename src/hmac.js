const crypto = require("crypto");

// Functional approach
// const generateHmac = (message, key, algorithm = "sha256") => {
//   const hmac = crypto.createHmac(algorithm, key);
//   hmac.update(message);
//   const digest = hmac.digest("hex");
//   return digest;
// };

// OOP implementation option
class HMACGenerator {
  generateHmac(message, key, algorithm = "sha256") {
    const hmac = crypto.createHmac(algorithm, key);
    hmac.update(message);
    const digest = hmac.digest("hex");
    return digest;
  }
}

const hmacGenerator = new HMACGenerator();

module.exports = { generateHmac: hmacGenerator.generateHmac };
