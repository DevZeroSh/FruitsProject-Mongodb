// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// const url = 'mongodb://localhost:27017/';

// const dbNmae = 'fruitsDB';

// const client = new MongoClient(url);

// client.connect(function (err) {
//     assert.equal(null, err);
//     console.log("Connected succesfully to server");
//     const db = client.db(dbNmae);
//     client.close();
// })

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Why you dont Entry Name"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const furit = new Fruit({
    name: 'Carut',
    rating: 1,
    review: "Pretty solid as a fruit."
});
//furit.save();

const personSchemea = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFuit:fruitSchema
});
const Person = mongoose.model("Person", personSchemea);

const pineapple = new Fruit({
    name: 'Pineapple',
    rating: 9,
    review: 'great fruit.'
})
//pineapple.save();

const person = new Person({
    name: 'Amy',
    age: 12,
    favouriteFuit: pineapple
})
//person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: 'the best fruit!'
});
const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: 'Too sour for me'
});
const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: 'Weird texture'
});


// Fruit.insertMany([kiwi, orange, banana]).then(function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Succesfully saved ");
//     }
// })

Person.find()
    .then(function (persons) {
        console.log(persons);
        // fruits.forEach(function (fruit1) {
        //     console.log(fruit1.name)
        // })
    })
    .catch(function (error) {
        console.log(error);
    });

/*
  //update
Fruit.updateOne({ _id: '646c7051c401bc738cf44ad2' }, { name: "Peach" })
.then(function (result) {
   console.log("Update is done");
})
.catch(function (error) {
   console.log(error);
});
//Delet
   Fruit.deleteOne({ _id: '646c7051c401bc738cf44ad2' })
 .then(function (result) {
   console.log("Delet is done");
 })
 .catch(function (error) {
   console.log(error);
 });
 */

// Person.deleteMany({ name: 'Jone' })
//     .then(function () {
//         console.log("Data deleted"); // Success
//     }).catch(function (error) {
//         console.log(error); // Failure
//     })

// const mongo=new Fruit({
//     name:'Mango',
//     rating:6,
//     review:"Decent fruit."
// })
// mongo.save()
Person.updateOne({ name: 'Jone' }, { favouriteFuit: kiwi })
.then(function (result) {
   console.log("Update is done");
})
.catch(function (error) {
   console.log(error);
});
