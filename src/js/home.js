const introHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const homeText = document.createElement('p');
  homeText.classList.add('home-text');
  homeText.textContent = 'Los mejores tacos norteños!';

  home.appendChild(homeText);

  return home;
};

const goHome = () => {
  const view = document.getElementById('view');
  view.textContent = '';
  view.appendChild(introHome());
};

export default goHome;