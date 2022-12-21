import axios from "axios";
import { getItem } from "../component/helpers/Helpers";

axios.defaults.baseURL = 'http://localhost:3000/api'

axios.interceptors.request.use(config => {
    const token = getItem('Token')
    const autorization = token ? `Token ${token}` : ""
    config.headers.Authorization = autorization
    return config
})

export default axios