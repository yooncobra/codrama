var newNode = document.createElement("p");
var newText = document.createTextNode("정약용");
newNode.appendChild(newText);

var parentNode = document.getElementById("body_id");
var oldNode = document.getElementById("person");
var replaceNode = parentNode.replaceChild(newNode.oldNode);
document.write("원래의 node의 Text값: " + oldNode.innerHTML);