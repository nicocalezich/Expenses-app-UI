 import React from 'react'
import './Details.css'
import DayBox from "./DayBox"

const Details = (props) => {

    const total = (dayData) => {
        let total = 0;
        for (let i = 0; i < dayData.expenses.length; i++) {
            total += parseInt(dayData.expenses[i].amount)
        }
        return total
    }

    const getAmountData = (expenses) => {
        let totalInMonth = 0
        for (let i = 0; i < expenses.length; i++){
            totalInMonth += total(expenses[i])
        }
        return {average: Math.trunc(totalInMonth / expenses.length), total: totalInMonth}
    }

    const balance = (balance) =>{
        if (balance > 0) {
            return <h5>Balance general: <span style={{color: "green"}}>+${props.balance}</span></h5>
        } 
        if (balance < 0) {
            return <h5>Balance general: <span style={{color: "red"}}>-${props.balance}</span></h5>
        }

        return <h5>Balance general: <span>${props.balance}</span></h5>
       
    }

    const maxExpent = (expenses) => {
        let max = 0
        for (let i = 0; i < expenses.length; i++){
            if (total(expenses[i]) > max){
                max = total(expenses[i])
            }
        }
        return max
    }
    
    const minExpent = (expenses) => {
        let min = 999999999999999
        for (let i = 0; i < expenses.length; i++){
            if (total(expenses[i]) < min && total(expenses[i]) != 0){
                min = total(expenses[i])
            }
        }
        return min
    }

    return (
        <div className='details_container'>
            <h2 className='title_details'>Sus gastos de {props.monthExpenses.month}</h2>
            {balance(props.balance)}
            <ul className='data'>
                <li>Gasto maximo: <b>${maxExpent(props.monthExpenses.expenses)}</b></li>
                <li>Gasto minimo: <b>${minExpent(props.monthExpenses.expenses)}</b></li>
                <li>Gasto promedio por dia: <b>${getAmountData(props.monthExpenses.expenses).average}</b></li>
                <li>Gasto total del mes: <b>${getAmountData(props.monthExpenses.expenses).total}</b></li>
            </ul>
            <div className='calendar row'>
                {props.monthExpenses.expenses.map((dayData) => <DayBox handleDayExpensesModal={props.handleDayExpensesModal} dayData={dayData} month={props.monthExpenses.month} total={total(dayData)}/>)}
            </div>
            <button type="button" class="btn btn-secondary mt-3" onClick={() => props.setShowMonthExpenses(false)}>Ocultar</button>
        </div>

    )
}

export default Details