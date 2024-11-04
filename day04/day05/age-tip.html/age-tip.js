function calculateage()
{
var todayDate = new Date ()
var currentYear = todayDate.getFullYear()

var my DOB = document.getElementById ('dob').value;


var myDOB = new Date(DOB);
var myDOBYear = myDOB.getFullYear();

//console.log(currentYear);
///console.log(myDOBYear)

var myAge = currentYear - myDOBYear;
document.getElementById ('message') .innerHTML ="you are  " + myAge" year old;

























}