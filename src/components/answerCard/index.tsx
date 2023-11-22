"use client";

import { answerProp } from "<answerProp>";

export default function AnswerCard({
  id,
  question,
  answer,
  username,
}: answerProp) {
  return (
    <>
      <div className="flex flex-col w-32 h-32 bg-white  text-black">
        <div>{question}</div>
        <div>{answer}</div>
        <div>{username}</div>
      </div>
    </>
  );
}
