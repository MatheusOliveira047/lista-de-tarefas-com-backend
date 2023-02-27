import './Login.scss'
import Logo from '../assets/images/logo-2.png'

import {useNavigate} from 'react-router-dom'
import CustomButton from '../components/CustomButton'

const Login = ()=>{
  const navigate = useNavigate()

  const handleSignin = ()=>{
    navigate('/')
  }

  return(
    <div className="login-container">
      <img src={Logo} alt="logo" />
      <div className="button-container">
        <CustomButton onClick={handleSignin}>
          Entrar
        </CustomButton>
      </div>
    </div>
  )
}

export default Login