import { Link, Outlet } from 'react-router-dom'
import '../../styles/init.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons/faBars'
import { faXmark} from '@fortawesome/free-solid-svg-icons/faXmark'
import { useRef, useState } from 'react';
import axios from 'axios'
import Cookie from "cookie-universal"

export default function Init() {
    let cookieAccessToken = Cookie();
    const [ulBlock, setUlBolck] = useState(true);
    const ul = useRef();
    const iconMenu = useRef();
    const iconClose = useRef(); 
    const btnAuth = useRef();
    function handelUl () {
        setUlBolck(e=>!e);
        if(ulBlock) {
            iconMenu.current.style.display = "none";
            iconClose.current.style.display = "block";
            ul.current.style.display = "block"
        } else {
            iconMenu.current.style.display = "block";
            iconClose.current.style.display = "none";
            ul.current.style.display = "none"
        }
    }
    function logout () { 
        if(window.localStorage.getItem('btnAuth') === "تسجيل الخروج") {
            window.location.pathname = '/logout'
        } else {
            window.location.pathname = '/login'
        }
    }
    return (
        <div className="init">
            <div className="header">
                <div className='header-auth'>
                    <ul>
                        <li><Link to="" className='start' >ابدأ</Link></li>
                        <li><Link className='enter' onClick={logout} ref={btnAuth}> {
                        window.localStorage.getItem('btnAuth')
                        ? window.localStorage.getItem('btnAuth')
                        :"تسجيل الدخول"
                        }</Link></li>
                    </ul>
                </div>
                <div className='header-content'>
                    <ul  className="ul-menu" ref={ul}>
                        <li><Link to=""> المزيد </Link></li>
                        <li><Link to="">البيع</Link></li>
                        <li><Link to="">برامج الجنسية لدى اسيستفاي</Link></li>
                        <li><Link to="">حول</Link></li>
                        <li><Link to="">العقارات </Link></li>
                    </ul>
                     <img src={require("../../assets/images/Group.png")} alt="logo" className="logo"/>
                     <div className='icons' onClick={handelUl}>
                         <FontAwesomeIcon icon={faBars} className='menu'  ref={iconMenu}/>
                         <FontAwesomeIcon icon={faXmark} ref={iconClose} className='close'/>                     
                     </div>
                </div>
            </div>
            <div className='init-content'>
                <div className='init-contet-text'>
                    <h3>احصل على الإقامة التركية بكل سهولة مع Assetify</h3>
                    <span>استثمر من أي مكان في العالم واحصل على الإقامة التركية</span>
                    <p>استمع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000 دولار أمريكي من خلال منصتنا.</p>
                </div>
            </div>
            <div className='footer'>
                <div>
                    <img src={require('../../assets/images/قم بالإرتقاء تلقائياً إلى فئة Assetify +.png')} alt='footer'/>
                </div>
            </div>
            <Outlet />
        </div>
    )
 } 