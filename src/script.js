// Conversor de moedas
const $menu = document.querySelector('.menu');
const $menuList = document.querySelector('.menu_list')

$menu.addEventListener('click', function(e){
  e.preventDefault();

$menuList.classList.toggle('menu_list--open');
})

// Calculadora
const $menuC = document.querySelector('.menuC');
const $menuListC = document.querySelector('.menu_listC')

$menuC.addEventListener('click', function(e){
  e.preventDefault();

$menuListC.classList.toggle('menu_listC--open');
})

// Mentalista
const $menuM = document.querySelector('.menuM');
const $menuListM = document.querySelector('.menu_listM')

$menuM.addEventListener('click', function(e){
  e.preventDefault();

$menuListM.classList.toggle('menu_listM--open');
})

// AluraFlix
const $menuAf = document.querySelector('.menuAf');
const $menuListAf = document.querySelector('.menu_listAf')

$menuAf.addEventListener('click', function(e){
  e.preventDefault();

$menuListAf.classList.toggle('menu_listAf--open');
})

// Tabela de classificação
const $menuTc = document.querySelector('.menuTc');
const $menuListTc = document.querySelector('.menu_listTc')

$menuTc.addEventListener('click', function(e){
  e.preventDefault();

$menuListTc.classList.toggle('menu_listTc--open');
})

// Tabela de classificação
const $menuSt = document.querySelector('.menuSt');
const $menuListSt = document.querySelector('.menu_listSt')

$menuSt.addEventListener('click', function(e){
  e.preventDefault();

$menuListSt.classList.toggle('menu_listSt--open');
})

// Certificard
const $menuCtf = document.querySelector('.menuCtf');
const $menuListCtf = document.querySelector('.menu_listCtf')

$menuCtf.addEventListener('click', function(e){
  e.preventDefault();

$menuListCtf.classList.toggle('menu_listCtf--open');
})