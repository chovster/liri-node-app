var fs = require("fs");
var apiKeys = require("./keys.js");
var spotify = require("node-spotify-api");
var request = require("request");
var twitter = require("twitter");

var client = new twitter(apiKeys.twitterKeys);
var spotifyApiKey = new spotify(apiKeys.spotifyKeys);

var command = process.argv[2];
var searchTerm = process.argv[3];

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
  if (searchTerm === undefined || searchTerm ==="")
    console.log('No song selected, oh well too bad. Here is a song for you');
    searchTerm = 'The Sign Ace of Base'
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

spotifyThisSong();


//-------------------------------OMDB

function movieThis(){
  if (searchTerm === undefined || searchTerm === "")
    console.log("You didn't insert a movie title, but here you go.")
    searchTerm = 'Mr.Nobody'
};

var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";
console.log(queryUrl);

request(queryUrl, function(error, response, body){
  if (!error && response.statusCode === 200){
    var info = JSON.parse(body);
    console.log(
      "Title " + info.Title + '\n' +
      "Year: " + info.Year + '\n' +
      "IMDB Rating: " + info.Ratings[0].Value + '\n' +
      "Country Production: " + info.Country + '\n' +
      "Language: " + info.Language + '\n' +
      "Plot: " + info.Plot + '\n' +
      "Actors: " + info.Actors
    );
  }
})
movieThis();


function doWhatItSays(){
  fs.readFile("random.txt", "utf8", function(err, data){
    if (err) {
      return console.log('An error occured' + err)
    } else {
        var dataArr = data.split(',');
          command = dataArr[0];
          searchTerm = dataArr[1];
        switchCommand();

    }
  });
};




//--------------------------------------- Request
//   request('http://www.google.com', function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
//   }); 









