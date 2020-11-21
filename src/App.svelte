<script>
  import {fly} from 'svelte/transition';
  import First from './pages/First.svelte';
  import Second from './pages/Second.svelte';
  import {currentPage, changePage, pagesAmount, lastPage} from './stores';

  const pages = [First, Second, First];
  pagesAmount.set(pages.length);


</script>

<main>
  <div class="animation-wrapper">
    {#each Array.from(pages.entries()) as [i, page]}
      {#if $currentPage === i}
        <div class="page-wrapper"
             in:fly={{x: ($currentPage - $lastPage) * 50}}
             out:fly={{x: ($currentPage - $lastPage) * 50}}
        >
          <svelte:component this={page}/>
        </div>
      {/if}
    {/each}
  </div>
  <p>{$currentPage}</p>
<!--  <button on:click={() => changePage(-1)}>-</button>-->
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }

  .page-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-top: -100px;
  }
  .animation-wrapper{
    position: relative;
    width: 90%;
    height: 90%;
    display: grid;
    place-items: center;
  }

</style>
