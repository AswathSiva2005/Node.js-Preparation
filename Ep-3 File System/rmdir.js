// RMDIR = Remove Directory - to delete folder

const fs = require('fs');

if(fs.existsSync('./New Folder')){ // existsSync = used to check the folder already exists

    fs.rmdir('./New Folder', (error) => { //syntax : function mkdir(path: fs.PathLike, callback: fs.NoParamCallback)
        if(error){
            console.log(error.message);
        }
        else{
            console.log("File Deleted !!");
        }
    })

}

else{
    console.log("Folder does not Exists !!");
}
