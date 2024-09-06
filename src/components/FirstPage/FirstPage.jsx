import "./FirstPage.css";
import Logo from "../../assets/Images/chatniverselogo.png";
import { TypeAnimation } from "react-type-animation";

const FirstPage = ({ onEnter }) => {
  return (
    <div>
      <div className="firstpage_image_container">
        <img src={Logo} className="firstpage_image_file" />
        <span className="project_name">Chat-Niverse</span>
      </div>
      <div className="upper_text">어디에도 없던, 나만의 이야기</div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "나는 중세 시대에 살고 있어.",
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          "나는 중세 시대 유럽에 살고 있어.",
          2000,
          "나는 중세 시대 프랑스에 살고 있어.",
          2000,
          "나는 중세 시대 프랑스 도심에 살고 있어.",
          2000,
        ]}
        wrapper="span"
        speed={30}
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
