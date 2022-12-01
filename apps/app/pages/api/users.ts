import { db, User } from "@packages/database";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<User[]>
): Promise<void> => {
  const users = await db.user.findMany();
  res.status(200).json(users);
};

export default handler;
