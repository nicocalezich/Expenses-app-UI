import React from 'react'
import './Details.css'
import DayBox from "./DayBox"

const Details = (props) => {


    const averageSpent = () => {
        let cant = 0
        let total = 0
        for (let i = 1; i < props.detailsExpensesMonth.length; i++) {
            for (let j = 1; j < props.detailsExpensesMonth[i].expenses.length; j++) {
                if (props.detailsExpensesMonth[i].expenses.length != 0) {
                    cant++
                    total += parseInt(props.detailsExpensesMonth[i].expenses[j].amount)
                }
            }
        }
        console.log(total, cant)
        return total / cant
    }

    return (
        <div className='details_container'>
            <h2 className='title_details'>Sus gastos de {props.detailsExpensesMonth[1].month}</h2>
            <div style={{ width: "100%", margin: "18px" }}>
                <span style={{ margin: "0px 15px" }}>Gasto minimo: 300</span>
                <span style={{ margin: "0px 15px" }}>Gasto promedio por dia: ${averageSpent()}</span>
                <span style={{ margin: "0px 15px" }}>Gasto maximo: 4000</span>
            </div>
            <div className='calendar row'>
                {props.detailsExpensesMonth.map((expensesObject) => <DayBox handleShowModal={props.handleShowModal} expenses={expensesObject.expenses} month={expensesObject.month} day={expensesObject.day} />)}
            </div>
            <button type="button" class="btn btn-secondary mt-3" onClick={() => props.handleDetails(false, -1)}>Ocultar</button>
        </div>

    )
}

export default Details