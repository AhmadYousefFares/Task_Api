import { Link } from 'react-router-dom'
import '../../styles/logout.css'
import axios from 'axios';
import { useEffect } from 'react';
import { REFRESHTOKEN, baseURL } from '../../api/Api';
import Cookie from "cookie-universal"

export default function Logout () {
   let cookieAccessToken = Cookie();
    async function handelLogout() {
        try {
            let res = await axios.post("https://task5-heba-kaddour.trainees-mad-s.com/api/auth/logout",{} ,{ 
                headers : {
                    Authorization: `Bearer ${cookieAccessToken.get("cookieAccessToken")}`,
                    'Content-Type': "multipart/form-data",
                    'Accept': 'application/json',
                },
            } 
            )
            window.localStorage.setItem('btnAuth', "تسجيل الدخول")
            window.location.pathname = '/'
            cookieAccessToken.remove("cookieAccessToken")
            cookieAccessToken.remove("cookieRefreshToken")
        } catch (err) {
            console.log(err)
        }
    }
  
    return (
        <div className="logout">
            <div className="logout-pop">
                <div className='pop-info'>
                    <p>هل أنت متأكد من تسجيل الخروج ؟</p>
                    <Link ><button className='ok'
                    onClick={handelLogout}
                    >تأكيد</button></Link>
                    <Link ><button className='cancel'
                    onClick={
                        ()=> {
                            window.location.pathname = '/'
                        }
                    }
                    >تراجع</button></Link>
                </div>
            </div>
        </div>

    )
} 



