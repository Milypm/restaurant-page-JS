const setContact = (() => {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const contactNum = document.createElement('p');
  contactNum.textContent = 'Phone: 52+ 818343 3070';

  const contactWhats = document.createElement('p');
  contactWhats.textContent = 'Whatsapp: 52+ 811400 2838';

  const location = document.createElement('p');
  location.textContent = 'Location: José María Morelos, 837, Centro, Monterrey, N.L.'

  const locationImg = document.createElement('img');
  locationImg.src = '../dist/images/location.png';
  locationImg.alt = 'La taquería location';

  contact.appendChild(contactNum);
  contact.appendChild(contactWhats);
  contact.appendChild(location);
  contact.appendChild(locationImg);

  return contact;
})();

const goContact = (() => {
  const main = document.getElementById('main');
  main.appendChild(setContact());
})();

export default goContact;