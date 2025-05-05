"use client"
import React, { useState } from 'react'

import { FaFolder } from "react-icons/fa";
import { LiaFileSolid } from "react-icons/lia";
import { FaCaretDown } from "react-icons/fa";
interface FolderType{
name: string
folders :FolderType[]
}
const folders = [
    {
      name: "app",
      folders: [
        {
          name: "dashboard",
          folders: [
            {
              name: "login",
              folders: [
                {
                  name: "page.tsx",
                  folders: []
                }
              ]
            },
            {
              name: "profile",
              folders: [
                {
                  name: "page.tsx",
                  folders: []
                }
              ]
            }
          ]
        },
        {
          name: "settings",
          folders: [
            {
              name: "account",
              folders: [
                {
                  name: "page.tsx",
                  folders: []
                }
              ]
            }
          ]
        }
      ]
    }
  ];
    
function page() {
  return (
    <div className='flex flex-col justify-center items-center'><p className='text-2xl font-bold'>filles</p>
    <div>{folders.map((folder ,  index)=>{
        return (<Folder folder={folder} key={index}/>)
    })}</div></div>
  )
}

function Folder ({folder}:{folder:FolderType}) {
    const [open ,setOpen] = useState(false)
    return (
        <div  className='flex flex-col justify-center items-start'>
            <button onClick={()=>{setOpen(!open)}}>
            <div className='flex flex-row  justify-center items-center gap-1.5'> 
            {folder.folders.length === 0 ? "" : <FaCaretDown className={`${open? "":"-rotate-90"}`}/>}    
             {folder.folders.length === 0 ? <LiaFileSolid/> : <FaFolder />}   
            
            <p>{folder.name}</p>
            </div>
            </button>
           {open ? (<div className='ml-2'>{folder.folders?.map((folder ,  index)=>{
                return (<Folder folder={folder} key={index}/>)
    })}</div>): ""}
            

        </div>
    )

}

export default page