import React from 'react';
import Items1 from './Items1'
import './TotalElements.css'

function TotalElements(props) {
    return (
        <div className='maindiv'>
            {props.arry.map(
                exp => (
                    <Items1 name1={exp.Name} price1={exp.Price} date1={exp.Date} />
                ))
            }
        </div>
    )
}

export default TotalElements