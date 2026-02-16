import { getBook } from './api';
import { booksDataToCard } from './mappers';
import { saveItemToLS } from './localStorage';

export async function initFavorite(favoriteKeys) {
  const favoriteList = [];
  let hasNull = false;

  for (let i = 0; i < favoriteKeys.length; i++) {
    const rawBookData = await getBook(favoriteKeys[i]);

    //normalize book data
    if (rawBookData) {
      favoriteList.push(await booksDataToCard(rawBookData));
    } else hasNull = true;
  }

  // backup if rawBookData has null items (or non-readable favoriteKeys in LS items)
  if (hasNull) {
    favoriteKeys = favoriteList.map((favorite) => favorite.key);
    saveItemToLS(favoriteKeys);
  }

  return favoriteList;
}
