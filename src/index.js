import _ from 'lodash';
import './style.css';
import Icon from './submit.png';
const list = [
 {
  index: 0,
  completed: false,
  description: 'wash the dishes'
 },
 {
  index: 1,
  completed: false,
  description: 'complete To Do list project'
 }
];

const iterate = ({index, description}) => {
 const lItem = `
     <li index="${index}">
      <div class="checkbox" title="Check!">
       <i class="fas fa-stop"></i>
      </div>
      <input type="text" name="" id="${index}" value="${description}">
      <div class="ellips">
       <i class="fas fa-ellipsis-v"></i>
      </div>
     </li>`;
 const [ul] = document.getElementsByClassName('items');
 ul.insertAdjacentHTML('beforeend',lItem);
}

list.forEach(element => {
 iterate(element);
});