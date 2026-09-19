import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Common/Input";
import { FaEye, FaEyeSlash, FaTooth } from "react-icons/fa";
import Button from "../components/Common/Button";
import { login } from "../services/api";
import { setToken } from "../utils/auth";
import "./Login.css";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");

        try {
            const data = await login(
                formData.email,
                formData.password
            );

            setToken(data.token);

            navigate("/doctor/dashboard");
        } catch (error) {
            console.error("Login error:", error);

            setError(
                error.message || "Unable to connect to server"
            );
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">

                <div className="logo">
                    <div className="logo-icon">
                        <FaTooth />
                    </div>
                    <span>SmileCare</span>
                </div>

                <div className="login-header">
                    <h2>Welcome back</h2>

                    <p>
                        Sign in to access your SmileCare account.
                    </p>
                </div>

                <form onSubmit={handleLogin}>

                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        formData={formData}
                        setFormData={setFormData}
                    />

                    <div className="password-wrapper">

                        <Input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            formData={formData}
                            setFormData={setFormData}
                        />

                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                        >
                            {showPassword ? (
                                <FaEyeSlash />
                            ) : (
                                <FaEye />
                            )}
                        </button>

                    </div>

                    {error && (
                        <p className="login-error">
                            {error}
                        </p>
                    )}

                    <Button type="submit">
                        Login
                    </Button>

                </form>

                <div className="login-footer">
                    <span>SmileCare Dental Clinic</span>
                </div>

            </div>
        </div>
    );
}

export default Login;