import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Category from '../../Pages/Category/Category';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MobileApps from '../../Pages/MobileApps/MobileApps';
import Help from '../../Pages/Help/Help';

function App() {
  return (
    <div className="App">

      <Header />

      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/mobileapps">
          <MobileApps />
        </Route>

        <Route path="/help">
          <Help />
        </Route>

        <Route path="/:category">
          <Category />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;