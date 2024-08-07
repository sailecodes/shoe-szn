export const typeDefs = `#graphql
  type Query {
    getAllItems: [Item!]!
    getShowcaseItemsFromCategory(itemCategory: String!): [Item!]!
    getAllItemsFromCategory(itemCategory: String!, pageNumber: Int!): [Item!]!
    getItem(itemId: ID!): Item!
    getUserCartItems(userEmail: String!): [CartItem!]!
  }

  type Mutation {
    login(email: String!, password: String!): Boolean!
    signup(email: String!, password: String!, username: String!): Boolean!
    addItemToUserCart(userEmail: String!, itemId: ID!, itemQuantity: Int!): Boolean!
  }

  type User {
    user_email: String!
    user_password: String!
    user_username: String!
  }

  type Item {
    item_id: ID!
    item_category: String!
    item_name: String!
    item_price: String!
    item_description: String!
    item_sizes: [Int!]!
    item_attributes: [String!]!
  }

  type CartItem {
    item_id: ID!
    item_name: String!
    item_price: String!
    r_item_quantity: Int!
  }
`;
