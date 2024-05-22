import { Link } from 'react-router-dom'
import '../../../styles/register.css'

export default function Register() {
    return (
        <div className='register'>
            <div className='register-content'>
                <h1>إنشاء حساب</h1>
                <div className='register-info'>
                    <div className='register-inputs'>
                        <div className='inputs'>
                            <label htmlFor='email'>الايميل</label>
                            <input type='' id='email'/>
                        </div>
                        <div className='inputs'>
                            <label htmlFor='user'>المستخدم</label>
                            <input type='' id='user'/>
                        </div>
                        <div className='inputs'>
                            <label htmlFor='number'>رقم الهاتف</label>
                            <input type='' id='number'/>
                        </div>
                        <div className='inputs'>
                            <label htmlFor='password'>كلمة المرور</label>
                            <input type='' id='password'/>
                        </div>
                        <div className='inputs'>
                            <label htmlFor='password'>كلمة المرور</label>
                            <input type='' id='password'/>
                        </div>
                    </div>
                    <div className='register-images'>
                        <div className='select-file'>
                            <img src={require('../../../assets/images/Rectangle 95.png')} alt='select'/>
                            <span>الصورة الشخصية</span>
                            <div>
                                <img src={require('../../../assets/images/upload.png')} alt='image'/>
                                <p> اسحب وافلت الصورة من هناأو قم برفعها من الملفات</p>
                            </div>
                        </div>
                        <div className='select-file'>
                            <img src={require('../../../assets/images/Rectangle 95.png')} alt='select'/>
                            <span>إثبات شخصية</span>
                            <div>
                                <img src={require('../../../assets/images/upload.png')} alt='image'/>
                                <p> اسحب وافلت الصورة من هناأو قم برفعها من الملفات</p>
                            </div>
                        </div>
                        <button onClick={
                            ()=>window.location.pathname = '/verfiy'
                        }>إنشاء حساب</button>
                        <p className='log'>لديك حساب ؟ <Link onClick={
                            () => window.location.pathname = './login'
                            }>تسجيل دخول</Link></p>
                    </div>
                </div>
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
    )
}