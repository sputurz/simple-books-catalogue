import { CardList } from '../components/ui/CardList/CardList';

export const SearchList = async () => {
  const searchListContainerEl = document.querySelector(
    '.main-page__search-list',
  );

  function handleLikeToggle(key) {}

  const searchListEl = new CardList(searchListContainerEl, handleLikeToggle);

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
};
