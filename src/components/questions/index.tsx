"use client";

import { InputHTMLAttributes, useState } from "react";

export default function Questions() {
  const [questions, setQuestion] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value;
    setQuestion(v);
  };
  return (
    <div className="flex w-32 h-24 bg-white border-solid border-2 border-black">
      <div>Ask me about Anything</div>
      <input
        className="text-black"
        placeholder="ask me!!"
        onChange={onChange}
      ></input>
    </div>
  );
}
