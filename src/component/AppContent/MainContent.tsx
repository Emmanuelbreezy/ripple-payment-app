import React from 'react';
import { ReactComponent as NotifySVG }from '../../assets/image/notify-icon.svg';
import { ReactComponent as ChervonSVG }from '../../assets/image/chervon-right.svg';
import { ReactComponent as MenuSVG }from '../../assets/image/menu.svg';

import Avatar from '../../assets/image/avatar.png';
import CompanyLogo from '../../assets/image/company-logo.png';


const MainContent = (props:{children:React.ReactNode;handletoggle:(val:boolean) => void}) => {

  return (
    <div className=" flex-1 flex flex-col items-center h-[100vh] overflow-hidden  relative bg-[#F9FAFC]">
        <div className="nav bg-white w-full shadow-[0px_4px_25px_0px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between py-[11px] 
                max-w-[67rem] mx-auto ">
                <div className="my-0 flex items-center ">
                  <button className=" lg:hidden ml-1 outline-none p-1" 
                  onClick={() => props.handletoggle(true)}><MenuSVG /></button>
                  <img src={CompanyLogo} alt="" />
                </div>
                <div className=" bg-white flex items-center gap-7 lg:gap-14">
                    <button className="relative outline-none">
                      <NotifySVG />
                      <span className="w-4 h-4 absolute -right-2 -top-1 rounded-full pt-[1px] px-[1px] 
                        bg-[#C92F02] font-aeonik font-bold text-[10px] text-white text-center
                        flex items-center justify-center">7</span>
                    </button>
                    <a href="/#" className="relative flex items-center gap-2 sm:gap-4">
                      <div><img src={Avatar} alt="" /></div>
                      <div className="w-[150px] font-aeonik"> 
                        <h5 className="text-[16px] font-bold leading-6">Kalu Abasiama</h5>
                        <div className="flex items-center justify-between
                          font-aeonik font-[14px] text-[#898989] leading-4">
                            <span>Admin</span>
                            <ChervonSVG  className="mb-0 sm:-mb-1"/>
                        </div>
                      </div>
                    </a>
                </div>
          </div>
        </div>
        <div className="content mt-1 w-full flex-1 pt-10  !overflow-x-auto !overflow-y-auto">
            <div className="px-6 lg:px-0 max-w-5xl mx-auto">
            {props.children}
            </div>
        </div>
      </div>
  )
}

export default MainContent;