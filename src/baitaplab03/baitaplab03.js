console.log("Lab 03")

const sanpham1 = {
    name: "T-shirt",
    price: 200,
    inStock: true
}

const sanpham2 = {
    name: "Jean",
    price: 300,
    inStock: false
}

const sanpham3 = {
    name: "Jacket",
    price: 250,
    inStock: true
}

const sanpham4 = {
    name: "shoes",
    price: 300,
    inStock: true
}

const sanpham5 = {
    name: "socks",
    price: 100,
    inStock: false
}

const products = [sanpham1, sanpham2, sanpham3, sanpham4, sanpham5];
console.log("Ban dau: ",products);

//Câu 1: In ra tên của sản phẩm đầu tiên
const firstProduct = products[0];
console.log(">>> sanpham1: ", firstProduct.name);

// Câu 2: Thêm một sản phẩm mới vào cuối mảng và in danh sách tất cả sản phẩm

const products2 = [sanpham1, 
    {
        name: sanpham2.name,
        price: 150,
        inStock: sanpham2.inStock
    }
    , sanpham3, sanpham4, sanpham5];


console.log("Update gia san pham 2",products2);

console.log("=================");

// Câu 3: Thêm sản phẩm mới vào cuối danh sách và in danh sách tất cả
products.push({
    name: "last product",
    price: 900,
    inStock: false
})

console.log(products);

console.log("=================");

// Câu 4: Xóa sản phẩm cuối cùng ra khỏi danh sách và in danh sách tất cả
products.pop();

console.log(products);

console.log("=================");

// Câu 5: dùng forEach() để in ra tên tất cả sản phẩm
products.forEach((value , index) => {
    console.log(products[index].name);
})

console.log("=================");

//Câu 6: dùng map() để tạo mảng mới chỉ chứa giá của các sản phẩm
const priceProducts = products.map((value,index) => {
    return products[index].price;
})

priceProducts.forEach((value,index) =>{
    console.log(`Gia cua san pham ${index+1}: `, value)
})

console.log("=================");

//Câu 7: dùng filter() để lấy các sản phẩm còn hàng (inStock = true)
let inStockProducts = products.filter((value,index, array) => {
    return products[index].inStock === true;
});

inStockProducts.forEach((value,index) => {
    console.log(`San phan con hang ${index+1}: `, value)
});

console.log("=================");

//Câu 8: dùng for..in() để duyệt qua thuộc tính của sản phẩm đầu tiên
for(let key in sanpham1){
    console.log(key, sanpham1[key]);
}