import { getBooksList } from '../utils/api';
import { bookListToCardList } from '../utils/mappers';

export function initSearch(
  searchInputEl,
  searchBtnEl,
  searchErrorEl,
  favoriteKeys,
  onSearchResults,
  onSearchError,
) {
  let searchQuery = '';

  async function handleSearchBtnClick() {
    const currentSearchQuery = searchInputEl.value.trim();
    searchErrorEl.classList.remove('search__info--result');
    searchErrorEl.classList.remove('search__info--error');

    if (!currentSearchQuery) {
      searchErrorEl.classList.add('search__info--result');
      searchErrorEl.textContent = 'Empty request';
      return;
    } else if (currentSearchQuery === searchQuery) {
      return;
    }

    searchBtnEl.disabled = true;
    searchInputEl.disabled = true;
    searchBtnEl.textContent = 'Loading...';

    try {
      const bookList = await getBooksList(currentSearchQuery);

      if (!bookList || bookList.length === 0) {
        onSearchError('No books found');
        return;
      }

      const newSearchList = bookListToCardList(bookList, [], favoriteKeys);
      onSearchResults(newSearchList);
      searchQuery = currentSearchQuery;
    } catch (error) {
      console.error(error);
      onSearchError(`Error: ${error}`);
    } finally {
      searchBtnEl.disabled = false;
      searchInputEl.disabled = false;
      searchBtnEl.textContent = 'Search';
    }
  }

  searchBtnEl.addEventListener('click', handleSearchBtnClick);
}
