import "../components/Header.css";
import { FaFlagUsa } from "react-icons/fa";

export default function Language() {
    return (
        <>
            <div className="nav-language border">
                <div id="lan-icon">
                    <FaFlagUsa />
                </div>
                <div>
                    <select name="" id="lan-select">
                        <option value="">EN</option>
                    </select>
                </div>
            </div>

        </>
    );
}