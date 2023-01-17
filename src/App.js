import './App.css';
import { Routes, Route } from 'react-router-dom';
import CalcDesign from './components/Calculator';
import HomePage from './components/Home';
import Quotes from './components/Quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="my-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="calculator" element={<CalcDesign />} />
        <Route path="quote" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
