const { categories, products } = require("../data/db");

exports.Query = {
  hello: (parent, args, context) => {
    return "This is a greating message";
  },
  products: (parent, args, context) => {
    return products;
  },
  product: (parent, args, context) => {
    return products.find((product) => product.id === args.id);
  },
  categories: (parent, args, context) => {
    return categories;
  },
  category: (parent, args, context) => {
    return categories.find((category) => category.id === args.id);
  },
};
