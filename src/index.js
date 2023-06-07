import _, { forEach } from 'lodash';
import './style.css';

const Tasks = [{
        index: 1,
        completed: false,
        description: 'First task of the day'
    },
    {
        index: 2,
        completed: false,
        description: 'second task of the day'
    }, {
        index: 3,
        completed: false,
        description: 'Third task of the day'
    }
];
// display function

const display = () => {
    console.log('display method');
    const todoList = document.querySelector('.todo-list');
    Tasks.forEach((element) => {

        const taskContainer = document.createElement('div');
        taskContainer.innerHTML = `
        <label class="label" for="">
        <input type="checkbox"  id="" class="checkbox">
        <div class="AddtodoInput">
            <input type="text" class="input-inside-list" placeholder="${element.description}" >
            <i class="fas fa-ellipsis-v"></i>
        </div>
        </label>
        `;
        todoList.append(taskContainer);
    });
}

display();