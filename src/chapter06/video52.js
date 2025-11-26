const myBtnElement = document.getElementById("myBtn");

const myTextElement = document.getElementById("myText");

console.log(myBtnElement, myTextElement)



myBtnElement.addEventListener("click",() => {
    console.log("you click my button")
    // myTextElement.innerText = "Just the content" 
    myTextElement.innerHTML = "<strong>Chào bạn</strong>, <em>lập trình</em>"
})

const backBtnElement = document.getElementById("backBtn");

backBtnElement.addEventListener("click",() => {
    myTextElement.innerText = "Video 52"
})