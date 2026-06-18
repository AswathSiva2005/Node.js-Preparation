// STREAM = it is used to take small small data (chunks/buffer)...
//          like youtube down timeline there will loaded grey line
//          in youtube first ~mb loads and we able to see and then they send nxt ~mb videos

const fs = require('fs');

const readStream = fs.createReadStream('./New Folder/hugeFile.txt');

readStream.on('data', (buffer) => {

    console.log('\n');
    console.log('\nCHUNK HAPPENED');
    console.log('\n');

    console.log(buffer.toString());
})