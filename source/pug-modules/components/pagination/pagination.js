
export const pagination = {

    code: '',

    // ---------
    // Heplers
    // -------

    extend: function(e, data) {
      data = data || {};

      pagination.size = data.size || 300;
      pagination.page = data.page || 1;
      pagination.step = data.step || 3;

      pagination.paginationName = e;
      pagination.buttonPrev = data.buttonPrev;
      pagination.buttonNext = data.buttonNext;
    },

    // Добавить страницы в диапазоне (from [s] to [f])
    add: function(s, f) {
      for (var i = s; i < f; i++) {
        pagination.code += '<span class="page">' + i + '</span>';
      }
    },

    // Добавить последнюю страницу с dots
    last: function() {
      pagination.code += '<span class="dots">...</span><span class="page">' + pagination.size + '</span>';
    },

    // Добавить первую страницу страницу с dots
    first: function() {
      pagination.code += '<span class="page">1</span><span class="dots">...</span>';
    },



    // ---------
    // События
    // -------

    // Событие для номера страницы
    click: function() {
      pagination.page = +this.innerHTML;
      pagination.start();
    },

    // Предыдущая страница
    prev: function() {
      pagination.page--;

      if (pagination.page < 1) {
        pagination.page = 1;
      }

      pagination.start();
    },

    // Следующая страница
    next: function() {
      pagination.page++;

      if (pagination.page > pagination.size) {
        pagination.page = pagination.size;
      }

      pagination.start();
    },



    // --------
    // Script
    // ------

    // Вешаем событие для страниц пагинации
    bind: function() {
      const page = pagination.e.querySelectorAll('.page');
      let i;

      for (i = 0; i < page.length; i++) {
        if (+page[i].innerHTML === pagination.page) {
          page[i].classList.add('active-page');
        }

        page[i].addEventListener('click', pagination.click, false);
      }
    },

    // Проверяем кнопки, если выбрана первая / последняя страница
    checkButtons: function() {
      const buttonPrev = pagination.paginationName.querySelector(pagination.buttonPrev);
      const buttonNext = pagination.paginationName.querySelector(pagination.buttonNext);

      switch (pagination.page) {
        case 1:
          buttonPrev.classList.add('no-active')
          buttonNext.classList.remove('no-active')
          break

        case pagination.size:
          buttonNext.classList.add('no-active')
          buttonPrev.classList.remove('no-active')
          break

        default:
          buttonPrev.classList.remove('no-active')
          buttonNext.classList.remove('no-active')
          break
      }
    },

    // Добавляем сформированную пагинацию на страницу
    finish: function() {
        pagination.e.innerHTML = pagination.code;
        pagination.code = '';
        pagination.bind();
    },

    // Проверяем "тип" страницы
    start: function(e, data) {
      if (pagination.size < pagination.step * 2 + 6) {
          pagination.add(1, pagination.size + 1);
      }
      else if (pagination.page < pagination.step * 2 + 1) {
          pagination.add(1, pagination.step * 2 + 4);
          pagination.last();
      }
      else if (pagination.page > pagination.size - pagination.step * 2) {
          pagination.first();
          pagination.add(pagination.size - pagination.step * 2 - 2, pagination.size + 1);
      }
      else {
          pagination.first();
          pagination.add(pagination.page - pagination.step, pagination.page + pagination.step + 1);
          pagination.last();
      }

      pagination.finish();
      pagination.checkButtons();
    },



    // ---------------
    // Инизиализация
    // -------------

    // Вещаем события для кнопок пагинации
    buttons: function(e, data) {
        const buttonPrev = e.querySelector(data.buttonPrev);
        const buttonNext = e.querySelector(data.buttonNext);

        buttonPrev.addEventListener('click', pagination.prev, false);
        buttonNext.addEventListener('click', pagination.next, false);
    },

    // Создание структуры пагинации
    create: function(e, data) {
      const html = [
        '<div class="pagination-pages"></div>',
        '<div class="pagination-action">' +
          e.querySelector(data.buttonPrev).outerHTML +
          e.querySelector(data.buttonNext).outerHTML +
        '</div>'
      ];

      e.innerHTML = html.join('');
      pagination.e = e.querySelector('.pagination-pages');
      pagination.buttons(e, data);
    },

    // Init
    init: function(e, data) {
      pagination.extend(e, data);
      pagination.create(e, data);
      pagination.start();
    }
};
