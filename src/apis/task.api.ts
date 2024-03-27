import axios from "axios"

export default {
    getAll: async () => {
        return await axios.get("http://localhost:8080/apis/v1/tasks")
    },
    create: async (data: any) => {
        return await axios.post("http://localhost:8080/apis/v1/tasks", data)
    },
    delete: async (id: number) => {
        return await axios.delete(`http://localhost:8080/apis/v1/tasks/${id}`)
    }
}