import React, { useState } from 'react'
import SideBar from './SideBar'
import MainContent from './MainContent'

const AppContent = (props:{children: React.ReactNode}) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handletoggle = (value:boolean) => setOpenSidebar(value);

  return (
    <div className="flex items-start h-screen w-full overflow-hidden">
        <SideBar handletoggle={handletoggle} openSidebar={openSidebar}/>
        <MainContent handletoggle={handletoggle}>
            {props.children}
        </MainContent>
    </div>
  )
}

export default AppContent