import { FaLocationDot } from "react-icons/fa6";
import "../components/Header.css";

export default function Addres() {
    return (
        <>
            <div className="border">
                <div id="add-first">Deliver to</div>
                <div className="add-icon">
                    <FaLocationDot />
                    <p id="add-second">Pakistan</p>
                </div>
            </div>
        </>
    );
}