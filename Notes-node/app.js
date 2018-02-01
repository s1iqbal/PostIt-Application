
console.log('Starting App.js');
//n4714ode modules
const fs = require('fs'); //fetches the fs module // filesystem, now we can use appendfile
const _ = require('lodash');
const yargs = require('yargs');

//files
const notes = require('./notes.js');


const argv = yargs.argv;
var command = argv._[0];
console.log();
console.log();
console.log();

console.log('Command:', command);
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
}
else if (command === 'list') {
  notes.getAll();
}
else if (command === 'read') {
  notes.getNote(argv.title);
}
else if (command === 'remove') {
  notes.removeNote(argv.title);
}else {
  console.log('Command not recognized');
}
