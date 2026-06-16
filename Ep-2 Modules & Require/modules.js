// REQUIRE = used to import data from other files

const details = require('./data');
// OP - without console bcoz we imported so it immediatly runs a file
// [ 'Aswath', 'Hari', 'Hema' ]



console.log(details); // [ 'Aswath', 'Hari', 'Hema' ]
                    //  {} // without exports keyword


// For multiple datas
console.log(details.age);