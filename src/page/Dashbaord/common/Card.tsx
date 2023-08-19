import React from 'react'

const Card = (props:{
    icon:React.ReactElement;
    name:string;
}) => {
  return (
    <a href="/#" className="flex flex-col justify-center items-center py-4 px-6
     rounded-3xl border border-[#E7E8E7] shadow-[0px_9px_18px_0px_rgba(170,170,170,0.15)] font-aeonik text-muted
     gap-3 w-[168px]
     hover:shadow-[0px_9px_18px_0px_rgba(170,170,170,0.28)]
      transition-shadow ease-in-out">
        {props.icon}
        <p className="text-muted text-sm font-medium">{props.name}</p>
    </a>
  )
}

export default Card;