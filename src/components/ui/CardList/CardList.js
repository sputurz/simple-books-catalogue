import './cardlist.css';
import { html } from '../../../utils/helpers';
import { Card } from '../Card/Card';

export const CardList = (cards) => {
  if (!cards || cards.length === 0) {
    return html`<div class="empty-state">Нет карточек для отображения</div>`;
  }

  return html`
    <ul class="card-list">
      ${cards
        .map(
          (card) => html`
            <li class="card-list__item" data-key="${card.key}">
              ${Card(card)}
            </li>
          `,
        )
        .join('')}
    </ul>
  `;
};
