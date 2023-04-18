//создаю переменную для массива из задачи
const directorsArr = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films: "https://www.kinopoisk.ru/name/22260/",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films: "https://www.kinopoisk.ru/name/41477/?utm_referrer=www.google.com",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.kinopoisk.ru/name/671251/",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.kinopoisk.ru/name/64249/",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.kinopoisk.ru/name/6139/",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.kinopoisk.ru/name/1762044/",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.kinopoisk.ru/name/58767/",
    top_rated_film: "Далласский клуб покупателей",
  },
];
//выбираю элемент из html - контейнер куда нужно поместить данные о режиссерах
let containerForArr = document.querySelector(".list-directors");
//вызываю метод forEach у массива
directorsArr.forEach((item, index) => {
  //добавляю новый элемент для html - для каждого массива свой тег див
  const listItem = document.createElement("div");
  //заполняю див элементами из массива (внутри дива)
  listItem.innerHTML = `
  <h2>${index + 1}. ${item.name}</h2>
  <p>${item.career}</p>
  <a style="color: black;" href="${item.films}" target="_blank">Фильмография</a>
  <p style="height: 0px; border: 1px solid rgb(73, 71, 71)"></p>`;
  //к родительскому добавляю каждый див
  containerForArr.appendChild(listItem);
});
//выбираю элемент из html - контейнер куда нужно поместить данные о фильмах
let containerForArrMovie = document.querySelector(
  ".list-directors__list-movie"
);
//добавляю переменную, вкладываю функцию map где создаю новый массив из основного массива (остальное аналогично с методом forEach)
let topFilmsList = directorsArr.map(function (elem) {
  const listMovie = document.createElement("span");
  listMovie.innerHTML = `
  <span>${elem.top_rated_film},</span>`;
  containerForArrMovie.appendChild(listMovie);
});
