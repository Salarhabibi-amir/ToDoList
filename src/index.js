import './style.css';
import ToDolist from './function';

window.addEventListener('load', () => {
    const list = new ToDolist();
    list.display();
});