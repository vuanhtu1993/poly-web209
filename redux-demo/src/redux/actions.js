// Action creator
export const GETPRODUCT = async (dispatch) => {
    const data = await(await fetch('https://62de615accdf9f7ec2d66ae3.mockapi.io/api/products')).json()
    // CALLBACK
    dispatch({
        type: 'product/get',
        payload: data
    })
}