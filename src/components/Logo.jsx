import logo from "../assets/logo.png";
import "../components/Header.css";

export default function Logo() {
    return (
        <>
            <div className="nav-logo border">
                <img src={logo} alt="logo" id="logo" />
            </div>
        </>
    );
}