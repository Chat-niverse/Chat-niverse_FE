import "./FirstPage.css";
import { TypeAnimation } from "react-type-animation";
import Header from "../Header/Header";

const FirstPage = ({ onEnter }) => {
  return (
    <div>
      <Header />
      <div className="upper_text">어디에도 없던, 나만의 이야기</div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "나는 중세 시대의 방랑 기사야.",
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          "나는 서부 시대의 총잡이야.",
          2000,
          "나는 용을 길들이는 드래곤 마스터야.",
          2000,
          "나는 핵전쟁의 유일한 생존자야.",
          2000,
        ]}
        wrapper="span"
        speed={5}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <div className="lower_text">여러분들의 이야기를 들려주세요</div>
      <button className="enter_button" onClick={onEnter}>
        Enter
      </button>
    </div>
  );
};

export default FirstPage;
