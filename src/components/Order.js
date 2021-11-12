import React from 'react'
import '../App.css' //only did this so the inputs are more legible and look a little better - personal stretch

const Order = (props) => {
    console.log(props)

    const {inputChange, formValues, formErrors} = props


    return(
        <div>
            order form for your pizza
            <form id='pizza-form'>
                <label id='name-input'>
                    name: {formErrors.name} 
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} type='text' name="name" value={formValues.name} error={formErrors.name}/>
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
                    topping1:
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} type='checkbox' name='topping1' value={formValues.topping1}/>
                </label>
                <label>
                    topping2:
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} type='checkbox' name='topping2' value={formValues.topping2}/>
                </label>
                <label>
                    topping3:
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} type='checkbox' name='topping3' value={formValues.topping3}/>
                </label>
                <label>
                    topping4:
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} type='checkbox' name='topping4' value={formValues.topping4}/>
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