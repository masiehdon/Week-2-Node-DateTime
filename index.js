const fs = require("fs");
const moment = require('moment');


// Display date

const today = moment().format("YYYY-MM-DD");
startDate = today;
endDate = "2023-01-10"

 const differenceInDays = function(startDate, endDate){
   const start = moment(startDate, 'YYYY-MM-DD');
  const end = moment(endDate, 'YYYY-MM-DD');
  const daysDifference = end.diff(start, 'days');
  return (
      `I started this course ${Math.abs(daysDifference)} days ago but I still  can´t code!`
    )}
   

 const daysSinceCourseStart = differenceInDays(startDate, endDate);

 // Take date as user input and calculate the difference in days

const userDate = process.argv[2];

const date = moment(userDate);

const differenceInputNow = function(now, userDate){
  userDate = moment(userDate, 'YYYY-MM-DD');
  now = moment(now, 'YYYY-MM-DD');
  if(userDate.diff(now, 'days') <= 0){
    console.log(`The date lies in the future.`)
  }else{
    console.log(`This date was ${userDate.diff(now, 'days')} days ago.`);
  }

}

differenceInputNow(date, today)
 
function getCurrentDate() {
  const currentDate = new Date();
  return currentDate.toLocaleDateString();
}
function createHtmlFile(filename) {

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="index.css">
	<title>Assignment 2- Node</title>
    
</head>
<body>
<h1>Dynamically created HTML in Node.js</h1>

<section id="date"> Today is: ${getCurrentDate()} </section>
	
    <p> ${daysSinceCourseStart} </p>
</body>
</html>
`

fs.writeFile(`${filename}.html`, htmlContent, (err)=> {
    if (err) throw err;
  console.log(`Its done! ${filename}.html is created!`);
})}

createHtmlFile(`index`)
  
