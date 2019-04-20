const path = require('path');
const { makeExecutableSchema } = require('apollo-server');
const { applyMiddleware } = require('graphql-middleware');
const { importSchema } = require('graphql-import');
const { resolvers } = require('@server/resolvers');
const permissions = require('@server/middlewares/permissions');

const typeDefs = importSchema(path.resolve('server/schema/schema.graphql'));
const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(schema);

module.exports = schemaWithMiddleware;