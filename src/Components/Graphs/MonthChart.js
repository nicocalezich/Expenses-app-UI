import React from "react"

const MonthChart = (props) => {

    const getPixelValue = (value) => {
        const top = props.top
        const valuePercentaje = (value * 100) / top
        const pixelValue = (valuePercentaje * 170) / 100
        return pixelValue > 170 ? 170 : pixelValue
    }

    const getIncome = (month) => {
        const index = parseInt(month) - 1
        return props.incomePerMonth[index]?.amount
    }

    const clickedMonth = () => {
        props.handleSelectedMonth(props.number)
        props.handleBalance(props.number)
    }

    return (
        <div className='char_container'>
            <div className='inner_charts'>
                <div data-toggle="tooltip" title={`$${getIncome(props.number)}`} className='month_chart_income' style={{ height: getPixelValue(getIncome(props.number)) + "px" }}></div>
                <div data-toggle="tooltip" title={`$${props.amount}`}onClick={clickedMonth} className='month_chart_expense' style={{ height: getPixelValue(props.amount) + "px" }}></div>
            </div>
            <span>{props.month}</span> 
        </div>
    )
}

export default MonthChart