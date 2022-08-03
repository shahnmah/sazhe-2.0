import React from 'react';
import './MusicMain.css'
import Carousel from 'react-bootstrap/Carousel';
import { BiSearch } from "react-icons/bi";
import musicBgImg1 from '../../images/music-bg.png'
import Table from 'react-bootstrap/Table';
import singerImg1 from '../../images/singer1.png'
import singerImg2 from '../../images/singer2.png'
import singerImg3 from '../../images/singer3.png'
import singerImg4 from '../../images/singer4.png'


const MusicMain = () => {
    return (
        <div className='mt-4'>
            <div className="music-top-header">
                <div className="music-search-bar-container d-flex justify-content-around">
                    <input class="rounded-pill" type="search" placeholder="Taylor Swift" />
                    <span>
                        <BiSearch />
                    </span>
                </div>
                <div className="music-banner-container mt-4">
                    <Carousel interval={10000}>
                        <Carousel.Item>
                            <img
                                className="d-block img-fluid"
                                src={musicBgImg1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block img-fluid"
                                src={musicBgImg1}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block img-fluid"
                                src={musicBgImg1}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="music-main mt-5">
                <div className="music-main-header d-flex justify-content-between align-items-baseline">
                    <h3>Popular</h3>
                    <p className='fw-bold text-muted'><small>See All</small></p>
                </div>
                <div className="music-main-body">
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th className='ps-5'>#</th>
                                <th></th>
                                <th>TITTLE</th>
                                <th>PLAYING</th>
                                <th>TIME</th>
                                <th>ALBUM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='top-tr'>
                                <td className='pt-3 ps-5'>1</td>
                                <td className='p-1'><img src={singerImg1} alt="singer" /></td>
                                <td className='pt-3'>Wildest Dreams</td>
                                <td className='pt-3'>63,637,378</td>
                                <td className='pt-3'>3:40</td>
                                <td className='pt-3'>1988</td>
                            </tr>
                            <tr>
                                <td className='pt-3 ps-5'>2</td>
                                <td className='p-1'><img src={singerImg2} alt="singer" /></td>
                                <td className='pt-3'>Black Space</td>
                                <td className='pt-3 text-muted'>648,598,809</td>
                                <td className='pt-3 text-muted'>3:40</td>
                                <td className='pt-3 text-muted'>1988</td>
                            </tr>
                            <tr>
                                <td className='pt-3 ps-5'>3</td>
                                <td className='p-1'><img src={singerImg3} alt="singer" /></td>
                                <td className='pt-3'>Exile(feat bon iver)</td>
                                <td className='pt-3 text-muted'>289,495,503</td>
                                <td className='pt-3 text-muted'>3:40</td>
                                <td className='pt-3 text-muted'>Folklore</td>
                            </tr>
                            <tr>
                                <td className='pt-3 ps-5'>3</td>
                                <td className='p-1'><img src={singerImg4} alt="singer" /></td>
                                <td className='pt-3'>Cardigan</td>
                                <td className='pt-3 text-muted'>336,863,916</td>
                                <td className='pt-3 text-muted'>3:40</td>
                                <td className='pt-3 text-muted'>Folklore</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default MusicMain;