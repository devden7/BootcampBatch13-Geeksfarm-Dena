import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import AddContact from './pages/AddContact';
import ContactDetail from './pages/ContactDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/:name" element={<ContactDetail />} />
      <Route path="/add-contact" element={<AddContact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
