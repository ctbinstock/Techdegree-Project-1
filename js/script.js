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
    } else {
      var randomCit = " ";
    }
    if(message.year !== false){
      var randomYear = "<p>" + message.year + "</p>";
    } else {
      var randomYear = " ";
    }
    message = "<h1>" + message.quote + "</h1>" + " <p>" + message.source + "</p>" + " " + randomCit + " " + randomYear;
    return message;
  }
