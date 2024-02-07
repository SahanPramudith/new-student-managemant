import {NavLink} from "react-router-dom";

export default function Register() {
    return(
        <div>
            <h1>Register</h1>
            <NavLink to={'/login'}>
                <h6>
                    Login
                </h6>
            </NavLink>

        </div>
    )
}