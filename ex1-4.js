var http = require('http');

// the url we want, plus the path and options we need
var options = {
    host: 'ec2-54-251-166-130.ap-southeast-1.compute.amazonaws.com',
    port: 8124,
    path:'/?file=secondary',
    method: 'GET'
};

var processPublicTimeline = function(response) {
    // finished ? ok, write the data to a file
    console.log('finished request');
};

for (var i = 0; i < 2000; i++) {
    // make the request, and then end it, to close the connection
    http.request(options, processPublicTimeline).end();
}
