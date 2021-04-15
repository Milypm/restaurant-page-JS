const setFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const myGithub = document.createElement('a');
  myGithub.classList.add('my-github');
  myGithub.href = 'https://github.com/Milypm';
  const mygithubIcon = document.createElement('i');
  mygithubIcon.classList.add('fab');
  mygithubIcon.classList.add('fa-github-alt');
  myGithub.appendChild(mygithubIcon);

  const siteRights = document.createElement('p');
  siteRights.classList.add('footer-text');
  siteRights.textContent = 'Built by Mily Puente ';
  siteRights.appendChild(myGithub);
  
  const siteYear = document.createElement('p');
  siteYear.classList.add('footer-year');
  siteYear.textContent = 'Microverse 2021'

  footer.appendChild(siteRights);
  footer.appendChild(siteYear);
  
  return footer;
};

export default setFooter;