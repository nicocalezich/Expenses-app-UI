import React from 'react'
import MonthChart from './MonthChart'

const Charts = (props) => {

    return (
        <div className='charts'>
            {props.amountPerMonth.map((info) => (<MonthChart handleBalance={props.handleBalance} setTotalIncome={props.setTotalIncome} top={props.top} handleSelectedMonth={props.handleSelectedMonth}  incomePerMonth={props.incomePerMonth} key={info.monthNum} number={info.monthNum} amount={info.amount} month={info.month}/> ))}
        </div>
    )
}


export default Charts