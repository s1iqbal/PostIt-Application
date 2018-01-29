console.log('Starting Notes.js');
console.log(module);
module.exports.age = 21;
module.exports.addNote =  () => {
  console.log('addNote');
  return 'new Note';
}

module.exports.add = (a, b) => {
  return a+b;
}
