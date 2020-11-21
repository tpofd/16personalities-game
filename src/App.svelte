<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;600&display=swap" rel="stylesheet">
</svelte:head>
<script>
  import {fly, fade} from 'svelte/transition';
  import First from './pages/First.svelte';
  import Second from './pages/Second.svelte';
  import Third from './pages/Third.svelte';
  import Fourth from './pages/Fourth.svelte';
  import Fifth from './pages/Fifth.svelte';
  import {currentPage, changePage, pagesAmount, lastPage} from './stores';

  const pages = [
    // First,
    // Second,
    // Third,
    // Fourth,
    Fifth
  ];
  pagesAmount.set(pages.length);
</script>

<main>
  <div class="animation-wrapper">
    {#each Array.from(pages.entries()) as [i, page]}
      {#if $currentPage === i}
        <div class="page-wrapper"
             in:fly={{x: ($currentPage - $lastPage) * 50}}
             out:fade>
          <svelte:component this={page}/>
        </div>
      {/if}
    {/each}
  </div>
</main>

<style>
  :root {
    --hero-fontsize: calc((100vw - 480px) / (1280 - 480) * (32 - 15) + 15px);
    --plain-fontsize: calc((100vw - 480px) / (1280 - 480) * (24 - 16) + 16px);
  }

  :global(body) {
    font-family: Comfortaa, sans-serif;
  }

  main {
    width: 100%;
    height: 100%;
  }

  .page-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .animation-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

</style>
