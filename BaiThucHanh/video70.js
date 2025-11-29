    const tbody = document.querySelector("#todolist tbody");

    const danhsach = JSON.parse(localStorage.getItem("todoList"));

    if(danhsach && danhsach.length)
    {
    danhsach.forEach((todo) => {
    tbody.innerHTML += `
        <tr>
        <td>${todo.id}</td>
        <td>${todo.name}</td>
        <td><button class = "delete-btn" data-id="${todo.id}">Xóa</button></td>
        </tr>
       `
    });
    }

    document.querySelectorAll('.delete-btn').forEach(function(button){
        button.addEventListener('click', function(){
            const id = button.getAttribute('data-id');
        
            const danhsachxoa = danhsach.filter(function(todo){
                return id != todo.id; //khác hàng id được chọn xóa thì qua danh sách xóa
             });

            localStorage.setItem("todoList", JSON.stringify(danhsachxoa));
            
            location.reload();
        });
    });