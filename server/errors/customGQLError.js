import { GraphQLError } from "graphql";

export const customGQLError = ({ msg }) => {
  return new GraphQLError(msg);
};
