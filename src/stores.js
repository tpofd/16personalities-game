import {writable, get} from 'svelte/store';
import { openDB } from 'idb';

// localStorage.removeItem("formsStore")
// localStorage.removeItem("pagesStore")

const dbPromise = openDB('keyval-store', 1, {
  upgrade(db) {
    db.createObjectStore('keyval');
  },
});

const idbKeyval = {
  async get(key) {
    return (await dbPromise).get('keyval', key);
  },
  async set(key, val) {
    return (await dbPromise).put('keyval', JSON.stringify(val), key);
  },
  async delete(key) {
    return (await dbPromise).delete('keyval', key);
  },
  async clear() {
    return (await dbPromise).clear('keyval');
  },
  async keys() {
    return (await dbPromise).getAllKeys('keyval');
  },
};


export const personalities = ['commander', 'logician', 'protagonist'];

let saved = JSON.parse(localStorage.getItem("pagesStore"))
export const pagesStore = writable(saved || {current: 0, last: 0, amount: 0});
pagesStore.subscribe(val => localStorage.setItem("pagesStore", JSON.stringify(val)));


saved = JSON.parse(localStorage.getItem("formsStore"))
export const formsStore = writable(saved || {firstChoice: 0,
  secondChoice: 0, location: "", score: 0, achievements: []});
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

export function getPers() {
  let data = get(formsStore);
  return [personalities[data.firstChoice], personalities[data.secondChoice]]
}