import superplaceholder from 'superplaceholder';

superplaceholder({
  el: document.querySelector('.search-form__field'),
  sentences: ['Пример: Чертежи'],
  options: {
    letterDelay: 40,
    sentenceDelay: 700,
  },
});

superplaceholder({
  el: document.querySelector('.request-form__field_name'),
  sentences: ['Пример: Иванов Иван Иванович'],
  options: {
    letterDelay: 40,
    sentenceDelay: 700,
  },
});

superplaceholder({
  el: document.querySelector('.request-form__field_email'),
  sentences: ['Пример: example@example.ru'],
  options: {
    letterDelay: 40,
    sentenceDelay: 700,
  },
});

superplaceholder({
  el: document.querySelector('.request-form__field_message'),
  sentences: ['Кратко опишите ваш проект'],
  options: {
    letterDelay: 40,
    sentenceDelay: 700,
  },
});
