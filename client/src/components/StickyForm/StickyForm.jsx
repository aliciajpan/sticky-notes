import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./StickyForm.scss";

function StickyForm() {
    // const [titleState, setTitleState] = useState("");
    // const [descriptionState, setDescriptionState] = useState("");

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     if (event.target.title.value === "" || event.target.description.value === "") {
    //         setTitleState("");
    //         setDescriptionState("");
        
    //         if (event.target.title.value === "") {
    //             setTitleState("comment-form__invalid");
    //         }

    //         if (event.target.description.value === "") {
    //             setDescriptionState("comment-form__invalid");
    //         }
    //     }

    //     else {
    //         setTitleState("");
    //         setDescriptionState("");
    //         alert("Upload successful!")
    //         event.target.reset();
    //         window.location.href = "/";
    //     }      
    // }

    return (
        <>
            <section className="stickyform">          
                <h1>Add a sticky!</h1>

                <form> 
                    {/* onSubmit={handleSubmit} */}
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
                        <a className="stickyform__cancel">Cancel</a>
                    </div>
                    
                </form>
            </section>
        </>
    );
}

export default StickyForm;