import React from 'react'

interface PlaylistCardProps{
    image: string;
    name: string;
    description: string;
}
const PlaylistCard = ({image, name, description}: PlaylistCardProps) => {
  return (
    <div className="flex flex-col p-4 w-[181px] gap-3 bg-spotify-black rounded-lg">
        <img src={image}/>
        <span className="text-base font-bold">{name}</span>
        <span className="text-xs text-spotify-gray">{description}</span>
    </div>
  )
}

export {PlaylistCard};