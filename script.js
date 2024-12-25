//FITCHED ELEMETS
const todoInput = document.getElementById("inputTodo");
const addBtn = document.getElementById("btn");
const todoList = document.getElementById("todo-list");
const formText = document.getElementById("formText");

// GOLOBAL ARRAY FOR STORING DATA
let todos = [];

//CHANGING TODOS COMPLETED STATUS
function toggleTodos(id) {
  let updated_todos = todos.map((item) => {
    if (item.id == id) {
      return { ...item, isCompleted: !item.isCompleted };
    } else {
      return item;
    }
  });
  todos = updated_todos;
  loadTodos();
}

// ADDING NEW TODO
function addTodo() {
  //EMPTY INPUT VALIDATION
  if (todoInput.value == "") {
    formText.textContent = "Please Enter Value";
    formText.style.color = "red";
    return;
  } else {
    formText.textContent = "";
  }

  //SAME WORD VALIDATION
  let isMatched = false;
  todos.forEach((item) => {
    if (item.value.toLowerCase() == todoInput.value.toLowerCase()) {
      isMatched = true;
      return;
    }
  });
  if (isMatched) {
    alert("Data Already Exist");
  } else {
    const todoObj = {
      id: Date.now(),
      value: todoInput.value,
      isCompleted: false,
    };
    todos.push(todoObj);
    todoInput.value = "";
    loadTodos();
  }
}

//LOAD TODO
function loadTodos() {
  let output = "";
  todos.forEach((item, index) => {
    output += `
      <li>
      <input type="checkbox" class="todo-check" ${
        item.isCompleted ? "checked" : ""
      }
       onChange=toggleTodos(${item.id}) class="form-check" />
     <span class="${
       item.isCompleted == true ? "strike" : ""
     }">${formattedString(item.value)}</span>
      <button onClick=deleteTodo(${
        item.id
      }) class="btn btn-danger"><i class="bi bi-trash3"></i></button>
      </li> 
      `;
  });
  todoList.innerHTML = output;
}

//DELETE TODO
function deleteTodo(id) {
  if (confirm("Are You Sure To Delete?")) {
    let delete_todo = todos.filter((item) => item.id != id);
    console.log(delete_todo);
    todos = delete_todo;
    loadTodos();
  }
}

function formattedString(word) {
  let new_word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return new_word;
}
