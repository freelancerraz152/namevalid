// fname 
var fName =prompt("write your first Name") 
// lname
var lName =prompt("write your last Name")
// add fname lname
var fullName = fName.trim() + " " + lName.trim()
// add firslater uppercase
fullName = fullName[0].toUpperCase() + fullName.slice(1)
// find secWord
var secWord = fullName.indexOf(" ")
// full name is correct
fullName = fullName.slice(0,secWord+1) + fullName[secWord +1].toUpperCase() +fullName.slice(secWord+2)

document.getElementById("demo").innerHTML =fullName
document.getElementById("demo").style.color="#9acd32"


