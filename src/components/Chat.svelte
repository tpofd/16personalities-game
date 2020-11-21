<script>
  import {beforeUpdate, afterUpdate} from 'svelte';

  let div;
  let autoscroll;

  beforeUpdate(() => {
    autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
  });

  afterUpdate(() => {
    if (autoscroll) div.scrollTo(0, div.scrollHeight);
  });


  let comments = [
    {author: 'eliza', text: 'Hello!'}
  ];

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      const text = event.target.value;
      if (!text) return;

      comments = comments.concat({
        author: 'user',
        text
      });

      event.target.value = '';

      const reply = 'Bot - ' + text;

      setTimeout(() => {
        comments = comments.concat({
          author: 'eliza',
          text: '...',
          placeholder: true
        });

        setTimeout(() => {
          comments = comments.filter(comment => !comment.placeholder).concat({
            author: 'eliza',
            text: reply
          });
        }, 500 + Math.random() * 500);
      }, 200 + Math.random() * 200);
    }
  }
</script>

<div class="chat">
  <div class="scrollable" bind:this={div}>
    {#each comments as comment}
      <article class={comment.author}>
        <span>{comment.text}</span>
      </article>
    {/each}
  </div>

  <input on:keydown={handleKeydown}>
  <div class="button-block">
    <button><span>A</span></button>
    <button><span>B</span></button>
  </div>
</div>


<style>
  .chat {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    height: 300px;
    max-width: 320px;
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

  .user {
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

  .eliza span {
    background-color: #eee;
    border-radius: 1em 1em 1em 0;
  }

  .user span {
    background-color: #0074D9;
    color: white;
    border-radius: 1em 1em 0 1em;
    word-break: break-all;
  }

  .button-block {
    display: flex;
    width: 100%;
  }
</style>