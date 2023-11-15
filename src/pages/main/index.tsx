"use client";
export default function Main() {
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
    </div>
  );
}
