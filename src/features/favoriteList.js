import { CardList } from '../components/CardList/CardList';

export function initFavoriteList(containerEl, qtyEl, handleFavoriteLikeToggle) {
  const favoriteListEl = new CardList(
    containerEl,
    handleFavoriteLikeToggle,
    true,
  );

  function renderFavoriteList(favoriteList, favoriteKeys) {
    qtyEl.textContent = favoriteKeys.length;
    favoriteList.forEach((item) => {
      favoriteListEl.addItem(item);
    });
  }

  function addFavoriteItem(item) {
    favoriteListEl.addItem(item);
  }

  function removeFavoriteItem(key) {
    favoriteListEl.removeItem(key);
  }

  return {
    renderFavoriteList,
    addFavoriteItem,
    removeFavoriteItem,
    getElement: () => favoriteListEl,
  };
}
