import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from '../../Pages/Home/Home';
import Category from '../../Pages/Category/Category';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MobileApps from '../../Pages/MobileApps/MobileApps';
import Help from '../../Pages/Help/Help';
import ThemeContext from '../../ThemeContext';
import colors from '../../data/colors';
import styled from "styled-components";

function App() {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => theme === "dark" ? setTheme("light") : setTheme("dark");

  const AppWrapper = styled.section`
    .btn:focus{box-shadow: none !important;}
    
    body{color: #002F34;}
    
  `;

  return (
    <AppWrapper className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme, colors: colors[theme] }}>

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

      </ThemeContext.Provider>
    </AppWrapper>
  );
}

export default App;