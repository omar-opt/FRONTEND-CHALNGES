"use client";
import React, { useState } from "react";

function Page() {
  const [dots, setDots] = useState<{ x: number; y: number }[]>([]);
  const [history,setHistory]= useState<number>(0)
  function Draw({ dots }: { dots: { x: number; y: number }[] }) {
    return (
      <>
        {dots.map((dot, index) => (
          <div
            key={index}
            className={`size-5 rounded-full absolute bg-black`}
            style={{
              top: dot.y,
              left: dot.x,
            }}
          ></div>
        ))}
      </>
    );
  }
    const  hundelUNDO = ()=>{
      if(history>0){
        setHistory(history-1)
        
      }

    }
  const handelClick = (e: EventListener) => {
    const newDot = { x: e.clientX - 190, y: e.clientY - 150 }; // Adjust offsets as needed
    setDots([...dots, newDot]);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-gray-200 h-screen ">
      <div className="flex flex-row justify-center items-center gap-4 py-10 ">
        {" "}
        <button className="px-6  py-2 rounded-2xl  bg-black cursor-pointer ">
          {" "}
          REDO
        </button>
        <button className="px-6  py-2   rounded-2xl bg-black cursor-pointer ">
          UNDO
        </button>
      </div>
      <div
        className="flex flex-col justify-center items-center gap-4  bg-white size-[1000px] border relative overflow-hidden rounded-2xl shadow-lg"
        onClick={(e) => {
          handelClick(e);
        }}
      >
        <Draw dots={dots} />
      </div>
    </div>
  );
}

export default Page;
