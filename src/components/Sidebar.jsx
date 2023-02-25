import './Sidebar.scss'
import logo from '../assets/images/logo.png'

import CustomButtom from './CustomButton'

const Sidebar = ()=>{
  <div className="sidebar-container">
    <div className="logo">
      <img src={logo} alt="Full Stask club"/>
    </div>
    <div className="sign-out">
      <CustomButtom>
        SAIR
      </CustomButtom>
    </div>
  </div>
}

export default Sidebar