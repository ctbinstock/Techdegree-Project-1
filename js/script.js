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
    var occupation = message.occupation;
    var category = message.category;
  //message to be displayed in the end combining strings
    message = "<p class='quote'>" + quote + "</p>" + "<p class='source'>" + source + ",";
  //if there is an occupation add to message, if not delete the variable
    if(occupation !== undefined){
      message += "<span class='occupation'> " + occupation + "</span>";
    } else {
      delete occupation
    }
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
  }
  //change the quote with every click
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function randomColor() {
  var Num1 = parseInt(Math.floor(Math.random() * 256));
  var Num2 = parseInt(Math.floor(Math.random() * 256));
  var Num3 = parseInt(Math.floor(Math.random() * 256));
  var rgbnum = "rgb(" + Num1 + "," + Num2 + "," + Num3 + ")";
  document.getElementById("body").style.backgroundColor = rgbnum;
  //change the button background color to match body background color
  document.getElementById("loadQuote").style.backgroundColor = rgbnum;
}
  //change the background color with every click
  document.getElementById("loadQuote").addEventListener("click", randomColor, false);


//function to click the button and generate new quote
function setClick() {
  document.getElementById('loadQuote').click();
}
//interval to click the button
var intervalID = window.setInterval(setClick, 8000);
