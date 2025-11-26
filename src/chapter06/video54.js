console.log("Video 54")

const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");

console.log(input)

const prevElement = document.getElementById("prev");
const prevName = localStorage.getItem("abc");

if(prevName){
    prevElement.innerHTML = `<b>${prevName}</b>`
}

btn.addEventListener("click", () => {
    // console.log(input.value);
    localStorage.setItem("abc", input.value);
    document.getElementById("message").innerHTML = `<b>${input.value}</b>`;
});