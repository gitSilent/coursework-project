import Rating from "@mui/material/Rating/Rating";
import React from "react";

export default function Review() {
  return (
    <div className="min-w-[300px] max-w-[300px] h-fit border-[2px] border-black rounded-[20px] py-[16px] px-[25px]">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-[15px]">Анастасия</span>
          <span className="text-[9px] text-[#767676]">10 сентября 2023</span>
        </div>
        <div>
          <Rating name="read-only" value={5} readOnly style={{width:'90px'}} />
        </div>
      </div>

      <p className="mt-[10px] text-[12px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptates, quae reprehenderit magni in ullam porro, numquam facere nobis repellat placeat tenetur quod? Quia nesciunt modi dolor id vitae beatae.</p>
    </div>
  );
}
