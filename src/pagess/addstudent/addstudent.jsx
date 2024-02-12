import {Button, Card, TextField} from "@mui/material";
import {useState} from "react";
import instence from "../../servises/axiosoder.jsx";

export default function Addstudent() {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')

    function savestudent() {
        // {
        instence.post('/student/save', {
            student_name: name,
            student_age: age,
            student_address: address,
            student_contact: school,

        })
            .then(function (response) {
                console.log(response);
                alert("Added Success..!")
                clear()
            })
            .catch(function (error) {
                console.log(error);
                alert("Added Fail..!")
            });
    }

    const clear = () => {
        setContact('')
        setName('')
        setAddress('')
        setAge('')
    }

    return (
        <div>
            <h1>Add student</h1>
            <hr/>
            <Card sx={{maxWidth: 345, padding: 2}}>
                <TextField sx={{marginY: 2}}
                           onChange={(val) => setName(val.target.value)}
                           value={name}
                           id="filled-basic"
                           fullWidth label="Name"
                           variant="filled"
                />
                <TextField sx={{marginY: 2}}
                           onChange={(val) => setAge(val.target.value)}
                           value={age}
                           id="filled-basic"
                           fullWidth label="Age"
                           variant="filled"
                />
                <TextField sx={{marginY: 2}}
                           onChange={(val) => setAddress(val.target.value)}
                           value={address}
                           id="filled-basic"
                           fullWidth label="Address"
                           variant="filled"
                />
                <TextField sx={{marginY: 2}}
                           onChange={(val) => setContact(val.target.value)}
                           value={contact}
                           id="filled-basic"
                           fullWidth label="Contact Nunmber"
                           variant="filled"
                />
                <Button onClick={() => savestudent()} variant="contained">Save</Button>
            </Card>
        </div>
    )
}