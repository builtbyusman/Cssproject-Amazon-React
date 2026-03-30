import "../components/Main.css";
import Boxes from "./Boxes";
import DifBox from "./DifBox";

import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";

import game from "../assets/g1.jpg";

import fsn1 from "../assets/f1.jpg";
import fsn2 from "../assets/f2.jpg";
import fsn3 from "../assets/f3.jpg";
import fsn4 from "../assets/f4.jpg";

import newa from "../assets/arr1.jpg";
import newb from "../assets/arr2.jpg";
import newc from "../assets/arr3.jpg";
import newd from "../assets/arr4.jpg";

export default function Main() {
    return (
        <>
            <main>
                <div className="hero-sec">
                    <div className="shop-boxes">
                        <Boxes h1={"Shop for your home essentials"} img1={home1} img1p={"cleaning tools"} img2={home2} img2p={"Home storage"} img3={home3} img3p={"home decor"} img4={home4} img4p={"bedding"} more={"Discover more in Home"} />
                        <DifBox h1={"Get your game on"} img={game} more={"Shop gaming"} />
                        <Boxes h1={"Shop Fashion for less"} img1={fsn1} img1p={"jeans under 50$"} img2={fsn2} img2p={"tops under 25$"} img3={fsn3} img3p={"dresses under 30$"} img4={fsn4} img4p={"shoes under 50$"} more={"See all Deals"} />
                        <Boxes h1={"New home arrivals under $50"} img1={newa} img1p={"kitchen & dining"} img2={newb} img2p={"home improvement"} img3={newc} img3p={"decor"} img4={newd} img4p={"bedding & bath"} more={"Shop the latest from home"} />
                    </div>
                </div>
            </main>
        </>
    );
}