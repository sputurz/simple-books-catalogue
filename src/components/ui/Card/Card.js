import './card.css';
import { escapeHtml, html } from '../../../utils/helpers';

export const Card = (card) => {
  return html`
    <div class="card" data-key="${escapeHtml(String(card.key))}">
      <img
        class="card__img"
        src="https://covers.openlibrary.org/b/id/${escapeHtml(
          String(card.cover),
        )}-M.jpg"
        alt="${escapeHtml(String(card.title))}"
      />
      <div class="card__wrap">
        <p class="card__title">${escapeHtml(String(card.title))}</p>
        <p class="card__author">${escapeHtml(String(card.author))}</p>
        <span class="card__year">${escapeHtml(card.year)}</span>
      </div>
    </div>
  `;
};
