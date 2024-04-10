import React from "react";
import SearchInput from "./sidebar/SearchInput";
import SideMenu from "./sidebar/SideMenu";

export default function Sidebar (){
    return (
        <div className="basis-3/12 border-r-3 border-slate-600  p-4">
            <SearchInput />
           <SideMenu />
        </div>
    );
};