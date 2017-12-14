var fs = require("fs");
var apiKeys = require("./keys.js");
var spotify = require("node-spotify-api");
var request = require("request");
var twitter = require("twitter");

var client = new twitter(apiKeys.twitterKeys);
var spotifyApiKey = new spotify(apiKeys.spotifyKeys);

var command = process.argv[2];
var spotifySearch = process.argv[3];

function switchCommand() {
switch(command){
    case "my-tweets":
      myTweets();
      break;

    case "spotify-this-song":
      spotifyThisSong();
      break;

    case "movie-this":
      movieThis();
      break;

    case "do-what-it-says":
      doWhatItSays();
      break;
}
};
  function myTweets(){
  var params = {screen_name: 'JamesBondCoding',
                count: 20};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
//    console.log(tweets);
    if (error) {
      console.log(error);
      
    } else {
        for (var i =0; i <= 19; i++){
      console.log("My Tweet: " + tweets[i].text + '\n' + " Data Created: " + tweets[i].created_at);    
	  console.log("<----------------------------->");
	
	  }
	// console.log(tweets);
    }
    });
  };
  myTweets();
 

//------------------------------------- Spotify

function spotifyThisSong(){
// var spotify = new Spotify({spotifyApiKey});
  console.log('Music time!')
  if (spotifySearch === undefined || spotifySearch ==="")
    console.log('No song selected, oh well too bad. Here is a song for you');
    spotifySearch = 'The Sign Ace of Base'
};

spotifyApiKey.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
 if (err) {
   return console.log('Oh shit an error occurred: ' + err);
 } else {
   for (var i = 0; data.tracks.items[0].artists.length; i++){
     console.log ("Artist: " + data.tracks.items[0].artists[i].name);
   }
   console.log ("Song Name: " + data.tracks.items[0].name);
   console.log ("Preview " + data.tracks.items[0].preview_url);
   console.log ("Album Name " + data.tracks.items[0].album.name);
 }

console.log(data); 
});









//--------------------------------------- Request


//   request('http://www.google.com', function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
//   }); 









