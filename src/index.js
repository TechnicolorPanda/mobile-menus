import { loadMobileMenu } from './mobile-menu';

(function initiatePage() {
  // set content
  const contentSection = document.querySelector('#content');
  loadMobileMenu(contentSection);
}());
