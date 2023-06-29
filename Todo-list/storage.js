import { incrementCounterCompleted, incrementCounterAll,listItem } from "./functions.js";
import { list } from "./todoUI.js";

export function reload({text,completed,date}) {
  let listItem = document.createElement("li");
  listItem.classList.add("collectionItem");

  let checkComplete = document.createElement("button");
  checkComplete.getAttribute("type", "button");
  checkComplete.classList.add("checkComplete");
  listItem.append(checkComplete);

  let listItemText = document.createElement("div");
  listItemText.classList.add("listItemText");
  listItem.append(listItemText);
  listItemText.innerText = text;

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
  listDate.innerHTML = date;

  if (completed) {
    listItem.classList.add("completed");
    listItem.classList.add("completeColor");
    listItemText.classList.add("completeLine");
    checkComplete.innerHTML = "V";
    incrementCounterCompleted();
  } else {
    listItem.classList.add("not-completed");
  }
  incrementCounterAll();
  list.append(listItem);
}


 

