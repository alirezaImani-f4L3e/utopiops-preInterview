import Axios from 'axios'

const AxiosConfigs =()=>{
    return Axios.create({
        baseURL:"https://jsonplaceholder.typicode.com/"
    });
}

export default AxiosConfigs;
