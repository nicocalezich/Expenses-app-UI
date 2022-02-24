import React from "react"
import "./DayBox.css"

const DayBox = (props) => {

    const totalSpentCategorie = (total) => {
        if (total > 2500){
            return {'backgroundColor': '#FFD5CA'}
        }
        if (total > 1000){
            return {'backgroundColor': '#FFFECA'}
        }
        if (total > 0){
            return {'backgroundColor': '#DAF7A6'}
        }
        if (total === 0){
            return
        }
     }

    return (
        
        <div style={totalSpentCategorie(props.total)} onClick={() => props.handleDayExpensesModal({expenses: props.dayData.expenses, month: props.month, day: props.dayData.dayNumber})}  className="box col-md-2">
            <h5 className="fecha_daybox">{props.dayData.dayNumber}</h5>
            {props.total === 0? <h6 className="gastos_daybox">Sin gastos</h6 >: <h5 className="gastos_daybox">${props.total}</h5>}
        </div>

    )
}

export default DayBox