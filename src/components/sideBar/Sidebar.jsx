import React from 'react'
import './SideBar.css'
import { Avatar } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function SideBarOption({icon , title , src}) {
  return (
    <>
    <div className='sidebar-option'>

      {src && <Avatar src={src} />}
      {icon && <icon.type {...icon.props} />}


      <p>{title}</p>

    </div>
    
    </>
  )
  
}


function SideBar() {
  return (

    <div className='sidebar-container'>

      <SideBarOption src='https://i.pinimg.com/1200x/4a/a4/23/4aa423d051d751df4208a2f744be11d4.jpg'title = "Saad" />

      <SideBarOption src= 'https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/w5I9ktz_3Ib.png' title = "Meta Ai" />

      <SideBarOption src='https://cdn-icons-png.flaticon.com/512/11820/11820085.png' title = "Friends" />

      <SideBarOption src = 'https://cdn-icons-png.flaticon.com/512/11820/11820135.png' title = "Memories" />

      <SideBarOption src = 'https://cdn-icons-png.flaticon.com/512/11820/11820237.png' title = "Saved" />

      <SideBarOption src = 'https://cdn-icons-png.flaticon.com/512/11820/11820089.png' title = "Group" />

      <SideBarOption src = 'https://cdn-icons-png.flaticon.com/512/4406/4406124.png' title = "Video" />

      <SideBarOption src = 'https://cdn-icons-png.flaticon.com/256/7595/7595475.png' title = "MarketPlace" />

      <SideBarOption src = 'https://cdn-icons-png.flaticon.com/512/1946/1946355.png' title = "Feeds" />

    <div className='sidebar-icn'>
     
      <SideBarOption  icon={<ArrowDropDownIcon  className='icn' style={{color : 'black'}} />} title = "See More" />

      
    </div>

    </div>
  )
}

export default SideBar
