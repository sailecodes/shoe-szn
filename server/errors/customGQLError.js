import { GraphQLError } from "graphql";

export const customGQLError = ({ msg, code }) => {
  return new GraphQLError(msg, {
    extensions: { code: code ? code : "INTERNAL_SERVER_ERROR" },
  });
};
