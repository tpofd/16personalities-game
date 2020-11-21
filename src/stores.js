import {writable, get} from 'svelte/store';


export const currentPage = writable(0);
export const lastPage = writable(0)
export const pagesAmount = writable(0);


// Second
export const chosenFirst = writable("");
export const chosenSecond = writable("");


export function changePage(value) {
  let current = get(currentPage);
  let updated = current + value;

  if (-1 < updated && updated < get(pagesAmount)){
    lastPage.set(current);
    currentPage.update(n => n + value);
    console.log("currentPage: " + get(currentPage));
    console.log("lastPage: " + get(lastPage));
  }
}