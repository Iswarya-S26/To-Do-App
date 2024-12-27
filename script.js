//FETCHED ELEMENTS
const todoInput = document.getElementById("inputTodo");
const addBtn = document.getElementById("btn");
const todoList = document.getElementById("todo-list");
const formText = document.getElementById("formText");
const todoForm = document.getElementById("todoForm");
const clearBtn = document.getElementById("clear-btn");

// GLOBAL ARRAY FOR STORING DATA
let todos = JSON.parse(localStorage.getItem("todos")) || []; // Load todos from localStorage or initialize as empty

// CHANGING TODOS COMPLETED STATUS
function toggleTodos(id) {
  let updated_todos = todos.map((item) => {
    if (item.id == id) {
      return { ...item, isCompleted: !item.isCompleted };
    } else {
      return item;
    }
  });
  todos = updated_todos;
  saveTodos(); // Save to localStorage
  loadTodos();
}

// CLEAR INPUT
clearBtn.addEventListener("click", clearAll);
function clearAll() {
  todoInput.value = "";
}

// FORM SUBMIT EVENT HANDLER
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

// ADDING NEW TODO
function addTodo() {
  // EMPTY INPUT VALIDATION
  if (todoInput.value == "") {
    formText.textContent = "Please Enter Value";
    formText.style.color = "red";
    return;
  } else {
    formText.textContent = "";
  }

  // SAME WORD VALIDATION
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
    saveTodos(); // Save to localStorage
    loadTodos();
  }
}

// LOAD TODOS
function loadTodos() {
  let output = "";
  todos.forEach((item, index) => {
    output += `
      <li>
      <input type="checkbox" class="todo-check" ${item.isCompleted ? "checked" : ""}
       onChange=toggleTodos(${item.id}) class="form-check" />
      <span class="${item.isCompleted == true ? "strike" : ""}">${formattedString(item.value)}</span>
      <button onClick=deleteTodo(${item.id}) class="btn btn-danger"><i class="bi bi-trash3"></i></button>
      </li> 
      `;
  });
  todoList.innerHTML = output;
}

// DELETE TODO
function deleteTodo(id) {
  if (confirm("Are You Sure To Delete?")) {
    let delete_todo = todos.filter((item) => item.id != id);
    todos = delete_todo;
    saveTodos(); // Save to localStorage
    loadTodos();
  }
}

// FORMATTED STRING
function formattedString(word) {
  let new_word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return new_word;
}

// SAVE TODOS TO LOCALSTORAGE
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// INITIALIZE APP
loadTodos(); // Load todos on page load
