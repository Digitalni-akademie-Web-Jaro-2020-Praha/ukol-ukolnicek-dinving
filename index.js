'use strict';

console.log('funguju!');

const tasks = ['Nalít si víno', 'Vyvenčit psa', 'Upéct chleba', 'Dát si nohy na stůl',]
const updateTasks = () => {
  const tasksElm = document.querySelector('.todo__tasks');
  tasksElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    tasksElm.innerHTML += ` <div class="task">${tasks[i]}</div>`
  }
}
updateTasks()

const newTask = () => {
  const addTask = document.getElementById("new-task").value;
  tasks.push(addTask);
  updateTasks(tasks);
  document.getElementById("new-task").value = "";
}

const button = document.querySelector(".btn-add")
button.addEventListener("click", newTask)
updateTasks(tasks)
