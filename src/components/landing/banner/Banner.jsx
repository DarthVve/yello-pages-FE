import "./banner.scss";
import Prembly from "../../../assets/Prembly.png";
import CcHub from "../../../assets/Co.creation hub logo.png";
import IdPass from "../../../assets/Identitypass.png"

export default function Banner(props) {
  return (
    <div className="banner">
      <img src={Prembly} alt="Prembly" />
      <img src={CcHub} alt="CcHub" />
      <img src={IdPass} alt="IdPass" />
    </div>
  )
}