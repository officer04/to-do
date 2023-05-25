import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/home/Home';
import Registration from './pages/registration/Registration';
import Authentication from './pages/authentication/Authentication';

import Change from './pages/changes/Change';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './styles/reset.scss';
import './styles/base.scss';

function App() {
  const [state, setState] = useState(true);

  const settingHeader = () => {
    setState(!state);
  };
  return (
    <div className="App">
      <Router>
        <Header state={state} settingHeader={settingHeader} match exact/>
        <Routes>
          <Route path="/" element={<Home settingHeader={settingHeader} />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authentication />} />
          <Route path="/change" element={<Change />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
