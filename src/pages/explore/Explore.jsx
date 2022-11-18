import { Navbar, Backdrop } from "../../components"
import "./explore.scss"

export default function Explore(props) {
  const arr = new Array(10).fill(0);

  return (
    <div className='explore'>
      <Navbar/>
      <Backdrop/>
      <div className="explore__container">
        <div className="left">

        </div>
        <div className="right">
          
        </div>
      </div>
    </div>
  );
}