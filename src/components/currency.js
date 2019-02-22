import React from 'react';

const Currency = (props) => {
    const codes = ['INR','USD','EUR','CAD']
    return(
        <select onChange={(e)=>props.onCode(e.currentTarget.value)}>
            {
                codes.map( code => <option value={code} key={code}>{code}</option>)
            }
        </select>
    );
}

export default Currency;