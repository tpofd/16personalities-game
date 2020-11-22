<script>
  import BackButton from '../components/BackButton.svelte';
  import MainButton from '../components/MainButton.svelte';
  import ShareButtons from '../components/ShareButtons.svelte'
  import { formsStore, pagesStore } from '../stores';

  let number = getRandomArbitrary(1, 9);

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  let img_path = './memes/' + number + '.jpg'

  let text = "Main page";

  let achive = $formsStore.achievements
</script>

<BackButton/>
<h1>Thank you</h1>
<div class="img-final">
  <img src={img_path} alt="meme"/>
  <h1>Your score: {$formsStore.score}</h1>
  <p>You achive {achive[0]}</p>
  <p>If you liked our app, share it with your friends and post your memes using the hashtag #16personalities</p>
</div>
<ShareButtons/>
<MainButton buttonText={text} callback={() => $pagesStore.current = 0}/>

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
    font-size: var(--plain-fontsize);
  }


</style>