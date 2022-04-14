import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ManageHistory from './components/ManageHistory/ManageHistory';
import OrderReview from './components/OrderReview/OrderReview';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
            <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/order-review' element={<OrderReview></OrderReview>}></Route>
        <Route path='/manage-history' element={<ManageHistory></ManageHistory>}></Route>
      </Routes>
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
