import {Button, Card, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useState} from "react";

export default function Login() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    function login() {
        console.log(password, email);
        clear();
    }

    const clear = () => {
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <h1>Login</h1>
            <hr/>
            <div>
                <Card sx={{maxWidth: 345, padding: 2, justifyContent: 'center', textAlign: 'center'}}>
                    <TextField sx={{marginY: 2}}
                               onChange={(val) => setPassword(val.target.value)}
                               value={password}
                               id="filled-basic"
                               fullWidth label="Password"
                               variant="filled"
                    />
                    <TextField sx={{marginY: 2}}
                               onChange={(val) => setEmail(val.target.value)}
                               value={email}
                               id="filled-basic"
                               fullWidth label="Email"
                               variant="filled"
                    />
                    <Button onClick={() => login()} variant="contained">Login</Button>
                    <NavLink to={'/register'}>
                        <h6>
                            Register
                        </h6>
                    </NavLink>

                </Card>
            </div>

        </div>
    )
}