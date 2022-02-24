export default class TDlist {
  constructor(completed = false, description = '') {
    this.completed = completed;
    this.description = description;
    this.list = localStorage.getItem('list') !== null
      ? JSON.parse(localStorage.getItem('list'))
      : '';
  }

  saveList(TSave = this.list) {
    const storeList = JSON.stringify(TSave);
    localStorage.setItem('list', storeList);
  }

  static displayList(TList) {
    const iterate = ({ index, Tdescription }) => {
      const lItem = `
    <li index="${index}">
     <div class="checkbox" title="Check!">
      <i class="fas fa-stop"></i>
     </div>
     <input type="text" class="description" id="${index}" value="${Tdescription}">
     <div class="ellips">
      <i class="fas fa-ellipsis-v"></i>
     </div>
     <label class="trash" for="${index}">
      <i class="fas fa-trash-alt"></i>
     </label>
    </li>`;
      const [ul] = document.getElementsByClassName('items');
      ul.insertAdjacentHTML('beforeend', lItem);
    };
    TList.forEach((element) => {
      iterate(element);
    });
  }

  addTask() {
    if (this.list === '' || this.list.length <= 0) {
      this.list = [
        {
          index: 1,
          Tcompleted: this.completed,
          Tdescription: this.description,
        },
      ];
      this.saveList();
    } else {
      const task = {
        index: this.list.length + 1,
        Tcompleted: this.completed,
        Tdescription: this.description,
      };
      this.list.push(task);
      this.saveList();
    }
  }

  removeTask(taskId) {
    const Remove = this.list.filter(({ index }) => index !== Number(taskId));
    const update = Remove.map((item) => {
      item.index = Remove.indexOf(item) + 1;
      return item;
    });
    this.saveList(update);
    const task = document.getElementById(taskId).parentNode;
    task.remove();
  }

  editTask(who, value) {
    this.list[who].Tdescription = value;
    this.saveList();
  }
}