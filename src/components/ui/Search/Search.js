import searchIcon from '../../../assets/search.svg';

const Search = (cards, onSubmit) => {
  function handleClick() {
    const text = inputEl.value.trim();

    if (!text) {
      alert('Заполни поле');
      return;
    }

    onSubmit(text);

    inputEl.value = '';
  }
};
