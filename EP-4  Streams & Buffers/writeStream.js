const fs = require('fs');

const readStream = fs.createReadStream('./New Folder/hugeFile.txt');
const writeStream = fs.createWriteStream('./New Folder/copyHugeFile.txt');

readStream.on('data', (buffer) => {
    // writeStream.write('\nCHUNK\n');
    // writeStream.write(buffer);
})

// both are same

readStream.pipe(writeStream);