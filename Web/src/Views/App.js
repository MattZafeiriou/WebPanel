import Sidebar from './Utils/Sidebar/Sidebar';
import Topbar from './Utils/Topbar/Topbar';
import Services from './Services/Services';
import ServicesDetails from './Services/Details/ServicesDetails';
import NewOrder from './NewOrder/NewOrder';
import DesktopAppDevelopment from './NewOrder/DesktopAppDevelopment/DesktopAppDevelopment';
import Activity from './Activity/Activity';
import Payments from './Payments/Payments';
import '../CSS/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='flex flex-row'>
      <BrowserRouter>
        <Sidebar />
        <div className='w-full'>
          <div className='pattern-opacity-100'>
            <Topbar />
            <div className='p-2' style={{ maxHeight: 'calc(100% - 4rem)', boxSizing: 'border-box' }}>
              <Routes>
                <Route path='/' element={<h1>Home</h1>} />
                <Route path='/new-order' element={<NewOrder />} />
                <Route path='/new-order/desktop-app' element={<DesktopAppDevelopment />} />
                <Route path='/services' element={<Services />} />
                <Route path='/services/*' element={<ServicesDetails />} />
                <Route path='/activity' element={<Activity />} />
                <Route path='/payments' element={<Payments />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
