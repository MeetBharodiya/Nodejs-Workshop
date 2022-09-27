// default way
var object = {
    name: "Petya",
    age: 15
};
console.log(object);

// another way
var object = new Object();
object["name"] = "Petya";
object["age"] = 15;
console.log(object);

// old way
var object = new Object()
object.name = "Petya";
object.age = 15;
console.log(object);