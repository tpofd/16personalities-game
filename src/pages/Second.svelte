<script>
  import {changePage} from '../stores';
  import {Swipe, SwipeItem} from "svelte-swipe"; // gzipped 3.37 KB

  const swipeConfig = {
    autoplay: false,
    delay: 2000,
    showIndicators: true,
    transitionDuration: 1000,
    defaultIndex: 0,
  };



</script>

<div class="swipe-holder">
<!--  <Swipe {...swipeConfig}>-->
<!--    <SwipeItem>-->
<!--      <h1>1</h1>-->
<!--    </SwipeItem>-->

<!--    <SwipeItem>-->
<!--      <h1>2</h1>-->
<!--    </SwipeItem>-->

<!--    <SwipeItem>-->
<!--      <h1>3</h1>-->
<!--    </SwipeItem>-->

<!--    <SwipeItem>-->
<!--      <h1>4</h1>-->
<!--    </SwipeItem>-->
<!--  </Swipe>-->
  <button on:click={() => changePage(-1)}>Go back</button>

</div>


<style>
  .swipe-holder {
    width: 300px;
    height: 300px;

    /*height: 30vh;*/
    /*width: 100%;*/
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>