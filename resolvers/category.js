const { products } = require("../data/db");

exports.Category = {
  products: (parent, args, context) => {
    return products.filter((product) => product.categoryId === parent.id);
  },
};
