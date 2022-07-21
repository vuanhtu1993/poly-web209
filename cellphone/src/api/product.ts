import { AxiosError } from "axios";
import instance from "./instance";

export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}

export const updateProduct = (id:number, data:any) => {
    const url = "/products/" + id
    return instance.put(url, data)
}