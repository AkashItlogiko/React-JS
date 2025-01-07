import { BrowserRouter, Route, Routes } from 'react-router-dom'; //amader ReactJs project ar moddhe Routing ar facility take add korar jonno amra ReactRouter package take install kore niyechi amader ai ReactJs project ar moddhe and install hoye jawar pore ami aikhane react-router-dom theke BrowserRouter , Routes , Route  import korechi
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import User from './pages/User';
import Error from './pages/Error';
import '../src/App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
