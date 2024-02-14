import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import instence from "../../servises/axiosoder.jsx";
import {Button, Card, TextField} from "@mui/material";

export default function updateStudent() {

    const {id}=useParams();
    const [data, setData] = useState([])
    const navidate=useNavigate()

    data.age = undefined;
    useEffect((id) => {
        instence.get('/student/getAll/')
            .then(function (response) {
                // handle success
                console.log(response);
                setData(response.data);


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);
    
    
    function handlesubmit(event) {
        event.preventDefault()
        instence.put('student/update/'+id,data)
                     .then(response => {
                         console.log(response);

                     })
                     .catch(error => {
                         console.log(err);
                     });

    }

    return(
        <div>
            <h1>update</h1>
            <form onSubmit={handlesubmit}>
                <Card sx={{maxWidth: 345, padding: 2}}>
                    <TextField sx={{marginY: 2}}
                        onChange={(val) => setData({...data, name: val.target.value})}
                               value={data.name}
                               id="filled-basic"
                               fullWidth label="Name"
                               variant="filled"
                    />
                    <TextField sx={{marginY: 2}}
                        onChange={(val) => setData({...data,age:val.target.value})}
                               value={data.age}
                               id="filled-basic"
                               fullWidth label="Age"
                               variant="filled"
                    />
                    <TextField sx={{marginY: 2}}
                               onChange={(val) => setData({...data,address:val.target.value})}
                               value={data.address}
                               id="filled-basic"
                               fullWidth label="Address"
                               variant="filled"
                    />
                    <TextField sx={{marginY: 2}}
                               onChange={(val) => setData({...data,contactnumber:val.target.value})}
                               value={data.contactnumber}
                               id="filled-basic"
                               fullWidth label="Contact Nunmber"
                               variant="filled"
                    />
                    <Button  variant="contained">Save</Button>
                </Card>
            </form>


        </div>
    )
}