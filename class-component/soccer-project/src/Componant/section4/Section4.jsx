import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './Section4.css'
export default () => {
  return (
    <div className="container cont">

<h1 className='ply'>Player</h1>

    <Swiper className='swip'
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="im">
        <img className='slide' src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/team4-370x370.jpg" alt="" />
        <h2 className='cen'>David Hawk</h2>
        <i>Midfielder</i>
        </div>
        </SwiperSlide>

      <SwiperSlide>
        <div className="im">
        <img className='slide' src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/team5-370x370.jpg" alt="" />
        <h2 className='cen'>Anthony Hoffman</h2>
<i>Forwarder</i>
        </div>
        </SwiperSlide>

      <SwiperSlide> 
        <div className="im">
        <img className='slide' src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/team2-370x370.jpg" alt="" />
        <h2 className='cen'>James Shrut</h2>
        <i>Forwarder</i>

        </div>
        </SwiperSlide>

      <SwiperSlide>
        <div className="im">
        <img className='slide' src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/team3-370x370.jpg" alt="" />
        <h2 className='cen'>Willie Perry</h2>
        <i>Defender</i>

        </div>
        </SwiperSlide>
    
    </Swiper>

    
    </div>
  );
};