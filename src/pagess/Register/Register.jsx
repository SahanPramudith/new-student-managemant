import {NavLink} from "react-router-dom";
import Card from '@mui/material/Card';
import {Avatar, Button, Grid, Paper, TextField} from "@mui/material";
import React, {useState} from "react";
import axios from "axios";
import instence from "../../servises/axiosoder.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import loginimg from "../../assets/loginimg.png";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined.js";
import Typography from "@mui/material/Typography";

export default function Register() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    const register = () => {
        instence.post('/register', {
            name: name,
            password: password,
            email: email

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        clear()
    }


    const clear = () => {
        setEmail('')
        setName('')
        setPassword('')
    }

    return (
        <div>
            <div>

                <Grid container component='main' sx={{height: '100vh'}}>
                    <CssBaseline/>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            background: `url(${loginimg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                        <Grid item xs={12} sm={8} md={5} component={Paper}>
                            <Box
                                sx={{
                                    my:8,
                                    mx:4,
                                    display:"flex",
                                    flexDirection:"column",
                                    alignItems:'center'
                                }}
                            >
                                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                    <LockOutlinedIcon/>
                                </Avatar>
                                <Typography component={"h1"} variant={"h5"}>
                                    Sign up
                                </Typography>
                                <Box sx={{maxWidth: 345, padding: 2, justifyContent: 'center', textAlign: 'center'}}>
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

                                    <Button
                                        onClick={() => register()}
                                        variant="contained"
                                        sx={{mt: 3, mb: 2}}
                                    >Rregiste
                                        r</Button>
                                    <Grid>
                                        <NavLink to={'/login'}>
                                            {"Don't have an account? Sign in"}
                                        </NavLink>
                                    </Grid>

                                </Box>
                            </Box>
                        </Grid>
                </Grid>
            </div>


        </div>
    )
}