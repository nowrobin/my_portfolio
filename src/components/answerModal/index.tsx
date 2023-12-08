"use client";
import { answerProp } from "<answerProp>";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Clicked = {
  setClick: (Clicked: boolean) => void;
};

type answerType = answerProp & Clicked;

// type AnswerModalProps = answerProp & {
//   setClick: (Clicked: boolean) => void;
// }

export default function AnswerModal({ id, question, username }: answerType) {
  const [answer, setAnswer] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value);
  };
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch(`/api/getAllQ`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        answer: answer,
      }),
    }).then((data) => {});
    setClick(false);
    // console.log("Sucess");
    // fetch("/api/getAllQ", { method: "GET" })
    //   .then((res) => res.json())
    //   .then((data) => {});
  };

  return (
    <div className="absolute flex flex-col w-52 h-48 gap-3 text-black bg-gray-600 left-1/2 ">
      <div>Question-ID: {id}</div>
      <div>Question: {question}</div>
      <div>Username: {username}</div>
      <input placeholder="answer question here" onChange={onChange}></input>
      <button
        className="submit mt-3 h-12 text-white bg-black"
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
}
