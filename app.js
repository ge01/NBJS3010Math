/****************************************************
*                    Math Objects                   *
****************************************************/
document.write(Math.PI);

var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

/****************************************************
*                    Date Objects                   *
****************************************************/
function doSomething(){
  document.write("Tuna ");
}

//setInterval("doSomething", 1000);

function printTime(){
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  document.write(hours + ":" + minutes + ":" + seconds + "<br>");
}

printTime();
