import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FooterB from './components/FooterB';
import Home from './pages/Home';

function App() {
    return (
        <div className="footer-fix">
            <Home personajes />
            <FooterB />
        </div>
    );
}

export default App;
