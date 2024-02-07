import Drawer from "../Drawer/Drawer.jsx";
import MiniDrawer from "../Drawer/Drawer.jsx";
import Login from "../pagess/Login/Login.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Register from "../pagess/Register/Register.jsx";

export default function App() {
    return(
        <div>
            <Routes>
                <Route path={'*'} element={ <Navigate to={'login'}/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
            </Routes>
            {/*<Login/>*/}
            {/*<MiniDrawer/>*/}
        </div>
    )
}