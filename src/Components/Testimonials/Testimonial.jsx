import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Nisharga is extremely talented and was able to help me with my problems quickly and effectively. He was also very respectful and patient. Would highly recommend his services! Thanks Nisharga"
    },
    {
      img: profilePic2,
      review:
        "It was so easy working with him. He listens to your needs and delivers an amazing product. So glad i chose him, definitely recommend it to other people.",
    },
    {
      img: profilePic3,
      review:
        "This man is a machine!!! - when a change was requested, he would have it implemented or updated by the following day",
    },
    {
      img: profilePic4,
      review:
        "Very professional job. Very responsive and understand the tasks. Not obvious to find someone like him. Certainly will hire him again.",
    },
  ];

  return (
    <div className="t-wrapper" name="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="t-heading">
              <span>Clients always get </span>
              <span>Exceptional Work </span>
              <span>from me...</span>
              <div
                className="blur t-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
              <div
                className="blur t-blur2"
                style={{ background: "skyblue" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="row mt-5  ">
          <div className="col-md-12 testimonialslider">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {clients.map((client, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="testimonial">
                      <img src={client.img} alt="" />
                      <span>{client.review}</span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
