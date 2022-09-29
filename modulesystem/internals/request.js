const REQUEST_TIMEOUT = 1000;

function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`Sending data to ${url} with ${encryptedData}`);
}

//console.log(module); //gives us details about the module.

module.exports = { send, REQUEST_TIMEOUT }; //we can also use " exports.send = send " instead of " module.exports = { send } ".
