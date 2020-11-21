import {writable, get} from 'svelte/store';


export const currentPage = writable(0);
export const lastPage = writable(0)
export const pagesAmount = writable(0);

export function changePage(value) {
  let updated = get(currentPage) + value;
  if (-1 < updated && updated < get(pagesAmount)){
    lastPage.set(get(currentPage))
    currentPage.update(n => n + value);
  }
}