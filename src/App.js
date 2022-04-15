import logo from './logo.svg';
import './App.css';
import { UserList } from './components/UserList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Layout from './Layout';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

            <Routes>
                 <Route path="/" element={<Layout></Layout>}>
                      <Route exact path="/users" element={<UserList></UserList>}></Route>
                      <Route exact path="/users/details/:id" element={<UserDetails></UserDetails>}></Route>
                      <Route exact path="/about" element={<About></About>}></Route>
                      <Route exact path="*" element={<NotFound></NotFound>}></Route>
                 </Route>
            </Routes>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </BrowserRouter>  
  );
}

export default App;
