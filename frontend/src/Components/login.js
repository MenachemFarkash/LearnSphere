import { useContext, useState } from "react";
import { CoursesContext } from "../Helpers/Context";

const Login = () => {
    const { loginSubmit, setCurrentPage, checkIfLoggedIn } = useContext(CoursesContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    console.log(username, password);
    return (
        <>
            <div className="formContainer">
                <form className="form card" onSubmit={(ev) => loginSubmit(ev, password, username)}>
                    <div className="card_header">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <h1 className="form_heading">Login</h1>
                    </div>
                    <div className="field">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            placeholder="Username"
                            type="text"
                            name="username"
                            className="input"
                            onChange={(ev) => setUsername(ev.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            placeholder="Password"
                            type="password"
                            name="user_password"
                            className="input"
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </div>
                    <div className="field">
                        <button className="button">Login</button>
                    </div>
                    <div className="field">
                        <button onClick={() => setCurrentPage("register")} className="button">
                            Dont Have An Account Yet?
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
