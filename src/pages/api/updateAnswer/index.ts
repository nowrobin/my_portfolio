import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const allQuestion = await prisma.question.findMany({});
    res.json({
      status: 200,
      allQuestion,
    });
  }
  if (req.method === "UPDATE") {
    const updateQuestion = await prisma.question.update({
      where: { id: Number(req.body.id) },
      data: {
        answer: req.body.answer,
        checked: true,
      },
    });
    res.json(updateQuestion);
  }
}
