// UNLINK = to delete file


const fs = require('fs');

if (fs.existsSync('./New Folder/file.txt')){

    fs.unlink('./New Folder/file.txt', (error) => {
    if(error){
        console.log(error.message);
    }
    else{
        console.log("Deleted Successfully !!");
    }});

}
else{
    console.log("File does not exists");
}