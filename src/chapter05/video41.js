console.log("Video 41")

const ages = [10, 20, 30, 25, 12, 19]

const agex2 = ages.map((value,index) => {
    return value * 2;
})

const agesGreatThan18 = ages.filter((value,index) => {
    return value > 18; //true
})

console.log("Gốc: ", ages)
console.log("Age x2: ", agex2)
console.log("AgesGreatThan18: ", agesGreatThan18)