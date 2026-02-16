import { getAuthors } from './api';
import imgFallback from '../assets/no-cover.svg';

const strFallback = 'no info';
const baseUrl = `https://covers.openlibrary.org/b/id/{cover}-M.jpg`;

// Api booklist to cardList model
export function bookListToCardList(bookList, searchList, favoriteKeys) {
  searchList.length = 0;

  for (let i = 0; i < bookList.length; i++) {
    const bookData = bookList[i];

    searchList.push({
      key: bookData.key,
      title: bookData.title || strFallback,
      author: bookData.author_name?.length
        ? bookData.author_name.join(', ')
        : strFallback,
      year: bookData.first_publish_year || strFallback,
      cover: bookData.cover_i
        ? baseUrl.replace('{cover}', bookData.cover_i)
        : imgFallback,
      isFavorite: favoriteKeys.includes(bookData.key),
    });
  }

  return searchList;
}

// Api book to card model
export async function booksDataToCard(rawBookData) {
  return {
    key: rawBookData.key,
    title: rawBookData.title || strFallback,
    author: rawBookData.authors
      ? await getAuthors(rawBookData.authors)
      : rawBookData.by_statement || strFallback,
    year:
      rawBookData.publish_date || rawBookData.first_publish_date || strFallback,
    cover: rawBookData.covers?.length
      ? baseUrl.replace('{cover}', rawBookData.covers[0])
      : imgFallback,
    isFavorite: true,
  };
}
