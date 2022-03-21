exports.Category = {
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products.filter(
      (product) => product.categoryId === parent.id
    );

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }

    return filteredProducts;
  },
};
