import './Login.scss'
import Logo from '../assets/images/logo-2.png'

import CustomButton from '../components/CustomButton'

const Login = ()=>{
  return(
    <div className="login-container">
      <img src={Logo} alt="logo" />
      <div className="button-container">
        <CustomButton>
          Entrar
        </CustomButton>
      </div>
    </div>
  )
}

export default Login