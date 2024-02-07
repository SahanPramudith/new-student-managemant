import axios from "axios";

const instence=axios.create({
    baseURL:'https://test.acpt.lk/api'
})

export default instence;