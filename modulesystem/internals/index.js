const request = require("./request");
const response = require("./response");

module.exports = {
  ...require("./request"),
  ...require("./response"),
  //reqest timeout is included in the spread operator above.
};
