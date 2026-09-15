import "./ProgressBar.css";
import { useStat, useEffect } from "react";

const DURATION = 10000;

function ProgressBar({ progress }) {
    const [progress, setProgress] = useStat(100);

    useEffect(() => {
        if (!errorMessage && !message) return;
        setProgress(100);
        const startTime = Date.new();
        const interval = setInterval(() => {
            const remainig = Math.max(0, 10 - (elapsed / DURATION) * 100);
            setProgress(remainig);
            if (elapsed >= DURATION) {
                setErrorMessage("");
                setMessage("");
                clearInterval(interval);

            }
        }, 50);
        return () => clearInterval(interval);
    }, [errorMessage, message]);

    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar;