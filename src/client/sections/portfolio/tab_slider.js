import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import TabSlider from "../../assets/css/tabSlider.module.css";

function ClientTabSlider({ tabs = [], activeTab, setActiveTab }) {
  return (
    <div className={TabSlider.uiTabSlider}>
      <Swiper modules={[FreeMode, Scrollbar, Mousewheel]} slidesPerView="auto" freeMode={true} scrollbar={{ draggable: true }} mousewheel={true} className={TabSlider.uiTabSwiper}>
        {tabs.map((tab, index) => (
          <SwiperSlide key={index} className={TabSlider.uiTabSlide}>
            <button onClick={() => setActiveTab(index)} className={`${TabSlider.uiTabButton} ${ activeTab === index ? TabSlider.uiTabActive : "" }`}>
                <span>{tab.title}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientTabSlider;
