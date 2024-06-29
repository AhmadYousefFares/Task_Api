import { Link } from 'react-router-dom'
import '../../../styles/login.css'
import { useState } from 'react'
import axios from 'axios';
import Cookie from 'cookie-universal';
import { LOGIN, baseURL } from '../../../api/Api';
import Loading from '../../../component/Loading';

export default function Login() {
    const [form, setForm] = useState({
        email : "",
        password: "",
        phone_number: "",
    }) 
    let cookieAccessToken = Cookie();
    let cookieRefreshToken= Cookie();
    const [btnAuth, setBtnAut] = useState("تسجيل الدخول");
    const [err, setErr] = useState("");
    const [load, setLoad] = useState(false);
    function handelChange(e) {
        setForm({...form,[e.target.name]:e.target.value})
    }
   setTimeout(() => {
        document.querySelector('.login').classList.add('login-anmation');
   },500)

   async function handelSubmit(e) {
       e.preventDefault();
       setLoad(true)
       try {
           let res = await axios.post(`${baseURL}/${LOGIN}`,form,{
            headers: {
                'Content-Type': "multipart/form-data",
                'Accept': 'application/json',
            }
           });
           console.log(res)
           setLoad(false)
           if(res.status == 200) {
               window.localStorage.setItem('btnAuth',"تسجيل الخروج");
               document.querySelector('.login').classList.add('login-anmation2');
               setTimeout(()=> {
                   window.location.pathname = '/';
                },200) 
                let accessToken = res.data.data.access_token;
                let refreshToken = res.data.data.refresh_token;
                cookieAccessToken.set("cookieAccessToken", accessToken)
                cookieRefreshToken.set("cookieRefreshToken", refreshToken)
                setErr("Success");  
           } 
    } catch (err) {
        setLoad(false)
        setErr(err.response.data.message)
        console.log(err.response.data.message)
    }
}
    return (
    <div className='opacity'>
      ``
          <div className="login">
            <div style={{height:"600px"}} className='pop-login'>
                <form >
                <h1>تسجيل الدخول</h1>
                <div className='input-form'>
                    <label htmlFor='email'>الايميل  </label>
                    <input type='email' id='' name='email' value={form.email} onChange={handelChange}/>
                </div>
                <div className='input-form'>
                    <label htmlFor='pass' className='pass'>كلمة المرور</label>
                    <input type='password' id='pass' name='password' form={form.password} onChange={handelChange}/>
                </div>
                <div className='input-form'>
                    <label htmlFor='pass' className='pass'>رقم الهاتف</label>
                    <input type='number' id='number' name='phone_number' form={form.phone_number} onChange={handelChange}/>
                </div>
                <Link to=""> <button onClick={handelSubmit} >تسجيل الدخول</button> </Link>
            
            <div className='section-acount'>
                <Link to="" href='#'>نسيت كلمة المرور</Link>
                <div >
                    <span  >ليس لديك حساب ؟</span>
                    <Link onClick={
                        ()=>{
                            document.querySelector('.login').classList.add('login-anmation2');
                           setTimeout(()=>  window.location.pathname = '/register',200);
                        }
                        } className='pass'>إنشاء حساب</Link>
                </div>
            </div>
            <div className='social-login'>
               <div>
                    <img src={require('../../../assets/images/logo googleg 48dp.png')} alt="logo"/>
                    <span>Google</span>
               </div>
               <div>
                    <img src={require('../../../assets/images/Apple Logo.png')} alt="logo"/>
                    <span>Apple</span>
               </div>
               <div>
                    <img src={require('../../../assets/images/Facebook Logo.png')} alt="logo"/>
                    <span>Facebook</span>
               </div>
            </div>
            {err && <p className={err == "Success" ? "sucess" :'error'}>{err}</p>}
                </form>
            </div>
           </div>
           {load ? <Loading />:""}
    </div>)
}