import './card.css';
import favIcon from '../../../assets/heart.svg?raw';

export class Card {
  constructor(cardData, onLikeToggle, isSmall = false) {
    this.cardData = cardData;
    this.onLikeToggle = onLikeToggle;
    this.isSmall = isSmall;
    this.element = this.createElement();
  }

  createElement() {
    const cardEl = document.createElement('div');
    cardEl.className = `card ${this.isSmall ? 'card--small' : ''}`;

    // link to openlibrary.org book webpage
    const aEl = document.createElement('a');
    aEl.className = 'card__link';
    aEl.href = `https://openlibrary.org${this.cardData.key}}`;
    aEl.ariaLabel = 'Link to book';
    aEl.target = '_blank';
    aEl.rel = 'noopener noreferrer';

    const imgEl = document.createElement('img');
    imgEl.className = 'card__img';
    imgEl.src = this.cardData.cover;
    imgEl.alt = this.cardData.title;

    const wrapEl = document.createElement('div');
    wrapEl.className = 'card__wrap';

    const titleEl = document.createElement('p');
    titleEl.className = 'card__title';
    titleEl.textContent = this.cardData.title;

    const authorEl = document.createElement('p');
    authorEl.className = 'card__author';
    authorEl.textContent = this.cardData.author;

    const yaerEl = document.createElement('span');
    yaerEl.className = 'card__year';
    yaerEl.textContent = this.cardData.year;

    const btnEl = document.createElement('button');
    btnEl.className = `card__btn ${this.cardData.isFavorite ? ' card__btn--favorite' : ''}`;
    btnEl.type = 'button';
    btnEl.ariaLabel = this.cardData.isFavorite ? 'Delete' : 'Add';
    btnEl.title = this.cardData.isFavorite ? 'Delete' : 'Add';
    btnEl.onclick = () => this.onLikeToggle(this.cardData.key);

    cardEl.append(aEl, btnEl);
    aEl.append(imgEl, wrapEl);
    wrapEl.append(titleEl, authorEl, yaerEl);
    btnEl.innerHTML = favIcon;

    return cardEl;
  }

  update(cardData) {
    this.cardData = cardData;
    const btnEl = this.element.querySelector('button');
    btnEl.className = `card__btn ${this.cardData.isFavorite ? ' card__btn--favorite' : ''}`;
    btnEl.ariaLabel = this.cardData.isFavorite ? 'Delete' : 'Add';
    btnEl.title = this.cardData.isFavorite ? 'Delete' : 'Add';
  }

  getElement() {
    return this.element;
  }
}
