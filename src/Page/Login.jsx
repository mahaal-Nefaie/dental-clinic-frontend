import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Common/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../components/Common/Button";
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
            const response = await fetch(
                "http://localhost:8080/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);

                navigate("/doctor/dashboard");
            }
            else {
                setError(
                    data.message || "Invalid email or password"
                );
            }

        } catch (error) {
            console.error("Login error:", error);
            setError("Unable to connect to server");
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">

                <h2>Welcome back</h2>

                <p>
                    Enter your credentials to access your account.
                </p>

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

                        <span
                            className="password-toggle"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                        >
                            {showPassword ? (
                                <FaEyeSlash />
                            ) : (
                                <FaEye />
                            )}
                        </span>

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

            </div>
        </div>
    );
}

export default Login;