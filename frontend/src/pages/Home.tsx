import React, {useCallback, useEffect} from 'react';
import { getUsers } from "../utils/api";

const HomePage = ()=>{
  const getData = useCallback(() => {
    return getUsers();
  }, []);

  useEffect(()=>{
    getData().then(res=>console.log(res)).catch(err=>console.log(err));
  },[])
  return(
    <div className={"text-3xl font-bold underline"}>Hello There! HomePage</div>
  )
}

export default HomePage;