const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    const db = client.db("FED2006FirstMongo");

    if(err){
        return console.log("Unable to connect to mongodb server");
    }

    console.log('Connected to the MongoDB server successfully');

    // db.collection('FED2006FirstMongo').insertOne({
    //     taskName: 'Learning MongoDB',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         console.log("There was an error inserting data!");
    //     }
    // });

    // db.collection('FED2006FirstMongo').insertMany([{
    //     taskName: 'Task1',
    //     completed: false
    // },{
    //     taskName: 'Task1',
    //     completed: false
    // }], (err, result) => {
    //     if(err){
    //         console.log("There was an error inserting many data!");
    //     }
    // });

    //update
    // db.collection('FED2006FirstMongo').updateOne({taskName: 'Learning MongoDB'}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('FED2006FirstMongo').updateMany({taskName: 'Task1'}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // });

    //delete
    db.collection('FED2006FirstMongo').deleteOne({
        taskName: 'Learning MongoDB'
    }, (result) => {
        console.log(result);
    })

    db.collection('FED2006FirstMongo').deleteMany({
        taskName: 'Task1'
    }).then((result) => {
        console.log(result);
    });

    //read - needs work
    // console.log(db.collection('FED2006FirstMongo').find());

    client.close();

})