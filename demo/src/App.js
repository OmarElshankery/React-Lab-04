import './App.css';
import { Routes ,Route } from 'react-router-dom';
import MyNav from './component/myNav';
import Login from './component/login';
import Home from './component/home';
import Users from './component/users';
import UserDetails from './component/userDetails';
import NotFound from './component/notFound';
function App() {
  // const [inputData,setInputData]= useState('')

  // const onGetInputData=(username)=>{
  //   setInputData(username);
  // };
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        
        <Route path="login" element={<Login/>} />
        <Route path="login/new" element={<Login/>} />
        <Route path="login/:id" element={<Login/>} />

        <Route path="users" element={<Users/>} />
        <Route path="users/:id" element={<UserDetails/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
