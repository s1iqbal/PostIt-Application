console.log('Starting App.js');
const fs = require('fs'); //fetches the fs module // filesystem, now we can use appendfile
const os = require('os'); //The os module provides a number of operating system-related utility methods.
const notes = require('./notes.js');

var result = notes.addNote();
console.log(result);
var addresult = notes.add(9, -2);
console.log(addresult);
// var user = os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username}!, you are ${notes.age} years old!`, function(err) {
//   if (err) {
//     console.log('Unable to write to file.')
//   }
// });
