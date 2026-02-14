import './search.css';
import searchIcon from '../../../assets/search.svg';

export const Search = (cards, onSubmit) => {
  // const render = () => {};

  const containerEl = document.createElement('div');
  containerEl.className = 'search';

  const labelEl = document.createElement('label');
  labelEl.className = 'search__wrap';
  labelEl.htmlFor = 'search-input';

  const inputEl = document.createElement('input');
  inputEl.className = 'search__input';
  inputEl.type = 'text';
  inputEl.placeholder = 'Search for books by title or author...';
  inputEl.id = 'search-input';

  const imgEl = document.createElement('img');
  imgEl.className = 'search__icon';
  imgEl.alt = '';
  imgEl.src = searchIcon;

  const btnEl = document.createElement('button');
  btnEl.className = 'search__btn';
  btnEl.ariaLabel = 'Start search books';
  btnEl.type = 'button';
  btnEl.textContent = 'Search';
  btnEl.onclick = () => handleClick();

  containerEl.appendChild(labelEl);
  containerEl.appendChild(btnEl);

  labelEl.appendChild(inputEl);
  labelEl.appendChild(imgEl);

  function handleClick() {
    const text = inputEl.value.trim();

    if (!text) {
      alert('Заполни поле');
      return;
    }

    onSubmit(text);

    inputEl.value = '';
  }

  return containerEl;
};
