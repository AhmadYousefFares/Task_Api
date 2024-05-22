import { useState } from "react"
import '../../styles/verfiy.css'

export default function Verfiy() {
    const [opt, setOpt] = useState(new Array(6).fill(""));
    function handelChangeInputs(e, index) {
        if(isNaN(e.target.value)) return false;
        setOpt([...opt.map((data,indx)=>(indx === index ? e.target.value:data))])
        if(e.target.value && e.target.nextSibling) {
            e.target.style.background = "#ACACAC";
            e.target.style.color = "white";
            e.target.nextSibling.focus();
        }
    }
    return <div className="verfiy"> 
        <div className="verfiy-bg">
            
       <div className="verfiy-content">
        <h2>مرحبا بك <span>RED</span></h2>
            <div className="email-sended">
                <span>(red1234@gmail.com)</span>
                <p>لقد تم ارسال رمز التأكيد الى: </p>
            </div>
            <div className="inputs">
                {
                opt.map((data, i)=><input type="text" value={data} maxLength="1" onChange={(e)=>handelChangeInputs(e,i)}/>)
                }
            </div>
            <button>تأكيد</button>
            <p>إذا لم يصلك الرمز يمكن إعادة المحاولة بعد <span>4:20د</span></p>
            <button className="confirm">إعادة الإرسال</button>
       </div>
        </div>
    </div>
}