var fs = require(fs);
var apiKeys = require("./keys.js");
var spotify = require("spotify");
var request = require("request");
var twitter = require("twitter");

var twitterApiKey = new Twitter(apiKeys.twitterKeys);

var command = process.argv[2];

switch(command){
    case "my-tweet":
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

  function getTweets(){
  var params = {screen_name: 'JamesBondCoding',
                count: 20};
  twitterApiKey.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error) {
      console.log("Got an error " + error);
      console.log("<---------------------------->");
    } else {
        for (var i =0; i < tweets.length; i++){
      console.log("My Tweet: " + tweets[i].text + '\n' + " Data Created: " + tweets[i].created_at);    
      console.log("<----------------------------->");
      }
    }
    });
  };
  myTweets();
  // ------------------------------------Twitter Request
  client.get(path, params, callback);
  client.post(path, params, callback);
  client.stream(path, params, callback);





//------------------------------------- Spotify
  var Spotify = require('node-spotify-api');
  
 var spotify = new Spotify({
   id: <your spotify client id>,
   secret: <your spotify client secret>
 });
  
 spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
   if (err) {
     return console.log('Error occurred: ' + err);
   }
  
 console.log(data); 
 });





//--------------------------------------- Request


  request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  }); 



