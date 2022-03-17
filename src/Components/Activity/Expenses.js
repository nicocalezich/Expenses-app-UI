import React from 'react'
import './Expenses.css'
import formatter from '../../Utils/CurrenctyFormater'

const Expenses = (props) => {

    const getDate = (date) => {
        date = date.split("T")[0].split("-")
        return `${date[2]}/${date[1]}/${date[0]}`
    }

    const mapActivity = (activity) => {
        return (<tr key={activity._id} style={{ backgroundColor: activity.isExpense ? "#faaf9d" : "#c8fb68" }}>
            <td>{activity.name}</td>
            <td>{` ${activity.isExpense ? "-" : "+"} ${formatter(activity.amount)}`}</td>
            <td>{getDate(activity.date)}</td>
        </tr>)
    }

    return (
        <div className='expenses_container'>
            <div className='expenses_table'>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Gasto</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.activity?.map(mapActivity)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Expenses