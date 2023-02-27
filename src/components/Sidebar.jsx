import './Sidebar.scss'
import logo from '../assets/images/logo.png'
import {useNavigate} from 'react-router-dom'


import CustomButtom from './CustomButton'

const Sidebar = ()=>{
  const navigate = useNavigate()

  const handleSignout = ()=>{
    navigate('/login')
  }

  return(
    <div className="sidebar-container">
    <div className="logo">
      <img src={logo} alt="Full Stask club"/>
    </div>
    <div className="sign-out">
      <CustomButtom onClick={handleSignout}>
        SAIR
      </CustomButtom>
    </div>
  </div>
  )
}

export default Sidebar