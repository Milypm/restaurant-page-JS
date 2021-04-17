import pirata from '../assets/images/Pirata.jpg';
import campechana from '../assets/images/Campechana.jpg';
import gobernador from '../assets/images/Gobernador.jpg';
import trompoSet from '../assets/images/Trompo set.jpg';
import sirlonSet from '../assets/images/Sirlon set.jpg';
import papaSirlon from '../assets/images/Papa sirlon.jpg';
import papaTrompo from '../assets/images/Papa trompo.jpg';
import frijoles from '../assets/images/Frijoles a la charra.jpg';
import chiles from '../assets/images/chiles rellenos.jpg';

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

const setMenu = () => {
  const fullMenu = document.createElement('div');
  fullMenu.classList.add('full-menu');

  const groupTacos = document.createElement('div');
  groupTacos.classList.add('menu-group');
  const groupPapas = document.createElement('div');
  groupPapas.classList.add('menu-group');
  const groupComp = document.createElement('div');
  groupComp.classList.add('menu-group');
  const groupDrinks = document.createElement('div');
  groupDrinks.classList.add('menu-group');
  groupDrinks.classList.add('drinks-group');

  const groupTacosTitle = document.createElement('div');
  groupTacosTitle.classList.add('menu-group-title');
  const groupPapasTitle = document.createElement('div');
  groupPapasTitle.classList.add('menu-group-title');
  const groupCompTitle = document.createElement('div');
  groupCompTitle.classList.add('menu-group-title');
  const groupDrinksTitle = document.createElement('div');
  groupDrinksTitle.classList.add('menu-group-title');

  const menuTitle = (title) => {
    const header = document.createElement('h3');
    header.classList.add('menu-title');
    header.textContent = title;
    return header;
  };

  const menuDrink = (drink) => {
    const bev = document.createElement('p');
    bev.textContent = drink;
    return bev;
  };

  groupTacos.appendChild(addMenuItem('Pirata', 'Taco grande en maíz o harina, sirlon, queso asadero, aguacate', pirata, 'Taco pirata imagen'));
  groupTacos.appendChild(addMenuItem('Campechana', 'Taco grande en maíz o harina, sirlon y trompo, queso asadero, aguacate', campechana, 'Taco campechana imagen'));
  groupTacos.appendChild(addMenuItem('Gobernador', 'Taco grande en maíz o harina, camarones, queso asadero, aguacate', gobernador, 'Taco gobernador imagen'));
  groupTacos.appendChild(addMenuItem('Orden trompo', 'Cinco tacos de trompo en maíz. Incluyen cebolla, cilantro, salsas verde/roja', trompoSet, 'Orden tacos de trompo imagen'));
  groupTacos.appendChild(addMenuItem('Orden sirlon', 'Cinco tacos de sirlon en maíz. Incluyen cebolla, cilantro, salsas verde/roja', sirlonSet, 'Orden tacos de sirlon imagen'));
  groupPapas.appendChild(addMenuItem('Papa sirlon', 'Papa asada con sirlon, mantequilla, queso(asadero y americano)', papaSirlon, 'Papa asada de sirlon imagen'));
  groupPapas.appendChild(addMenuItem('Papa trompo', 'Papa asada con trompo, mantequilla, queso(asadero y americano)', papaTrompo, 'Papa asada de trompo imagen'));
  groupComp.appendChild(addMenuItem('Frijoles a la charra', 'Incluyen salchichas, tomate, cebolla, cilantro, cueritos, chorizo', frijoles, 'Frijoles a la charra imagen'));
  groupComp.appendChild(addMenuItem('Chiles rellenos', 'Jalapeños asados rellenos de queso crema envueltos en tocino', chiles, 'Chiles rellenos asados'));
  groupDrinks.appendChild(menuDrink('Coca-Cola 500ml'));
  groupDrinks.appendChild(menuDrink('Botella de agua 600ml'));
  groupDrinks.appendChild(menuDrink('Limonada natural 600ml'));
  groupDrinks.appendChild(menuDrink('Jamaica natural 600ml'));
  groupDrinks.appendChild(menuDrink('Horchata natural 600ml'));

  groupTacosTitle.appendChild(menuTitle('Tacos'));
  groupTacosTitle.appendChild(groupTacos);
  groupPapasTitle.appendChild(menuTitle('Papas'));
  groupPapasTitle.appendChild(groupPapas);
  groupCompTitle.appendChild(menuTitle('Complementos'));
  groupCompTitle.appendChild(groupComp);
  groupDrinksTitle.appendChild(menuTitle('Bebidas'));
  groupDrinksTitle.appendChild(groupDrinks);

  fullMenu.appendChild(groupTacosTitle);
  fullMenu.appendChild(groupPapasTitle);
  fullMenu.appendChild(groupCompTitle);
  fullMenu.appendChild(groupDrinksTitle);

  return fullMenu;
};

const goMenu = () => {
  const view = document.getElementById('view');
  view.textContent = '';
  view.appendChild(setMenu());
};

export default goMenu;