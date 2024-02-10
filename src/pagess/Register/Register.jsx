import {NavLink} from "react-router-dom";
import Card from '@mui/material/Card';
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import instence from "../../servises/axiosoder.jsx";

export default function Register() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    
    const register = () => {
        instence.post('/register', {
            name: name,
            password:password,
            email:email

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    return(
        <div>
            <h1>Register</h1>
            <hr/>
            <div>
                <Card sx={{maxWidth: 345, padding: 2, justifyContent: 'center', textAlign: 'center'}}>
                    <TextField sx={{marginY: 2}}
                               onChange={(val) => setName(val.target.value)}
                               value={name}
                               id="filled-basic"
                               fullWidth label="Name"
                               variant="filled"
                    /><TextField sx={{marginY: 2}}
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
                    <Button onClick={() => register()} variant="contained">Rregister</Button>
                    <NavLink to={'/login'}>
                        <h6>
                            Login
                        </h6>
                    </NavLink>
                </Card>
            </div>




        </div>
    )
}