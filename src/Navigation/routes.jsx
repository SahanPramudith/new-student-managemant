
import LoardStudent from "../pagess/LoardStudent/LoardStudent.jsx";
import Addstudent from "../pagess/addstudent/addstudent.jsx";

const routs = [

    {
        name: 'loard student',
        path: '/loardstudent',
        component: <LoardStudent/>,
        key: 'student'
    },
    {
        name: 'addstudent',
        path: '/addstudent',
        component: <Addstudent/>,
        key: 'student'
    },


]
export default routs;