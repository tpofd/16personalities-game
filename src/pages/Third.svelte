<script>
  import BackButton from '../components/BackButton.svelte'
  import FacebookShare from '../components/ShareButtons.svelte'
  import MainButton from '../components/MainButton.svelte'
  import {chosenLocation} from '../stores'

</script>

<h1>Select a situation</h1>
<BackButton/>

<div on:click={() => chosenLocation.set('Party')}
     class:selected={$chosenLocation==='Party'} class="select-button">
  <img src="./actions/community.svg" alt="party"/>
  <h1>Party</h1>
</div>
<div on:click={() => chosenLocation.set('Political debate')}
     class:selected={$chosenLocation==='Political debate'} class="select-button">
  <img src="./actions/personality_types.svg" alt="Political debate"/>
  <h1>Political debate</h1>
</div>

<MainButton disabled={$chosenLocation == ""}/>

<style>
  .select-button {
    padding: 1%;
    margin-bottom: 1%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border-color: transparent;
    border-radius: 10%;
    transition: all 0.5s ease;
  }

  .select-button:hover {
    background-color: #EEF6FC;
  }

  .selected-button:active {
    background-color: #EEF6FC;
  }

  .select-button:focus {
    background-color: #EEF6FC;
  }

  .selected {
    background-color: #EEF6FC;
  }

  img {
    max-width: 500px;
    width: 100%;
    height: auto;
  }

  h1 {
    align-self: center;
    font-weight: 600;
    color: #3C9294;
    font-size: var(--hero-fontsize);
  }
</style>
