import React from 'react'
import { Button, Modal as BModal } from 'react-bootstrap'

const Modal = (props) => {
    return (
        <BModal show={props.showModal} onHide={() => props.setShowDayExpenses(false)}>
            <BModal.Header closeButton>
                <BModal.Title>{`${props.dayExpenses?.day} de ${props.dayExpenses?.month}`}</BModal.Title>
            </BModal.Header>

            {props.dayExpenses?.expenses?.length === 0 ? <BModal.Body><h6>No se registraron gastos</h6></BModal.Body> : <BModal.Body>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Gastado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.dayExpenses?.expenses.map((expense) => <tr><td>{expense.name}</td><td>${expense.amount}</td></tr>)}
                    </tbody>
                </table>
            </BModal.Body>}

            <BModal.Footer>
                <Button onClick={() => props.setShowDayExpenses(false)} variant="primary">Cerrar</Button>
            </BModal.Footer>
        </BModal>
    )
}

export default Modal