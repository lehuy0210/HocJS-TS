console.log("Video 38")

const names = ["123","huy","abc"]

//index = 0, arr[index]
console.log("0 = ", names[0])
console.log("1 = ", names[1])
console.log("2 = ", names[2])

console.log("10 = ", names[10])

names[2] = "update name";
console.log("before",names)

names.push(true,123)
names.unshift(null)

names.pop()
console.log("after", names)