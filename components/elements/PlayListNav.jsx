'use client'
import React from 'react'
import { IoMdPlayCircle } from "react-icons/io";

const PlayListNav = ({playlist}) => {
  const {id,owner, playlistName, songList} = playlist;
  const onClickPlay = () => {
    //TODO: play music
  }
  return (
    <li className='flex flex-row items-center justify-between mx-3 px-4 h-[56px] hover:bg-neutral-700 rounded-lg group'>
      <div>
        <div className='text-[14px]'>{playlistName}</div>
        <div className='text-[12px] text-neutral-500'>{owner}</div>
      </div>
      <div onClick={onClickPlay}className='hidden group-hover:block cursor-pointer'>
        <IoMdPlayCircle size={24}/>
      </div>
    </li>
  )
}

export default PlayListNav