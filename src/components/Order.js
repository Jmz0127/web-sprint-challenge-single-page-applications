import React from 'react'

const Order = (props) => {
    console.log(props)

    return(
        <div>
            order form for your pizza
            <form id='pizza-form'>
                <label id='name-input'>
                    name: 
                </label>
                <label id='size-dropdown'>
                    size:
                </label>
                <label>
                    topping1:
                    topping2:
                    topping3:
                    topping4:
                </label>
                <label id='special-text'>
                    special: 
                </label>
            </form>
        </div>
    )
}

export default Order;