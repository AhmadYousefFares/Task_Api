import { Route, Routes } from 'react-router-dom';
import Init from './pages/website/Init';
import Login from './pages/website/auth/Login';
import './styles/index.css';
import './styles/login.css';
import Register from './pages/website/auth/Register';
import Verfiy from './pages/website/Verfiy';
import Logout from './pages/website/Logout';
import { useState } from 'react';
import Cookie from 'cookie-universal';
import axios from 'axios';

export default function App() {
  const [emailVale, setEmailValue] = useState("");
  let cookieAccessToken = Cookie();
  let refreshToken = async () => {
          let cookieAccessToken = Cookie();
          try {
              let res = await axios.post("https://task5-heba-kaddour.trainees-mad-s.com/api/auth/refresh-token",{} ,{ 
                  headers : {
                      Authorization: "Bearer " + cookieAccessToken.get("cookieRefreshToken"),
                  },
              } 
              )
              let refreshToken = res.data.data;
              cookieAccessToken.set("cookieRefreshToken", refreshToken);
              cookieAccessToken.set("cookieAccessToken", refreshToken);
              console.log(res.data.data)
          } catch (err) {
              console.log(err)
          }
      }

      setInterval(()=>{
        if(window.localStorage.getItem('btnAuth') == "تسجيل الخروج") {
        console.log("loggied");
        refreshToken();
      } 
    },1000*60*9)
  return (
       <Routes>
        <Route path='/verfiy' element={<Verfiy email={emailVale}/>}/>
        <Route path='/' element={<Init/>}/>
        <Route path='/' element={<Init/>}>
         <Route path='login' element={<Login/>}/>
         <Route path='logout' element={<Logout/>}/>
         <Route path='register' element={<Register onSend={setEmailValue}/>}/>
        </Route>
     </Routes>

  )
}