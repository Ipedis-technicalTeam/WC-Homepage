import './assets/sass/index.scss';
import './js/skipLinks';
import './js/translation';
import '../node_modules/ip-tab-panel/dist/ip-tab-panel/ip-tab-panel.esm';
import '../node_modules/ip-accordeon/dist/ip-accordeon/ip-accordeon.esm';

const icons = document.querySelectorAll('.sidebar-menu > h2 span img');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('rotate');
  });
});
