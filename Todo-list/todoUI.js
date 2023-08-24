export let root = document.querySelector("#root");

export let header = document.createElement("header");
root.prepend(header);

export let upperHeader = document.createElement("div");
header.prepend(upperHeader);
upperHeader.classList.add("upperHeader");

export let lowerHeader = document.createElement("div");
header.append(lowerHeader);
lowerHeader.classList.add("lowerHeader");

export let deleteAllBtn = document.createElement("button");
upperHeader.prepend(deleteAllBtn);
deleteAllBtn.classList.add("deleteAll");
deleteAllBtn.setAttribute("type", "button");
deleteAllBtn.innerHTML = "Delete All";

export let deleteLastBtn = document.createElement("button");
upperHeader.append(deleteLastBtn);
deleteLastBtn.setAttribute("type", "button");
deleteLastBtn.classList.add("deleteLast");
deleteLastBtn.innerHTML = "Delete Last";

export let inputTodo = document.createElement("input");
upperHeader.append(inputTodo);
inputTodo.setAttribute("type", "text");
inputTodo.setAttribute("placeholder", "Enter Todo ...");
inputTodo.setAttribute("id", "enterTodo");

export let addBtn = document.createElement("button");
upperHeader.append(addBtn);
addBtn.setAttribute("type", "button");
addBtn.classList.add("addTodo");
addBtn.innerHTML = "Add";


export let obj = {
 counterAll: 0,
 counterCompleted: 0,
}  
export let allCounter = document.createElement("p");
lowerHeader.prepend(allCounter);
allCounter.innerHTML = "All: " + obj.counterAll;

export let completedCounter = document.createElement("p");
lowerHeader.append(completedCounter);
completedCounter.innerHTML = "Completed: " + obj.counterCompleted;

export let showAll = document.createElement("button");
lowerHeader.append(showAll);
showAll.setAttribute("type", "button");
showAll.classList.add("show", "showAll");
showAll.innerHTML = "Show All";

export let showCompleted = document.createElement("button");
lowerHeader.append(showCompleted);
showCompleted.setAttribute("type", "button");
showCompleted.classList.add("show", "showCompleted");
showCompleted.innerHTML = "Show Completed";

export let inputSearch = document.createElement("input");
inputSearch.setAttribute("type", "search");
inputSearch.setAttribute("id", "inputSearch");
lowerHeader.append(inputSearch);
inputSearch.setAttribute("placeholder", "Search...");

export let main = document.createElement("main");
header.after(main);

export let list = document.createElement("ul");
main.append(list);
