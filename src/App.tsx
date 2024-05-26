import './App.scss'
import LoginForm from './components/Login/LoginForm';
import Menu from './components/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Product from './components/Product/Product';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';


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
          </div>

          <div className='app-content' id='content'>
            <BrowserRouter>
              <Routes>
                {/* <Route index element={<App />}></Route> */}
                <Route path="/" >
                  <Route path="/Product" Component={Product} />
                  <Route path="/AboutUs" Component={About} />
                  <Route path="/Signin" Component={LoginForm} />
                  <Route path="*" Component={PageNotFound} />
                </Route>
              </Routes>
            </BrowserRouter>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
