import styled from '@emotion/styled';
import React from 'react'

const SubMenu = (props:{
    prefix: React.ReactElement;
    suffix?:React.ReactElement;
    name:string;
    isLast?:boolean;
    active?:boolean;
}) => {
  return (
    <ListItem className="h-[56px]"active={props.active}>
        <a href="/#" className={`flex items-center justify-between h-full ${!props.isLast ? "border-b-[0.8px]  border-b-[#E7E8E7]" : ""} text-muted px-4 font-aeonik text-[16px]
        ${props.active ? "bg-[#caf9a9]/[0.15] border-l-4  border-l-primary !text-primary !fill-primary": ""} active: hover:bg-[#caf9a9]/[0.15] hover:!text-primary
        font-medium`}>
            <div className="flex items-center gap-3">
              <span className={`${props.active ? '!text-primary !fill-primary' : 'text-[#515251]'}`}>{props.prefix}</span>
              <span>{props.name}</span>
            </div>
            {props.suffix ? props.suffix : null}
        </a>
   </ListItem>
  )
}

const ListItem = styled.li<{active?:boolean}>`
  a:hover{
    span:first-child{
      color: #11453B !important;
      fill: #11453B !important;
    }
  }

`;

export default SubMenu