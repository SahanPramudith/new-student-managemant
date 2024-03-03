
import LoardStudent from "../pagess/LoardStudent/LoardStudent.jsx";
import Addstudent from "../pagess/addstudent/addstudent.jsx";
import UpdateStudent from "../pagess/UpdateStudent/UpdateStudent.jsx";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import UpdateIcon from '@mui/icons-material/Update';


const routs = [

    {
        name: 'Dashboard',
        path: '/loardstudent',
        component: <LoardStudent/>,
        key: 'student',
        icon:<DashboardCustomizeOutlinedIcon/>
    },
    {
        name: 'Addstudent',
        path: '/addstudent',
        component: <Addstudent/>,
        key: 'student',
        icon:<AddToPhotosIcon/>
    },
    {
        name: 'update Student',
        path: '/updatestudent/:id',
        component: <UpdateStudent/>,
        key: 'student',
        icon:<UpdateIcon/>

    },


]
export default routs;