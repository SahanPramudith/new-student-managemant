import {Avatar, Button, Card, Grid, Paper, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import instence from "../../servises/axiosoder.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";

export default function Login() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    function login() {
        instence.post('/login', {
            password: password,
            email: email,
        })
            .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem('login',response.data.token)
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            });
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


                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{

                            background: `url(${login})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component='h1' variant='h5'>
                                sing in
                            </Typography>
                            <Box sx={{maxWidth: 345, padding: 2, justifyContent: 'center', textAlign: 'center', mt:1}}>
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
                                           fullWidth
                                           label="Email"
                                           variant="filled"
                                />
                                <Button onClick={() => login()} variant="contained">Login</Button>
                                <NavLink to={'/register'}>
                                    <h6>
                                        Register
                                    </h6>
                                </NavLink>
                            </Box>
                        </Box>
                    </Grid>


                </Grid>
            </div>

        </div>
    )
}