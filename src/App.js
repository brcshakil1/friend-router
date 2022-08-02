import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import FriendDetail from './component/FriendDetail/FriendDetail';

function App() {
  
  return (
    <div >
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friend/:friendId' element= {<FriendDetail></FriendDetail>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
