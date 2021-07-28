import menuList from '../menu.json'
import menuTpl from '../templates/menu-tpl.hbs'

const menuRef = document.querySelector('.js-menu');
const switchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

function createMenuMarkup(items) {
  return menuTpl(items);
}

menuRef.insertAdjacentHTML('beforeend', createMenuMarkup(menuList));

const {LIGHT, DARK} = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  let getTheme = localStorage.getItem('theme');

bodyRef.classList.add(getTheme ? getTheme : LIGHT);
switchRef.checked = getTheme === DARK;


switchRef.addEventListener('change', changeTheme);

function changeTheme ({target : { checked }}) {
    checked ? toggleTheme(DARK, LIGHT) : toggleTheme (LIGHT, DARK);
}

function toggleTheme (add, rem) {
    bodyRef.classList.replace(rem, add);
    localStorage.setItem('theme', add);
}

