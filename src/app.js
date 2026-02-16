import { initFavoriteList } from './features/favoriteList';
import { initSearch } from './features/search';
import { initSearchList } from './features/searchList';
import { initFavorite } from './utils/favorite';
import { loadItemFromLS, saveItemToLS } from './utils/localStorage';

export const App = async () => {
  // Searching containers by QS in DOM
  const searchInputEl = document.querySelector('.search__input');
  const searchBtnEl = document.querySelector('.search__btn');
  const searchErrorEl = document.querySelector('.search__info');
  const searchListContainerEl = document.querySelector(
    '.main-page__search-list',
  );
  const favoriteQtyEl = document.querySelector('.favorites__qty');
  const favoriteListContainerEl = document.querySelector(
    '.favorites__card-list-wrap',
  );

  // Data store
  let searchList = [];
  let favoriteKeys = loadItemFromLS();
  let favoriteList = await initFavorite(favoriteKeys);

  // Handlers
  function handleSearchLikeToggle(key) {
    const bookFromSearch = searchList.find((item) => item.key === key);

    if (bookFromSearch) {
      bookFromSearch.isFavorite = !bookFromSearch.isFavorite;

      if (bookFromSearch.isFavorite) {
        favoriteList.push(bookFromSearch);
        favoriteKeys.push(key);
        favoriteListUI.addFavoriteItem(bookFromSearch);
      } else {
        favoriteList = favoriteList.filter((item) => item.key !== key);
        favoriteKeys = favoriteKeys.filter((item) => item !== key);
        favoriteListUI.removeFavoriteItem(key);
      }

      saveItemToLS(favoriteKeys);
      favoriteQtyEl.textContent = favoriteKeys.length;
      searchListUI.updateSearchListItem(bookFromSearch);
    }
  }

  function handleFavoriteLikeToggle(key) {
    const bookFromFavorite = favoriteList.find((item) => item.key === key);

    if (bookFromFavorite) {
      const bookFromSearch = searchList.find((item) => item.key === key);
      if (bookFromSearch) {
        bookFromSearch.isFavorite = false;
        searchListUI.updateSearchListItem(bookFromSearch);
      }

      favoriteList = favoriteList.filter((item) => item.key !== key);
      favoriteKeys = favoriteKeys.filter((item) => item !== key);

      saveItemToLS(favoriteKeys);
      favoriteQtyEl.textContent = favoriteKeys.length;
      favoriteListUI.removeFavoriteItem(key);
    }
  }

  // Init
  const searchListUI = initSearchList(
    searchListContainerEl,
    handleSearchLikeToggle,
  );
  const favoriteListUI = initFavoriteList(
    favoriteListContainerEl,
    favoriteQtyEl,
    handleFavoriteLikeToggle,
  );

  initSearch(
    searchInputEl,
    searchBtnEl,
    searchErrorEl,
    favoriteKeys,
    (newSearchList) => {
      searchList = newSearchList;
      searchListUI.renderSearchList(searchList);
    },
    (errorMessage) => {
      searchErrorEl.classList.add('search__info--error');
      searchErrorEl.textContent = errorMessage;
    },
  );

  favoriteListUI.renderFavoriteList(favoriteList, favoriteKeys);
};
