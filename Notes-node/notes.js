console.log('Starting Notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
    console.log(notes);
  } catch (e) {

  }


  notes.push(note);
  fs.writeFileSync('note-data.json', JSON.stringify(notes));
};

var getAll = () => {
  console.log('Getting all notes.');
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

var getNote = (title) => {
  console.log('Getting note', title);
};

module.exports = {
  addNote, // or you can do addNote = addNote where the first addNote is the exported var name, and the second is the function.
  getAll,
  removeNote,
  getNote
}
