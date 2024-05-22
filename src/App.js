import { Route, Routes } from 'react-router-dom';
import Init from './pages/website/Init';
import Login from './pages/website/auth/Login';
import './styles/index.css';
import './styles/login.css';
import Register from './pages/website/auth/Register';
import Logout from './pages/Logout';
import Verfiy from './pages/website/Verfiy';

export default function App() {
  return (
       <Routes>
        <Route path='/verfiy' element={<Verfiy/>}/>
        <Route path='/' element={<Init/>}/>
        <Route path='/' element={<Init/>}>
         <Route path='login' element={<Login/>}/>
         <Route path='logout' element={<Logout/>}/>
         <Route path='register' element={<Register/>}/>
        </Route>
     </Routes>

  )
}