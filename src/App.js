import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import './App.css' //only did this so the links are more legible and look a little better - personal stretch
import Completion from './components/Completion.js'; //personal stretch - want to see a completion message post-ordering


const initialOrderForm={
  name:'', //SHOULD BE TEXT FIELD
  size:'', //SHOULD BE DROPDOWN
  topping1:false, //SHOULD BE CHECKBOX
  topping2:false, //SHOULD BE CHECKBOX
  topping3:false, //SHOULD BE CHECKBOX
  topping4:false, //SHOULD BE CHECKBOX
  special: '', //SHOULD BE TEXT FIELD
}


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
          <Route exact path='/'>
            <div>home</div>
          </Route>
          <Route path='/completion'>
            <Completion />
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
