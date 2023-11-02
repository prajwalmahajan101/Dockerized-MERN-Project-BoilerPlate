import {authAxios} from "./axios";
import {API_PATH} from "./constants";

export const getUsers = ()=>{
  const users = authAxios.get(API_PATH.getUser());
  return users;
}