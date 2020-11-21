<script>
  import {changePage} from '../stores';
</script>

<button on:click={() => changePage(-1)}>
  <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.7083 9.90015H3.94023L13.8073 1.89665C14.3239 1.47755 14.344 0.781259 13.8518 0.341264C13.3604 -0.0981806 12.5427 -0.115781 12.0254 0.303314L0.756917 9.4442C0.269312 9.86 0 10.4122 0 11.0001C0 11.5875 0.269312 12.1403 0.779521 12.5742L12.0261 21.6964C12.276 21.8994 12.5963 22 12.9167 22C13.2577 22 13.5987 21.8856 13.8525 21.6585C14.3446 21.2185 14.3246 20.5227 13.8079 20.1036L3.89954 12.1001H29.7083C30.4213 12.1001 31 11.6073 31 11.0001C31 10.3929 30.4213 9.90015 29.7083 9.90015Z"
      fill="#3C9294"/>
  </svg>
</button>

<style>
  button {
    position: fixed;
    left: 25px;
    top: 25px;
    background: transparent;
    border: none;
    transition: background-color 0.5s ease;
  }
  button:hover {
    background: #f4f4f4;
  }
  button:focus {
    background: gainsboro;
  }
</style>