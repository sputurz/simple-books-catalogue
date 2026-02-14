const urlQuerry = 'https://openlibrary.org/search.json?q=';

export async function fetchData(query) {
  console.log('Загрузка...');

  try {
    const response = await fetch(urlQuerry + query.replace(/ /g, '+'));

    if (!response.ok) {
      throw new Error('Ничего не найдено');
    }

    const data = await response.json();
    return data.docs;
  } catch (error) {
    if (error.message === 'Ничего не найдено') {
      console.log('Ничего не найдено');
    } else {
      console.log('Ошибка сети');
    }
  } finally {
    console.log('Финиш...');
  }
}
