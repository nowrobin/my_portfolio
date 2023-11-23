"use client";
import { answerProp } from "<answerProp>";
import { useState } from "react";

export default function AnswerModal({ id, question, username }: answerProp) {
  const [answer, setAnswer] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
  };
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch("/api/updateAnswer", {
      method: "UPDATE",
      body: JSON.stringify({
        id: id,
        answer: answer,
      }),
    });
  };
  return (
    <div className="w-52 h-48 bg-white">
      <div>Question-ID: {id}</div>
      <div>Question: {question}</div>
      <div>Username: {username}</div>
      <input placeholder="answer question here" onChange={onChange}></input>
      <button onClick={onClick}></button>
    </div>
  );
}
