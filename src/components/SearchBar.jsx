import { FaMagnifyingGlass } from "react-icons/fa6";
import "../components/Header.css";

export default function SearchBar() {
    return (
        <>
            <div className="nav-search">
                <select name="" id="search-select">
                    <option value="">All</option>
                </select>
                <input type="search" placeholder="Search Amazone" name="" id="search-inp" />
                <div id="search-icon">
                    <FaMagnifyingGlass />
                </div>
            </div>
        </>
    );
}