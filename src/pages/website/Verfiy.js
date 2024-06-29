import { useState } from "react"
import '../../styles/verfiy.css'
import axios from "axios";
import { RESENDCODE, VIERIFYEMAIL, baseURL } from "../../api/Api";

export default function Verfiy() {
    const [opt, setOpt] = useState(new Array(6).fill(""));
    let x1 = opt[0];
    let x2 = opt[1];
    let x3 = opt[2];
    let x4 = opt[3];
    let x5 = opt[4];
    let x6 = opt[5];
    let codeEmail = `${x1}${x2}${x3}${x4}${x5}${x6}`;
    const [reSend, setReSend] = useState(false);
    function handelChangeInputs(e, index) {
        setOpt([...opt.map((data,indx)=>(indx === index ? e.target.value:data))])
        if(e.target.value && e.target.nextSibling) {
            e.target.style.background = "#ACACAC";
            e.target.style.color = "white";
            e.target.nextSibling.focus();
        }
    }
    console.log(codeEmail)
    async function handelVerify() {
      try {
        let res = await axios.post(`${baseURL}/${VIERIFYEMAIL}`,{
            code: codeEmail
        },{
                headers: {
                    'Content-Type': "multipart/form-data",
                    'Accept': 'application/json',
            }
        }
    )
    window.location.pathname='/login'
      } catch(err) {
        console.log(err)
      }
    }
    async function handelReSend() {
      try {
        let res = await axios.post(`${baseURL}/${RESENDCODE}`,{
                headers: {
                    'Content-Type': "multipart/form-data",
                    'Accept': 'application/json',
            }
        }
        )
        setReSend(true)
      } catch(err) {
        console.log(err)
      }
    }
    return <div className="verfiy"> 
        <div className="verfiy-bg">
            
       <div className="verfiy-content">
        <h2>مرحبا بك <span>RED</span></h2>
            <div className="email-sended">
                <span>{localStorage.getItem('email')}</span>
                <p>لقد تم ارسال رمز التأكيد الى: </p>
            </div>
            <div className="inputs">
                {
                opt.map((data, i)=><input type="text" value={data} maxLength="1" onChange={(e)=>handelChangeInputs(e,i)}/>)
                }
            </div>
            <button onClick={handelVerify}>تأكيد</button>
            <p>إذا لم يصلك الرمز يمكن إعادة المحاولة بعد <span>4:20د</span></p>
            <button className="confirm" onClick={handelReSend}>إعادة الإرسال</button>
            {reSend && <p style={{marginTop: "20px",color: "green"}}>تمت عملية إعادة الإرسال بنجاح</p>}
       </div>
        </div>
    </div>
}