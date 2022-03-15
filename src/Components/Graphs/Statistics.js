import React from 'react'
import Charts from './Charts'
import SpinBar from '../spinBar'
import "./Statistics.css"

const Statistics = (props) => {

    const getUniqueYears = () => {
        if (!props.expenses) return
        let uniqueYears = []
        for (let i = 0; i < props.expenses.length; i++) {
            const year = props.expenses[i].date.split("T")[0].split("-")[0]
            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        }
        return uniqueYears
    }


    const handleSelectedYear = (event) => {
        props.handleSelectedYear(event.target.value)
    }


    return (
        <div className='statistics_container'>
            {props.isFetching ? <SpinBar/> : <div>
                <div>
                    {
                        <div className='filters_chart'>
                            <select className='form-select' onChange={handleSelectedYear}>
                                {getUniqueYears()?.map((year) => <option selected={props.selectedYear === year ? year : null} key={year} value={year}>{year}</option>)}
                            </select>
                            <button onClick={() => props.setShowTopModal(true)} className='btn btn-primary'>Editar tope</button>
                        </div>

                    }
                </div>
                {/* <div style={{ width: "100%", margin: "0 auto", borderBottomStyle: "dashed" }}><h5 style={{ marginBottom: "0px" }}>${props.top}</h5></div> */}
                <Charts handleBalance={props.handleBalance} top={props.top} incomePerMonth={props.incomePerMonth} handleSelectedMonth={props.handleSelectedMonth} amountPerMonth={props.amountPerMonth} />

            </div>
            }
        </div>
    )
}


export default Statistics