const setMenu = () => {
  const fullMenu = document.createElement('div');
  fullMenu.classList.add('full-menu');

  fullMenu.appendChild(addMenuItem('Pirata', 'home-made corn or wheat tortilla, sirlon fajita, asadero cheese, avocado'));
  fullMenu.appendChild(addMenuItem('Campechana', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));
  fullMenu.appendChild(addMenuItem('Gobernador', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));
  fullMenu.appendChild(addMenuItem('Trompo set', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));
  fullMenu.appendChild(addMenuItem('Sirlon set', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));
  fullMenu.appendChild(addMenuItem('Papa sirlon', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));
  fullMenu.appendChild(addMenuItem('Papa trompo', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));
  fullMenu.appendChild(addMenuItem('Frijoles a la charra', 'home-made corn or wheat tortilla, cut beef, cheese, avocado'));

  return fullMenu;
};

const addMenuItem = (dish, ingred) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const dishName = document.createElement('h3');
  dishName.textContent = dish;

  const dishIngred = document.createElement('p');
  dishIngred.textContent = ingred;

  const dishImg = document.createElement('img');
  dishImg.src = `../assets/images/${dish.toLowerCase()}.jpg`;

  menuItem.appendChild(dishImg);
  menuItem.appendChild(dishName);
  menuItem.appendChild(dishIngred);

  return menuItem;
};

const goMenu = () => {
  const view = document.getElementById('view');
  view.appendChild(setMenu());
};

export default goMenu;