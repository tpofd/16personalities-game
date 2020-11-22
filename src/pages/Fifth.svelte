<script>
  import BackButton from '../components/BackButton.svelte';
  import MainButton from '../components/MainButton.svelte';
  import ShareButtons from '../components/ShareButtons.svelte'
  import {formsStore, pagesStore} from '../stores';
  import {idbKeyval} from '../db';
  import {onMount} from 'svelte';

  let number = getRandomArbitrary(1, 9);

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  let img_path = './memes/' + number + '.jpg'

  let text = "Main page";
  let achievements = Array.from(new Set($formsStore.achievements));

  onMount(async () => {
      await idbKeyval.set("formStore", JSON.stringify($formsStore));
      console.log('Successfully saved in IndexDB');
    }
  );


</script>

<BackButton/>
<div class="page">
  <h1>Thank you</h1>
  <div class="img-final">
    <img src={img_path} alt="meme"/>
    <h1>Your score: {$formsStore.score}</h1>
    {#if $formsStore.score >= 2}
      <h1 class="chance">You have great chances to become a president! 🥳</h1>
    {:else}
      <h1 class="chance">You have no chances to become a president! 🤥</h1>
    {/if}
    {#if achievements.length == 0}
      <p>You have no achievements 🙁</p>
    {:else}
      <h1>Your achievements:</h1>
      {#each achievements as {name, emoji}}
        <p>{name} {emoji}</p>
      {/each}
    {/if}
    <!--  <p>You achive {achive[0]}</p>-->
    <p>If you liked our app, share it with your friends and post your memes using the hashtag #16personalities</p>
  </div>
  <ShareButtons/>
  <div class="button">
    <MainButton buttonText={text} callback={() => $pagesStore.current = 0}/>
  </div>
</div>


<style>
  h1 {
    color: #3C9294;
    text-align: center;
    font-size: var(--hero-fontsize);
  }

  img {
    max-width: 500px;
    width: 100%;
    height: auto;
  }

  p {
    max-width: 500px;
    text-align: center;
    font-weight: 600;
    color: #3C9294;
    font-size: calc(var(--plain-fontsize) - 5px);
  }

  .chance {
    color: #2a0346;
    font-size: calc(var(--hero-fontsize) + 5px);
  }

  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /*.button {*/
  /*  max-width: 300px;*/
  /*  display: flex;*/
  /*  align-items: center;*/
  /*  justify-content: center;*/
  /*}*/
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
</style>