import React, { useState, useEffect } from 'react';
import './Post.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import { IconButton } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import Modal from '@mui/material/Modal';



function Post(item) {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  }




  return (
    <>
      <Modal
        open={open}
        handleClose={handleClose}
        BackdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, 0.15)' },
        }}
      >
        <div className='messagePop'>
          <form>
            <div className='messagePopTop'>
              <h3>Post Comments</h3>
              <IconButton>
                <CloseIcon className='closeIcon' onClick={handleClose} />
              </IconButton>
            </div>

            <div className='messagePopMiddle'>

              <h2 style={{ color: ' black' }}>This Post Is Really help Full For Me</h2>
            </div>

          </form>
        </div>
      </Modal>

      <div className="post">

        <div className="post__wrapper">
          <div className="post__top">
            <Avatar src="https://i.pinimg.com/1200x/4a/a4/23/4aa423d051d751df4208a2f744be11d4.jpg" />
            <div className="post__topInfo">
              <h4 style={{ color: 'black' }}>Saad</h4>
              <p style={{ color: 'black' }}>12.57Pm <PublicIcon /></p>
            </div>
          </div>
          <div className='post-icn'>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </div>
        </div>

        <div className="post__content">
          <div className="post__title">
            {item.item.title}

          </div>
          <div className="post__body">

            <p style={{ color: 'black' }}>{item.item.body}</p>

          </div>

        </div>


        <div className="post__bottom">
          <div className="post__bottom_option" style={{ marginLeft: '4vh', color: 'black' }}>
            <ThumbUpOffAltIcon />
            <p>{item.item.reactions.likes}</p>
          </div>
          <div className="post__bottom_option" onClick={handleOpen} style={{ marginLeft: '100px', color: 'black' }}>
            <ChatBubbleOutlineOutlinedIcon />
            <p>Comment</p>
          </div>
          <div className="post__bottom_option" style={{ marginLeft: '110px', color: 'black' }}>
            <VisibilityIcon />
            <p style={{color:'black'}}>{item.item.views}</p>
          </div>
          <div className="post__bottom_option" style={{ marginLeft: '130px', color: 'black' }}>
            <ShareIcon />
            <p>Share</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
