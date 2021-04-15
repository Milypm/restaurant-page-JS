const setFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');
  
  const mygithubIcon = document.createElement('i');
  mygithubIcon.classList.add('fab');
  mygithubIcon.classList.add('fa-github-alt');

  const myGithub = document.createElement('a');
  myGithub.classList.add('my-github');
  myGithub.href = 'https://github.com/Milypm';
  myGithub.appendChild(mygithubIcon);

  const siteRights = document.createElement('p');
  siteRights.textContent = `Built with ${heart} by Mily Puente ${myGithub}`;

  footer.appendChild(siteRights);

  return footer;
};

export default setFooter;