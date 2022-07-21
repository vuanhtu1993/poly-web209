import { message } from "antd"
import useSWR from "swr"
import { getAll } from "../api/product"
const useProduct = () => {
    const {data, error, mutate} = useSWR('/products', getAll)
    if(error) {
        message.error(error.message)
    }
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}   

export default useProduct