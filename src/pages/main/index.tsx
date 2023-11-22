"use client";

import { useEffect, useState } from "react";
import { answerProp } from "<answerProp>";
import AnswerCard from "@/components/answerCard";

export default function Main() {
  const [answer, setAnswer] = useState<answerProp[]>([]);
  useEffect(() => {
    console.log(answer);
    fetch("/api/readAnswer", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setAnswer(data.allQuestion));
  }, []);
  console.log(answer);
  return (
    <div className="bg-black flex flex-col ">
      <div className="Header h-16 text-3xl leading-loose flex flex-row gap-8 text-center justify-end mr-8">
        <div className="text-white">Home</div>
        <div>AbouT Me</div>
        <div>ProJecTs</div>
        <div>ConTacT</div>
      </div>
      <div className="Body bg-white w-full h-32">Body</div>
      <div className="Footer bg-orange-600 w-full h-32">Footer</div>
      {/* {answer.map((i, key) => {
          return <div key={key}>{i.question}</div>;
        })} */}
      <div className="answerWrapper h-32 animate-lefting flex w-[3000px] flex-row  gap-8 ">
        {answer.map((i, key) => {
          return (
            <AnswerCard
              id={i.id}
              key={key}
              answer={i.answer}
              question={i.question}
              username={i.username}
            ></AnswerCard>
          );
        })}
        {answer.map((i, key) => {
          return (
            <AnswerCard
              id={i.id}
              key={key}
              answer={i.answer}
              question={i.question}
              username={i.username}
            ></AnswerCard>
          );
        })}
      </div>
    </div>
  );
}
