<script>
  import {openDB, deleteDB, wrap, unwrap} from 'idb';
  import {onMount} from 'svelte';

  onMount(async () => {
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
        return (await dbPromise).put('keyval', val, key);
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
    await idbKeyval.set("hello", "world!");

  });
</script>

<h1>Hello</h1>