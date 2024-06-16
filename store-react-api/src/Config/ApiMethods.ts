import axios from 'axios'

let apiHandle = axios.create({
    baseURL:'https://fakestoreapi.com'
})

export const getApi = (endpoint:string)=>{
    return apiHandle.get(endpoint)
}