import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
function Testimonials() {
  const clients = [
    {
      img: profilePic1,
      review:
        "Sirpirrah is goat you heard!! All i can say is that the service was exceptional. I will definitely be using them again in the future",
    },
    {
      img: profilePic2,
      review:
        "Sirpirrah is goat you heard!! All i can say is that the service was exceptional. I will definitely be using them again in the future",
    },
    {
      img: profilePic3,
      review:
        "Sirpirrah is goat you heard!! All i can say is that the service was exceptional. I will definitely be using  them again in the future",
      name: "John Doe",
      title: "CEO at Company",
    },
    {
      img: profilePic4,
      review:
        "Sirpirrah is goat you heard!! All i can say is that the service was exceptional. I will definitely be using them again in the future",
      name: "John Doe",
      title: "CEO at Company",
    },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="t-blur1" style={{ background: "red" }}></div>
        <div className="t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
              <img src={client.img} alt="" />
              <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
