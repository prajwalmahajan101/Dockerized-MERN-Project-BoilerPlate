import React, {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader'
// import router from "../utils/router";
import Error from "./Error";
import Navigation from "./Navigation/Navigation";

const Home = lazy(()=> import('../pages/Home'))
const Contact = lazy(()=> import('../pages/Contact'))


function App() {
  return (
    <Suspense fallback={<HashLoader
      color="#ff0000"
      cssOverride={{}}
      loading
      size={300}
      speedMultiplier={0.5}
    />}>
      <Routes>
        <Route path={"/"} element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path={"/contact"} element={<Contact/>} />
        </Route>
        <Route path={"*"} element={<Error />}/>
      </Routes>
    </Suspense>
  );
}

export default App;
