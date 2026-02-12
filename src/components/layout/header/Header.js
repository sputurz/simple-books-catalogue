import './header.css';
import { html } from '../../../utils/helpers';
import logoIcon from '../../../assets/book.svg';
import heartIcon from '../../../assets/heart.svg?raw';

export const Header = () => {
  return html`
    <header class="header">
      <div class="container">
        <div class="header__wrap">
          <a class="header__link" href="/" aria-label="Link to The Library">
            <img class="header__logo" alt="" src="${logoIcon}" />
            <div class="header__inner">
              <span class="header__title">The Library</span>
              <span class="header__slogan"
                >Discover your next favorite book</span
              >
            </div></a
          >
          <a
            class="header__anchor-link"
            href="#favorites-list"
            aria-label="Go To Favorites Books"
          >
            ${heartIcon}
          </a>
        </div>
      </div>
    </header>
  `;
};
