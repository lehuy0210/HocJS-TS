console.log("Bài tập lab 2");

const tinhTrungBinh = (toan, van, anh) => {
    return (toan + van + anh) / 3;
};

const xepLoai = (diemTB) => {
    if (diemTB >= 9)
    {
        return "Xuất xắc";
    }
    else if (diemTB >= 8 && diemTB < 9)
    {
        return "Giỏi";
    }
    else if(diemTB >= 6.5 && diemTB < 8)
    {
        return "Khá";
    }
    else
    {
        return "Trung bình";
    }
}

const diemToan = 9;
const diemVan = 7;
const diemAnh = 8;

const myTB = tinhTrungBinh(diemToan,diemVan,diemAnh);

console.log(`
    Điểm trung bình: ${myTB}
    Xếp loại: ${xepLoai(myTB)}
    `)

