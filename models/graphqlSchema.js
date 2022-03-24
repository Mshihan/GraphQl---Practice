const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductsFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]!
    review(id: ID!): Review
  }

  type Mutation {
    addCategory(input: CategoryInput): Category!
    addProduct(input: ProductInput): Product!
    addReview(input: ReviewInput): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    updateCategory(id: ID!, input: CategoryUpdateInput): Category
    updateProduct(id: ID!, input: ProductUpdateInput): Product
    updateReview(id: ID!, input: ReviewUpdateInput): Review
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilter): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Float!
  }

  input ProductsFilter {
    onSale: Boolean
    avgRating: Int
  }

  input CategoryInput {
    name: String!
  }

  input CategoryUpdateInput {
    name: String!
  }

  input ProductUpdateInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
  }

  input ReviewUpdateInput {
    title: String!
    comment: String!
    rating: Float!
    productId: ID!
  }

  input ReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Float!
    productId: ID!
  }

  input ProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: ID!
  }
`;

module.exports = typeDefs;
