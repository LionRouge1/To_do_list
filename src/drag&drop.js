import { forEach } from "lodash";

export default function dragdrop() {
  const lis = document.querySelectorAll('.ellips');
  const items = document.querySelectorAll('.items > li');

  let dragStartIndex;

  const dragStart = (e) => {
   dragStartIndex = +e.target.getAttribute('index');
   e.target.classList.add('dragStart');
 }
 
 const dragOver = () => {
  console.log('Event: ', 'dragOver')
 }
 
 const dragEnter = (e) => {
  console.log('Event: ', 'dragEnter', e.target, e.currentTarget);
  e.currentTarget.parentNode.classList.add('over');
  
 }
 
 const dragDrop = (e) => {
  console.log('Event: ', 'dragDrop');
  const dragEndIndex = +e.target.getAttribute('index');
  console.log(dragEndIndex);
 }
 
 const dragLeave = (e) => {
  console.log('Event: ', 'dragLeave');
  e.currentTarget.parentNode.classList.remove('over');
 }

  items.forEach((element) => {
   element.draggable = true;
   element.addEventListener('dragstart', dragStart);
  });

  lis.forEach((element) => {
    element.addEventListener('dragover', dragOver);
    element.addEventListener('dragenter', dragEnter);
    element.addEventListener('drop', dragDrop);
    element.addEventListener('dragleave', dragLeave);
  })
}
