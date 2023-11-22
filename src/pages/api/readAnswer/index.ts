import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let question: Prisma.QuestionCreateInput;

  if (req.method === "GET") {
    const allQuestion = await prisma.question.findMany({});
    res.json({
      status: 200,
      allQuestion,
    });
  }
  if (req.method === "POST") {
    question = {
      username: req.body.username,
      question: req.body.question,
      answer: "",
    };
    const createQuestion = await prisma.question.create({
      data: question,
    });
    res.json({
      status: 200,
      ok: "ok",
      createQuestion,
    });
  }
}

// handler()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
