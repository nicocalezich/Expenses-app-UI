import React from 'react'
import './Expenses.css'

const Expenses = (props) => {

    return (
        <div className='expenses_container'>
            <div className='expenses_table'>
                <table class="table table-white">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.expenses.map((expense) => <tr>
                            <td>{expense.name}</td>
                            <td>{"$"+expense.amount}</td>
                            <td>{expense.date.getDate()+"/"+expense.date.getMonth()+"/"+expense.date.getFullYear()}</td>
                        </tr>)}             
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Expenses