import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import NameButton from "../NameButton/NameButton";
import logo from "../../../public/sticky-note-icon.png";
import "./NameBar.scss";

function NameBar() {
    const { idFromParams } = useParams();
    const [personArray, setPersonArray] = useState([]);
    let defaultPersonId = null;

    if (personArray.length > 0) {
        defaultPersonId = personArray[0].id;
    }

    async function fetchPersons () {
        try {
            const allPersons = await axios.get("http://localhost:8080/person");
            setPersonArray(allPersons.data);
        }

        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPersons();
    }, [])

    return (
        <>
            <header className="namebar">
                <div className="namebar__content">
                    <NavLink to='/'>
                        <img className="namebar__logo" src={logo} alt="Logo" />
                    </NavLink>

                    {personArray.map((person) => (
                        <NameButton key={person.id} person={person} colour={person.color}/>
                    ))}
                </div>
                
                <p>made w love</p>
            </header>
        </>
    );
}

export default NameBar;