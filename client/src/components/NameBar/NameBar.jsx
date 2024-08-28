import { NavLink } from "react-router-dom";
import NameButton from "../NameButton/NameButton";
import logo from "../../../public/sticky-note-icon.png";
import "./NameBar.scss";

function NameBar() {
    return (
        <>
            <header className="namebar">
                <img className="namebar__logo" src={logo} alt="Logo" />
                {/* <NavLink className="header__logo-container" to="/"> */}
                {/* </NavLink> */}
                <NameButton name="Kayla" colour="namebutton__pink"/>
                <NameButton name="Jajuan" colour="namebutton__green"/>
                <NameButton name="Jon" colour="namebutton__purple"/>
                <NameButton name="Sammy" colour="namebutton__teal"/>
                <NameButton name="Henry" colour="namebutton__pink"/>
                <NameButton name="Fateme" colour="namebutton__green"/>
                <NameButton name="Krystyna" colour="namebutton__purple"/>

            </header>
        </>
    );
}

export default NameBar;