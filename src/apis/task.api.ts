import axios from "axios"

export default {
    getAll: async()=>{
        return await axios.get("http://localhost:8080/apis/v1/tasks")
    }
}