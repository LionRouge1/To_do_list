import { forEach } from "lodash";

export default function dragdrop() {
  const lis = document.querySelectorAll('.ellips');
  const items = document.querySelectorAll('.items > li');

  const dragStart = () => {
   console.log('Event: ', 'dragStart')
 }
 
 const dragOver = () => {
  console.log('Event: ', 'dragOver')
 }
 
 const dragEnter = () => {
  console.log('Event: ', 'dragEnter');
  // this.parentNode.classList.add('over')
  
 }
 
 const dragDrop = () => {
  console.log('Event: ', 'dragDrop')
 }
 
 const dragLeave = () => {
  console.log('Event: ', 'dragLeave');
  // this.parentNode.classList.remove('over')
 }

  items.forEach((element) => {
   element.draggable = true;
   element.addEventListener('dragstart', dragStart);
   element.addEventListener('dragover', dragOver);
   element.addEventListener('dragenter', dragEnter);
   element.addEventListener('drop', dragDrop);
   element.addEventListener('dragleave', dragLeave);
  });

  lis.forEach((element) => {
   element.addEventListener('dragover', dragOver);
   element.addEventListener('dragenter', dragEnter);
   element.addEventListener('drop', dragDrop);
   element.addEventListener('dragleave', dragLeave);
  })
}