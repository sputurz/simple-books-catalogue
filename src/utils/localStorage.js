const itemKey = 'favorite-keys';
const fallback = [];

export const saveItemToLS = (item) => {
  try {
    localStorage.setItem(itemKey, JSON.stringify(item));
  } catch (error) {
    console.error('Failed to save item', error);
  }
};

export const loadItemFromLS = () => {
  try {
    const item = localStorage.getItem(itemKey);

    return item ? JSON.parse(item) : fallback;
  } catch (error) {
    console.error('Failed to load item', error);
    saveItemToLS(fallback);

    return fallback;
  }
};
