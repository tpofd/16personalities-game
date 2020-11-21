import {writable} from 'svelte';
// fetch and etc...

export const dataStore = writable(
  {
    'Party': {},
    'Political debate': {}
  }
)