 class ToDolist {
     constructor() {
             const form = document.querySelector('.Add-task-form');
             form.addEventListener('submit', () => {
                 this.addNewTask();
             })
             this.Tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
         }
         // update local Storage
     updateLocalStorage() {
             localStorage.setItem('Tasks', JSON.stringify(this.Tasks));
         }
         // display method
     display() {
         console.log('display running');
         const listSection = document.querySelector('.todo-list');
         this.Tasks.forEach((element) => {
             const row = document.createElement('div');
             row.innerHTML = `
            <label for="${element.index}" class="label-lists">
                        <input type="checkbox" id="${element.index}" class="checkbox">
                        <input type="text" placeholder="${element.description}" class="input-list" >
            </label>
            `;
             listSection.append(row);
         });

         console.log(this.Tasks)
     }

     // add method
     addNewTask() {
         console.log('addNewTask method')
         const newTask = document.querySelector('.input-Add-task');
         const task = newTask.value
         const object = {
             description: task,
             completed: false,
             index: (this.Tasks.length + 1),
         };
         this.Tasks.push(object);
         this.updateLocalStorage();
     }


 }
 export default ToDolist;