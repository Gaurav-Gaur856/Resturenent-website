import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home';
import { Success } from './pages/Success';
import { Error } from './pages/Error';
import { ProtectedRoute } from './component/ProtectedRoute';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
// import { ResetPassword } from './pages/ResetPassword';
// import { VerifyOtp } from './pages/VerifyOtp';

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/success' element={<ProtectedRoute element={<Success/>} />} />
      {/* <Route path='success' element={<Success/>} /> */}
      <Route path='/*' element={<Error/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>} />
      {/* <Route path='/forget-password' element={<ResetPassword/>} /> */}
      {/* <Route path='/verify-otp' element={<VerifyOtp/>} /> */}
    </Routes>
    </>
  )
}

export default App
