"use client";

import { InputHTMLAttributes, useEffect, useState } from "react";

export default function Questions() {
  const [questions, setQuestion] = useState("");
  const [adj, setAdj] = useState<any[]>([""]);
  const [name, setName] = useState<any[]>([""]);
  const [Loading, setLoading] = useState(true);
  const [nickName, setNickname] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value;
    setQuestion(v);
  };

  const onClick = (e: any) => {
    fetch("/api/getAllQ", {
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

  //useEffect 는 렌더링후  콜백함수가 실행된다.
  //로딩  Generating
  useEffect(() => {
    fetch("/api/getAdj")
      .then((res) => res.json())
      .then((data) => {
        setAdj(data.allNick);
      });
    fetch("/api/getName")
      .then((res) => res.json())
      .then((data) => {
        setName(data.allName);
      });
    setLoading(false);
  }, []);

  // let nickName = Loading
  //   ? "Generating....... "
  //   : adj[Math.floor(Math.random() * adj.length)].adj +
  //     " " +
  //     name[Math.floor(Math.random() * name.length)].nickname;

  // const reGenerate = () => {
  //   setLoading(true);
  //   nickName = Loading
  //     ? "Generating....... "
  //     : adj[Math.floor(Math.random() * adj.length)].adj +
  //       " " +
  //       name[Math.floor(Math.random() * name.length)].nickname;
  //   setLoading(false);
  // };

  return (
    <div className="flex flex-col w-80  text-black bg-white border-solid border-2 border-black">
      <div className="flex flex-row w-full">
        {nickName}
        <button
          className="flex ml-8 bg-red-800 w-24 text-white hover:bg-white hover:text-black"
          // onClick={reGenerate}
        >
          G
        </button>
      </div>
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
