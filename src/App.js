import { useState } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import './App.css' //only did this so the links are more legible and look a little better - personal stretch
import Completion from './components/Completion'; //personal stretch - want to see a completion message post-ordering
import Order from './components/Order';
import formSchema from './validation/formSchema';

//initial form values
const initialOrderForm={ 
  name:'', //SHOULD BE TEXT FIELD
  size:'', //SHOULD BE DROPDOWN
  topping1:false, //SHOULD BE CHECKBOX
  topping2:false, //SHOULD BE CHECKBOX
  topping3:false, //SHOULD BE CHECKBOX
  topping4:false, //SHOULD BE CHECKBOX
  special: '' //SHOULD BE TEXT FIELD
}

//initial errors - all string values to begin with
const initialOrderFormErrors={ 
  name:'', //SHOULD BE TEXT FIELD
  size:'', //SHOULD BE DROPDOWN
  topping1:'', //SHOULD BE CHECKBOX
  topping2:'', //SHOULD BE CHECKBOX
  topping3:'', //SHOULD BE CHECKBOX
  topping4:'', //SHOULD BE CHECKBOX
  special: '' //SHOULD BE TEXT FIELD
}


const App = () => {

  //dealing with state slices
  const [pizza, setPizza] =  useState({})
  const [formValues, setFormValues] = useState(initialOrderForm)
  const [formErrors, setFormErrors] = useState(initialOrderFormErrors)
  const [disabled, setDisabled] = useState(true)


  



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
            <Completion pizza={pizza}/>
          </Route>
          <Route path='/pizza'>
            <Order />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default App;
