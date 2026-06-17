// FS = File System ,it is predefined module

const fs = require('fs');

// mkdir(make directory) = creates folder
// It is ASYNC function so callback should have

if( ! fs.existsSync('./New Folder')){ // existsSync = used to check the folder already exists

    fs.mkdir('./New Folder', (error) => { //syntax : function mkdir(path: fs.PathLike, callback: fs.NoParamCallback)
        if(error){
            console.log(error.message);
        }
        else{
            console.log("File Created");
        }
    })

}

else{
    console.log("Folder alerady Exists !!");
}
