import React from 'react'

const Button = (props:{
    name:string; 
    type:"button" | "submit" | "reset" | undefined;
    onChange: () => void;
}) => {
  return (
    <button 
        className="
        leading-[20px] flex items-center justify-center py-[10px] px-[52px] rounded-[24px]
         bg-primary font-[14px] 
        !text-white font-['Aeonik'] "
        type={props.type}
        onChange={props.onChange}>
       {props.name}
    </button>
  )
}

export default Button