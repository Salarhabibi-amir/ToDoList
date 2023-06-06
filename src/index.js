import _ from 'lodash';
import './style.css';
import Icon from './IMG_0240.jpg';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = "some text";
    element.classList.add('hello');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.width = 200;
    myIcon.height = 200;
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());