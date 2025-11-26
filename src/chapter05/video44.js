console.log("Video 44")

const sv1 = {
    username: "hoidanit",
    score: 9.6
}

const sv2 = {
    username: "eric",
    score: 3
}

const sv3 = {
    username: "blabla",
    score: 5
} 

const sinhvien = [sv1,sv2,sv3];
console.log(">>>check sinhvien", sinhvien);

// sinhvien.forEach((value,index) => {
//     console.log(">>> index = ", index, " name = ", value.username)
// })

const person = {
    email: "lehuy0210@gmail.com",
    age: 24,
    address: "Vietnam"
}
for(let key in person)
{
    console.log(key, person[key]);
}
// for(let value of Object.entries(person))
// {{
//     console.log(value);
// }}