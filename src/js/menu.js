import menuList from './menu.json'
import menuTpl from '../templates/menu-tpl.hbs'

const menuRef = document.querySelector('.js-menu');

function createMenuMarkup(items) {
  return menuTpl(items);
}

menuRef.insertAdjacentHTML('beforeend', createMenuMarkup(menuList));

const switchRef = document.querySelector('#theme-switch__toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');

switchRef.addEventListener('change', ChangeTheme);

function ChangeTheme(e) {
  if (e.target.chacked) {
    bodyRef.classList.add(DARK);
    localStorage.setItem('theme', DARK);
  } else {
    bodyRef.classList.add(LIGHT);
    localStorage.setItem('theme', LIGHT);
  }
}

let getTheme = localStorage('theme');

bodyRef.classList.add(getTheme ? getTheme : LIGHT);
