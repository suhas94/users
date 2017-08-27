const graphql = require('graphql');
const axios = require ('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema  // takes in root query and returns a GraphQL schema instance 

} = graphql;



const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    },

});

// rootQuery is entry point to GQL graph 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } }, // specifies args that are required to do query
            // parentValue = doesnt ever get used lol. args = object that gets called with whatever arguments were called with the original query 
            resolve(parentValue, args) {
                return _.find(users, { id: args.id }); // return first user with this id, lodash tings 
            }
        }
    }
});

module.exports = new GraphQLSchema ({
    query: RootQuery
});