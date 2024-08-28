import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import NameBar from '../../components/NameBar/NameBar';
import StickyCard from "../../components/StickyCard/StickyCard";
import addIcon from "../../assets/icons/add-form.png";
import './MainPage.scss';

function MainPage() {
    const { idFromParams } = useParams();
    const [selectedPerson, setSelectedPerson] = useState({});
    let defaultPersonId = null;

    let personIdToDisplay = idFromParams ?? defaultPersonId;

    async function fetchMainPerson() {
        try {
            const mainPerson = await axios.get(`http://localhost:8080/person/${idFromParams}`);
            setSelectedPerson(mainPerson.data);
        }

        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (!personIdToDisplay) {
            return;
        }

        fetchMainPerson();
        window.scrollTo(0, 0);
    }, [personIdToDisplay])

    if (!selectedPerson.messages) {
        return (
            <div className='main__alt'>
                <NameBar/>
                <h1>Pick a person!</h1>
            </div>
        );
    }

    return (
        <main className='main'>
            <NameBar/>
            <section className='main__body'>
                <div className='main__top'>
                    <h1>{`${selectedPerson.name}'s Stickys`}</h1>
                    <div className='main__add-container'>
                        <NavLink to="/form">
                            <img className='main__add' src={addIcon} alt="Add form icon" />
                        </NavLink>
                    </div>
                </div>
                
                <div className='main__stickys'>
                    {selectedPerson.messages.map((msg) => (
                        <StickyCard key={msg.id} msg={msg} fetchMainPerson="fetchMainPerson"/>
                    ))}
                </div>

            </section>
        </main>
    )
}

export default MainPage;