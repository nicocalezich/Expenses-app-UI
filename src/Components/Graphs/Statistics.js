import React from 'react'
import Charts from './Charts'
import SpinBar from '../../Utils/spinBar'
import "./Statistics.css"
import formatter from '../../Utils/CurrenctyFormater'

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
                        </div>

                    }
                </div>
                <div className='top-container' style={{ width: "100%", margin: "10px 0 0 0", borderBottomStyle: "dashed" }}><h5 className='top'>{formatter(props.top)}<svg onClick={() => props.setShowTopModal(true)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil changetop" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg></h5>
                </div>
                <Charts handleBalance={props.handleBalance} top={props.top} incomePerMonth={props.incomePerMonth} handleSelectedMonth={props.handleSelectedMonth} amountPerMonth={props.amountPerMonth} />

            </div>
            }
        </div>
    )
}


export default Statistics