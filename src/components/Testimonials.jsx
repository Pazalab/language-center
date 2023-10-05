import { testimonials } from "../data/testimonials"
import { RiDoubleQuotesL } from "react-icons/ri"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay } from "swiper"
import Nudge from "./Nudge"
const Testimonials = () => {
  return (
    <div className="testimonial-section">
              <div className="inner-row">
                        <div className="testimonial-section-content">
                                 <div className="testimonial-intro">
                                             <h1>Don&apos;t take Our Word For It. <br /> See what our Customers are Saying</h1>
                                 </div>
                                 <div className="testimonials-row">
                                           <Swiper
                                                   
                                                    slidesPerView={1}               
                                                    loop={true}
                                                    autoplay={{
                                                          delay: 3000,
                                                          disableOnInteraction: false
                                                     }}
                                                    modules={[Autoplay]}
                                                    breakpoints={{
                                                         1090: {
                                                                 slidesPerView: 3,
                                                                 spaceBetween: 20
                                                           },
                                                          600: {
                                                                 slidesPerView: 2,
                                                                 spaceBetween: 20
                                                          }
                                                      }}
                                             >
                                                  { testimonials.map(item => 
                                                        <SwiperSlide key={item.id}>
                                                                 <div className="testimonial-moja">
                                                                           <span><RiDoubleQuotesL /></span>
                                                                           <p>{item.text}</p>
                                                                           <h4>{item.name} ~ Learnt {item.language}</h4>
                                                                 </div>
                                                        </SwiperSlide>
                                                  )}
                                             </Swiper>
                                 </div>


                                 <Nudge />
                        </div>
              </div>
    </div>
  )
}

export default Testimonials