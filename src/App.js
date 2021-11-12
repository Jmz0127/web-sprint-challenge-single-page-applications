import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div className ='App'> 
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link id='order-pizza'to='/pizza'>Order Pizza</Link>
          <Link to='/completion'>Completion</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path='/completion'>
            <div>completion</div>
          </Route>
          <Route path='/pizza'>
            <div>order</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default App;
