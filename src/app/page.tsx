"use client";

import { useEffect, useState } from "react";
import { answerProp } from "<answerProp>";
import AnswerCard from "@/components/answerCard";

export default function Home() {
  const [answer, setAnswer] = useState<answerProp[]>([]);

  useEffect(() => {
    fetch("/api/getQuestion", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setAnswer(data.allQuestion));
  }, []);

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
      <div>
        <div className="flex flex-row">
          <img src="/refresh.svg"></img>
        </div>
        <input></input>
      </div>
      <div className="answerWrapper h-32 animate-lefting flex w-[3000px] flex-row  gap-8 ">
        {answer.map((i, key) => {
          return (
            <AnswerCard
              id={i.id}
              key={key}
              answer={i.answer}
              question={i.question}
              username={i.username}
              checked={i.checked}
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
              checked={i.checked}
            ></AnswerCard>
          );
        })}
      </div>
    </div>
  );
}
