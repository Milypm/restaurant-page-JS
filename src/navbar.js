import goMenu from './menu';
import goContact from './contact';

const setNavbar = (() => {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('nav-btn');
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
      activateBtn(homeBtn);
      goHome();
    }
  });

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('nav-btn');
  menuBtn.textContent = 'Menu';
  menuBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
      activateBtn(menuBtn);
      goMenu();
    }
  });

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('nav-btn');
  contactBtn.textContent = 'Contact';
  contactBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
      activateBtn(contactBtn);
      goContact();
    }
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
})();

const activateBtn = ((button) => {
  const navBtns = document.querySelectorAll('.nav-btn');

  navBtns.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
})();

export default setNavbar;