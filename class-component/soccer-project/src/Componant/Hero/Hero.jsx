import React, { useState, useEffect } from 'react';
import './Hero.css';
import Navbar from '../Navbar/Navbar';

export default function Hero() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCount((prevCount) => (prevCount + 1) % 3); 
        }, 3000);

        return () => clearTimeout(timeout); 
    }, [count]);

    let soccer1 = { display: 'none' };
    let soccer2 = { display: 'none' };
    let soccer3 = { display: 'none' };

    if (count === 0) {
        soccer1 = { display: 'block' };
    } else if (count === 1) {
        soccer2 = { display: 'block' };
    } else if (count === 2) {
        soccer3 = { display: 'block' };
    }

    return (
        <div className='hero-div'>
            <Navbar />

            <div className="backg d-none d-lg-block">
                <div className="back-white">
                    <img src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/05/slider_img.png" alt="" />
                </div>
            </div>
            <center>
                <div className="soccer-player" style={soccer1}>
                    <img src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/slide_1_img_2.png" className='soccer-player-img animate__animated animate__fadeInBottomLeft' alt="" />
                    <img src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/slide_1_img_1.png" className='soccer-ball-img animate__animated animate__fadeInTopRight' alt="" />
                </div>
            </center>
            <center>
                <div className="soccer-player-1" style={soccer2}>
                    <img src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/slide_1_img_1.png" className='soccer-ball-img-1 animate__animated animate__fadeInTopLeft' alt="" />
                    <img src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/slide_2_img_1.png" className='soccer-player-img-1 animate__animated animate__fadeInBottomRight' alt="" />
                </div>
            </center>
            <center>
                <div className="soccer-player-2" style={soccer3}>
                    <img src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/slide_3_img_1.png" className='soccer-player-img-2 animate__animated animate__fadeInUp' alt="" />
                </div>
            </center>

            <div className="container scor-cont">
                <div className="score-bord row">
                    <div className="col-12 col-md-4 col-one">
                        <img src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/slider_img_team_1.png" className='axiom' alt="" />
                        <span>
                            <h2 className='fc-dallas'>
                                fc dallas
                            </h2>
                            <p className='Major-League-Soccer'><i>Major League Soccer</i></p>
                        </span>
                    </div>

                    <div className="col-12 col-md-4 col-two">
                        <div className="count">
                            <div className="hours">7</div>
                            <div className="hours">8</div>
                            <div className="hou">
                                <font className='score-txt'>HOURS</font>
                            </div>
                        </div>

                        <div className="count">
                            <div className="min">5</div>
                            <div className="min">5</div>
                            <div className="hou">
                                <font className='score-txt'>MINUTES</font>
                            </div>
                        </div>

                        <div className="count">
                            <div className="sec">6</div>
                            <div className="sec">{count}</div>
                            <div className="hou">
                                <font className='score-txt'>SECONDS</font>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-three">
                        <span style={{ float: 'left' }}>
                            <h2 className='fc-dallas'>
                                d.c. united
                            </h2>
                            <p className='Major-League-Soccer'><i>Major League Soccer</i></p>
                        </span>
                        <img src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/slider_img_team_2.png" className='axiom' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
