import React from 'react'

const MainContent = (props:{children:React.ReactNode}) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default MainContent;