const setContact = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const contactNum = document.createElement('p');
  contactNum.textContent = 'Teléfono: 52+ 818343 3070';

  const contactWhats = document.createElement('p');
  contactWhats.textContent = 'Whatsapp: 52+ 811400 2838';

  const location = document.createElement('p');
  location.textContent = 'Ubicación: José María Morelos, 837, Barrio Antiguo, Centro, Monterrey, N.L.'

  const locationImg = document.createElement('iframe');
  locationImg.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.9849515912579!2d-100.30909303263797!3d25.667100214547386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa452baf98c30ece!2sMercado%20Barrio%20Antiguo!5e0!3m2!1sen!2smx!4v1618545480214!5m2!1sen!2smx';

  contact.appendChild(contactNum);
  contact.appendChild(contactWhats);
  contact.appendChild(location);
  contact.appendChild(locationImg);

  return contact;
};

const goContact = () => {
  const view = document.getElementById('view');
  view.textContent = '';
  view.appendChild(setContact());
};

export default goContact;