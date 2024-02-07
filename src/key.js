const crypto = require("crypto");

const KEY_LENGTH = 256;

// Generating a crypto-strong random key
// const secretKey = crypto.randomBytes(KEY_LENGTH / 8).toString("hex");

class SecretKeyGenerator {
  constructor(keyLength) {
    this.keyLength = keyLength;
  }
  generateSecretKey() {
    return crypto.randomBytes(this.keyLength / 8).toString("hex");
  }
}

const secretKeyGenerator = new SecretKeyGenerator(KEY_LENGTH);
const secretKey = secretKeyGenerator.generateSecretKey();

module.exports = { secretKey: secretKey };
