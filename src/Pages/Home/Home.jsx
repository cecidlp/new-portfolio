import React from 'react'
import './Home.scss'
import profile from '../../assets/profile.jpg'

const Home = () => {
  return (
    <div className='home'>
        <div className="details">
            <span className="intro">Hello, I'm</span>
        <div className="name">
            <div>
                <h1 className='txt'>
                    CE<br />
                    CILI
                    </h1>
            </div>
            <h1 className='txt lg'>A</h1>

            <div className="stack">
                FRONT-END <b>DEVELOPER</b>
            </div>
        </div>
        </div>

        <div className="profile-img">
            <img src={profile} alt="profile picture"></img>

        </div>
    </div>
  )
}

export default Home