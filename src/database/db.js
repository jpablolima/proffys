const DataBase = require('sqlite-async');
DataBase.open(__dirname + '/database.sqlite').then(execute);

function execute(db) {
    // console.log('create datadase');
    console.log(db);
}