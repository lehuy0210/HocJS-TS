console.log("Video 51")

const element = document.getElementById("clickMeBtn");


const handleClickButton = () => {
    console.log("you click a button")
}

element.addEventListener("click",handleClickButton);


console.log(element)