export const resolvers = {
  Query: {
    helloWorld: (_parent, _args, _context) => "Hello World!",
    getItem: (_parent, _args, _context) => {
      return {
        id: 1,
        name: "Item",
        description: "Some item",
        ratings: 3,
        price: "$99.99",
        sizes: [1, 2, 3],
      };
    },
  },
  Item: {
    price: (parent, _args, _context) => {
      // console.log(parent);
      return "$120.99";
    },
  },
};
