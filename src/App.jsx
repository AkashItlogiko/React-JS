import { BrowserRouter, Route, Routes } from 'react-router-dom'; //amader ReactJs project ar moddhe Routing ar facility take add korar jonno amra ReactRouter package take install kore niyechi amader ai ReactJs project ar moddhe and install hoye jawar pore ami aikhane react-router-dom theke BrowserRouter , Routes , Route  import korechi
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
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
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} /> //akhane ami path='*' aita mane
        hocche jodi eemon kono route ba url diye amader browser ar moddhe hit
        kora hoy jei route ba url ta amra create kori nai tokhon oi route ba url
        ta amader ai astic "*" path ar moddhe chole ashbe and akhane amader
        element ar moddhe jei Component ta ache oi Component ar moddhe jei
        content gulo ache ta browser ar moddhe show korbe
      </Routes>
    </BrowserRouter>
  );
};

export default App;
