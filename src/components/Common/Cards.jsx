import "./Cards.css";

function Cards({ 
    title,
    paragraph,
    icon,
 }) {
    return (
        <div className="card">
            <div className="card-icon">
                {icon}
            </div>

            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    );
}

export default Cards;