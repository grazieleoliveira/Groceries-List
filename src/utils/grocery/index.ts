import 'react-native-get-random-values';

export const filterCategoriesWithData = (fullList) => {
  if (fullList) {
    const list = fullList.filter((category: any) => category.data.length !== 0);
    return list;
  }
};

export const searchListFilter = (fullList, listToBeFiltered, searchString) => {
  if (
    searchString === '' ||
    searchString === undefined ||
    searchString === null
  ) {
    return fullList;
  }
  listToBeFiltered.map((currentCategory: AllProductProps) => {
    currentCategory.data = currentCategory.data.filter((currentItem) =>
      currentItem.name.toLowerCase().includes(searchString.toLowerCase()),
    );
    return null;
  });

  const filteredList = filterCategoriesWithData(listToBeFiltered);

  return filteredList;
};

export const removeItem = (fullList, item) => {
  fullList.forEach((currentCategory: AllProductProps) => {
    currentCategory.data = currentCategory.data.filter(
      (currentItem) => currentItem.id !== item.id,
    );
  });

  return fullList;
};

export const addItem = (fullList, category, newItem) => {
  fullList.map((categories: AllProductProps) => {
    if (categories.id === category.id) {
      return categories.data.push(newItem);
    }
    return null;
  });
  return fullList;
};

export const editItem = (fullList, item) => {
  fullList.map((currentCategory: AllProductProps) => {
    currentCategory.data.map((currentItem: ProductProps) => {
      if (currentItem.id === item.id) {
        currentItem.name = item.name;
        currentItem.quantity = item.quantity;
        currentItem.price = item.price;
        return null;
      }
      return null;
    });
    return null;
  });
};
