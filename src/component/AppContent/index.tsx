import React from 'react'
import SideBar from './SideBar'
import MainContent from './MainContent'

const AppContent = (props:{children: React.ReactNode}) => {
  return (
    <div>
        <SideBar />
        <MainContent>
            {props.children}
        </MainContent>
    </div>
  )
}

export default AppContent