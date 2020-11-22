<script>
  import {beforeUpdate, afterUpdate} from 'svelte';
  import {fly} from 'svelte/transition';
  import MainButton from '../components/MainButton.svelte';
  import {formsStore, changePage} from '../stores';

  export let plot;
  export let description;
  export let me_left;
  export let me;
  export let op;

  let currentQuestion = plot.starting;
  let div;
  let autoscroll;
  let colors = {"logician": "#3f8f6f", "protagonist": "#594265", "commander": "#3f8f6f"};
  let answerA = 'A';
  let answerB = 'B';
  let buttonsDisabled = true;
  let timer;


  beforeUpdate(() => {
    autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
  });

  afterUpdate(() => {
    if (autoscroll) div.scrollTo(0, div.scrollHeight);
  });


  let comments = [
    {author: 'story', text: description}
  ];

  function replyQuestion(){
    let question = plot.questions[currentQuestion];
    if (question === undefined){
      comments = comments.concat({
        author: 'story',
        text: 'This is the end!',
      });
      setTimeout(() => changePage(+1), 2000)
      return;
    }
    if (question.person === me) {
      comments = comments.concat({
        author: 'story',
        text: question.description,
      });
      //  TODO: timer
      [answerA, answerB] = question.variants;
      buttonsDisabled = false;

    } else {
      comments = comments.concat({
        author: 'story',
        text: 'Waiting for opponent...',
      });
      buttonsDisabled = true;
      getAnswer();
    }
  }

  function getAnswer() {
    const variant = plot.questions[currentQuestion].variants[getRandomArbitrary(0, 1)];
    currentQuestion = plot.variants[variant].next_question;
    setTimeout(() => {
      comments = comments.concat({
        author: op,
        text: '...',
        placeholder: true
      });
      setTimeout(() => {
        comments = comments.filter(comment => !comment.placeholder).concat({
          author: op,
          text: variant
        });
        replyQuestion()
      }, 500 + Math.random() * 500);
    }, 200 + Math.random() * 200);
  }

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function sendAnswer(choice) {
    comments = comments.concat({
      author: me,
      text: choice
    });
    currentQuestion = plot.variants[choice].next_question;
    $formsStore.score += plot.variants[choice].points;
    if (plot.variants[choice].achievement){
      $formsStore.achievements = $formsStore.achievements.concat(plot.variants[choice].achievement)
    }
    replyQuestion();
  }

  replyQuestion();
</script>

<div class="chat">
  <div class="scrollable" bind:this={div}>
    {#each comments as comment}
      <article class={comment.author}>
        <span in:fly={{y: 5}}>{comment.text}</span>
      </article>
    {/each}
  </div>
  <div class="timer"><p>00:05</p></div>
  <div class="button-block">
    <!--    <button on:click={() => send(answerA)}><span>{answerA}</span></button>-->
    <!--    <button on:click={() => send(answerA)}><span>{answerA}</span></button>-->
    <!--    <button on:click={() => send(answerB)}><span>{answerB}</span></button>-->
    <MainButton disabled={buttonsDisabled} callback={() => sendAnswer(answerA)} buttonText={answerA}/>
    <MainButton disabled={buttonsDisabled} callback={() => sendAnswer(answerB)} buttonText={answerB}/>
  </div>
</div>


<style>

  .chat {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    height: 350px;
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

  .logician, .commander {
    text-align: left;
  }

  .protagonist {
    text-align: right;
  }

  .story {
    text-align: justify;
    background: white;
    border: 1px solid #cccccc;
    border-radius: 1em;
  }

  .protagonist span {
    background-color: #3f8f6f;
    color: white;
    border-radius: 1em 1em 0 1em;
  }

  .logician span, .commander span {
    background-color: #594265;
    color: white;
    border-radius: 1em 1em 1em 0;

  }

  /*-------------------------*/

  button {
    width: 50%;
    /*background: ;*/
  }

  button span {
    text-align: center;
    width: 100%;
    padding: 0;
  }

  span {
    padding: 0.5em 1em;
    display: inline-block;
    font-size: var(--plain-fontsize);
  }

  .button-block {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

</style>