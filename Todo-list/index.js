import {
  headerListener,
  checkAndCloseFnc,
  inputSearchF,
} from "./todoEvents.js";
import { getName } from "./functions.js";
import { reload } from "./storage.js";

headerListener();

inputSearchF();
checkAndCloseFnc();

export let storedData = getName();

storedData.forEach(function (item) {
  reload(item);
});
