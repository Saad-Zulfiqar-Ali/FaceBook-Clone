import React from 'react'
import './StoryReels.css'
import { Avatar } from '@mui/material'

function StoryReels() {
    return (
        <>
            <div className='storyReels'>
                <div className='story' style={{ backgroundImage: "url('https://i.pinimg.com/236x/28/01/16/28011699d7b56e5de5a32764d1924049.jpg')" }} >
                    <Avatar src='https://i.pinimg.com/1200x/4a/a4/23/4aa423d051d751df4208a2f744be11d4.jpg' />
                    <h4>Saad</h4>


                </div>
                <div className='story' style={{ backgroundImage: "url('https://i.pinimg.com/236x/66/37/61/663761fd8c64b332b8a3d33450f059ed.jpg')" }} >
                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG70fm8H0dNZZAQQlOSMHLooRRco0xtpxkug&s' />
                    <h4>ALI</h4>


                </div>
                <div className='story' style={{ backgroundImage: "url('https://wallpaper.forfun.com/fetch/f1/f1c364e97117fe475f352ea55e55d02c.jpeg')" }} >
                    <Avatar src='https://i.pinimg.com/564x/e3/e4/fe/e3e4fe4a0b5fe9248c6bd1746160f477.jpg' />
                    <h4>Hamza</h4>


                </div>
                <div className='story' style={{ backgroundImage: "url('https://i.pinimg.com/736x/db/ad/3c/dbad3cd31a0fa51615dc90ddde0b8dde.jpg')" }} >
                    <Avatar src='https://preview.redd.it/thoughts-on-rin-v0-66c1pb96up7b1.jpg?width=640&crop=smart&auto=webp&s=8fb7cdda1caaad69d095786b380763511574bd90' />
                    <h4>Rin</h4>


                </div>
                <div className='story' style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp8378831.png')" }} >
                    <Avatar src='https://mrwallpaper.com/images/thumbnail/beautiful-cat-with-blue-eyes-kasvm3tn47uye7cy.webp' />

                    <h4>Kitto</h4>


                </div>

            </div>
        </>
    )
}

export default StoryReels
