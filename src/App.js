import React from 'react'
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
import PrivateRoute from './utils/PrivateRoute';
import { NotificationStore } from './stores/NotificationStore';

function App() {
  const notificationStore = new NotificationStore();
  return (
    <BrowserRouter>
      <div className="App">
            <Routes>
                 <Route path="/login" element={<Login></Login>}></Route>
                 <Route path="/" element={<Layout store={notificationStore}></Layout>}>
                      <Route exact path="/" element={<PrivateRoute><Home></Home></PrivateRoute>}></Route>
                      <Route exact path="/home" element={<PrivateRoute><Home></Home></PrivateRoute>}></Route>
                      <Route exact path="/users" element={<UserList></UserList>}></Route>
                      <Route exact path="/users/details/:id" element={<PrivateRoute><UserDetails></UserDetails></PrivateRoute>}></Route>
                      <Route exact path="/about" element={<PrivateRoute><About  store={notificationStore}></About></PrivateRoute>}></Route>
                      <Route exact path="*" element={<NotFound></NotFound>}></Route>
                 </Route>
            </Routes>
      </div>
    </BrowserRouter>  
  );
}



export default App;
