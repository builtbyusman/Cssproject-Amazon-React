import "../components/Header.css";
import Addres from "./Addres";
import Cart from "./Cart";
import Language from "./Language";
import Logo from "./Logo";
import Return from "./Return";
import SearchBar from "./SearchBar";
import Sigin from "./Sigin";
import { MdMenu } from "react-icons/md";

export default function Header() {
    return (
        <>
            <header>
                <HeaderPartOne />
                <HeaderPartTwo />
            </header>
        </>
    );
}

function HeaderPartOne() {
    return (
        <>
            <div className="navbar">
                <Logo />
                <Addres />
                <SearchBar />
                <Language />
                <Sigin />
                <Return />
                <Cart />
            </div>
        </>
    );
}

function HeaderPartTwo() {
    return (
        <>
            <div className="panel">
                <span className="panel-all border">
                    <a href="#">
                        <MdMenu id="menu" />
                        All
                    </a>
                </span>

                <div class="panel-opt">
                    <a className="border" href="#">Today's Deals </a>
                    <a className="border" href="#">Customer Servises </a>
                    <a className="border" href="#">Registery </a>
                    <a className="border" href="#">Gift Cards </a>
                    <a className="border" href="#">Sell </a>
                </div>
            </div>
        </>
    );
}