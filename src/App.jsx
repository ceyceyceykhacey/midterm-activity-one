import './App.css'
import {Routes, Route} from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;






