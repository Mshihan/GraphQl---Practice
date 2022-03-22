exports.Query = {
  hello: (parent, args, context) => {
    return "This is a greating message";
  },
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = db.products;

    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numOfReviews = 0;
          db.reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numOfReviews++;
            }
          });
          let productAverageRating = sumRating / numOfReviews;
          return productAverageRating >= avgRating;
        });
      }
    }

    return filteredProducts;
  },
  product: (parent, { id }, { db }) => {
    return db.products.find((product) => product.id === id);
  },
  categories: (parent, args, { db }) => {
    return db.categories;
  },
  category: (parent, { id }, { db }) => {
    return db.categories.find((category) => category.id === id);
  },
  reviews: (parent, args, { db }) => {
    return db.reviews;
  },
  review: (parent, { id }, { db }) => {
    return db.reviews.find((review) => review.id === id);
  },
};
