import React from 'react'

const ButtonLink = (props:{
    url: string;
    children: React.ReactNode;
}) => {
  return (
    <a className="flex items-center gap-[12px] p-[12px] rounded-lg bg-white shadow-[0px_20px_48px_0px_rgba(170,170,170,0.29)]"
         href={props.url} target='_blank' rel="noreferrer">
        {props.children}
    </a>
  )
}

export default ButtonLink