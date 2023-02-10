import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Topbar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useContext } from 'react';
import { Context } from './context/Context';
// import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';


function App() {
  const {user} = useContext(Context);
  return (
    <>
    <Router>
    <ScrollToTop />
    <Topbar />
    <Routes>
    <Route exact path='/' element={<Home />} ></Route>
    <Route path='/register' element={user ? <Home /> : <Register />} ></Route>
    <Route path='/login' element={user ? <Home /> : <Login />} ></Route>
    <Route path='/write' element={user ? <Write /> : <Login />} ></Route>
    <Route path='/settings' element={user ? <Settings /> : <Login />} ></Route>
    <Route path='/about' element={<></> } ></Route>
    <Route path='/contact' element={ <></> } ></Route>
    <Route path='/post/:postId' element={<Single />} ></Route>
    </Routes>
    </Router> 
    <Footer />
    </>
  );
}
 
export default App;
