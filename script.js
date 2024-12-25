const todoInput = document.getElementById("inputTodo");
const addBtn = document.getElementById("btn");
const todoList = document.getElementById("todo-list");
const formText = document.getElementById("formText");

let todos = [];
//{ id: 1735052912319, value: "eating", isCompleted: false }
function toggleTodos(id) {
  console.log(id);
  let updated_todos = todos.map((item) => {
    if (item.id == id) {
      return { ...item, isCompleted: !item.isCompleted };
    } else {
      return item;
    }
  });
  todos = updated_todos;
  // console.log(todos);
  loadTodos();
}

function addTodo() {
  //   e.preventDefault();
  if (todoInput.value == "") {
    formText.textContent = "Pls enter value";
    formText.style.color = "red";
    return;
  } else {
    formText.textContent = "";
  }
  const todoObj = {
    id: Date.now(),
    value: todoInput.value,
    isCompleted: false,
  };
  todos.push(todoObj);
  // console.log(todos);
  todoInput.value = "";
  loadTodos();
}

function loadTodos() {
  let output = "";
  todos.forEach((item, index) => {
    //{ id: 1735052912319, value: "eating", isCompleted: false }
    output += `
      <li>
     <span onClick=toggleTodos(${item.id})  class="${
      item.isCompleted == true ? "strike" : ""
    }"> ${index + 1}.${item.value}</span>
      <button onClick=deleteTodo(${item.id})>Delete</button>
      </li> 
      `;
  });
  todoList.innerHTML = output;
}
function deleteTodo(id) {
  console.log(id);
  let delete_todo = todos.filter((item) => item.id != id);
  console.log(delete_todo);
  todos = delete_todo;
  loadTodos();
}
