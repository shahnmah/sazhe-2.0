import React, { useState } from 'react';
import './Navigator.css';
import logo from '../../images/logo.png';
import headerIcon from '../../images/header-icon.png';
import { CgViewComfortable } from "react-icons/cg";
import { BsMusicNoteBeamed, BsHeart, BsFileEarmarkMusic } from "react-icons/bs";
import { HiOutlineCalendar } from "react-icons/hi";
import { RiHome6Line, RiUserFollowLine } from "react-icons/ri";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar, faCompactDisc, faHeart } from '@fortawesome/free-solid-svg-icons'



const Navigator = () => {
    const [resizeClick, setResizeClick] = useState(false)
    // if (resizeClick) {
    //     console.log('ok')
    //     setResizeClick(false)
    // }

    return (
        <div className='mt-4 navigator-container'>
            <div className="navigator-header">
                <div className="navigator-icon d-flex justify-content-between align-items-center">
                    <img src={headerIcon} alt="headerIcon" />
                    <div className='resize-icon'>
                        <a onClick={(e) => setResizeClick(true)} href="#">
                            <CgViewComfortable />
                        </a>
                    </div>
                </div>
                <div className="logo mt-4 ps-2">
                    <a href="#"><img src={logo} alt="logo" /></a>
                </div>
            </div>
            <div className="navigator-menu-container">
                <ul className='ps-3 mt-5'>
                    <li className='nav-list mb-3'>
                        <a href="#" className='d-flex align-items-end'>
                            <span className='nav-logo'><RiHome6Line/></span>
                            <span className='nav-name'>Home</span>
                        </a>
                    </li>
                    <li className='nav-list mb-3'>
                        <a href="#" className='d-flex align-items-end'>
                            <span className='nav-logo'><FontAwesomeIcon icon={faRankingStar} /></span>
                            <span className='nav-name'>Trends</span>
                        </a>
                    </li>
                    <li className='nav-list mb-3'>
                        <a href="#" className='d-flex align-items-end'>
                            <span className='nav-logo'><BsMusicNoteBeamed/></span>
                            <span className='nav-name'>Library</span>
                        </a>
                    </li>

                        {/* discover */}

                    <p className='text-muted my-4'>
                        <small>Discover</small>
                    </p>
                    <li className='nav-list mb-3'>
                        <a href="#" className='d-flex align-items-end'>
                            <span className='nav-logo'><HiOutlineCalendar/></span>
                            <span className='nav-name'>Discover Weekly</span>
                        </a>
                    </li>
                    <li className='nav-list mb-3'>
                        <a href="#" className='d-flex align-items-end'>
                            <span className='nav-logo'><FontAwesomeIcon icon={faCompactDisc} /></span>
                            <span className='nav-name'>Made For You</span>
                        </a>
                    </li>
                    <li className='nav-list mb-3'>
                        <a href="#" className='d-flex align-items-end'>
                            <span className='nav-logo'><MdOutlineLibraryMusic/></span>
                            <span className='nav-name'>Daily Mix</span>
                        </a>
                    </li>

                    {/* your collection */}

                    <p className='text-muted my-4'>
                        <small>Your Collection</small>
                    </p>

                    <li className='nav-list mb-3'>
                        <a href="#" className='d-flex align-items-end'>
                            <span className='nav-logo'><BsHeart/></span>
                            <span className='nav-name'>Liked Songs</span>
                        </a>
                    </li>
                    <li className='nav-list mb-3'>
                        <a href="#" className='d-flex align-items-end'>
                            <span className='nav-logo'><RiUserFollowLine/></span>
                            <span className='nav-name'>Favorite Artist</span>
                        </a>
                    </li>
                    <li className='nav-list mb-3'>
                        <a href="#" className='d-flex align-items-end'>
                            <span className='nav-logo'><BsFileEarmarkMusic/></span>
                            <span className='nav-name'>Playlist</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigator;