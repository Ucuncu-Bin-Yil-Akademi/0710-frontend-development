let tasks = [];

const taskInputEl = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskListEl = document.getElementById("taskList");

/* let inputValue = ''
taskInputEl.addEventListener('change', function(e){
    inputValue = e.target.value
}) */

function addNewTask() {
  if (taskInputEl.value !== "") {
    const newTask = {
      text: taskInputEl.value,
      user: "canberk",
    };

    tasks.push(newTask);

    updateTaskList();
    taskInputEl.value = "";
  }
}

addTaskBtn.addEventListener("click", function () {
  addNewTask();
});

function updateTaskList() {
  taskListEl.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${task.user}</b> - ${task.text}`;
    taskListEl.appendChild(li);
  });
}
