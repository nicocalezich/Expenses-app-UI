import React, { useState } from 'react'
import Charts from './Charts'
import "./Statistics.css"

const Statistics = (props) => {

    let uniqueYear = props.years.filter((c, index) => props.years.indexOf(c) === index)

    const [selectedYear, setSelectedYear] = useState()

    const handleSelectedYear = (event) => {
        props.filterExpensesByYear(event.target.value)
        setSelectedYear(event.target.value)
    }

    return (
        <div className='statistics_container'>
            <div>

                {props.years.length === 0 ? "" :
                    <div className='filters_chart'> 
                        <select className='form-select' /*value={props.selectedYear}*/ onChange={handleSelectedYear}>
                            {uniqueYear.map((year) => <option key={year} value={year}>{year}</option>)}
                        </select>
                    </div>
                }

            </div>
            {props.expenses.length === 0 ? <h5>No expenses added yet</h5> : <Charts eneroIncome={props.eneroIncome} febreroIncome={props.febreroIncome} marzoIncome={props.marzoIncome} abrilIncome={props.abrilIncome} mayoIncome={props.mayoIncome} junioIncome={props.junioIncome} julioIncome={props.julioIncome} agostoIncome={props.agostoIncome} septiembreIncome={props.septiembreIncome} octubreIncome={props.octubreIncome} noviembreIncome={props.noviembreIncome} diciembreIncome={props.diciembreIncome} expenses={props.expenses} handleDetails={props.handleDetails} selectedYear={selectedYear} />}
        </div>
    )
}

export default Statistics