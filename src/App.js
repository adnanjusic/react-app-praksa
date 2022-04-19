import './App.css';
import { UserList } from './components/UserList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Layout from './Layout';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import Login from './pages/Login';
import UserDetails from './components/UserDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Routes>
                 <Route path="/login" element={<Login></Login>}></Route>
                 <Route path="/" element={<Layout></Layout>}>
                      <Route exact path="/" element={<Home></Home>}></Route>
                      <Route exact path="/home" element={<Home></Home>}></Route>
                      <Route exact path="/users" element={<UserList></UserList>}></Route>
                      <Route exact path="/users/details/:id" element={<UserDetails></UserDetails>}></Route>
                      <Route exact path="/about" element={<About></About>}></Route>
                      <Route exact path="*" element={<NotFound></NotFound>}></Route>
                 </Route>
            </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
