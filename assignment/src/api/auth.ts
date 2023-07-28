import { IUser } from '../models'
import { instance } from './instance'

export const signup = async (user: IUser) => {
    const res = await instance.post('/signup',)
    return res.data
}