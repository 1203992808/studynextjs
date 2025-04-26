import { Children } from "react";

export default function DataBoardLayout(

    { children }: { children: React.ReactNode }
) {
    return (
        <div className="board-2 mt-4 border-dashed p-4" >
<h2> hello SettingLayout </h2>
{children}
     
        </div>
        
     
    );
  }