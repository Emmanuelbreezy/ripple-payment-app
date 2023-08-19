import React, { useState } from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { ReactComponent as LogoSVG } from '../../assets/image/brand_logo.svg';
import { ReactComponent as MenuSVG }from '../../assets/image/menu.svg';

import MenuItem from './common/MenuItem';
import { Link } from 'react-router-dom';



const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavWrapperStyle>
       <ContainerStyle>
        <div className="flex-shrink-1">
          <Link to="/"><LogoSVG  /></Link>
        </div>
        <Menus className={`
            ${
              open ? 'block' : 'hidden'
            }
            fixed top-0 left-0 sm:hidden transition-all duration-300 ease-in-out delay-75
        `}>
          <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[48px] py-6 lg:p-0">
            <MenuItem
              text="Individual"
              url="/#"
             />
            <MenuItem
              text="Business"
              url="/#"
             />
            <MenuItem
              text="Pricing"
              url="/#"
             />
             <MenuItem
              text="Set your payroll"
              url="/#"
             />
          </ul>
          <ButtonGroupStyle>
            <a href="/#" 
              className="leading-[20px] flex items-center justify-center py-[10px] px-[52px] rounded-[24px] font-[14px] border border-primary text-primary
              font-['Aeonik'] hover:bg-slate-50">
              Log in
            </a>
            <a href="/#" 
              className="leading-[20px] flex items-center justify-center py-[10px] px-[52px] rounded-[24px] bg-primary font-[14px] !text-white font-['Aeonik'] ">
              Register
            </a>
          </ButtonGroupStyle>
        </Menus>
        <button type="button" className="lg:hidden ml-1 outline-none p-1" onClick={() => setOpen(prev => !prev)}><MenuSVG /></button>
       </ContainerStyle>
    </NavWrapperStyle>
  )
}

const NavWrapperStyle = tw.div`
  w-full 
  flex 
  items-center 
  justify-center
  py-[20px]
  max-w-5xl
  mx-auto
  z-[99]
  relative
`;
const ContainerStyle = styled.div`
    ${tw`w-full h-auto flex items-center gap-[70px] px-5 lg:px-0 justify-between`}
    z-index:99;
  
`;

const Menus = tw.div`
  flex-1
  flex-col
  lg:flex-row
  lg:flex items-center justify-between 
  self-stretch
  absolute
  lg:relative
  bg-white w-full lg:w-auto
  lg:bg-transparent pb-9 lg:py-0
  top-20 lg:top-0
  left-0 right-0
  
`;

const ButtonGroupStyle = tw.div`
  shrink-0
  flex items-center gap-[24px]
  self-end
  flex-col
  lg:flex-row
  justify-self-end
`;

export default NavigationBar