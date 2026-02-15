import './cardlist.css';
import { Card } from '../Card/Card';

export class CardList {
  constructor(container, onLikeToggle, isLikeList = false) {
    this.container = container;
    this.onLikeToggle = onLikeToggle;
    this.itemsMap = new Map();
    this.isLikeList = isLikeList;

    this.ulEl = document.createElement('ul');
    this.ulEl.className = `card-list ${this.isLikeList ? 'card-list--favorite' : ''}`;
    this.container.appendChild(this.ulEl);
  }

  addItem(item) {
    if (this.itemsMap.has(item.key)) return;

    const card = new Card(item, this.onLikeToggle, this.isLikeList);

    const liEl = document.createElement('li');
    liEl.className = 'card-list__item';
    liEl.dataset.key = item.key;
    liEl.appendChild(card.getElement());

    this.ulEl.appendChild(liEl);
    this.itemsMap.set(item.key, { card, liEl });
  }

  removeItem(key) {
    const item = this.itemsMap.get(key);
    if (item) {
      item.liEl.remove();
      this.itemsMap.delete(key);
    }
  }

  updateItem(item) {
    const stored = this.itemsMap.get(item.key);
    if (stored) {
      stored.card.update(item);
    }
  }

  hasItem(key) {
    return this.itemsMap.has(key);
  }

  getKeys() {
    return Array.from(this.itemsMap.keys());
  }
}
