import './footer.css';
import { html } from '../../../utils/helpers';

export const Footer = () => {
  return html`
    <footer class="footer">
      <p class="footer__copyright">
        Powered by
        <a
          class="footer__link"
          href="https://openlibrary.org/"
          target="_blank"
          rel="noopener noreferrer"
          >Open Library</a
        >
      </p>
    </footer>
  `;
};
