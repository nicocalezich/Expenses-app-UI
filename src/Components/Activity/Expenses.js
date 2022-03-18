import React from 'react'
import './Expenses.css'
import formatter from '../../Utils/CurrenctyFormater'
import activityService from '../../Services/Activity'

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
            <td><svg xmlns="http://www.w3.org/2000/svg" style={{cursor:"pointer"}} width="24" height="24" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
                <svg onClick={() => props.deleteActivity(activity._id, activity.name, activity.date, activity.isExpense)} xmlns="http://www.w3.org/2000/svg" style={{cursor:"pointer", marginLeft: "20px"}} width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
            </td>
        </tr>)
    }

    return (
        <div className='expenses_container'>
            <div className='expenses_table'>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Tag</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.activity?.map(mapActivity).reverse()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Expenses