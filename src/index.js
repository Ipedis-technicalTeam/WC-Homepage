import './assets/sass/index.scss';
import './js/skipLinks';
import './js/translation';
import '../node_modules/ip-components/dist/ip-components/ip-components.esm';

// Only For Lang Switch Btn Demo
// import './js/switchLang';

const icons = document.querySelectorAll('.sidebar-menu > h2 span img');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('rotate');
  });
});
