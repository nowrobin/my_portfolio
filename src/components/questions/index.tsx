"use client";

import { InputHTMLAttributes, useState } from "react";

export default function Questions() {
  const [questions, setQuestion] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value;
    setQuestion(v);
  };
  const onClick = (e: any) => {
    fetch("/api/readAnswer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "robin",
        question: questions,
      }),
    })
      .then((response) => console.log(response))
      .then((data) => console.log(data));
  };
  return (
    <div className="flex flex-col w-80  text-black bg-white border-solid border-2 border-black">
      <div>Ask me about Anything</div>
      <input
        className="text-black h-32"
        placeholder="ask me!!"
        onChange={onChange}
      ></input>
      <button className=" h-24  hover:bg-violet-600 " onClick={onClick}>
        클릭
      </button>
    </div>
  );
}
