import axios from "axios";

export const axiosInstance = axios.create({
    url: import.meta.env.BASE_URL
})

axiosInstance.interceptors.request.use((config) => {

}, (error) => {

})

axiosInstance.interceptors.response.use((response) => {

}, (error) => {

})