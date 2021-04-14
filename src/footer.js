const setFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const siteRights = document.createElement('p');
  siteRights.textContent = 'La taquería. Rights Reserved 2021 ©';

  const socialIcons = document.createElement('div');
  socialIcons.classList.add('social-icons');

  const fbAnchor = document.createElement('a');
  fbAnchor.href = '#';
  const fbIcon = document.createElement('i');
  fbIcon.classList.add('fab');
  fbIcon.classList.add('fa-facebook-f');
  fbAnchor.appendChild(fbIcon);

  const instaAnchor = document.createElement('a');
  instaAnchor.href = '#';
  const instaIcon = document.createElement('i');
  instaIcon.classList.add('fab');
  instaIcon.classList.add('fa-instagram');
  instaAnchor.appendChild(instaIcon);

  const twitAnchor = document.createElement('a');
  twitAnchor.href = '#';
  const twitIcon = document.createElement('i');
  twitIcon.classList.add('fab');
  twitIcon.classList.add('fa-twitter');
  twitAnchor.appendChild(twitIcon);

  socialIcons.appendChild(fbAnchor);
  socialIcons.appendChild(instaAnchor);
  socialIcons.appendChild(twitAnchor);
  footer.appendChild(siteRights);
  footer.appendChild(socialIcons);

  return footer;
};

export default setFooter;