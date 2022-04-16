//path module 

//const path = require('path');
//const myPath = 'E:\Study\Nodejs-basic\index.js';
//console.log(path.parse(myPath));


//os module

//const os = require('os');
//console.log(os.platform());
//console.log(os.cpus());



//fs module
// const fs = require('fs');

// fs.writeFileSync('myFile.txt', 'Hello World. ');
// fs.appendFileSync('myFile.txt', 'Are you okay?'); //sync 
//const data = fs.readFileSync('myFile.txt');

// fs.readFile('myFile.txt', (err, data) => { //assync
//     console.log(data.toString());
// });

// console.log('Hello');


//event module

const School = require('./school');

const school = new School();

//register a listner for bellRing event
school.on('bellRing', ({period, text}) => {
    console.log(`we need to run because ${period} ${text}`);
});

school.startPeriod();


