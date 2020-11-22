<script>
  import Chat from '../components/Chat.svelte';
  import {personalities, formsStore, getPers} from '../stores';
  import BackButton from '../components/BackButton.svelte';
  import {plots} from '../api';
  // let plots = {
  //   'Party': {},
  //   'Political debate': {
  //     description: 'Март 2020 года. Совсем скоро начнется предвыборная гонка в президенты США. Сегодня секретарь принес вам полное досье на вашего главного противника. Теперь у вас есть полный анализ его личности, слабые и сильные стороны. Анализируйте ситуацию, принимайте обдуманные решения и именно вы сможете попасть в Белый дом. ',
  //     'logician_protagonist': {
  //       starting: 'Вопрос 1',
  //       questions: {
  //         'Вопрос 1': {
  //           description: 'Первый шаг - самый главный. С чего начнете предвыборную гонку?',
  //           person: 'scientist',
  //           variants: ['Вариант 1', 'Вариант 2']
  //         }
  //       },
  //       variants: {
  //         'Вариант 1': {
  //           points: 1,
  //           achievement: {name: '', emoji: ''},
  //           next_question: 'Вопрос 2.2'
  //         }
  //       }
  //     },
  //     'commander_protagonist': {}
  //   }
  // }

  const [p1, p2] = getPers();

  function getPlot() {
    let type = plots[$formsStore.location];
    let str1 = `${p1}_${p2}`;
    let str2 = `${p2}_${p1}`;

    if (type[str1]) {
      return [type.description, type[str1], `${p1.capitalize()} vs ${p2.capitalize()}`, true];
    } else if (type[str2]) {
      return [type.description, type[str2], `${p2.capitalize()} vs ${p1.capitalize()}`, false];
    } else {
      console.error(`${str1} and ${str2} combination not exists!`);
      return null;
    }
  }

  let [description, plot, vs, me_left] = getPlot();
</script>

<BackButton/>
<div class="page">
  <h1>Political debate</h1>
  <img src="./dialogs/politics.svg" alt="Dialog image">
  {#if plot === null}
    <h1>Plot with types {personalities[$formsStore.firstChoice]} and
      {personalities[$formsStore.secondChoice]} not found!</h1>
  {:else}
    <h1 class="vs">{vs}</h1>
    <Chat {description} {plot} {me_left} op={p2} me={p1}/>
  {/if}

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

  .vs {
    padding: 0;
    margin: 0;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  .dialog {

  }
</style>