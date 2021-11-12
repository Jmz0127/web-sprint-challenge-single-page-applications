import React from 'react'
import '../App.css' //only did this so the inputs are more legible and look a little better - personal stretch

const Order = (props) => {
    

    const {inputChange, formValues, formErrors, orderNow} = props


    return(
        <div>
            order form for your pizza
            <form id='pizza-form' onSubmit={orderNow}>
                <label id='name-input'>
                    name: {formErrors.name} 
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} type='text' name="name" value={formValues.name}/>
                </label>
                <label id='size-dropdown'>
                    size: {formErrors.size}
                    <select onChange={(e) => inputChange(e.target.name, e.target.value)} name='size' value={formValues.size}>
                        <option value='select'>select your size</option>
                        <option value='small'>small</option>
                        <option value='medium'>medium</option>
                        <option value='large'>large</option>
                    </select>
                </label>
                <label>
                    pepperoni
                    <input onChange={(e) => inputChange(e.target.name, e.target.checked)} type='checkbox' name='topping1' checked={formValues.topping1}/>
                </label>
                <label>
                    jalapenos
                    <input onChange={(e) => inputChange(e.target.name, e.target.checked)} type='checkbox' name='topping2' checked={formValues.topping2}/>
                </label>
                <label>
                    mushrooms
                    <input onChange={(e) => inputChange(e.target.name, e.target.checked)} type='checkbox' name='topping3' checked={formValues.topping3}/>
                </label>
                <label>
                    sausage
                    <input onChange={(e) => inputChange(e.target.name, e.target.checked)} type='checkbox' name='topping4' checked={formValues.topping4}/>
                </label>
                <label id='special-text'>
                    special: 
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} type='text' name="special" value={formValues.special}/>
                </label>
                <button id='order-button' type='submit' disabled={props.disabled}>Add to Order</button>
            </form>
        </div>
        
    )
}

export default Order;