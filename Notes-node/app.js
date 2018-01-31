console.log('Starting App.js');
//node modules
const fs = require('fs'); //fetches the fs module // filesystem, now we can use appendfile
const _ = require('lodash');

//files
const notes = require('./notes.js');
var command = process.argv[2];
console.log('Command:', command);
console.log(process.argv);

if (command === 'add') {
  console.log('Adding new note');
}
else if (command === 'list') {
  console.log('Listing all notes');
}
else if (command === 'read') {
  console.log('Reading note');
}
else if (command === 'remove') {
  console.log('Removing note');
}else {
  console.log('Command not recognized');
}
