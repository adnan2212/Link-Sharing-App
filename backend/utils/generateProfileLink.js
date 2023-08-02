const shortid = require("shortid");

const generateProfileLink = () => {
  return "user-" + shortid.generate();
};

module.exports = generateProfileLink;
