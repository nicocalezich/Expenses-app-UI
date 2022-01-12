import React, { useState } from "react";
import './AddExpense.css'

const AddExpense = (props) => {
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [error, setError] = useState(false)

    const handleName = (event) => {
        const name = event.target.value
        setName(name)
    }

    const handleAmount = (event) => {
        const amount = event.target.value
        setAmount(amount)
    }

    const handleDate = (event) => {
        const date = event.target.value
        setDate(date)
    }

    const submit = (event) => {
        event.preventDefault()
        if (!name || !amount || !date || parseInt(amount) < 0) {
            setError(true)
            return
        }
        const dateinfo = date.split("-")
        const newExpense = {name, amount, date: new Date(dateinfo[0], dateinfo[1], dateinfo[2])}
        props.addNewExpense(newExpense)
        restartForm()
    }

    const restartForm = () => {
        setName("")
        setAmount("")
        setDate("")
        setError(false)
    }

    return (
        <form className="container_addexpenses">
            <div className="inputs_container">
                <div className="input">
                    <label>Name</label>
                    <input placeholder="Enter expense name" onChange={handleName} value={name} type='text' />
                </div>
                <div className="input">
                    <label>Amount</label>
                    <input placeholder="Enter expense amount" onChange={handleAmount} value={amount} type='number' />
                </div>
                <div className="input">
                    <label>Date</label>
                    <input onChange={handleDate} value={date} type='date' />
                </div>
            </div>
            <div className="button_container">
                <button onClick={submit} className="submit_button" type="submit">Add Expense</button>
            </div>
            {error? <span value>There are errors. Check the fields</span> : ""}
            <div style={{width: "100%", textAlign: "left"}}><button onClick={() => props.handleOpenModalIncome()} type='button' className='btn btn-light add_income'>Agregar Ingresos</button></div>
        </form>
    );
}

export default AddExpense