import { PrismaClient } from "@prisma/client";

declare global {
  var db: PrismaClient | undefined;
}

global.db = global.db || new PrismaClient();

export const db = global.db;
