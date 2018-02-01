// // var obj = {
// //   name: 'Saad'
// // };
// //
// // var stringObj = JSON.stringify(obj);/
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name": "Saad", "age": "21"}';
// var jsonObj = JSON.parse(personString);
// console.log(typeof jsonObj);
// console.log(jsonObj);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some Body'
};

// originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
