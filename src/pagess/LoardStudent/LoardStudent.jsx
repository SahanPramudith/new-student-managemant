import Login from "../Login/Login.jsx";
import {useEffect, useState} from "react";
import instence from "../../servises/axiosoder.jsx";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


export default function LoardStudent() {

    const [data, setData] = useState([])

    useEffect(() => {
        instence.get('/student/getAll')
            .then(function (response) {
                // handle success
                console.log(response);
                setData(response.data)
                console.log(data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);

    return (
        <div>
            <h1>Loard student</h1>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{border:2, backgroundColor:'#878282'}}>
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
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{backgroundColor:'#bebaba'}}>
                        {data.map((val, index) => (
                            <TableRow
                                key={index}
                            >
                                <TableCell  align="left">{val.student_name}</TableCell>
                                <TableCell align="left">{val.student_age}</TableCell>
                                <TableCell align="left">{val.student_address}</TableCell>
                                <TableCell align="left">{val.student_contact}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}