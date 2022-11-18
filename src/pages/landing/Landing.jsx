import { Navbar, Hero, Banner, Pitch, Footer } from "../../components"
import "./landing.scss"

export default function Landing(props) {
  return (
    <div className='landing'>
      <div className='showcase'>
        <Navbar/>
        <Hero/>
        <Banner/>
      </div>
      <div className="pitch__bg">
        <Pitch/>  
      </div>
      <div className="footer__bg">
        <Footer/>  
      </div>
    </div>
  );
}