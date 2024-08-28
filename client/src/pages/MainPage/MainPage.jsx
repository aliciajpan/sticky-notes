import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NameBar from '../../components/NameBar/NameBar';
import StickyCard from "../../components/StickyCard/StickyCard";
import StickyForm from '../../components/StickyForm/StickyForm';
import addIcon from "../../assets/icons/add-form.png";
import './MainPage.scss';

function MainPage({name}) {
    return (
        <main className='main'>
            <NameBar/>
            <section className='main__body'>
                <div className='main__top'>
                    <h1>{`${name}'s Stickys`}</h1>
                    <div className='main__add-container'>
                        <img className='main__add' src={addIcon} alt="Add form icon" />
                    </div>
                </div>
                
                <div className='main__stickys'>
                    <StickyCard colour="stickycard__teal"/>
                    <StickyCard colour="stickycard__purple"/>
                    <StickyCard colour="stickycard__pink"/>
                </div>

                <StickyForm/>
            </section>
        </main>
    )
}

export default MainPage;