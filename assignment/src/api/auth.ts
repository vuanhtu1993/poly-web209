import { IUser } from "../models";
import instance from "./instance";

export const signupApi = async (body: IUser) => {
  const res = await instance.post('signup', body)
  return res.data
}
