import { faCircle, faCirclePlay, faClock, faCompass, faHeart, faPlayCircle, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faCompactDisc, faHeartbeat, faHistory, faHome, faStopwatch, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div className='sidebar-container flex-vt'>
                <div className='sidebar-item flex-hz'>
                    <FontAwesomeIcon className='sidebar-icon' icon={faHome}></FontAwesomeIcon>
                    <p className='sidebar-text'>Home</p>
                </div>
                <div className='sidebar-item flex-hz'>
                    <FontAwesomeIcon className='sidebar-icon' icon={faCompass}></FontAwesomeIcon>
                    <p className='sidebar-text'>Explore</p>
                </div>
                <div className='sidebar-item flex-hz'>
                    <FontAwesomeIcon className='sidebar-icon' icon={faCirclePlay}></FontAwesomeIcon>
                    <p className='sidebar-text'>Playlist</p>
                </div>
                <div className='sidebar-item flex-hz'>
                    <FontAwesomeIcon className='sidebar-icon' icon={faThumbsUp}></FontAwesomeIcon>
                    <p className='sidebar-text'>Liked</p>
                </div>
                <div className='sidebar-item flex-hz'>
                    <FontAwesomeIcon className='sidebar-icon' icon={faHistory}></FontAwesomeIcon>
                    <p className='sidebar-text'>History</p>
                </div>
                <div className='sidebar-item flex-hz'>
                    <FontAwesomeIcon className='sidebar-icon' icon={faClock}></FontAwesomeIcon>
                    <p className='sidebar-text'>Watch later</p>
                </div>
            </div>
        </>
    )
}

export { Sidebar }