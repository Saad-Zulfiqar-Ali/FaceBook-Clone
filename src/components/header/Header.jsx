import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar, IconButton } from '@mui/material';
import './Header.css'
export default function Header() {
    return (
        <>
            <div className="header">
                <div className="left-header">
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png' alt='logo' className='logo' />

                    <div className="search-bar">
                        <SearchIcon className='search-icon' style={{color: 'black'}} />
                        <input type="text" placeholder="Search..." className='search-input' />

                    </div>
                </div>

                <div className="middle-header">

                    <div className='header-option header-option-active'>
                        <HomeIcon fontSize='large' className='header-icon' />
                    </div>

                    <div className='header-option'>
                        <PeopleOutlineIcon fontSize='large' className='header-icon' />
                    </div>

                    <div className='header-option'>
                        <OndemandVideoOutlinedIcon fontSize='large' className='header-icon' />
                    </div>

                    <div className='header-option'>
                        <GroupsIcon fontSize='large' className='header-icon' />
                    </div>

                    <div className='header-option'>
                        <VideogameAssetOutlinedIcon fontSize='large' className='header-icon' />
                    </div>

                </div>


                <div className="right-header">

                    <div className="profile">
                        <Avatar src='https://i.pinimg.com/1200x/4a/a4/23/4aa423d051d751df4208a2f744be11d4.jpg'/>
                        <h4 style={{color: 'black'}}>Saad</h4>
                    </div>

                    <IconButton>
                        <AppsIcon fontSize='large' className='header-icon' />
                    </IconButton>

                    <IconButton>
                        <ChatIcon fontSize='large' className='header-icon' />
                    </IconButton>

                    <IconButton>
                        <NotificationsActiveIcon fontSize='large' className='header-icon' />

                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon fontSize='large' className='header-icon' />
                    </IconButton>
                </div>
            </div>
        </>
    )
}
