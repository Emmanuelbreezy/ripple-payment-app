import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { ReactComponent as LogoSVG } from '../../assets/image/brand_logo.svg';
import MenuItem from './common/MenuItem';



const NavigationBar = () => {
  return (
    <NavWrapperStyle>
       <ContainerStyle>
        <div className="flex-shrink-1">
          <LogoSVG  />
        </div>
        <Menus>
          <ul className="flex items-center gap-[48px] p-0">
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
              font-['Aeonik']">
              Log in
            </a>
            <a href="/#" 
              className="leading-[20px] flex items-center justify-center py-[10px] px-[52px] rounded-[24px] bg-primary font-[14px] !text-white font-['Aeonik'] ">
              Register
            </a>
          </ButtonGroupStyle>
        </Menus>
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
    ${tw`w-full h-auto flex items-center gap-[70px] px-5 lg:px-0`}
    z-index:99;
  
`;

const Menus = tw.div`
  flex-1
  hidden
  lg:flex items-center justify-between 
  self-stretch
  
`;

const ButtonGroupStyle = tw.div`
  shrink-0
  flex items-center gap-[24px]
  self-end
  justify-self-end
`;

export default NavigationBar