import Drawer from "../Drawer/Drawer.jsx";
import MiniDrawer from "../Drawer/Drawer.jsx";
import Login from "../pagess/Login/Login.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Register from "../pagess/Register/Register.jsx";
import {useEffect, useState} from "react";

export default function App() {

    const [dashbord, setDashbord] = useState(false);

    useEffect(() => {
        const key = localStorage.getItem('login')
        console.log(key)

        if (key!==null){
            setDashbord(true)
        }else {
            setDashbord(false)
        }

    }, []);

    return(
        <div>
            {dashbord ?
                <MiniDrawer/>
                :
                <Routes>
                    <Route path={'*'} element={ <Navigate to={'login'}/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                </Routes>
            }




            {/*<Login/>*/}

        </div>
    )
}