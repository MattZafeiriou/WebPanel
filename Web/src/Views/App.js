import Sidebar from './Utils/Sidebar/Sidebar';
import Topbar from './Utils/Topbar/Topbar';
import Services from './Services/Services';
import ServicesDetails from './Services/Details/ServicesDetails';
import NewOrder from './NewOrder/NewOrder';
import DesktopAppDevelopment from './NewOrder/DesktopAppDevelopment/DesktopAppDevelopment';
import Activity from './Activity/Activity';
import Payments from './Payments/Payments';
import Login from './Login/Login';
import '../CSS/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AuthenticatedPage(props) {
  if (!localStorage.getItem('token')) {
    window.history.pushState({}, '', '/login');
    return <Login />;
  }
  return (
    <>
      <Sidebar />
      <div className='w-full background-stripes'>
        <div className='pattern-opacity-100'>
          <Topbar />
          <div className='p-2' style={{ maxHeight: 'calc(100% - 4rem)', boxSizing: 'border-box' }}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className='flex flex-row'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<AuthenticatedPage children={<h1>Home</h1>}/>} />
          <Route path='/dashboard' element={<AuthenticatedPage children={<h1>Home</h1>}/>} />
          <Route path='/new-order' element={<AuthenticatedPage children={<NewOrder />}/>} />
          <Route path='/new-order/desktop-app' element={<AuthenticatedPage children={<DesktopAppDevelopment />}/>} />
          <Route path='/services' element={<AuthenticatedPage children={<Services />}/>} />
          <Route path='/services/*' element={<AuthenticatedPage children={<ServicesDetails />}/>} />
          <Route path='/activity' element={<AuthenticatedPage children={<Activity />}/>} />
          <Route path='/payments' element={<AuthenticatedPage children={<Payments />}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
