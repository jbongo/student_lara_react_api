import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const registerService = (event) => {

    function saveUser(event) {

        console.log("xxxxxxxxxxxxx");
        event.preventDefault();
        axios.post(`${API_BASE_URL}/api/register`).then((res) => {

            if (res.data.validate_err) {
                console.log(res.data.validate_err);
            }
            if (res.data.status == 200) {
                console.log(res.data.message);
            }
        })

    }

}


export default registerService;