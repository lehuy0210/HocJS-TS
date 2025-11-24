console.log("Video 40")

const scores = [10,8,3,7,5]

// scores.forEach((element, index) => {
//     console.log("index = ",index, "value =", element)
// })

const scorex2 = scores.map((element,index) => {
    return element * 2;
})
console.log("scores = ", scores) 
console.log("scorex2 = ", scorex2) 