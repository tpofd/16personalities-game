<script>
  import {changePage} from '../stores';
  import {Swipe, SwipeItem} from "svelte-swipe"; // gzipped 3.37 KB
  import BackButton from '../components/BackButton.svelte';
  import MainButton from '../components/MainButton.svelte';

  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  const personalities = ['commander', 'logician', 'protagonist'];
  const swipeConfig = {
    autoplay: false,
    delay: 2000,
    showIndicators: true,
    transitionDuration: 1000,
    defaultIndex: 0,
  };

  let firstChoice = 0;
  let secondChoice = 0;

</script>

<div class="page">
  <h1>Choose your personality type and friend's one</h1>
  <BackButton/>
  <div class="choose-card">
    <h1>Choose the first type</h1>
    <div class="swipe-holder">
      <Swipe bind:active_item={firstChoice} {...swipeConfig}>
        {#each personalities as person}
          <SwipeItem>
            <div class="img-wrapper">
              <img src="/personalities/{person}.svg" alt={person}>
            </div>
          </SwipeItem>
        {/each}
      </Swipe>
    </div>
    <h2>You chose: {personalities[firstChoice].capitalize()}</h2>

  </div>
  <hr>
  <div class="choose-card">
    <h1>Choose the second type</h1>
    <div class="swipe-holder">
      <Swipe bind:active_item={secondChoice} {...swipeConfig}>
        {#each personalities as person}
          <SwipeItem>
            <div class="img-wrapper">
              <img src="/personalities/{person}.svg" alt={person}>
            </div>
          </SwipeItem>
        {/each}
      </Swipe>
    </div>
    <h2>You chose: {personalities[secondChoice].capitalize()}</h2>
  </div>
  <div class="button-block">
    <MainButton/>
  </div>
</div>

<style>
  :root {
  }
  img {
    width: 70%;
    height: auto;
    margin: 0 auto;
  }

  h1, h2 {
    text-align: center;
  }
  h1{
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
</style>