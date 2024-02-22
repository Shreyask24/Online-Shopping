import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Login = () => {

    const navigate = useNavigate();

    const [Id, setId] = useState("");
    const [pass, setPass] = useState("");

    useEffect(() => {
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    username: 'kminchelle',
                    password: '0lelplR',
                })
            })
                .then(res => res.json())
                .then(console.log);

            if (Id == "kminchelle" && pass == "0lelplR") {
                localStorage.setItem(Id, pass)
                alert("Logged In Successfully!");
                navigate("/")
            }
            else {
                alert("Logged In Failed!");
            }

        } catch (error) {
            console.log("Error", error);
        }

    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={Id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;