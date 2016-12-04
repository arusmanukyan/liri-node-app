
var myKeys = require("./keys.js");
var twitter = require("twitter");
var client = new twitter(myKeys.twitterKeys);
var spotify = require("spotify"); 
var request = require("request");


 var command = process.argv[2];
 if (command =="my-tweets"){
 	myTweets()
 };
 if (command =="spotify-this-song"){
 	mySpotify()
 };
 if (command =="movie-this"){
 	movie()
 };



function myTweets(){
var params = {screen_name: 'arusmanukyan', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
  	console.log("error" + error)
  }else{
  	for (var i = 0; i < tweets.length; i++) {
  	console.log("---------------------------")
    console.log(tweets[i].text);
	console.log("---------------------------")
	}
  }
});
}


function mySpotify(){
var name = [];
var userFirst = process.argv[2];
var userSecond = process.argv[3];

spotify.search({ type: 'track', query: "name" }, function(error, response) {
    if (error) {
        console.log('Error occurred: ' + error);
        return;
    }else{
    	
        console.log("Artist: " + response.tracks.items[0].artist);
        console.log("");
        console.log("Song name: " + response.tracks.items[0].name);
        console.log("")
        console.log("Link: " + response.tracks.items[0].preview_url);
        console.log("")
        console.log("Album: " + response.tracks.items[0].album);
      }
 })
 
};

 function movie(){
  
  var movieName = "frozen";
  
  var queryURL = "http://omdbapi.com/?t=" + movieName + "&tomatoes=true" + "&r=json";

request(queryURL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var result = JSON.parse(body);
        console.log("Title: " + result.Title);
        console.log("");
        console.log("Year: " + result.Year);
        console.log("");
        console.log("IMDB Rating: " + result.imdbRating);
        console.log("");
        console.log("Country of Production: " + result.Country);
        console.log("");
        console.log("Language: " + result.Language);
        console.log("");
        console.log("Plot Summary: " + result.Plot);
        console.log("");
        console.log("Actors: " + result.Actors);
        console.log("");
        console.log("Rotten Tomatoes Rating: " + result.tomatoRating);
        console.log("");
        console.log("Rotten Tomatoes URL: " + result.tomatoURL);
        console.log("");

  }
})
};