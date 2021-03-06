import React, { useState } from 'react'
import { Button, Modal as BModal } from 'react-bootstrap'

const Modal = (props) => {
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
        if (amount < 0) return
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
        const year = dateinfo[0]
        const month = dateinfo[1] - 1
        const day = dateinfo[2]
        const newExpense = { name, amount, date: new Date(year, month, day) }
        props.createExpense(newExpense)
        restartForm()
        props.setShowNewExpenseModal(false)
    }

    const restartForm = () => {
        setName("")
        setAmount("")
        setDate("")
        setError(false)
    }

    return (
        <BModal show={props.showNewExpenseModal} onHide={() => props.setShowNewExpenseModal(false)}>
            <BModal.Header closeButton>
                <BModal.Title>Nuevo gasto</BModal.Title>
            </BModal.Header>

            <BModal.Body style={{padding: "0"}}>
                <form className="container_addexpenses">
                    <div className="inputs_container">
                        <div className="input">
                            <label>Tag</label>
                            <input placeholder="Tag para identificar el gasto" onChange={handleName} value={name} type='text' />
                        </div>
                        <div className="input">
                            <label>Monto</label>
                            <input placeholder="??Cuanta dinero gasto?" onChange={handleAmount} value={amount} type='number' />
                        </div>
                        <div className="input">
                            <label>Fecha</label>
                            <input onChange={handleDate} value={date} type='date' />
                        </div>
                    </div>
                    {error ? <span value>Los campos contienen errores. Por favor revise</span> : ""}

                </form>
            </BModal.Body>

            <BModal.Footer style={{justifyContent: "center", backgroundColor: "rgb(247, 245, 245)", border: "none"}}>
                <Button style={{width: "10rem", backgroundColor: "#faaf9d", border: "none", color: "black"}} onClick={submit} variant="primary">Agregar</Button>
            </BModal.Footer>
        </BModal>
    )
}

export default Modal