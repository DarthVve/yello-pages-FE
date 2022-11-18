import FB from "../../../assets/fb.svg";
import IG from "../../../assets/ig.svg";
import linkedin from "../../../assets/linkedin.svg";
import pinterest from "../../../assets/pinterest.svg";
import SC from "../../../assets/sc.svg";
import twitter from "../../../assets/twitter.svg";
import YT from "../../../assets/yt.svg";
import "./footer.scss";

export default function Footer(props) {
  const socials = [{
    name: "facebook",
    logo: FB,
    link: ""
  },
  {
    name: "instagram",
    logo: IG,
    link: ""
  },
  {
    name: "linkedin",
    logo: linkedin,
    link: ""
  },
  {
    name: "pinterest",
    logo: pinterest,
    link: ""
  },
  {
    name: "snapchat",
    logo: SC,
    link: ""
  }, 
  {
    name: "twitter",
    logo: twitter,
    link: ""
  },
  {
    name: "youtube",
    logo: YT,
    link: ""
  }
  ]
  return (
    <div className="footer">
      <div id="about" className="about">
        <h2 className="footer__section__heading">About</h2>
        <p className="footer__section__text">
          YelloPages is designed to give small and medium scale enterprises credibility. We ensure intending customers see the verification status and transparency level of the  businesses. 
        </p>
      </div>
      <div id="contact" className="contact">
        <h2 className="footer__section__heading">Contact</h2>
        <p className="footer__section__text">
          7 Asajon Way, Sangotedo, Lagos.
          09010480555 
        </p>
      </div>
      <div id="socials" className="socials">
        <h2 className="footer__section__heading">Social Links</h2>
        <div className="socials__row">
        {
          socials.map((social, index) => {   
            return (
              <div className="social__link" key={index}>
                <img src={social.logo} className="social__icon" alt={social.name} />
              </div>
            )
          })
        }
        </div>    
      </div>
      <p className="copyright">Copyright © 2022 Decasquad</p>
    </div>
  )
}