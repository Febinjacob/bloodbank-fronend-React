import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import User from './Components/User/User';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Admin from './Components/Admin/Admin';
import UserRegister from './Components/UserRegister/UserRegister';
import UserView from './Components/UserView/UserView';
import Blood from './Components/Blood/Blood';
import AdminRegister from './Components/AdminRegister/AdminRegister';
import AdminView from './Components/AdminView/AdminView';
import UserViewBooked from './Components/UserViewBooked/UserViewBooked';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/User' element={<User />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/AdminRegister' element={<AdminRegister/>}/>
        <Route path='/AdminView' element={<AdminView/>}/>
        <Route path='/UserRegister' element={<UserRegister/>}/>
        <Route path='/UserView' element={<UserView/>}/>
        <Route path='/Blood' element={<Blood/>}/>
        <Route path='/UserViewBooked' element={<UserViewBooked/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
