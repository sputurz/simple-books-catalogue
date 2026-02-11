import { Footer } from './components/layout/footer/Footer';
import { Header } from './components/layout/header/header';
import { MainPage } from './components/sections/MainPage/MainPage';
import './style.css';
import { html } from './utils/helpers';

const App = () => html`
  ${Header()}
  <main>${MainPage()}</main>
  ${Footer()}
`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = App();
});
