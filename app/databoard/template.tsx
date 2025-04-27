"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function DataBoardTemplate({ 
  children 
}: { 
  children: React.ReactNode 
}) {
const[count,setCount]=useState(0);


  return (
    <div className="border-2 border-dashed border-black p-4 
     mt-10 ">
      
      <h2>DataBoardTemplate {count}</h2>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={()=>setCount(count+1)}>Increase</button>
      {children}
      
    </div>
  );
}