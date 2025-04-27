"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";

const linkData=[
  {
    name:"Abount",
    path:"/databoard/about"
  },
  {
    name:"Setting",
    path:"/databoard/setting"
  },
]

export default function DataBoardLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
const[count,setCount]=useState(0);
const pathname=usePathname();
console.log(pathname);


  return (
    <div className="border-2 border-dashed border-black p-4 
    w-1/2 mt-10 ">
        <div className="flex gap-4 font-bold text-lg mb-4">
            {linkData.map((link)=>(
                <Link key={link.path} className={pathname===link.path?"text-purple-500":"text-black"} href={link.path}>{link.name}</Link>
            ))}

        {/* <Link className={pathname==="/databoard/about"?"text-purple-500":"text-black"} href="/databoard/about">Abount</Link>
        <Link className={pathname==="/databoard/setting"?"text-purple-500":"text-black"} href="/databoard/setting">Setting</Link> */
        }
      </div>
      <h2>DataBoardLayout {count}</h2>

      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={()=>setCount(count+1)}>Increase</button>
      {children}
      
    </div>
  );
}