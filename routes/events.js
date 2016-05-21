// GET Methods
var request = require("request");

// API URL
var url = "https://api.zoomcare.com/zoomapi-service/v2/rest/content/type/event";

// GET EVENTS
request({
    url: url,
    json: true,
    contentType: 'application/json'
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      events = body;
    }
})

// ROUTE DATA FOR EVENTS PAGE
exports.list = function(req, res){
  res.render('event/index', {
    title: 'Events',
    events: events,
  });
};

// ROUTE DATA FOR INDIVIDUAL EVENTS DETAIL TEMPATE
exports.read = function (req, res) {
  var event = events[req.params.id - 1];
  res.render('event/event', {
    title: event.title,
    event: event
  });
};