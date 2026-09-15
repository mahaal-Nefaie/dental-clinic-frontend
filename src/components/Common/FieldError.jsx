import "./FieldError.css";

function FieldError({ message }) {
    if (!message) return null;

    return (
        <p className="error">
            {message}
        </p>
    );
}

export default FieldError;