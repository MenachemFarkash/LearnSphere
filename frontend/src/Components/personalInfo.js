import { useContext, useState } from "react";
import { CoursesContext } from "../Helpers/Context";
import "../Styles/register.css";

const PersonalInfo = () => {
    const { setCurrentPage, changePasswordSubmit } = useContext(CoursesContext);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <div className="fakePersonalBody">
                <form class="form card" onSubmit={(ev) => changePasswordSubmit(ev, email, password)}>
                    <div class="card_header">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <h1 class="form_heading">Change Password</h1>
                    </div>
                    <div class="field">
                        <label for="username">Email</label>
                        <input
                            id="username"
                            placeholder="Username"
                            type="text"
                            name="username"
                            class="input"
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                    </div>
                    <div class="field">
                        <label for="password">Password</label>
                        <input
                            id="password"
                            placeholder="Password"
                            type="password"
                            name="user_password"
                            class="input"
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </div>
                    <div class="field">
                        <button class="button">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PersonalInfo;
