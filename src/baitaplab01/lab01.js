console.log("Bài tập lab 01")

const today= new Date();
const currentYear = today.getFullYear();

const fullName = "Nguyễn Văn A";
const birthYear = "2001";
let isStudent = "false";

const age = currentYear - birthYear;
console.log("Tuổi của ", fullName, "là: ", age);
console.log(isStudent && age>=18)
console.log(`
    Tên: ${fullName}
    Tuổi: ${age}
    Sinh viên: ${isStudent && age>=18}` 
)