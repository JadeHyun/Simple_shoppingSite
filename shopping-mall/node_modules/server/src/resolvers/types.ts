type Method = "Query" | "Mutation";

export type Resolver = {
  [k: string]: {
    [key: string]: (
      parent: any,
      arg: { [key: string]: any },
      context: {},
      info: any
    ) => any;
  };
};
