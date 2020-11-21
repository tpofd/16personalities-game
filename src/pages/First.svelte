<script>
  import MainButton from '../components/MainButton.svelte';
</script>

<div class="page">
  <img src="/intro-picture.png" alt="intro picture">
  <h1>Make sure you passed the test <a href="https://www.16personalities.com/">16 personalities</a></h1>
  <MainButton button_text="Next"/>
</div>

<style>
  .page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    text-align: center;
  }

  a {

  }


  img {
    width: 100%;
    height: auto;
  }
</style>