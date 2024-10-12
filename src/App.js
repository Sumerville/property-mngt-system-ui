
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Index from './pages/Index/Index';
import About from "./pages/About/About";
import Contact from './pages/Contact/Contact';
import Signup from './pages/Register-Page/Signup';
import SinglePage from './pages/SinglePage/SinglePage';
import CreateAccout from './pages/Register-Page/CreateAccout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Resetpage from './pages/ResetPage/Resetpage';
import Verification from './pages/Register-Page/Verification';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
  
    <div className="App">
<ToastContainer/>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}> </Route>
     <Route path="/listing" element={<Index/>}> </Route>
     <Route path="/about-page" element={<About/>}> </Route>
     <Route path="/contact-page" element={<Contact/>}> </Route>
     <Route path="/signup-page" element={<Signup/>}> </Route>
     <Route path="/account-page" element={<CreateAccout/>}> </Route>
     <Route path="/single-page/:id" element={<SinglePage/>}> </Route>
     <Route path="/profile-page/" element={<ProfilePage/>}> </Route>
     <Route path="/reset-page/" element={<Resetpage/>}> </Route>
     <Route path="/register/" element={<Signup/>}> </Route>
     <Route path="/verify-account/" element={<Verification/>}> </Route>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
