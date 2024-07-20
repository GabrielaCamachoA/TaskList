const taskInput = document.getElementById("task-input");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("task-list");

function Task() {
    const task =  taskInput.value.trim();

    if (task !== "") {
       const newTask = document.createElement("li") 
       newTask.className = 'task-item';
       newTask.textContent = task;

       const buttonTask = document.createElement("button");
       buttonTask.textContent = "Completar";
       buttonTask.className = "complete-button";
       buttonTask.addEventListener("click", function () {
        newTask.classList.toggle("completed");
       });

       const deleteButton = document.createElement("button");
       deleteButton.textContent = "Eliminar";
       deleteButton.className = "delete-button";
       deleteButton.addEventListener("click", function() {
        newTask.remove();

       });

       newTask.appendChild(buttonTask)
       newTask.appendChild(deleteButton)

       taskList.appendChild(newTask)    

        taskInput.value= "";
    }
}

addTask.addEventListener('click', Task);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        Task();
    }
});