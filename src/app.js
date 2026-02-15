import { CardList } from './components/ui/CardList/CardList';
import { getBooksList } from './utils/api';
import { initFavorite } from './utils/favorite';
import { bookListToCardList } from './utils/helpers';
import { loadItemFromLS, saveItemToLS } from './utils/localStorage';
import './utils/search';

export const App = async () => {
  // Searching containers by QS in DOM
  const searchInputEl = document.querySelector('.search__input');
  const searchBtnEl = document.querySelector('.search__btn');
  const searchListContainerEl = document.querySelector(
    '.main-page__search-list',
  );
  const favoriteQtyEl = document.querySelector('.favorites__qty');
  const favoriteListContainerEl = document.querySelector(
    '.favorites__card-list-wrap',
  );

  // var store
  let searchQuery = '';
  let searchList = [
    // {
    //   author: 'Илья Арнольдович Ильф, Евгений Петрович Петров',
    //   cover: 'https://covers.openlibrary.org/b/id/13111119-M.jpg',
    //   isFavorite: true,
    //   key: '/works/OL2196450W',
    //   title: 'Двенадцать стульев',
    //   year: 1938,
    // },
  ];
  let favoriteKeys = loadItemFromLS();
  let favoriteList = await initFavorite(favoriteKeys);

  // Handlers
  function handleLikeToggle(key) {
    const item = favoriteList.find((item) => item.key === key);

    favoriteListEl.removeItem(item.key);

    favoriteKeys = favoriteKeys.filter((item) => item !== key);
    saveItemToLS(favoriteKeys);

    favoriteQtyEl.textContent = favoriteKeys.length;
  }

  async function handleSearchBtnClick(searchList) {
    const currentSearchQuery = searchInputEl.value.trim();

    if (!currentSearchQuery) {
      console.log(`zero`);

      return;
    } else if (currentSearchQuery === searchQuery) {
      console.log(`the same`);

      return;
    }

    searchBtnEl.disabled = true;
    searchInputEl.disabled = true;
    searchBtnEl.textContent = 'Loading...';

    try {
      const bookList = await getBooksList(currentSearchQuery);

      if (bookList) {
        searchList = bookListToCardList(bookList, searchList, favoriteKeys);
        renderSearchList(searchList);

        searchQuery = currentSearchQuery;

        console.log(searchList);
      }
    } catch (error) {
      console.log(error);
    } finally {
      searchBtnEl.disabled = false;
      searchInputEl.disabled = false;
      searchBtnEl.textContent = 'Search';
    }
  }
  //   Funcctions

  function renderFavoriteList() {
    favoriteQtyEl.textContent = favoriteKeys.length;
    favoriteList.forEach((item) => {
      favoriteListEl.addItem(item);
    });
  }

  function renderSearchList(searchList) {
    const newKeys = searchList.map((item) => item.key);

    searchListEl.getKeys().forEach((key) => {
      if (!newKeys.includes(key)) {
        searchListEl.removeItem(key);
      }
    });

    searchList.forEach((item) => {
      if (searchListEl.hasItem(item.key)) {
        searchListEl.updateItem(item);
      } else {
        searchListEl.addItem(item);
      }
    });
  }

  //create and change UI
  const searchListEl = new CardList(searchListContainerEl, handleLikeToggle);
  const favoriteListEl = new CardList(
    favoriteListContainerEl,
    handleLikeToggle,
    true,
  );
  searchBtnEl.addEventListener('click', () => {
    handleSearchBtnClick(searchList);
  });

  renderFavoriteList();
};
