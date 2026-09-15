//import "./Cards.css";

function Cards({ 
    title,
    pragraph,
    icon,
 }) {
    return (
        <div className="card">
            <div className="card-icon">
                {icon}
            </div>

            <h2>{title}</h2>
            <p>{pragraph}</p>
        </div>
    );
}

export default Cards;