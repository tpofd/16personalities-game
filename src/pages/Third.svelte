<script>
  import BackButton from '../components/BackButton.svelte'
  import MainButton from '../components/MainButton.svelte'
  import {chosenLocation} from '../stores'

  chosenLocation.set("0")
</script>

<h1>Page 3</h1>
<BackButton/>
<button on:click={() => chosenLocation.set('Party')} selected class="select-button">
    <img src="./img/community.svg" alt="party" />
    <h1>Party</h1>
</button>
<button on:click={() => chosenLocation.set('Political debate')} class="select-button">
    <img src="./img/personality_types.svg" alt="Political debate" />
    <h1>Political debate</h1>
</button>

<h1>{$chosenLocation}</h1>
<MainButton></MainButton>

<style>
    .select-button {
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border: none;
    }

    h1 {
        align-self: center;
        font-weight: 600;
        color: #3C9294;
    }
</style>
