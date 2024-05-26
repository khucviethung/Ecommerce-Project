import './App.scss'
import LoginForm from './components/Login/LoginForm';
import Menu from './components/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.css';
// import { Outlet, Link } from "react-router-dom";


// Function Component
const App: React.FC = () => {
  const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'Product', link: '/Product' },
    { title: 'About us', link: '/AboutUs' },
    { title: 'Contact', link: '/Contact' },

  ];
  const loginItems = [
    { title: 'Sign in', link: '/Signin' },
    { title: 'Sign up', link: '/Signup' },
  ]


  return (
    <>
      <div className='app-container'>
        <div className='menu'>
          <span className='left-menu'>
            <Menu items={menuItems} />
          </span>
          <span className='right-menu'>
            <Menu items={loginItems} />
          </span>
        </div>

        <div className='main-container'>
          <div className='sidenav-container'>
            <LoginForm/>
          </div>
          {/* <div className='app-content'>
            <Outlet/>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App
