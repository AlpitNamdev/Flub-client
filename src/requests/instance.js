
import axios from 'axios'

axios.defaults.withCredentials = true

const instance = axios.create({
  
    baseURL: "https://flub-server.herokuapp.com/",
})

export default instance

