function getMessages(req, res) {
  res.send(
    "<html><body><ul><li>Hello Jane!</li><li>What are your thoughts on astronomy?</li></ul></body></html>"
  );
}

function postMessages(req, res) {
  res.send("Message received!");
  console.log("updating messages");
}

module.exports = {
  getMessages,
  postMessages,
};
