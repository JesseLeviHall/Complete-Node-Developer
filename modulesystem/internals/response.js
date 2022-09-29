function decrypt(data) {
  return "decrypted data";
}

function read() {
  return decrypt("data");
}

module.exports = { read };

//we can also use " exports.read = read " instead of " module.exports = { read } ".
