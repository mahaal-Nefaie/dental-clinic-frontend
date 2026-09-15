import "./AlertMessage.css";

function AlertMessage({ message, type }) {
    if (!message) return null;

    const isError = type === "error";

    return (
        <div className="message-container">
            <p className={isError ? "errorMsg" : "success"} style={{ color: isError ? "red" : "green" }}>
                {message}
            </p>
        </div>
    );
}

export default AlertMessage;