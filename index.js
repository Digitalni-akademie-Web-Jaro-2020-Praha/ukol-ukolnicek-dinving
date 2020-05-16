'use strict';

console.log('funguju!');
//Smažte obsah elementu todo__tasks uvnitř souboru index.html.\\
//V JavaScriptu vytvořte pole řetězců tasks, které bude reprezentovat seznam úkolů.\\
//Vytvořte funkci updateTasks, která zobrazí na stránce seznam úkolů dle toho, co je obsaženo v poli tasks.
//Umožněte uživateli přidat nový úkol pomocí textového políčka. Vždy, když uživatel klikne tlačítko přidat, vložte do pole tasks obsah textového políčka a zavolejte funkci updateTasks, která aktualizuje vaši stránku.\\

//<div class="todo__tasks">
// <div class="task">
//    Vyprat ponožky
//       </div>
//  <div class="task">
//   Naučit se funkce vyššího řádu
//        </div>
//  <div class="task">
//    Nakoupit na víkend
//        </div>
//</div>\\

const tasks = ['Nalít si víno', 'Vyvenčit psa', 'Upéct chleba', 'Dát si nohy na stůl',]
const updateTasks = () => {
  const tasksElm = document.querySelector('.todo__tasks');
  tasksElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    tasksElm.innerHTML += ` <div class="task">${tasks[i]}</div>`
  }
}
updateTasks()


function newTask() {
  const addedTask = document.getElementById("new-task").value;
  tasks.push(addedTask);
  updateTasks(tasks);
  document.getElementById("new-task").value = "";
}

const button = document.querySelector(".btn-add")
button.addEventListener("click", newTask)
updateTasks(tasks)
