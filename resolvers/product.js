const { categories } = require("../data/db");

exports.Product = {
  category: (parent, args, context) => {
    return categories.find((category) => category.id === parent.categoryId);
  },
};
