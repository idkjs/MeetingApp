import React from 'react'
import './Home.css'
import { isAuthenticated } from '../../utils/helper'
import SideNav from '../../components/SideNav'

const Home = (props) => (
  <div className='home'>
    {!isAuthenticated()
      ? <div className='image'>
        <h1>Meeting</h1>
        <img src='https://res.cloudinary.com/annmary/image/upload/v1579688370/kisspng-stock-photography-royalty-free-3d-computer-graphic-meeting-villain-5a8cfbd8766c90.6163807215191889524851_wtn66l.png' alt='homeImage' />
      </div>
      : <div className='row'>
          <div className='col-2 side-nav'>
            <SideNav />
        </div>
      </div>}
  </div>
)

export default Home
