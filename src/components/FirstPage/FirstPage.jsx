import React, { useState, useEffect } from "react";
import "./FirstPage.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Header from "../Header/Header";
import Fallout from "../../assets/Images/fallout.webp";
import Library from "../../assets/Images/library.png";
import Hollow from "../../assets/Images/hollow.jpg";
import Horizon_Zerodawn from "../../assets/Images/horizon_zero.jpg";

const FirstPage = ({ onEnter }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Hollow, Fallout, Library, Horizon_Zerodawn];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop images
    }, 4750); // Same interval as the TypeAnimation

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div>
      <Header />
      <motion.img
        key={currentImageIndex} // Ensure Framer Motion knows to animate between images
        src={images[currentImageIndex]}
        alt="Looping Images"
        className="looping_image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }} // Smooth fading animation between images
      />
      <div className="upper_text">어디에도 없던, 나만의 이야기</div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "나는 빛을 담는 그릇이야.",
          2120,
          "나는 핵전쟁의 유일한 생존자야.",
          1950,
          "나는 사랑했던 사람에게 외면받는 환상체야.",
          1450, // wait 1s before replacing "Mice" with "Hamsters"
          "나는 흩어진 지구를 모으고자 하는 사람이야.",
          900,
          //"나는 용을 길들이는 드래곤 마스터야.",
          //2000,
        ]}
        wrapper="span"
        speed={7}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <div className="lower_text">여러분들의 이야기를 들려주세요</div>
      <button
        className="enter_button"
        onClick={(e) => {
          e.preventDefault();
          onEnter();
        }}
      >
        첫 장을 편다.
      </button>
    </div>
  );
};

export default FirstPage;
