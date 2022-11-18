import "./hero.scss";
import graphic from "../../../assets/Header man 1.png";

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="cta">
        <h1 className="cta__heading">Submit and Screen Verifiable Business Information with Just a Click</h1>
        <p className="cta__text">YelloPages enables business owners to put forward verifiable business information and gives room for users to make informed decisions when patronizing online small or medium-scale enterprises.</p>
        <a className="cta__btn" href="register">Get Started</a>
      </div>
      <div className="graphic">
        <img src={graphic} className="graphic__img" alt="graphic"/>
      </div>
    </div>
  )
}