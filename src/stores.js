import {writable, get} from 'svelte/store';
import {idbKeyval} from './db';

// localStorage.removeItem("formsStore")
// localStorage.removeItem("pagesStore")

export const personalities = ['commander', 'logician', 'protagonist'];

let saved = JSON.parse(localStorage.getItem("pagesStore"))
export const pagesStore = writable(saved || {current: 0, last: 0, amount: 0});
pagesStore.subscribe(val => localStorage.setItem("pagesStore", JSON.stringify(val)));


saved = JSON.parse(localStorage.getItem("formsStore"))
export const formsStore = writable(saved || {firstChoice: 0, secondChoice: 0, location: "", score: 0, achievements: []});
formsStore.subscribe(val => localStorage.setItem("formsStore", JSON.stringify(val)));
formsStore.subscribe(async val => localStorage.setItem("formsStore", JSON.stringify(val)));


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

export function getPers() {
  let data = get(formsStore);
  return [personalities[data.firstChoice], personalities[data.secondChoice]]
}