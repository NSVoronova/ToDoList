import { inputSearch, list, header} from './todoUI.js'
import { addNewTodo, checkAndCloseList, deleteAllFnc, deleteLastFnc, showCompletedFnc, showAllFnc, inputSearchFnc } from './functions.js';

export function checkAndCloseFnc() {
  list.addEventListener("click", checkAndCloseList);
}
export function inputSearchF(){
  inputSearch.addEventListener("input", inputSearchFnc);
}

export function headerListener() {

  header.addEventListener('click', function({target}){
    let nameClass = target.getAttribute('class');
  
    if (nameClass === "deleteAll"){deleteAllFnc()}
    if (nameClass === "deleteLast"){deleteLastFnc()}
    if (nameClass === "addTodo") {addNewTodo()}
    if (nameClass === "show showAll") {showAllFnc()}
    if (nameClass === "show showCompleted") {showCompletedFnc()}
  });
}
