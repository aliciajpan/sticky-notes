import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./StickyForm.scss";

function StickyForm({fetchMainPerson}) {

    const nameToIDs = {
        "Kayla": "001",
        "Jajuan": "002",
        "Jon": "003",
        "Sammy": "004",
        "Henry": "005",
        "Fateme": "006",
        "Krystyna": "007",
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const stickyToPost = {
            name: event.target.person.value,
            signed: event.target.signed.value,
            color: event.target.colour.value,
            message: event.target.comment.value
        }


        try {
            await axios.post("http://localhost:8080/form", stickyToPost);
            fetchMainVideo();
        }
            
        catch(error) {
            console.error(error);
        }

        event.target.reset();
        console.log(nameToIDs[stickyToPost.name]);
        window.location.href=`/person/${nameToIDs[stickyToPost.name]}`;   
    }

    return (
        <>
            <section className="stickyform">          
                <h1>Add a sticky!</h1>

                <form onSubmit={handleSubmit}>
                    <div className="stickyform__field">
                        <label htmlFor="person">Who is it for?</label>
                        <select id="person" name="person" size="1">
                            <option value="Kayla">Kayla</option>
                            <option value="Jajuan">Jajuan</option>
                            <option value="Jon">Jon</option>
                            <option value="Sammy">Sammy</option>
                            <option value="Henry">Henry</option>
                            <option value="Fateme">Fateme</option>
                            <option value="Krystyna">Krystyna</option>
                        </select>
                    </div>
                                
                    <div className="stickyform__field">
                        <label htmlFor="comment">What is your message?</label>
                        <textarea id="comment" name="comment" className="stickyform__textarea" placeholder="Brighten someone's day :D"></textarea>  
                    </div>

                    <div className="stickyform__right">
                        <label htmlFor="colour">Sticky colour</label>
                        <select id="colour" name="colour" size="1" className="stickyform__colours">
                            <option value="pink">Pink</option>
                            <option value="green">Green</option>
                            <option value="purple">Purple</option>
                            <option value="teal">Teal</option>
                        </select>

                        <div className="stickyform__field">
                            <label htmlFor="signed">Signed,</label>
                            <input id="signed" name="signed" placeholder="Your name"></input>  
                        </div>

                        <button className="stickyform__button">Stick it!</button>
                        
                        <NavLink to="/">
                            <a className="stickyform__cancel">Cancel</a>
                        </NavLink>
                    </div>
                    
                </form>
            </section>
        </>
    );
}

export default StickyForm;