import { NavLink } from "react-router-dom";
import "./NameButton.scss";

function NameButton({person, colour}) {
    return (
        <NavLink to={`/person/${person.id}`}>
            <button className={`namebutton ${colour}`}>
                <p className="namebutton__text">{person.name}</p>
            </button>
        </NavLink>
    );
}

export default NameButton;