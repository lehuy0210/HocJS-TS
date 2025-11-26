console.log("Video 53")

const myBtnElement = document.getElementById("myBtn")

const  backBtnElement = document.getElementById("backBtn")

const myTextElement = document.getElementById("myText")

console.log(myBtnElement,backBtnElement,myTextElement)

myBtnElement.addEventListener("click", () =>{
    console.log("click me")
    myTextElement.style.color = "red";
    myTextElement.style.backgroundColor = "green";
    myTextElement.classList.add("hello","abc");
})

backBtnElement.addEventListener("click", () =>{
    myTextElement.style.color = "black";
    myTextElement.style.backgroundColor = "unset";
    myTextElement.classList.remove("hello","abc");
})