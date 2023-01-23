import { useContext, useState } from "react";
import { CoursesContext } from "../Helpers/Context";
import "../Styles/register.css";

const Login = () => {
    const { registerSubmit, setCurrentPage } = useContext(CoursesContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    return (
        <>
            <div className="formContainer">
                <form className="form card" onSubmit={(ev) => registerSubmit(ev, email, password, username)}>
                    <div className="card_header">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <h1 className="form_heading">Sign Up</h1>
                    </div>
                    <div className="field">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            className="input"
                            onChange={(ev) => setUsername(ev.target.value)}
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="input"
                            onChange={(ev) => setEmail(ev.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="user_password"
                            className="input"
                            placeholder="Password"
                            onChange={(ev) => setPassword(ev.target.value)}
                            required
                        />
                    </div>
                    <div className="registerButtons">
                        <button className="button">Submit</button>

                        <button onClick={() => setCurrentPage("login")} className="button">
                            Already Signed In?
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
