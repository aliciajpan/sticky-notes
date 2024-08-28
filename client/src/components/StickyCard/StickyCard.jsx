import "./StickyCard.scss";

function StickyCard({colour}) { // props: {sticky, colour}
    return (
        <article className={`stickycard ${colour}`}>
            <p className="stickycard__msg">
                message message message message message message message message message message message message
            </p>
            <br></br>
            <div className="stickycard__author">
                <p>signed,</p>
                <p>NAME</p>
            </div> 
        </article>
    );
}

export default StickyCard;