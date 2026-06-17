// READ FILE = used to read a file
// It is ASYNC function so callback should have
// CALLBACK should must = readFile('./', (error, data) => {})

const fs = require('fs');

if( fs.existsSync('./New Folder/file.txt')){

    fs.readFile('./New Folder/file.txt', (error, data) => {
        if(error){
            console.log(error.message);
        }
        else{
            console.log(data.toString()); // toString = change dataTypes to String
        }
    })

}

else{
    console.log("File does not have !!");
    
}