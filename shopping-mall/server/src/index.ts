import express from "express";
import { ApolloServer } from "apollo-server-express";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {},
});
