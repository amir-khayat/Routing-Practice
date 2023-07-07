import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/number/:num" element={<Number />} />
          <Route path="/word/:word" element={<Word />} />
          <Route path="/word/:word/:textcolor" element={<Word />} />
          <Route path="/word/:word/:textcolor/:backcolor" element={<Word />} />
      </Routes>
    </div>
  );
}

export default App;
