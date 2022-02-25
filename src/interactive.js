import TDlist from './TDlist.js';

export function checkbox(item) {
  const status = item.getAttribute('completed');
  const task = new TDlist();
  if (status === 'false') {
    item.innerHTML = '<i style="color:blue; border: none" class="fas fa-check"></i>';
    item.nextElementSibling.style.textDecoration = 'line-through';
    const index = Number(item.parentNode.getAttribute('index'));
    task.editTask(index - 1, true);
    item.setAttribute('completed', 'true');
  } else {
    item.innerHTML = '<i class="fas fa-stop"></i>';
    item.nextElementSibling.style.textDecoration = '';
    const index = Number(item.parentNode.getAttribute('index'));
    task.editTask(index - 1, false);
    item.setAttribute('completed', 'false');
  }
}

export const clearAll = () => {
  const checkb = document.querySelectorAll('.checkbox');
  const task = new TDlist();
  const RemoveAll = task.list.filter(({ Tcompleted }) => Tcompleted === false);
  const Nwupdate = RemoveAll.map((item) => {
    item.index = RemoveAll.indexOf(item) + 1;
    return item;
  });
  task.saveList(Nwupdate);
  checkb.forEach((element) => {
    if (element.getAttribute('completed') === 'true') {
      element.parentNode.remove();
    }
  });
};
