import './App.scss'
import LoginForm from './components/Login/LoginForm';
import Menu from './components/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Product from './components/Product/Product';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Signup from './components/Signup/Signup';


// Function Component
const App: React.FC = () => {
  const menuItems = [
    { title: 'Trang chủ', link: '/' },
    { title: 'Sản phẩm', link: '/Product' },
    { title: 'Vể chúng tôi', link: '/AboutUs' },
    { title: 'Liên hệ', link: '/Contact' },
    { title: 'Đăng ký', link: '/Signup'  },
    { title: 'Đăng nhập', link: '/Login' },
  ]


  return (

      <div className='app-container'>
        <div className='menu'>
          <span className='left-menu'>
            <Menu items={menuItems} />
          </span>
          {/* <span className='right-menu'>
            <Menu items={menuItems} />
          </span> */}
        </div>

        <div className='main-container'>
          <div className='sidenav-container'>
          </div>

          <div className='app-content' id='content'>
            <BrowserRouter>
              <Routes>
                {/* <Route index element={<App />}></Route> */}
                <Route path="/" element={<Outlet/>} >
                  <Route path="/Product" element={<Product/>} />
                  <Route path="/AboutUs" element={<About/>} />
                  <Route path="/Signup" element={<Signup/>} />
                  <Route path="/Login" element={<LoginForm/>} />
                  <Route path="*" element={<PageNotFound/>} />
                </Route>
              </Routes>
            </BrowserRouter>
            {/* <Outlet /> */}
          </div>
        </div>
      </div>

  );
}

export default App
