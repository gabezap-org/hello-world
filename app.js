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