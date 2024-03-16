import React, { useState } from 'react'
import './Form.css'

function Form(props) {

    let [Name, setName] = useState('')
    let [Price, setPrice] = useState('')
    let [Date1, setDate] = useState('')
    function changedname(event) {
        setName(event.target.value)
    }
    function changedprice(event) {
        setPrice(event.target.value)
    }
    function changeddate(event) {
        setDate(event.target.value)
    }

    function formSubmitted(event) {
        event.preventDefault()
        if (Name == '' || Price == '' || Date1 == '') {

        } else {
            let newarry = {
                Name,
                Price,
                Date: new Date(Date1)
            }
            props.data(newarry)
        }
        setName('')
        setPrice('')
        setDate('')

    }

    return (
        <form onSubmit={formSubmitted}>
            <table>
                <tr className='namediv1'>
                    <td>
                        <label>Enter Name: </label>
                    </td>
                    <td>
                        <input type='text' onChange={changedname} value={Name} />
                    </td>
                </tr>
                <tr className='pricediv1'>
                    <td>
                        <label>Enter Price: </label>
                    </td>
                    <td>
                        <input type='number' onChange={changedprice} value={Price} />
                    </td>
                </tr>
                <tr className='datediv1'>
                    <td>
                        <label>Select Date: </label>
                    </td>
                    <td>
                        <input type='date' onChange={changeddate} value={Date1} />
                    </td>
                </tr>
                <tr className='buttondiv1'>
                    <td colSpan={2}><button type="submit">Add Data</button></td>
                </tr>
            </table>
        </form>
    )
}

export default Form