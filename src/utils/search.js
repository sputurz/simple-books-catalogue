import { getBooksList } from './api';
import { SearchList } from './searchList';

export const Search = async () => {
  // Searching containers by QS in DOM
  const searchInputEl = document.querySelector('.search__input');
  const searchBtnEl = document.querySelector('.search__btn');
  console.log(`no here`);
  // var store
  let searchQuery = ''; // The Bicentennial man and other stories

  searchBtnEl.addEventListener('click', () => {
    handleSearchBtnClick(searchList);
  });

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

    await getBooksList(currentSearchQuery).then((bookList) => {
      searchBtnEl.disabled = false;
      searchInputEl.disabled = false;
      searchBtnEl.textContent = 'Search';

      if (bookList) {
        searchList = [];

        for (let i = 0; i < bookList.length; i++) {
          const bookData = bookList[i];

          searchList.push({
            key: bookData.key,
            title: bookData.title || 'no info',
            author: bookData.author_name?.length
              ? bookData.author_name.join(', ')
              : 'no info',
            year: bookData.first_publish_year || 'no info',
            cover: bookData.cover_i
              ? `https://covers.openlibrary.org/b/id/${bookData.cover_i}-M.jpg`
              : '/assets/no-cover.jpg',
            // isFavorite: favoriteKeys.includes(bookData.key),
          });
        }
      }

      SearchList.renderSearchList(searchList);
      //   renderSearchList();

      searchQuery = currentSearchQuery;

      console.log(searchList);
    });
  }
};
