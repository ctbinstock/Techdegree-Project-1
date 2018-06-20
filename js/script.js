// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var randomQuote = " ";
var randomNumber;
var message;
var quote;

//function to select and return random quote object from quotes array.
function getRandomQuote( test ) {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
  }

  //function to printQuote
  function printQuote() {
    var message = getRandomQuote();
    if(message.citation !== false){
      var randomCit = "<p> " + message.citation + "</p>";
    } else{
      delete message[message.citation];
    }
    if(message.year !== false){
      var randomYear = "<p>" + message.year + "</p>";
    } else {
      var randomYear = "";
    }
    message += "<p class='quote'>" + message.quote + "</p>" + "<p class='source'>" + message.source + "<span class='citation'>" + randomCit + "</span>" + "<span class='year'>" + randomYear + "</span></p>";
    document.getElementById("quote-box").innerHTML = message;
  }
