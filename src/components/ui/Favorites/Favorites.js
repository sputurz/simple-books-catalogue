import './favorites.css';
import { escapeHtml, html } from '../../../utils/helpers';
import favIcon from '../../../assets/heart.svg?raw';
import { CardList } from '../CardList/CardList';

const cards = [
  {
    key: 1,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    cover: '12019545',
    isFavorite: true,
  },
  {
    key: 2,
    title:
      'Great asdasd asdasd aaa asdas asda asasdasd asdasdas asdasd asdds sdsd sdasdas asdasd',
    author: 'Fitzgerald asdasd asdasd asdasd sdd ss',
    year: 1995,
    cover: '11719266',
    isFavorite: false,
  },
  {
    key: 3,
    title: 'Great',
    author: 'Fitzgerald',
    year: 1995,
    cover: '11719266',
    isFavorite: false,
  },
];

export const Favorites = () => {
  return html`
    <div class="favorites">
      <div class="favorites__title-wrap">
        ${favIcon}
        <div class="favorites__text-wrap">
          <span class="favorites__title">Favorites</span>
          <span class="favorites__text">${0} books saved</span>
        </div>
      </div>
      <div class="favorites__card-list-wrap">${CardList(cards, true)}</div>
    </div>
  `;
};
