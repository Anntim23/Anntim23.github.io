// СЛАЙДЕР

const swiper = new Swiper('.swiper-container', {

  // Цикличность

  loop: true,

  // Пагинация

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Переовд пагинации

  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }
});

// ФОРМА ПОИСКА

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search__form').classList.add('search-form_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search__form').classList.remove('search-form_show')
  })


  document.getElementById('search__form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})

// МЕНЮ

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("header__burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
  })
})

// ТАБЫ

let tabsBtn = document.querySelectorAll('.work__links');
let tabsItem = document.querySelectorAll('.work__block1');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('work__links--active')});
    e.currentTarget.classList.add('work__links--active');

    tabsItem.forEach(function(element){ element.classList.remove('work__block1--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work__block1--active');
  });
});

// Аккордеон подключен через другой файл
