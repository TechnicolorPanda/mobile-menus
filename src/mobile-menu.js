const loadMobileMenu = (
  contentSection,
) => {
  const content = document.createElement('div');
  content.classList.add('box');
  const contentMenu = contentSection;
  contentMenu.innerHTML = `
    <div id = 'header'>
      <h1 class = 'header'>The Bridge</h1>
    </div>
    <div id = 'picture'>
      <div class = 'display-container'>
        <img src='bridge.jpg' alt='Mackinac Bridge'>
      </div>
    </div>
    <div id = 'menu'>
      <button id = 'home'></button>
      <button id = 'search'></button>
      <button id = 'message'></button>
      <button id = 'profile'></button>
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
