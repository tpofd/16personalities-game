<script>
    import {changePage} from '../stores';
    export let buttonText = "Select";
    export let callback = () => {};
  </script>
  
  <button on:click={() => {callback(); changePage(+1)}}>{buttonText}</button>
  
  <style>
    button {
      background-color: #3C9294;
      width: 260px;
      height: 58px;
      color: #FFFFFF;
      border: 2px solid transparent;
      transition: background-color 0.5s ease;
      border-radius: 50px; 
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
    button:hover {
      background: #f4f4f4;
      color: #3C9294;
      border-color: #3C9294;
    }
    button:focus {
      background: gainsboro;
    }
  </style>