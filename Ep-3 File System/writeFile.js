// WRITE FILE = used to create and write a file
// It is mutable = can change the txt without error when already file exists
// It is ASYNC function so callback should have

const fs = require('fs');

fs.writeFile('./New Folder/file.txt', 'Hello Aswath !!', (error) => {
    if(error){
        console.log(error.message);
    }
    else{
        console.log("File written successfully !!");
        
    }
})