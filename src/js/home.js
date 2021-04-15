import Tacos from '../assets/images/Tacos.jpg';

const introHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const tacosImg = document.createElement('img');
  tacosImg.classList.add('tacos-main-img');
  tacosImg.src = Tacos;
  tacosImg.alt = 'Tres tacos';

  const homeText = document.createElement('p');
  homeText.classList.add('home-text');
  homeText.textContent = 'Los mejores tacos norteños!'

  home.appendChild(tacosImg);
  home.appendChild(homeText);

  return home;
};

const goHome = () => {
  const view = document.getElementById('view');
  view.appendChild(introHome());
};

export default goHome;