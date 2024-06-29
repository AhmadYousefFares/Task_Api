import { Link } from 'react-router-dom'
import '../../../styles/register.css'
import { useState, useRef, useSyncExternalStore } from 'react';
import axios from 'axios';
import { REGISTER, VIERIFYEMAIL, baseURL } from '../../../api/Api';
// import { REGISTER, baseURL } from '../../../api/Api';

export default function Register() {
    const [translate,setTranslate] = useState(false);
    const [error, setError] = useState({
        email: "The email field is required",
        name: "name field is required",
        phone_number: "The phone number field is required",
        password: "password field is required",
        password_confirmation: "passwordConfirmation field is required",
        certificate: "certificate password_confirmation",
        profile_photo: "profilePhoto certificate",
    });
    const [flag, setFlag] = useState(false);
    const [form, setForm] = useState({
        email: "",
        name: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
        certificate: "",
        profile_photo: "",
    });  
    const img = useRef(null);
    const fileUpload = useRef(null);
    function handelImageSelect() {
        img.current.click();
    }
    function handelForm(e) {
        setForm({...form,[e.target.name]:e.target.value});
        window.localStorage.setItem('email',form.email);
    }
    function handelFileSelect() {
        fileUpload.current.click();
    }
    function handelFileChange(e) {
        setForm({...form,[e.target.name]:e.target.files[0]});
    }
    setTimeout(() => {
        !translate ? 
        document.querySelector('.register').classList.add('register-anmation2')
        :document.querySelector('.register').classList.remove('register-anmation2');
   },500)
   async function handelSubmit(e) {
        e.preventDefault();    
        try {
            const res = await axios.post(`${baseURL}/${REGISTER}`
            , form
            , {
                headers: {
                    'Content-Type': "multipart/form-data",
                    'Accept': 'application/json',
                }
              }
        );
        if(res.status == 201) {
             window.location.pathname = `/verfiy`
        }
          } catch (error) {
            setFlag(true);
          }
        };
       return (
        <div className='register'>
           <form onSubmit={handelSubmit} >
           <div className='register-content'>
                <h1>إنشاء حساب</h1>
                <div className='register-info'>
                    <div className='register-inputs'>
                        <div className='inputs'>
                            <label htmlFor='email'>الايميل</label>
                            <input type='email' id='email' name="email"  value={form.email} onChange={handelForm}/>
                            <p >{form.email == "" && flag && error.email}</p>
                        </div>
                        <div className='inputs'>
                            <label htmlFor='user'>المستخدم</label>
                            <input type='text' id='user' name='name' value={form.name} onChange={handelForm}/>
                            <p >{form.name == "" && flag  && error.name}</p>
                        </div>
                        <div className='inputs'>
                            <label htmlFor='number'>رقم الهاتف</label>
                            <input type='number' id='number' name='phone_number' value={form.phone_number} onChange={handelForm}/>
                            <p >{form.phone_number == "" &&  flag && error.phone_number }</p>     
                        </div>
                        <div className='inputs'>
                            <label htmlFor='password'>كلمة المرور</label>
                            <input type='password' id='password' name="password" value={form.password} onChange={handelForm}/>
                            <p >{form.password == "" && flag  && error.password}</p>
                        </div>
                        <div className='inputs'>
                            <label htmlFor='password1'>تأكيد كلمة المرور </label>
                            <input type='password' id='password1' name='password_confirmation' value={form.password_confirmation} onChange={handelForm}/>
                            <p >{form.password_confirmation == "" && flag && error.password_confirmation }</p>
                        </div>
                    </div>
                    <div className='register-images'>
                        {form.profile_photo
                        ? <img src={URL.createObjectURL(form.profile_photo)} alt="" width="50px" />
                        : <div className='select-file'>
                        <img src={require('../../../assets/images/Rectangle 95.png')} alt='select'/>
                        <span>الصورة الشخصية</span>
                        <div onClick={handelImageSelect}>
                            <img src={require('../../../assets/images/upload.png')} alt='image'/>                                
                            <input type="file" ref={img} style={{display: "none"}} name='profile_photo' onChange={handelFileChange}/>
                            <p style={{fontSize: ".7rem",width: "12rem", textAlign:"right"}}> اسحب وافلت الصورة من هناأو قم برفعها من الملفات</p>
                        </div> 
                    </div>
                        }
                       
                           <div className='select-file'>
                            <img src={require('../../../assets/images/Rectangle 95.png')} alt='select'/>
                            <span>إثبات شخصية</span>
                            <div onClick={handelFileSelect}>
                                <img src={require('../../../assets/images/upload.png')} alt='image'/>
                                <p style={{fontSize: ".7rem",width: "12rem", textAlign:"right"}}> اسحب وافلت الصورة من هناأو قم برفعها من الملفات</p>
                                <input type='file' ref={fileUpload} style={{display: "none"}} name='certificate' onChange={handelFileChange} />    
                            </div> 
                        </div> 
                        <button 
                        >إنشاء حساب</button>
                        <p className='log'>لديك حساب ؟ <Link onClick={
                            () => {
                                setTranslate(true)
                                document.querySelector('.register').classList.add('register-anmation')
                                setTimeout(()=>window.location.pathname = './login',1000);
                            } 
                            }>تسجيل دخول</Link></p>
                    </div>
                </div>
               <div className="other">
                <span className='or'>أو</span>
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
               </div>
            </div>
           </form>
        </div>
    )
}