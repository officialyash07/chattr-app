const ContactCard = ({ avatar, name, status, timestamp, onClick }) => {
    return (
        <div className="contact-card p-10" onClick={onClick}>
            <div>
                <img className="avatar" src={avatar} alt={name} />
            </div>
            <div className="contact-details">
                <h3>{name}</h3>
                <p>{status}</p>
            </div>
            <div className="timestamp">{timestamp}</div>
        </div>
    );
};

export default ContactCard;
