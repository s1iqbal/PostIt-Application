var square = x => x * x; // or var square = (x) => x * x; or var square = (x) => {return x*x};
console.log(square(9));

var user = {
  name: 'Saad',
  sayHi: () => {
    console.log(arguments); // will return global arguments
    console.log(`Hi. Im ${this.name}`); //this.name will be undefined.
  },
  sayHiAlt () {
    console.log(arguments); //will return object arguments
    console.log(`Hi. Im ${this.name}`); //this.name will be Saad.
  }
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);
