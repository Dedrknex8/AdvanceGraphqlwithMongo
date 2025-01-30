// this is the structure for the DB
const {gql} = require('graphql-tag');

const typeDefs = gql`
    type Product {
    id : ID! 
    title : String!
    category : String!
    price: Float!
    instock: Boolean!
    }
    #TO GET QUERY ITEM BY ID
    type Query {
    products : [Product!]! #GET ALL THE PRODUCTS
    product(id: ID!): Product # GET SINGLE PRODUCT
    }

    type Mutation {
        createProduct(
            title: String!
            category: String!
            price: Float!
            instock: Boolean!
        ): Product
        deleteProduct(id : ID!) : Boolean
        updateProduct(
            id:ID!
            title  : String
            category  : String
            price :  Float
            instock  : Boolean
        ): Product
    }
`;

module.exports = typeDefs;