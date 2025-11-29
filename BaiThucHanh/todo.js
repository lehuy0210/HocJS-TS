const inputTodoElement = document.getElementById("input-todo");
const buttonAddTodoElement = document.getElementById("add-todo-btn");

buttonAddTodoElement.addEventListener("click", ()=> {
    if(inputTodoElement.value.trim())
{
    const id = Math.ceil(Math.random() * 1000000000);
    
    const todo = {
    id: id,
    name: inputTodoElement.value
    }

    let todoList;

    if(!localStorage.getItem("todoList"))
    {
        todoList = [];
    }
    else
    {
        todoList = JSON.parse(localStorage.getItem("todoList"));
    }

    todoList.push(todo);

    localStorage.setItem("todoList", JSON.stringify(todoList));

    window.location.href = "./video70.html";
}
   
});




