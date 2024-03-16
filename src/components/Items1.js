import React, { useState } from 'react';
import './items1.css'

function Items1(props) {
    let totaldate = props.date1
    let date = totaldate.getDate()
    let day = totaldate.getDay()
    let year = totaldate.getFullYear()
    let month = totaldate.getMonth()
    let MonthArry = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let DayArry = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Set']
    let [names, setName] = useState(props.name1)
    let [prices, setPrice] = useState(props.price1)
    let [changed, setChanged] = useState('')
    let [changed1, setChanged1] = useState('')
    function Clicked() {
        if (changed == '') {
            setName(names)
        } else {
            setName(changed)
            setPrice(changed1)
        }
    }

    console.log(props.name1)

    function Change(event) {
        setChanged(event.target.value)
    }
    function Change1(event) {
        setChanged1(event.target.value)
    }

    return (
        <div className='itemdiv'>
            <div className='totaldatediv'>
                <div className='daydiv'>
                    <p>{DayArry[day]}</p>
                </div>
                <div className='datediv'>
                    <p>{date}</p>
                </div>
                <div className='MonthAndYearDiv'>
                    <p>{MonthArry[month]}</p>
                    &nbsp;
                    <p>{year}</p>
                </div>
            </div>
            <div className='textfild'>
                <div className='textfildp1'>
                    <p>Name :&nbsp;</p>
                    <p>{names}</p>
                </div>
                <div className='textfildp2'>
                    <p>Price :&nbsp;</p>
                    <p>{'$' + prices}</p>
                </div>
            </div>
            <div className='action'>
                <table>
                    <tr className='namediv2'>
                        <td>
                            <label>Enter Name: </label>
                        </td>
                        <td>
                            <input type='text' value={changed} onChange={Change} />
                        </td>
                    </tr>
                    <tr className='pricediv2'>
                        <td>
                            <label>Enter Price: </label>
                        </td>
                        <td>
                            <input type='number' value={changed1} onChange={Change1} />
                        </td>
                    </tr>
                    <tr className='buttondiv2'>
                        <td colSpan={2}><button onClick={Clicked} >Click Here To Add Change</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Items1