
import LoardStudent from "../pagess/LoardStudent/LoardStudent.jsx";
import Addstudent from "../pagess/addstudent/addstudent.jsx";
import UpdateStudent from "../pagess/UpdateStudent/UpdateStudent.jsx";

const routs = [

    {
        name: 'Loard student',
        path: '/loardstudent',
        component: <LoardStudent/>,
        key: 'student'
    },
    {
        name: 'Addstudent',
        path: '/addstudent',
        component: <Addstudent/>,
        key: 'student'
    },
    {
        name: 'update Student',
        path: '/updatestudent/:id',
        component: <UpdateStudent/>,
        key: 'student'
    },


]
export default routs;