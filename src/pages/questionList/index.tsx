"use client";

import { answerProp } from "<answerProp>";
import AnswerModal from "@/components/answerModal";
import { MouseEventHandler, useEffect, useState } from "react";

export default function QuestionList() {
  const [Uncheckedqlist, setUncheckedqlist] = useState<answerProp[]>([]);
  const [Checkedqlist, setCheckedqlist] = useState<answerProp[]>([]);
  const [Qlist, setQlist] = useState<answerProp[]>([]);
  const [Clicked, setClick] = useState<boolean>(false);
  const [Target, setTarget] = useState<answerProp>({
    id: 0,
    username: "",
    question: "",
    answer: "",
    checked: false,
  });

  useEffect(() => {
    fetch("/api/uncheckedQ", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setUncheckedqlist(data.allQuestion));
    fetch("/api/checkedQ", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setCheckedqlist(data.allQuestion));
  }, []);

  useEffect(() => {
    fetch("/api/getAllQ", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setQlist(data.allQuestion));
  }, []);

  // useEffect(() => {
  //   for (let i in Qlist) {
  //     if (Qlist[i].checked) {
  //       setCheckedqlist((prev) => [...prev]);
  //     } else setUncheckedqlist((prev) => [...prev]);
  //   }
  // }, [Qlist]);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setClick(true);
    let id = e.currentTarget.id;
    let index = parseInt(id) - 1;
    setTarget(Qlist[index]);
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
      {Clicked && (
        <AnswerModal
          id={Target.id}
          username={Target.username}
          question={Target.question}
          answer={null}
          checked={false}
        ></AnswerModal>
      )}
    </div>
  );
}
