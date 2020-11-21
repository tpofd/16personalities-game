import {writable, get} from 'svelte/store';


// localStorage.removeItem("formsStore")
// localStorage.removeItem("pagesStore")


let saved = JSON.parse(localStorage.getItem("pagesStore"))
export const pagesStore = writable(saved || {current: 0, last: 0, amount: 0});
pagesStore.subscribe(val => localStorage.setItem("pagesStore", JSON.stringify(val)));


saved = JSON.parse(localStorage.getItem("formsStore"))
export const formsStore = writable(saved || {chosenFirst: "", chosenSecond: "", location: ""});
formsStore.subscribe(val => localStorage.setItem("formsStore", JSON.stringify(val)));


export function changePage(value) {
  let store = get(pagesStore);
  let current = store.current;
  let updated = current + value;

  if (-1 < updated && updated < store.amount) {
    pagesStore.update(obj => {
      obj.last = current;
      obj.current = updated;
      return obj;
    });
  }
}