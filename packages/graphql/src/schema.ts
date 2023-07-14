import { db } from "@packages/database";
import { builder } from "./builder";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
  }),
});

builder.queryType({
  fields: (t) => ({
    users: t.prismaField({
      type: ["User"],
      resolve: (query, _root, _args) =>
        db.user.findMany({
          ...query,
        }),
    }),
  }),
});

export const schema = builder.toSchema();
