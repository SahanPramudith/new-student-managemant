import Login from "../Login/Login.jsx";
import { useEffect, useState } from "react";
import instence from "../../servises/axiosoder.jsx";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import UpdateIcon from '@mui/icons-material/Update';
import LoadingIcons from 'react-loading-icons'
import { Bars } from 'react-loading-icons'
import { Navigate, NavLink } from "react-router-dom";
import { CirclesWithBar } from 'react-loader-spinner'
import { Delete } from "@mui/icons-material";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';



export default function LoardStudent() {

    const [data, setData] = useState([])
    const [loder, setLoder] = useState(true)


    useEffect(() => {
        instence.get('/student/getAll')
            .then(function (response) {
                // handle success
                console.log(response);
                setData(response.data)
                console.log(data)
                setLoder(false)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);


    function deletestu(id) {
        const confirm = window.confirm("would you like delete student ? ")
        if (confirm) {
            instence.delete('student/delete/'+id)
            .then(function (response) {
                // handle success
                console.log(response);
                window.location.reload()

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        }
        
    }




    return (
        <div>
            <h1>Loard student</h1>
            {
                loder ?
                    <div sx={{marginleft:100}}>
                        <h1>Loding....!</h1>
                        <CircularProgress color="inherit" style={{justifyContent:'center'}}
                        
                        />


                    </div>
                    :
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ border: 2, backgroundColor: '#878282' }}>
                                    {/*<TableCell>Dessert (100g serving)</TableCell>*/}
                                    <TableCell
                                        sx={{
                                            fontSize: 25,
                                            fontWeight: 'bold',

                                        }}
                                        align="left"
                                    >
                                        Name
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontSize: 25,
                                            fontWeight: 'bold',

                                        }}
                                        align="left"
                                    >age
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontSize: 25,
                                            fontWeight: 'bold',

                                        }}
                                        align="left"
                                    >
                                        address
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontSize: 25,
                                            fontWeight: 'bold',

                                        }}
                                        align="left"
                                    >
                                        tpno
                                    </TableCell>

                                    <TableCell
                                        sx={{
                                            fontSize: 25,
                                            fontWeight: 'bold',

                                        }}
                                        align="left"
                                    >

                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody sx={{ backgroundColor: '#bebaba' }}>
                                {data.map((val, index) => (
                                    <TableRow
                                        key={val.id}
                                    >
                                        <TableCell align="left">{val.student_name}</TableCell>
                                        <TableCell align="left">{val.student_age}</TableCell>
                                        <TableCell align="left">{val.student_address}</TableCell>
                                        <TableCell align="left">{val.student_contact}</TableCell>
                                        <TableCell align="left">
                                            <Tooltip title="Delete">
                                                <IconButton aria-label="delete" size="small"
                                                
                                                onClick={()=>deletestu(val.id)}
                                                >
                                                    {/* {onclick((val)=>alert(val.id))}
                                                    onclick={(val) => setName(val.target.value)} */}
                                                    <DeleteIcon fontSize="inherit" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Update">
                                                <NavLink to={`/updatestudent/${val.id}`}>
                                                    <IconButton aria-label="update" size="small">
                                                        <UpdateIcon fontSize="inherit" />
                                                    </IconButton>
                                                </NavLink>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
        </div>
    )
}