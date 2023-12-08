"use client";

import { useEffect, useState } from "react";

export default function TestPage() {
  const [adjs, setAdjs] = useState<string[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [nickname, setNickname] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const adjs = await (await fetch("/api/getAdj")).json();
      const names = await (await fetch("/api/getName")).json();
      setAdjs(adjs);
      setNames(names);
      setNickname(
        `${adjs[Math.floor(Math.random() * adjs.length)]} ${
          names[Math.floor(Math.random() * names.length)]
        }`
      );
      setIsLoading(false);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     setIsLoading(true);
  //     const promises = await Promise.all([fetch("/api/getAdj")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAdj(data.allNick);
  //     }),
  //   fetch("/api/getName")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.allName);
  //     })]);
  //     setIsLoading(false);
  //   })();
  // }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <button
        onClick={() => {
          setNickname(
            `${adjs[Math.floor(Math.random() * adjs.length)]} ${
              names[Math.floor(Math.random() * names.length)]
            }`
          );
        }}
      >
        재생성
      </button>
      <div>{nickname}</div>
    </div>
  );
}
