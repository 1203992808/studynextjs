import React from "react";
export default function SettingLayout(
    {children}:{children:React.ReactNode}
) {
    return (
        <div className="bg-gray-100"> 
<h2> hello SettingLayout </h2>
       {children}
        </div>
       
     
    );
  }