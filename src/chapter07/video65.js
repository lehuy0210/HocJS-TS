console.log("Video 65")

const greeting = (name, callback) => {
    console.log("Xin chao: ", name)
    // huy()
    callback()
}

const hello = () => {
    console.log("learn callback...")
}

greeting("abc", hello)
