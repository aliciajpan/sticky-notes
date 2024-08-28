import "./StickyCard.scss";

function StickyCard({msg}) {
    const {signed, color, message} = msg;
    return (
        <article className={`stickycard ${color}`}>
            <p className="stickycard__msg">
                {message}
            </p>
            <br></br>
            <div className="stickycard__author">
                <p>signed,</p>
                <p>{signed}</p>
            </div> 
        </article>
    );
}

export default StickyCard;