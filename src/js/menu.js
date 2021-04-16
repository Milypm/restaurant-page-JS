import pirata from '../assets/images/Pirata.jpg';
import campechana from '../assets/images/Campechana.jpg';
import gobernador from '../assets/images/Gobernador.jpg';
import trompoSet from '../assets/images/Trompo set.jpg';
import sirlonSet from '../assets/images/Sirlon set.jpg';
import papaSirlon from '../assets/images/Papa sirlon.jpg';
import papaTrompo from '../assets/images/Papa trompo.jpg';
import frijoles from '../assets/images/Frijoles a la charra.jpg';

const setMenu = () => {
  const fullMenu = document.createElement('div');
  fullMenu.classList.add('full-menu');

  fullMenu.appendChild(addMenuItem('Pirata', 'home-made corn or wheat tortilla, sirlon fajita, asadero cheese, avocado', pirata, 'Taco pirata imagen'));
  fullMenu.appendChild(addMenuItem('Campechana', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', campechana, 'Taco campechana imagen'));
  fullMenu.appendChild(addMenuItem('Gobernador', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', gobernador, 'Taco gobernador imagen'));
  fullMenu.appendChild(addMenuItem('Trompo set', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', trompoSet, 'Orden tacos de trompo imagen'));
  fullMenu.appendChild(addMenuItem('Sirlon set', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', sirlonSet, 'Orden tacos de sirlon imagen'));
  fullMenu.appendChild(addMenuItem('Papa sirlon', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', papaSirlon, 'Papa asada de sirlon imagen'));
  fullMenu.appendChild(addMenuItem('Papa trompo', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', papaTrompo, 'Papa asada de trompo imagen'));
  fullMenu.appendChild(addMenuItem('Frijoles a la charra', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', frijoles, 'Frijoles a la charra imagen'));

  return fullMenu;
};

const addMenuItem = (dish, ingred, img, alt) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const dishName = document.createElement('h3');
  dishName.textContent = dish;

  const dishIngred = document.createElement('p');
  dishIngred.textContent = ingred;

  const dishImg = document.createElement('img');
  dishImg.src = img;
  dishImg.alt = alt;

  menuItem.appendChild(dishImg);
  menuItem.appendChild(dishName);
  menuItem.appendChild(dishIngred);

  return menuItem;
};

const goMenu = () => {
  const view = document.getElementById('view');
  view.textContent = '';
  view.appendChild(setMenu());
};

export default goMenu;