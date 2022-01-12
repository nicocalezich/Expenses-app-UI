import React from 'react'
import { Button, Modal as BModal } from 'react-bootstrap'

const Modal = (props) => {
    return (
        <BModal show={props.showModal} onHide={props.handleCloseModal}>
            <BModal.Header closeButton>
                <BModal.Title>{`${props.day} de ${props.month}`}</BModal.Title>
            </BModal.Header>

            {props.expenses?.length === 0? <BModal.Body><h6>No se registraron gastos</h6></BModal.Body> : <BModal.Body>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Gastado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.expenses?.map((expense) => <tr><td>{expense.name}</td><td>${expense.amount}</td></tr>)}                                       
                    </tbody>
                </table>
            </BModal.Body>}

            <BModal.Footer>
                <Button onClick={props.handleCloseModal} variant="primary">Cerrar</Button>
                {/* <Button variant="primary">Save changes</Button> */}
            </BModal.Footer>
        </BModal>

    )
}

export default Modal