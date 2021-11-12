import { useState, useEffect } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import './App.css' //only did this so the links are more legible and look a little better - personal stretch
import Order from './components/Order';
import formSchema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';

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

  //post the data to the server using axios when the user hits Add to Order
  const orderNow = (event) => {
    event.preventDefault()
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        setPizza(pizza)
        console.log(res.data) //per readme it says to log the data in console.left this console.log in here for that purpose
      })
  }

  //VALIDATE WITH YUP 🤖
  const validate = (name, value) => {
    yup.reach(formSchema, name) //validating the name rules from our formSchema file
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]:''})
      })
      .catch((error) => {
        setFormErrors({...formErrors, [name]: error.errors[0]})
      })
  }
  
  // RUN VALIDATION WITH YUP
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues, 
      [name]: value
    })
  }

  //looks to disable button every time formValues change
  useEffect(() => {
    formSchema.isValid(formValues)
      .then((valid) => setDisabled(!valid))
  }, [formValues])


  return (
    <div className ='App'> 
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link id='order-pizza'to='/pizza'>Order Pizza</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <div>home</div>
          </Route>
          <Route path='/pizza'>
            <Order 
            orderNow = {orderNow}
            inputChange = {inputChange}
            formValues = {formValues}
            formErrors = {formErrors}
            disabled = {disabled}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default App;
