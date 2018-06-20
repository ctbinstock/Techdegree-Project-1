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
  //call getRandomQuote function and store in variable
    var message = getRandomQuote();
  //creating variables that will hold string from object
    var quote = message.quote;
    var source = message.source;
    var citation = message.citation;
    var year = message.year;
  //message to be displayed in the end combining strings
    message = "<p class='quote'>" + quote + "</p>" + "<p class='source'>" + source
  //if there is a citation add to message, if not delete the variable
    if(citation !== undefined){
      message += "<span class='citation'> " + citation + "</span>";
    } else {
      delete citation
    }
  //if there is a year add to message, if not delete the message
    if(year !== undefined){
      message += "<span class='year'>" + year + "</span></p>";
    } else {
      delete year
    }
  //print the message to the html
    document.getElementById("quote-box").innerHTML = message;
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  }
