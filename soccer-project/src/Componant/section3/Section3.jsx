import React,{useEffect} from 'react'
import './Section3.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Section3() {
    
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
    let img1 = 'https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/logo-2.png'
    let img2 = 'https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/logo-11-1.png'
    let img3 = 'https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/logo-2-40x40.png'
    let img4 = 'https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/logo-11-1-40x40.png'
    let img5 = 'https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/logo-9-40x40.png'
    
    return (
        <div className="back-color">
            <div className='container sec3 ' data-aos="flip-left">
                <center>
                    <h1>LAST MATCH RESULT</h1>
                </center>
                <div className="row one">
                    <div className="col-12 col-md-5 sc">
                        <img src={img1} alt="" />
                        <span className='ccc'>
                            <h1 className='h1'>Columbus Crew CS</h1>
                            <h6 id='ang' >Angola</h6>
                        </span>
                    </div>

                    <div className="col-12 col-md-2 sr">
                        <center>
                            <i>05 Apr 13:45</i>
                            <h1 className='score'>2 - 1</h1>
                            <i>Barracuda Championship Silverado Resort</i>
                        </center>
                    </div>

                    <div className="col-12 col-md-5 sc">
                        &nbsp;
                        &nbsp;

                        <span className='ccc'>
                            <h1 className='h1' >Houston Dynamo</h1>
                            <h6 id='cor' >Angola</h6>
                        </span>
                        <img src={img2} id='im2' alt="" />
                    </div>
                </div>

                <div className="ntx-match">
                    <h1 className="ntx-txt">
                        next matches
                    </h1>
                    <div className="ntx-min">
                        <div className="ntx-match-item">
                            <h1>05</h1>
                            <p className='april' >APRIL</p>
                        </div>
                        <div className="ntx-match-item">
                            <img src={img3} alt="" />
                        </div>
                        <div className="ntx-match-item-1">
                            <h1 className='h2'>Columbus Crew CS</h1>

                        </div>
                        <div className="ntx-match-item-0">
                            <h1 className='score1'>vs</h1>

                        </div>
                        <div className="ntx-match-item">
                            <h1 className='h2'>Houston Dynamo</h1>
                        </div>
                        <div className="ntx-match-item">
                            <img src={img4} alt="" />

                        </div>

                    </div>
                    <div className="ntx-min">
                        <div className="ntx-match-item">
                            <h1>06</h1>
                            <p className='april' >APRIL</p>
                        </div>
                        <div className="ntx-match-item">
                            <img src={img5} alt="" />
                        </div>
                        <div className="ntx-match-item-1">
                            <h1 className='h2'>Orlando City SC</h1>

                        </div>
                        <div className="ntx-match-item-0">
                            <h1 className='score1'>vs</h1>

                        </div>
                        <div className="ntx-match-item">
                            <h1 className='h2'>Houston Dynamo</h1>
                        </div>
                        <div className="ntx-match-item">
                            <img src={img4} alt="" />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
