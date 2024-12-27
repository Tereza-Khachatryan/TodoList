let todoList = []

function renderTodoList(){
   const todoListElement = document.getElementById('todo-list')
   todoListElement.innerHTML = ''

   todoList.forEach((todo , index)=>{
    const todoItem = document.createElement('ul')
    todoItem.textContent = todo

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.onclick = () => removeTodo(index);

    todoItem.appendChild(deleteButton)
    todoListElement.appendChild(todoItem)
   })
}

function addTodo(){
    const todoInput = document.getElementById('todo-input')
    const newTodo = todoInput.value.trim()

    if(newTodo){
        todoList.push(newTodo)
        todoInput.value= ''
        renderTodoList()
    }
}

function removeTodo(index){
    todoList.splice(index , 1)
    renderTodoList()
}

document.getElementById('add-todo-btn').addEventListener('click' , addTodo)

document.getElementById('todo-input').addEventListener('keydown' , function (event) {
    if(event.key === 'Enter'){
        addTodo()
    }
})