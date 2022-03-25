import { forEach, get } from "lodash";
import TDlist from "./TDlist.js";

export default function dragdrop() {
  const lis = document.querySelectorAll('.ellips');
  const items = document.querySelectorAll('.items > li');

  let dragStartIndex;

  const dragStart = (e) => {
   dragStartIndex = e.target;
   e.target.classList.add('dragStart');
 }
 
 const dragOver = (e) => {
  e.preventDefault();
 }
 
 const dragEnter = (e) => {
  e.currentTarget.parentNode.classList.add('over');
 }
 
 const dragLeave = (e) => {
  e.currentTarget.parentNode.classList.remove('over');
 }
 
 const dragDrop = (e) => {
  e.currentTarget.parentNode.classList.remove('over');
  items.forEach((li) => li.classList.remove('dragStart'));
  const dragEndIndex = e.currentTarget.parentNode;
  const ul = document.getElementById('container_items');
  const ItemStartIndex = +dragStartIndex.getAttribute('index');
  const ItemEndIndex = +dragEndIndex.getAttribute('index');

  if (ItemStartIndex < ItemEndIndex) {
    ul.insertBefore(dragStartIndex, dragEndIndex.nextSibling);

    const itemIndex = Object.values(items)
    .filter((element) => {
      const Index = +element.getAttribute('index');
      
      if (Index > ItemStartIndex && Index <= ItemEndIndex) {
        return true;
      } else {
        return false;
      }
    })
    .map((it) => {
      const n = +it.getAttribute('index') - 1;
      it.setAttribute('index', n);
      it.querySelector('.description').id = n;
    });

    dragStartIndex.setAttribute('index', ItemEndIndex);
    dragStartIndex.querySelector('.description').id = ItemEndIndex;
  }else {
    ul.insertBefore(dragStartIndex, dragEndIndex);

    const itemIndex = Object.values(items)
    .filter((element) => {
      const Index = +element.getAttribute('index');
      
      if (Index < ItemStartIndex && Index >= ItemEndIndex) {
        return true;
      } else {
        return false;
      }
    })
    .map((it) => {
      const n = +it.getAttribute('index') + 1;
      it.setAttribute('index', n);
      it.querySelector('.description').id = n;
    });

    dragStartIndex.setAttribute('index', ItemEndIndex);
    dragStartIndex.querySelector('.description').id = ItemEndIndex;
  }

  // New array for the order 
  
  const table = document.querySelectorAll('.items > li');
  const ntable = [];
  table.forEach((ite) => {
    const task = {
      index: +ite.getAttribute('index'),
      Tcompleted: (ite.querySelector('.checkbox').getAttribute('completed') === "true") ? true : false,
      Tdescription: ite.querySelector('.description').value,
    };
    ntable.push(task);
  });
  const tdlist = new TDlist();
  tdlist.saveList(ntable);
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
