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
      <Pitch/>
      <Footer/>
    </div>
  );
}