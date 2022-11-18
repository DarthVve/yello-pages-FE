import Checktick from "../../../assets/Checktick.png";
import PeopleImg from "../../../assets/People.png";
import Handshake from "../../../assets/Handshake.png";
import "./pitch.scss";

export default function Pitch(props) {
  const cards = [{
      logo: Handshake,
      text: "We bridge a gap and build trust between a business and an intending user."
    }, {
      logo: PeopleImg,
      text: "Crowd sourced rating system by verified customers"
    }, {
      logo: Checktick,
      text: "Verify authenticity of the registered businesses"
    }];

  return (
    <div className="pitch">
      <h2 className="pitch__heading">What we do</h2>
      <div className="pitch__row">
      {cards.map((card, index) => {
        return (
          <div className="pitch__col" key={index}>
            <div className="pitch__card">
              <img src={card.logo} className="pitch__card__icon" alt={"what we do card " +index} />
              <p className="pitch__card__text">
                {card.text}
              </p>
            </div>
          </div>
        )
      }) }
      </div>
    </div>
  )
}