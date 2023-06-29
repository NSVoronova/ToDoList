import { inputTodo, obj, allCounter,list, completedCounter } from "./todoUI.js";
import { obj_item_main } from "./values.js";

let {mainTodo, item} = obj_item_main;

let {counterAll, counterCompleted} = obj;


export function incrementCounterAll() {
  counterAll++;
  allCounter.innerHTML = "All: " + counterAll;
}

export function incrementCounterCompleted() {
  counterCompleted++;
  completedCounter.innerHTML = "Completed: " + counterCompleted;
}

export function decrementCounterAll() {
  counterAll--;
  allCounter.innerHTML = "All: " + counterAll;
}

export function decrementCounterCompleted() {
  counterCompleted--;
  completedCounter.innerHTML = "Completed: " + counterCompleted;
}


export let listItem = document.createElement("li");

export function viewList() {
  listItem = document.createElement("li");
  listItem.classList.add("collectionItem");
  listItem.classList.add("not-completed");

  let checkComplete = document.createElement("button");
  checkComplete.getAttribute("type", "button");
  checkComplete.classList.add("checkComplete");
  listItem.append(checkComplete);

  let listItemText = document.createElement("div");
  listItemText.classList.add("listItemText");
  listItem.append(listItemText);
  listItemText.innerText = inputTodo.value;

  let closeDiv = document.createElement("div");
  closeDiv.classList.add("closeDiv");
  listItem.append(closeDiv);

  let closeBtn = document.createElement("button");
  closeBtn.getAttribute("type", "button");
  closeBtn.classList.add("closeBtn");
  closeDiv.append(closeBtn);
  closeBtn.innerHTML = "X";

  let listDate = document.createElement("div");
  listDate.classList.add("listDate");
  closeDiv.append(listDate);
  let date = new Date();
  date = date.toString().split(' ');
  listDate.innerHTML = date[1] + " " + date[2] + " " + date[4];
  item.date = listDate.innerText;
}

export function addNewTodo() {
  if (inputTodo.value !== "") {
    item = {
      text: inputTodo.value,
      completed: false,
    };
    mainTodo.push(item);
    item.id = Math.round(Math.random()*100000);

    viewList();

    incrementCounterAll();
    inputTodo.value = "";
    list.append(listItem);
    setName(mainTodo);
  }
}

export function checkAndCloseList({target}) {
  if (target.tagName !== "BUTTON") return;
  let nameClass = target.getAttribute("class");
  if (nameClass === "checkComplete") {checkCompleteFnc(target)}
  if (nameClass === "closeBtn" || target.innerText === "X") {closeBtnFnc(target)}
}

export function checkCompleteFnc(target) {
  let a = target.nextElementSibling;
  let index = mainTodo.findIndex(({text}) => {
    return text === a.innerText;
  });

  if (target.parentElement.classList.contains("not-completed")) {
    target.innerHTML = "V";
    mainTodo[index].completed = !mainTodo[index].completed;
    incrementCounterCompleted();
    target.parentElement.classList.remove("not-completed");
    target.parentElement.classList.add("completed");
    target.parentElement.classList.add("completeColor");
    a.classList.add("completeLine");
    setName(mainTodo);
  } else if (target.parentElement.classList.contains("completed")) {
    target.innerHTML = "";
    mainTodo[index].completed = !mainTodo[index].completed;
    decrementCounterCompleted();
    target.parentElement.classList.add("not-completed");
    target.parentElement.classList.remove("completed");
    target.parentElement.classList.remove("completeColor");
    a.classList.remove("completeLine");
    setName(mainTodo);
  }
  
}

export function closeBtnFnc(target) {
  let a = target.parentElement;
  a = a.previousElementSibling;
  let index = mainTodo.findIndex((item) => {
    return item.text === a.innerText;
  });
  target.closest('.collectionItem').remove();
  if (mainTodo[index].completed === true) {
    decrementCounterCompleted();
  }
  if (index !== -1) {
    mainTodo.splice(index, 1);
  }
  decrementCounterAll();
  setName(mainTodo);
}

export function deleteAllFnc () {
  mainTodo = [...[]];
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  counterAll = 0;
  allCounter.innerHTML = "All: " + counterAll;
  counterCompleted = 0;
  completedCounter.innerHTML = "Completed: " + counterCompleted;
  setName(mainTodo);
}

export function deleteLastFnc () {
  if (mainTodo.at(-1)) {
    if (mainTodo.at(-1).completed) {
      decrementCounterCompleted();
    }
    mainTodo.pop();
    list.lastElementChild.remove();
    decrementCounterAll();
  }
  setName(mainTodo);
}

export function showCompletedFnc () {
  let elements = document.querySelectorAll(".not-completed");
  elements.forEach(function (element) {
    element.classList.add("hidden");
  });
}


export function showAllFnc() {
  let elements = document.querySelectorAll(".hidden");
  elements.forEach(function (element) {
    element.classList.remove("hidden");
  });
}


export function inputSearchFnc() {
  const searchText = inputSearch.value.toLowerCase();
  const listItems = list.getElementsByTagName("li");
  if (searchText.length > 2) {
    let s = mainTodo.filter((item) => item.text.includes(searchText));

    for (let i = 0; i < mainTodo.length; i++) {
      const oneItem = listItems[i];
      const oneItemText =
        oneItem.firstElementChild.nextElementSibling.textContent.toLowerCase();

      if (oneItemText.includes(searchText)) {
        oneItem.classList.remove("hidden");
      } else {
        oneItem.classList.add("hidden");
      }
    }
  } else if (searchText.length <= 2) {
    for (let i = 0; i < mainTodo.length; i++) {
      listItems[i].classList.remove("hidden");
    }
  }
}


export function getName() {
  if (!localStorage.getItem('todos')) {
    return [];
  }
  return JSON.parse(localStorage.getItem('todos'));
}
export function setName(data) {
  localStorage.setItem('todos', JSON.stringify(data));
}