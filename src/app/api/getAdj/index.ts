import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allNick = await prisma.adjective.findMany({});
  const nicks = allNick.map((item) => item.adj);
  res.json({ allNick: nicks });
}

/api/v1/getAllQ => /api/v1/questions

google.com/question-list