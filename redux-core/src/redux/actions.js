// Index
export const GETPRODUCTS = async (dispatch) => {
    const data = await (await fetch('https://62de615accdf9f7ec2d66ae3.mockapi.io/api/products')).json()
    dispatch({
        type: "product/get",
        payload: data
    })
}