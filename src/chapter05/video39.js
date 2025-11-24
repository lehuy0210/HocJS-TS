console.log("Video 39")

const myClass = ["hoidanit","nam","huy", "hung","tuan"]

// console.log(myClass,myClass.length)

// for(let i = 0; i < myClass.length; i++)
// {
//     console.log("i = ",i," and value = ", myClass[i])
// }
// console.log("-------------")
// for(let i = 1; i <= myClass.length; i++)
// {
//     console.log("i = ",i," and value = ", myClass[i-1])
// }

myClass.forEach(function(value, index){
    console.log("index = ", index, " and value = ", value)
})