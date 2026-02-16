import { CardList } from '../components/CardList/CardList';

export function initSearchList(containerEl, handleSearchLikeToggle) {
  const searchListEl = new CardList(containerEl, handleSearchLikeToggle);

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

  function updateSearchListItem(item) {
    searchListEl.updateItem(item);
  }

  return {
    renderSearchList,
    updateSearchListItem,
    getElement: () => searchListEl,
  };
}
