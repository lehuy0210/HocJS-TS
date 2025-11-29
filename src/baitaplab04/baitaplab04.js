console.log("Bai tap lab 04");


const inputUsernameElement = document.getElementById("inputUsername");
const inputPasswordElement = document.getElementById("inputPassword");
const btnLogin = document.getElementById("btnLogin");

console.log(inputUsernameElement);
console.log(inputPasswordElement);
console.log(btnLogin);

btnLogin.addEventListener("click", () =>{
    const username = inputUsernameElement.value;
    const password = inputPasswordElement.value;
    if (username === "abc123@gmail.com" && password === "123456")
    {
        alert("Đăng nhập thành công");
        window.location.href = "success.html";
    }
    else
    {
        alert("Tài khoản hoặc mật khẩu sai");
        inputUsername.style.borderColor = "red";
        inputPassword.style.borderColor = "red";
    }
});