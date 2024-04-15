import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import useConversation from "../../utils/conversation";

export default function SearchInput() {
    const [search,setSearch] = useState('');
    const {setSelectedConversation} = useConversation()
  const users = useSelector((state)=> state.user.allUsers);
//   console.log('search', users);

    const handleSearch =()=>{
            if(!search) return;
            if(search.length < 3 ) {
               return toast.error(`Please provide atleast ${3-search.length} more characters`);
            }
           const conversation = users.find((user)=>user.name.toLowerCase().includes(search.toLowerCase()));

        //    console.log(conversation);
            if(!conversation){
               return toast.error('No conversation found');
            }
            setSelectedConversation(conversation);
            setSearch('');
           
    }
    return(
        <div className="text-white" >
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleSearch} viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
        </div>
    )
}