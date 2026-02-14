import './styles/global.css';
import { App } from './components/sections/MainPage/MainPage';

// убрать
export function createElementFromHTML(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

document.addEventListener('DOMContentLoaded', () => {
  App();
});
