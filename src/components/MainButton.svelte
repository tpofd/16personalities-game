<script>
    import {changePage} from '../stores';
    export let button_text = "Select";
  </script>
  
  <button on:click={() => changePage(-1)}>{button_text}</button>
  
  <style>
    button {
      background-color: #3C9294;
      width: 260px;
      height: 58px;
      color: #FFFFFF;
      border: none;
      transition: background-color 0.5s ease;
      border-radius: 50px; 
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
    button:hover {
      background: #f4f4f4;
    }
    button:focus {
      background: gainsboro;
    }
  </style>