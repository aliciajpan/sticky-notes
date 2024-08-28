import "./NameButton.scss";

function NameButton({name, colour}) {
    return (
        <button className={`namebutton ${colour}`}>
            <p className="namebutton__text">{name}</p>
        </button>
    );
}

export default NameButton;