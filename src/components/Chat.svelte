<script>
  import {beforeUpdate, afterUpdate} from 'svelte';
  import {fly} from 'svelte/transition';

  let div;
  let autoscroll;
  let colors = {me: "#3f8f6f", someone: "#594265"};

  let answerA = 'A';
  let answerB = 'B';

  beforeUpdate(() => {
    autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
  });

  afterUpdate(() => {
    if (autoscroll) div.scrollTo(0, div.scrollHeight);
  });


  let comments = [
    {author: 'someone', text: 'Hello!'}
  ];

  function send(choice) {
    comments = comments.concat({
      author: 'me',
      text: choice
    });
    const reply = 'B. Obama - ' + choice;

    setTimeout(() => {
      comments = comments.concat({
        author: 'someone',
        text: '...',
        placeholder: true
      });

      setTimeout(() => {
        comments = comments.filter(comment => !comment.placeholder).concat({
          author: 'someone',
          text: reply
        });
      }, 500 + Math.random() * 500);
    }, 200 + Math.random() * 200);
  }
</script>

<div class="chat" style="--me-color: {colors.me}; --someone-color: {colors.someone}">
  <div class="scrollable" bind:this={div}>
    {#each comments as comment}
      <article class={comment.author}>
        <span>{comment.text}</span>
      </article>
    {/each}
  </div>
  <div class="timer"></div>
  <div class="button-block">
    <button on:click={() => send(answerA)}><span>{answerA}</span></button>
    <button on:click={() => send(answerB)}><span>{answerB}</span></button>
  </div>
</div>


<style>
  .chat {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    height: 300px;
    max-width: 350px;
    width: 100%;
  }

  .scrollable {
    flex: 1 1 auto;
    border-top: 1px solid #eee;
    margin: 0 0 0.5em 0;
    overflow-y: auto;
  }

  article {
    margin: 0.5em 0;
  }

  .me {
    text-align: right;
  }

  button {
    width: 50%;
  }

  button span {
    text-align: center;
    width: 100%;
    padding: 0;
  }

  span {
    padding: 0.5em 1em;
    display: inline-block;
  }

  .someone span {
    background-color: var(--someone-color);
    border-radius: 1em 1em 1em 0;
    color: white;
  }

  .me span {
    background-color: var(--me-color);
    color: white;
    border-radius: 1em 1em 0 1em;
    word-break: break-all;
  }

  .button-block {
    display: flex;
    width: 100%;
  }

</style>