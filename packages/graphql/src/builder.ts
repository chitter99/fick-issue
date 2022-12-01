import SchemaBuilder from "@pothos/core";
import { db, PrismaPlugin } from "@packages/database";
import type { PrismaTypes } from "@packages/database";

export const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
  plugins: [PrismaPlugin],
  prisma: {
    client: db,
  },
});
