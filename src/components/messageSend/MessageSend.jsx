import React from 'react'
import './MessageSend.css'
import { Avatar , Modal} from '@mui/material'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PublicIcon from '@mui/icons-material/Public';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import GifIcon from '@mui/icons-material/Gif';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function MessageSend() {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  }


  return (
    <>

      <Modal open={open} handleClose={handleClose} >
        <div className='messagePop'>
          <form>
            <div className='messagePopTop'>
              <h3 style={{ color: 'black' }}>Create Post</h3>
              <IconButton>
                <CloseIcon className='closeIcon' onClick={handleClose} />
              </IconButton>
            </div>
            <div className='messagePopMiddle'>
              <Avatar src='https://i.pinimg.com/1200x/4a/a4/23/4aa423d051d751df4208a2f744be11d4.jpg' />
              <h5>Saad </h5>
            </div>
            <div>
              <div className='messagePopPrivacy'>
                <PublicIcon style={{ color: 'black', fontSize: 'medium' }} />
                <p style={{ color: 'black' }}>Public</p>
                <ArrowDropDownIcon style={{ color: 'black' }} />

              </div>

              <div className='messagePopInput'>

                <textarea className='messagePopText' rows="5" placeholder="What's on your mind, Saad?" />
              </div>

              <div className='messagePopBottom'>
                <div className='messagePopOption'>
                  <h5 style={{ color: 'black' }}>Add to your post</h5>

                </div>

                <IconButton>

                  <div className='messagePopBottomIcn'>
                    <PhotoLibraryIcon style={{ color: 'green' ,fontSize:'larger', marginLeft: '5vh' }} />
                  </div>

                </IconButton>

                <IconButton>

                  <div className='messagePopBottomIcn'>
                    <PersonAddAltIcon style={{ color: 'Blue', fontSize:'larger' }} />
                  </div>

                </IconButton>

                <div className='messagePopBottomIcn'>
                  <TagFacesIcon style={{ color: 'orange' , fontSize:'larger'}} />
                </div>

                <IconButton>
                  <div className='messagePopBottomIcn'>
                    <LocationPinIcon style={{ color: 'red', fontSize:'larger' }} />
                  </div>

                </IconButton>

                <IconButton>
                  <div className='messagePopBottomIcn'>
                    <GifIcon style={{ fontSize:'larger' , backgroundColor:'lightgreen' }} />
                  </div>

                </IconButton>

                <IconButton>

                  <div className='messagePopBottomIcn'>
                    <MoreHorizIcon style={{ color: 'gray', fontSize:'larger' }} />
                  </div>
                </IconButton>
              </div>

              <button type='Post' className='messagePopButton'>Post</button>


            </div>
          </form>


        </div>
      </Modal>


      <div className='messageSender'>
        <div className='messageSenderTop'>

          <Avatar src='https://i.pinimg.com/1200x/4a/a4/23/4aa423d051d751df4208a2f744be11d4.jpg' />

          <form>
            <input onClick={handleOpen} type='text' className='messageSenderInput' placeholder="What's on your mind, Saad?" />
          </form>
        </div>

        <div className='messageSenderBottom'>

          <div className='messageSenderOption'>
            <VideoCallIcon style={{ color: 'red' }} />
            <p>Live Video</p>
          </div>

          <div className='messageSenderOption'>
            <PhotoLibraryIcon style={{ color: 'green' }} />
            <p>Photo/Video</p>
          </div>

          <div className='messageSenderOption'>
            <TagFacesIcon style={{ color: 'orange' }} />
            <p>Feeling/Activity</p>
          </div>



        </div>

      </div>
    </>
  )
}

export default MessageSend
