import goHome from './home';
import { setNavbar, activateBtn } from './navbar';
import setFooter from './footer';

const setHeader = (() => {
  const header = document.createElement('header');
  header.classList.add('main-header');

  const restTitle = document.createElement('h1');
  restTitle.classList.add('rest-title');
  restTitle.textContent = 'La taquería';

  header.appendChild(restTitle);
  header.appendChild(setNavbar());

  return header;
})();

const setMain = (() => {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute("id", "main");
  return main;
})();

const startSite = (() => {
  const content = document.getElementById('content');
  content.appendChild(setHeader());
  content.appendChild(setMain());
  content.appendChild(setFooter());

  activateBtn(document.querySelector('.nav-btn'));
  goHome();
})();

startSite();