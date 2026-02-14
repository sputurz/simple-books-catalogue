import './main-page.css';
import { CardList } from '../../ui/CardList/CardList';
import { Search } from '../../ui/Search/Search';
import { Favorites } from '../../ui/Favorites/Favorites';
import { fetchData } from '../../../utils/api';

const favoriteKeys = ['/works/OL46283W', '/works/OL37834755W'];

function handleAddItem(text) {
  fetchData(`The Bicentennial man and other stories`).then((bookList) => {
    const newList = bookList.map((book) => ({
      key: book.key,
      title: book.title || 'no info',
      author: book.author_name?.join(', ') || 'no info',
      year: book.first_publish_year || 'no info',
      cover: book.cover_i || 'ЗАГЛУШКА',
      isLiked: favoriteKeys.includes(book.key),
    }));

    console.log(bookList);
    console.log(newList);
  });
}

export const App = () => {
  // Searching containers by QS in DOM
  const searchListContainerEl = document.querySelector(
    '.main-page__search-list',
  );

  // var store
  let searchCards = [
    {
      key: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      cover: '12019545',
      isFavorite: false,
    },
    {
      key: 2,
      title: 'Great  asdasda asdasd asd asdasd asdasd',
      author: 'Fitzgerald asdasd asdasd dsfsdf dsfsdf',
      year: 1995,
      cover: '11719266',
      isFavorite: false,
    },
    {
      key: 3,
      title: 'The Gatsby',
      author: 'F.Scott',
      year: 1725,
      cover: '10830339',
      isFavorite: true,
    },
    {
      key: 55,
      title: 'The Gatsby',
      author: 'F.Scott',
      year: 1725,
      cover: '10830339',
      isFavorite: true,
    },
    {
      key: 36,
      title: 'The Gatsby',
      author: 'F.Scott',
      year: 1725,
      cover: '10830339',
      isFavorite: true,
    },
    {
      key: 38,
      title: 'The Gatsby',
      author: 'F.Scott',
      year: 1725,
      cover: '10830339',
      isFavorite: true,
    },
  ];

  let favoriteCards = [];

  // Handlers
  function handleLikeToggle(key) {
    const item = searchCards.find((item) => item.key === key);
    if (!item) return;

    item.isFavorite = !item.isFavorite;

    searchList.updateItem(item);
  }

  const searchList = new CardList(searchListContainerEl, handleLikeToggle);

  // Init Lists
  searchCards.forEach((item) => {
    searchList.addItem(item);
  });
};
