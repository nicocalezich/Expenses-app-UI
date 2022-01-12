import React from "react"
import "./DayBox.css"

const DayBox = (props) => {

    const total = () => {
        let total = 0;
        for (let i = 0; i < props.expenses.length; i++) {
            total += parseInt(props.expenses[i].amount)
        }
        return total
    }

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
        <div style={totalSpentCategorie(total())} onClick={() => props.handleShowModal(props.expenses, props.month, props.day)} className="box col-md-2">
            <h5 className="fecha_daybox">{props.day}</h5>
            {total() === 0? <h6 className="gastos_daybox">Sin gastos</h6 >: <h5 className="gastos_daybox">${total()}</h5>}
        </div>

    )
}

export default DayBox