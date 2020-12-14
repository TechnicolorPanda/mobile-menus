const loadMobileMenu = (
  contentSection,
) => {
  const content = document.createElement('div');
  content.classList.add('box');
  const contentMenu = contentSection;
  contentMenu.innerHTML = `
    <div id = 'menu'>
      <button id = 'home'>Home</button>
      <button id = 'search'>Search</button>
      <button id = 'message'>Message</button>
      <button id = 'profile'>Profile</button>
    </div>
    `;
  // TODO: place buttons in box at the bottom of the page
  const menuItem = document.getElementById('menu');
  menuItem.appendChild(content);

  const homeButton = document.querySelector('#home');
  homeButton.id = 'homeButton';

  const searchButton = document.querySelector('#search');
  searchButton.id = 'searchButton';

  const messageButton = document.querySelector('#message');
  messageButton.id = 'messageButton';

  const profileButton = document.querySelector('#profile');
  profileButton.id = 'profileButton';
};

export { loadMobileMenu };
