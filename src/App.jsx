import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FooterB from './components/FooterB';
import Home from './pages/Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Character from './pages/Character';

function App() {
    const [personajes, setPersonajes] = useState([]);

    return (
        <div className="footer-fix">
            <Switch>
                <Route path="/" exact>
                    <Home
                        personajes={personajes}
                        setPersonajes={setPersonajes}
                    />
                </Route>
                <Route path="/character/:charId" exact>
                    <Character character={personajes} />
                </Route>
                <Route path="/404">404</Route>

                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
            <FooterB />
        </div>
    );
}

export default App;
