const itemKey = 'favorite-keys';

export const saveListToLS = (list) => {
  try {
    localStorage.setItem(itemKey, JSON.stringify(list));
  } catch (error) {
    console.error('Failed to save list', error);
  }
};

export const loadListFromLS = () => {
  try {
    const list = localStorage.getItem(itemKey);

    return list ? JSON.parse(list) : [];
  } catch (error) {
    console.error('Failed to load list', error);
    saveList([]);

    return [];
  }
};
