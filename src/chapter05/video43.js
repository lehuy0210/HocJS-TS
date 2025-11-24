console.log("Video 43")

const person = {
    name: "hoidanit",
    age: 25
}

console.log("person before: ", person);

//get data
console.log("age:", person.age);
console.log("name: ", person["name"]);

//set data 
person.address = "hanoi";
person["language"] = "vietnamese";

delete person.age;
console.log("person after: ", person);
