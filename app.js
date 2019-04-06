const jsonFile = require("./data.json");
function consoleLines(){
    return console.log("---------------------");
}

function write(yourName, value){
    if(!jsonFile[yourName]){
        jsonFile[yourName] = {
            value: value
        }
        return fs.writeFile("./data.json", JSON.stringify(jsonFile, null, 4), (err) => {
            if(err) console.log(err);
        });
    }

    jsonFile[yourName].value = value;
    return fs.writeFile("data.json", JSON.stringify(jsonFile, null, 4), (err) => {
        if(err) console.log(err);
    });
}

function read(nameToRead){
    return jsonFile[nameToRead].value;
}

const fs = require("fs");
var person = {
    name: {
        first: "Bob",
        last: "Charles"
    },
    details(){
        return [this.name.first, this.name.last];
    }
}
console.log(person.details().join(" "));
consoleLines();
class Person {
    constructor(first, last, age){
        this.age = age;
        this.first = first;
        this.last = last;

        console.log(this.age);
    }
    info(){
        return console.log(`Age: ${this.age} | First name: ${this.first} | Last name: ${this.last}`);
    }
}

var p1 = new Person("Bob", "Charles", 6969696);

console.log(p1.info());
consoleLines();

console.log(read("Gabe"));