import './main-page.css';
import { html } from '../../../utils/helpers';
import { CardList } from '../../ui/CardList/CardList';

// const cards = [
//   {
//     key: 1,
//     title: 'The Great Gatsby',
//     author_name: 'F.Scott Fitzgerald',
//     first_publish_year: 1925,
//     cover_i: 'dd',
//   },
//   {
//     key: 2,
//     title: 'Great',
//     author_name: 'Fitzgerald',
//     first_publish_year: 1995,
//     cover_i: 'dd',
//   },
//   {
//     key: 3,
//     title: 'The Gatsby',
//     author_name: 'F.Scott',
//     first_publish_year: 1725,
//     cover_i: 'dd',
//   },
// ];

const cards = [
  {
    key: 1,
    title: 'The Great Gatsby',
    author: 'F.Scott Fitzgerald',
    year: 1925,
    cover: '12019545',
  },
  {
    key: 2,
    title: 'Great',
    author: 'Fitzgerald',
    year: 1995,
    cover: '11719266',
  },
  {
    key: 3,
    title: 'The Gatsby',
    author: 'F.Scott',
    year: 1725,
    cover: '10830339',
  },
  {
    key: 3,
    title: 'The Gatsby',
    author: 'F.Scott',
    year: 1725,
    cover: '10830339',
  },
  {
    key: 3,
    title: 'The Gatsby',
    author: 'F.Scott',
    year: 1725,
    cover: '10830339',
  },
  {
    key: 3,
    title: 'The Gatsby',
    author: 'F.Scott',
    year: 1725,
    cover: '10830339',
  },
];

export const MainPage = () => {
  return html`<section class="main-page">
    <div class="container">
        <div class="main-page__wrap">
            <div class="main-page__inner">
                <h1 class="main-page__title">Discover Your Next Great Read</h1>
                <p class="main-page__text">Search millions of books, build your personal library, and never lose track of what to read next.</p>
            </div>
            ${CardList(cards)}
        <div>
    <div>
  </section> `;
};
