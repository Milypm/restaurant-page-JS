require('../css/style.css');

import goHome from './home';
import { setNavbar, activateBtn } from './navbar';
import setFooter from './footer';

const setHeader = () => {
  const header = document.createElement('header');
  header.classList.add('main-header');

  const socialIcons = document.createElement('div');
  socialIcons.classList.add('social-icons');

  const fbAnchor = document.createElement('a');
  fbAnchor.href = '#';
  const fbIcon = document.createElement('i');
  fbIcon.classList.add('fab');
  fbIcon.classList.add('fa-facebook-f');
  fbAnchor.appendChild(fbIcon);

  const instaAnchor = document.createElement('a');
  instaAnchor.href = '#';
  const instaIcon = document.createElement('i');
  instaIcon.classList.add('fab');
  instaIcon.classList.add('fa-instagram');
  instaAnchor.appendChild(instaIcon);

  const twitAnchor = document.createElement('a');
  twitAnchor.href = '#';
  const twitIcon = document.createElement('i');
  twitIcon.classList.add('fab');
  twitIcon.classList.add('fa-twitter');
  twitAnchor.appendChild(twitIcon);

  const wholeHeader = document.createElement('div');
  wholeHeader.classList.add('whole-header');

  const hat = document.createElement('i');
  hat.classList.add('fas');
  hat.classList.add('fa-hat-cowboy-side');

  const chile = document.createElement('i');
  chile.classList.add('fas');
  chile.classList.add('fa-pepper-hot');

  const restTitle = document.createElement('h1');
  restTitle.classList.add('rest-title');
  restTitle.textContent = 'La taquería';

  const titleNav = document.createElement('div');
  titleNav.classList.add('title-nav');

  wholeHeader.appendChild(hat);
  wholeHeader.appendChild(chile);
  wholeHeader.appendChild(restTitle);
  socialIcons.appendChild(fbAnchor);
  socialIcons.appendChild(instaAnchor);
  socialIcons.appendChild(twitAnchor);
  titleNav.appendChild(wholeHeader);
  titleNav.appendChild(setNavbar());
  header.appendChild(titleNav);
  header.appendChild(socialIcons);

  return header;
};

const setView = () => {
  const view = document.createElement('view');
  view.classList.add('view');
  view.setAttribute('id', 'view');
  
  return view;
};

const startSite = () => {
  const content = document.getElementById('content');
  content.appendChild(setHeader());
  content.appendChild(setView());
  content.appendChild(setFooter());

  activateBtn(document.querySelector('.nav-btn'));
  goHome();
};

startSite();