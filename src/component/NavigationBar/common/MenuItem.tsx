import React from 'react'

const MenuItem = (props:{text: string; url:string}) => {
    const { text, url } = props;
  return (
      <li className="px-0 py-0">
        <a href={url} className="flex items-center justify-center py-[8px] rounded-[24px]">
        <span className="text-[16px] font-medium leading-[24px] h-full w-full block font-['Aeonik'] !text-muted">{text}</span>
        </a>
     </li>
  )
}

export default MenuItem