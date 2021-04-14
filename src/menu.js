const setMenu = (() => {
  const fullMenu = document.createElement('div');
  fullMenu.classList.add('full-menu');

  fullMenu.appendChild(addMenuItem('Pirata', 'home-made corn or wheat tortilla, sirlon fajita, asadero cheese, avocado', 1));
  fullMenu.appendChild(addMenuItem('Campechana', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', 2));
  fullMenu.appendChild(addMenuItem('Gobernador', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', 3));
  fullMenu.appendChild(addMenuItem('Trompo set', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', 4));
  fullMenu.appendChild(addMenuItem('Sirlon set', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', 5));
  fullMenu.appendChild(addMenuItem('Papa regular', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', 6));
  fullMenu.appendChild(addMenuItem('Papa complete', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', 7));
  fullMenu.appendChild(addMenuItem('Frijoles a la charra', 'home-made corn or wheat tortilla, cut beef, cheese, avocado', 8));

  return fullMenu;
})();

const addMenuItem = ((dish, ingred, num) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const dishName = document.createElement('h3');
  dishName.textContent = dish;

  const dishIngred = document.createElement('p');
  dishIngred.textContent = ingred;

  menuItem.appendChild(dishImg);
  menuItem.appendChild(dishName);
  menuItem.appendChild(dishIngred);

  return menuItem;
})();

// const getdishImg = ((num) => {
//   const dishImg = document.createElement('img');
//   pirataImg.src = '../dist/images/taco-pirata.jpeg';
//   dishImg.alt = 'taco pirata';
// })();

const goMenu = (() => {
  const main = document.getElementById('main');
  main.appendChild(setMenu());
})();

export default goMenu;