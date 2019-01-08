// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: news} = person.location;
// console.log(`It's ${city} in ${news}`);


const address = [];
const  [,, state = 'New York'] = address;
console.log(`You are in ${state}`);