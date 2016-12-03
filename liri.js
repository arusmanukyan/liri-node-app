
// var myKeys = require("./keys.js");

// var twitter = require("twitter");
 
// var client = new twitter(myKeys.twitterKeys);
 
// var params = {screen_name: 'arusmanukyan', count: 20};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (error) {
//   	console.log("error" + error)
//   }else{
//   	for (var i = 0; i < tweets.length; i++) {
  	
//     console.log(tweets[i].text);
// 	}
//   }
// });

var spotify = require('spotify');

var first = process.argv[2];
var second = process.argv[3];
 
spotify.search({ type: 'track', query: '' }, function(error, data) {
    if (error) {
        console.log('Error occurred: ' + error);
    }else{
    	for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
      }
 }
 
});

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// })