import React from 'react'
import './rightSideBar.css'
import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function rightSideBar() {
  return (
    <>
      <div className='rightSideBar'>
        <div className='rightSideBar__top'>
          <div className='rightSideBar__top__title'>

            <h4>Friend Request</h4>
            <p>See All</p>
          </div>
        </div>

        <div className='rightSideBar__middle bar__hover'>

          <Avatar src='https://s.cafebazaar.ir/images/icons/cute.love.dp-fc9c8497-522b-4848-bd66-72ee57b9d195_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
            style={{ width: '60px', height: '60px' }}
          />
          <p>Cutie</p>
          <button
            className='rightSideBar__middle__btn'
            style={{ backgroundColor: '0866FF', color: 'white' }}>
            Confirm</button>

          <button
            className='rightSideBar__middle__btn'
            style={{ backgroundColor: 'red', color: 'white' }}>
            Delete</button>
        </div>

        <div className='rightSideBar__contact'>
          <div className='rightSideBar__contact__title'>
            <h4>Contacts</h4>
            <SearchIcon
              className='rightSideBar__contact__title__icn'
              style={{ marginLeft: '20vh' , color:'black' }}
            />
            <MoreHorizIcon
              className='rightSideBar__contact__title__icn'
              style={{ marginLeft: '10px' , color:'black' }}
            />
          </div>
        </div>

        <div className='rightSideBar__contact__list bar__hover'>
          <Avatar 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4pp-L2WwjjXxT9MxzKKWAk2GLUW4KcUG6A&s'
           alt='Nothing'
           style={{ width: '50px', height: '50px' }} />
          <p>Gojo</p>
        </div>

        <div className='rightSideBar__contact__list bar__hover'>
          <Avatar 
          src='https://i.pinimg.com/736x/b9/8a/5c/b98a5cb4ae1055201f2f13b8a4606db9.jpg'
           alt='Nothing'
           style={{ width: '50px', height: '50px' }} />
          <p>kakashi </p>
        </div>

        <div className='rightSideBar__contact__list bar__hover bar__hover' >
          <Avatar 
          src='https://i.pinimg.com/236x/01/97/7c/01977c67b75afd3f219d378c3f24f0c9.jpg'
           alt='Nothing'
           style={{ width: '50px', height: '50px' }} />
          <p>Kitto</p>
        </div>

        <div className='rightSideBar__contact__list bar__hover'>
          <Avatar 
          src='https://i.pinimg.com/236x/6c/12/74/6c127425b371605defdcb433d9717001.jpg'
           alt='Nothing'
           style={{ width: '50px', height: '50px' }} />
          <p>Meow</p>
        </div>

        <div className='rightSideBar__contact__list bar__hover'>
          <Avatar 
          src='https://i.pinimg.com/736x/a8/2b/af/a82bafe92aeeaa9a73df064d2ff83537.jpg'
           alt='Nothing'
           style={{ width: '50px', height: '50px' }} />
          <p>Obito</p>
        </div>



        <div className='rightSideBar__contact__list bar__hover'>
          <Avatar 
          src='https://i.pinimg.com/736x/a5/bb/41/a5bb41e2ae92782c1e0dc69b2e7777cc.jpg'
           alt='Nothing'
           style={{ width: '50px', height: '50px' }} />
          <p>Rin</p>
        </div>

        <div className='rightSideBar__contact__list  rightSideBar__contact__list_last bar__hover'>
          <Avatar 
          src='https://images2.alphacoders.com/132/1326802.jpeg'
           alt='Nothing'
           style={{ width: '50px', height: '50px'}} />
          <p>Rukia</p>
          
        </div>

          <h3
          style={{color: 'black', marginTop : '10px',  marginBottom : '10px',fontSize : '20px'}}>Community Chats</h3>

        <div className='rightSideBar__community__chats__list bar__hover'>



            <Avatar 
            src='https://i.pinimg.com/564x/af/c5/72/afc572ebabc30b61cc63b7039b5896d8.jpg'
             alt='Nothing'
             style={{ width: '40px', height: '40px' }} />
            <p>Anime Lovers</p>
          </div>

          <div className='rightSideBar__community__chats__list rightSideBar__contact__list_last bar__hover'>
            <Avatar 
            src='https://i.pinimg.com/736x/5a/c7/4c/5ac74c71dc0b6697cb996447568806fa.jpg'
             alt='Nothing'
             style={{ width: '40px', height: '40px' }} />
            <p>Anime Lovers</p>
          </div>

    </div>

        



    </>
  )
}

export default rightSideBar
