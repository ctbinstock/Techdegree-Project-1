// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var randomQuote = " ";
var randomNumber;

//function to printQuote
function printQuote() {

}

//function to select and return random quote object from quotes array.
function getRandomQuote( test ) {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber].quote;
  return randomQuote;
  }
