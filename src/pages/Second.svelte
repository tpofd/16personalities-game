<script>
  // import {chosenFirst, chosenSecond} from '../stores';
  import {Swipe, SwipeItem} from "svelte-swipe"; // gzipped 3.37 KB
  import BackButton from '../components/BackButton.svelte';
  import MainButton from '../components/MainButton.svelte';
  import {personalities, formsStore} from '../stores';


  const swipeConfig = {
    autoplay: false,
    delay: 2000,
    showIndicators: true,
    transitionDuration: 1000,
  };

  $: disabled = $formsStore.firstChoice === $formsStore.secondChoice;
</script>

<div class="page">
  <h1>Choose your personality type and friend's one</h1>
  <BackButton/>
  <div class="choose-card">
    <h1>Choose the first type</h1>
    <div class="swipe-holder">
      <Swipe bind:active_item={$formsStore.firstChoice} {...swipeConfig}
             defaultIndex={$formsStore.firstChoice}>
        {#each personalities as person}
          <SwipeItem>
            <div class="img-wrapper">
              <img src="/personalities/{person}.svg" alt={person}>
            </div>
          </SwipeItem>
        {/each}
      </Swipe>
    </div>
    <h2>You chose: {personalities[$formsStore.firstChoice].capitalize()}</h2>
  </div>
  <hr>
  <div class="choose-card">
    <h1>Choose the second type</h1>
    <div class="swipe-holder">
      <Swipe bind:active_item={$formsStore.secondChoice} {...swipeConfig}
             defaultIndex={($formsStore.secondChoice)}>
        {#each personalities as person}
          <SwipeItem>
            <div class="img-wrapper">
              <img src="/personalities/{person}.svg" alt={person}>
            </div>
          </SwipeItem>
        {/each}
      </Swipe>
    </div>
    <h2>You chose: {personalities[$formsStore.secondChoice].capitalize()}</h2>
  </div>
  <p class:hide={!disabled}>Choose different types</p>
  <div class="button-block">
    <MainButton {disabled}/>
  </div>
</div>

<style>
  img {
    width: 70%;
    height: auto;
    margin: 0 auto;
  }

  h1, h2 {
    text-align: center;
  }

  h1 {
    font-size: var(--hero-fontsize);
  }

  h2 {
    font-size: var(--plain-fontsize);
  }

  hr {
    width: 70vw;
  }

  .swipe-holder {
    height: 350px;
    width: 350px;
  }

  .page {
    margin-top: 50px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-wrapper {
    display: flex;
    align-items: center;
  }

  .choose-card {
    width: 70%;
    max-width: 600px;
    min-width: 240px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .button-block {
    display: grid;
    place-items: center;
    height: 200px;
  }
  .hide {
    opacity: 0;
  }
</style>