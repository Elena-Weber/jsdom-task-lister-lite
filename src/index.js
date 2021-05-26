document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let task = document.getElementById('create-task-form');
  let createNewTask = document.getElementById('new-task-description');
  let taskItem = document.getElementById('tasks');
  task.addEventListener('submit', addingToList);
});

const addingToList = event => {
  event.preventDefault();
  let newTaskDescription = document.getElementById("new-task-description");
  let newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);
  event.target.reset();
};

let appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};