import React from 'react'
import StoryReels from '../storyReels/StoryReels'
import './Feeds.css'
import MessageSend from '../messageSend/MessageSend'
import Api from '../config/Api'



function Feeds() {
    return (
        <div>
            <div className="feeds">

                
                 <MessageSend /> 

                <StoryReels />

                <Api />
            </div>

        </div>
    )
}

export default Feeds
