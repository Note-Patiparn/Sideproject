
// Destructing Objects 
// how to > create {} = objectname & inside that { put target that in that object inside this curly bracket like example below}

const dOExample = document.getElementById('example')
const kids = {
    nAme: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
} 

const {nAme , age , projects:{diceGame}} = kids

dOExample.innerHTML = `${nAme} is now ${age}, doing ${diceGame}`

//  ///////////////////////////////////////////////////////////////////////////// //

// Destructing Arrays
// let names = ['Dylan', 'Coding God', 'Israel'];
// base on upper line 
const dAExample = document.getElementById('example2')
let [firstname, secondname, lastname] = ['Dylan', 'Coding God', 'Israel']
secondname = 'coding';
dAExample.innerHTML = firstname + " " + secondname + ' ' +  lastname;
// 

//  ///////////////////////////////////////////////////////////////////////////// //

// Object Literal
const oLexample = document.getElementById('example3')
//from

// function addressMaker(address) {
//     const newAddress = {
//         city: address.city,
//         state: address.state,
//         country: 'United States'
//     };
// }
// addressMaker({city: 'Austin', state: 'Texas'});

// to

function addressMaker(address) {
    const {city, state} = address;
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    oLexample.innerHTML = `${city}, ${state}, ${newAddress.country}`
}

addressMaker({city: 'Austin', state: 'Texas'});

// ///////////////////////////////////////////////////////////////////////////// //

// FOR OF LOOP 

const foLexample = document.getElementById('example4')

let incomes = [62000, 67000, 75000];
let total = 0;
for (let income of incomes) { // this is mean each element of incomes will be define in income > so income = 62000, 67000, 75000
    total += income; // it will + each time loop for through each element of [  ]
    foLexample.innerHTML = total
}

const foL2example = document.getElementById('example5')

let fullname = 'patiparn kaewprasitchork'
for (const char of fullname) {
    foL2example.innerHTML = char
    console.log(char)
}

const foL3example = document.getElementById('example6')

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]  
for (const student of students) {
    console.log(`${student.name}, lives in ${student.city}`)
    // console.log( student.name + " lives in " + student.city)
}

// ///////////////////////////////////////////////////////////////////////////// //

// SPREAD OPERATOR 
// to acually copy the value of that variable 
// this  works with object { } , array [ ] ; based on what i've learned now 
let contacts = ["Mary", "Joel", "Danny"] 
// console.log(contacts) = ["Mary", "Joel", "Danny"]
; // the value in this  array or even object will stay the same 
let personalFriends = [ "David", ...contacts, "Lily" ]; // while this array's value got more 
// console.log(personalFriends) = ["David", "Mary", "Joel", "Danny", "Lily"]
console.log(personalFriends)

 // = [...(then)variable's name ], {...(then)variable's name} + you can add the additional in there 
 // ie. ["x",...(then)variable's name,"y"]

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person, // to refer to person variable and copy all of the object value it contain
    salary: ' - ',
    position: " - "
}

console.log(employee);


// ///////////////////////////////////////////////////////////////////////////// //


// CLASS. 
const cExample = document.getElementById('example7')
class Animal {
    // constructor is a function to consturc and object 
    // ie. to create new Animal object
    constructor(species, size) {
        this.species = species // the species that come after = is parameters
        this.size = size
    }
}
let fish = new Animal('fish', 'small') ;
// use new keyword to 
// create a new empty object 
// set the value of 'this' to be the new empty object  
// so to access the that object need to use this.___  value we want to set it to
// call the constructor method 

// use new _____(classname) to adding new object to class

// and i can also change the value that has been define to that object so easy . for example

fish.size = 'big';
// like this just access to the value that you want to redefine 
cExample.innerHTML = fish.size + " " + fish.species
console.log(fish)

// to extends 

class Human extends Animal {
    constucture(species, size, job) {
    // super(species, size);
    this.job = job;
    }
}

class Player {
    constructor(playername, club = " no where") {
        this.playername = playername;
        this.club = club
        // console.log(`${playername} was born in ${club}`)
        }
    introduce() {
        console.log(`${this.playername} was born in ${this.club}`)
    }
}

const messi = new Player ('Messi', 'Aregentina')
messi.introduce()

class Tennisplayer extends Player {
    constructor(playername, club,age) {
        super(playername,club)
        this.age = age
        // console.log(`${playername} is ${age} years old and knows how to play Tennis`)
    }
    present() {
        console.log(`${this.playername} is ${this.age} years old and knows how to play Tennis`)
    }
}

const rafael = new Tennisplayer('Rafael Nadal','Spain', '34')
rafael.introduce()
rafael.present()
// ///////////////////////////////////////////////////////////////////////////// //

