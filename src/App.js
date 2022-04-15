import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import ManageHistory from './components/ManageHistory/ManageHistory';
import OrderReview from './components/OrderReview/OrderReview';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
            <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
       
        <Route path='/shop' element={<Shop></Shop>}></Route>
        
        <Route path='/orders' element={
          <Orders></Orders>
      }></Route>
        <Route path='/order-review' element={<RequireAuth><OrderReview></OrderReview></RequireAuth> }></Route>
        <Route path='/manage-history' element={<ManageHistory></ManageHistory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/shipment' element={<RequireAuth>
          <Shipment></Shipment>
        </RequireAuth>}></Route>
      </Routes>
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
