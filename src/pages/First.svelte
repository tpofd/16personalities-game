<script>
  import {changePage} from '../stores';
</script>

<div class="page">
  <img src="/intro-picture.png" alt="intro picture">
  <h1>Make sure you passed the test <a href="https://www.16personalities.com/">16 personalities</a></h1>
  <button on:click={() => changePage(+1)}>I have passed</button>
</div>

<style>
  :root {
    background: #eceded;
  }
  .page {
    width: 100%;
  }
  /*div {*/
  /*  background: #eceded;*/
  /*}*/

  img {
    width: 100%;
    height: auto;
  }
</style>