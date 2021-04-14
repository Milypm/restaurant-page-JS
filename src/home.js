const introHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const tacosImg = document.createElement('img');
  tacosImg.classList.add('tacos-main-img');
  tacosImg.src = '../dist/images/tacos4.jpg';
  tacosImg.alt = 'tacos';

  const homeText = document.createElement('p');
  homeText.classList.add('home-text');
  homeText.textContent = 'The real mexican tacos!'
};

const goHome = () => {
  const main = document.getElementById('main');
  main.appendChild(introHome());
};

export default goHome;