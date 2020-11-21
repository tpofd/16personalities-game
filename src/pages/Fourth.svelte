<script>
  import Chat from '../components/Chat.svelte'

  let plots = {
    'Party': {
      // '':
    },
    'Political debate': {}
  }

  let history = [];
</script>

<div class="page">
  <h1>Political debate</h1>
  <img src="./dialogs/politics.svg" alt="Dialog image">
  <Chat/>

</div>

<style>
  .page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: var(--hero-fontsize);
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  .dialog {

  }
</style>