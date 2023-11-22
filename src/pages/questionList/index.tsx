"use client";

import { answerProp } from "<answerProp>";
import AnswerModal from "@/components/answerModal";
import { MouseEventHandler, useEffect, useState } from "react";

export default function QuestionList() {
  const [Uncheckedqlist, setUncheckedqlist] = useState<answerProp[]>([]);
  const [Checkedqlist, setCheckedqlist] = useState<answerProp[]>([]);
  const [Clicked, setClick] = useState<boolean>(false);
  const [Target, setTarget] = useState();
  useEffect(() => {
    fetch("/api/uncheckedQ", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setUncheckedqlist(data.allQuestion));
    fetch("/api/checkedQ", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setCheckedqlist(data.allQuestion));
  }, []);
  //api 호출 할때 다 받아와서 나누어주는 작업 하면는 더 시간이 단축됨,

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setClick(true);
    console.log(e.currentTarget.id);
  };

  return (
    <div className="Container flex flex-col">
      <div className="grid grid-cols-3">
        Unchecked
        {Uncheckedqlist.map((i) => {
          return (
            <div
              id={i.id.toString()}
              key={i.id}
              className="CardContainer flex flex-col w-32 h-32 bg-grey-700 hover:bg-violet-600"
              onClick={onClick}
            >
              <div className="UserName">{i.username}</div>
              <div className="Question">{i.question}</div>
              <div className="Answer">{i.answer}</div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3">
        Checked
        {Checkedqlist.map((i) => {
          return (
            <div
              id={i.id.toString()}
              key={i.id}
              className="CardContainer flex flex-col w-32 h-32 bg-grey-700 hover:bg-violet-600"
              onClick={onClick}
            >
              <div className="UserName">{i.username}</div>
              <div className="Question">{i.question}</div>
              <div className="Answer">{i.answer}</div>
            </div>
          );
        })}
      </div>
      Clicked &&{" "}
      <AnswerModal
        id={0}
        username={Target.username}
        question={Target.question}
        answer={null}
      ></AnswerModal>
    </div>
  );
}
