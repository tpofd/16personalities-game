<script>
  import Chat from '../components/Chat.svelte'

  let plots = {
    'Party': {},
    'Political debate': {
      description: 'Март 2020 года. Совсем скоро начнется предвыборная гонка в президенты США. Сегодня секретарь принес вам полное досье на вашего главного противника. Теперь у вас есть полный анализ его личности, слабые и сильные стороны. Анализируйте ситуацию, принимайте обдуманные решения и именно вы сможете попасть в Белый дом. ',
      'scientist_protagonist': {
        starting: 'Вопрос 1',
        questions: {
          'Вопрос 1': {
            description: 'Первый шаг - самый главный. С чего начнете предвыборную гонку?',
            person: 'scientist',
            variants: ['Вариант 1', 'Вариант 2']
          }
        },
        variants: {
          'Вариант 1': {
            points: 1,
            achievement: null,
            next_question: 'Вопрос 2.2'
          }
        }
      },
      'commander_protagonist': {
      }
    }
  }

  let history = [];
</script>

<div class="page">
  <h1>Political debate</h1>
  <img src="./dialogs/politics.svg" alt="Dialog image">
  <Chat/>

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

  img {
    width: 100%;
    max-width: 400px;
  }

  .dialog {

  }
</style>