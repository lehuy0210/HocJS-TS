console.log("Video 33")

let globalVar = "Toi la bien toan cuc";
function show(){
    console.log(globalVar); //Truy cập được
}
show();
console.log(globalVar); //Truy cập được

function sayHI(){
    let name = "huy";
    console.log("Hi " + name);
}
sayHI();
console.log(name);

if(true){
    let x = 10;
    const y = 20;
    console.log(x,y);    
}