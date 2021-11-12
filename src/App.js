import React from "react";
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className ='App'> 
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link id='order-pizza'to='/pizza'>Order Form</Link>
          <Link to='/completion'>Completion</Link>
        </nav>
      </header>
    </div>
  );
};
export default App;
