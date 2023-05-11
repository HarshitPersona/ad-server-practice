const uuid = require("uuid");

const generateAuthToken = () => {
  const payload = { generatedApiKey };
  const secret = "mysecretkey";
  const options = { expiresIn: "1h" };
  const token = jwt.sign(payload, secret, options);
  return token;
};

const generatePublisherId = () => {
  const publisherId = uuid.v4();
  return publisherId;
};

const generateApiKey = () => {
  const apiKey = uuid.v4();
  return apiKey;
};

module.exports = {
  generateAuthToken,
  generatePublisherId,
  generateApiKey,
};
