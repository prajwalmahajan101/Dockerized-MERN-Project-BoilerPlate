import axios_og, {AxiosResponse} from "axios";

import {getItemFromLocalStorage} from "./LocalStorage";
import {TOKEN_LOCAL_STORAGE_KEY} from "./constants";
import {errorToast, successToast} from "./toast";

const token = getItemFromLocalStorage(TOKEN_LOCAL_STORAGE_KEY)


export const authAxios = axios_og.create({
  baseURL:"/api",
  timeout:1000,
  headers:{
    'Authorization':`Bearer ${token}`
  }
})

export const axios = axios_og.create({
  baseURL:"/api",
  timeout:1000,
})


const responseHandler = (response:AxiosResponse<any,{msg:string,status:boolean,data:any}>)=>{
  successToast(response.data.msg)
  return response.data.data;
}

const errorHandler= (error:any)=>{
  errorToast(error.response?.data?.msg ?? "Error")
  return Promise.reject(error.response?.data?.msg ?? "Error");
}

authAxios.interceptors.response.use(responseHandler,errorHandler);
axios.interceptors.response.use(responseHandler,errorHandler);
