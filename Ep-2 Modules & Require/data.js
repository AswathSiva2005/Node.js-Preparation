const names = ['Aswath','Hari','Hema'];

console.log(names);

// module.export = names;
module.exports = 'Hii';

// for multiple data - use JSON format
const ages = ['21','21',20];

const datas = {
    name : names,
    age : ages
}
module.exports = datas;