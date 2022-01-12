import React from 'react'
import { Button, Modal as BModal } from 'react-bootstrap'

const ModalIngresos = (props) => {

    return (
        <BModal show={props.showModalIncome} onHide={props.handleCloseModalIncome}>
            <BModal.Header closeButton>
                <BModal.Title>Ingresos por mes</BModal.Title>
            </BModal.Header>

            <BModal.Body>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Mes</th>
                            <th scope="col">Ingreso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Enero</td>
                            <td>$<input id={0} value={props.income[0].eneroIncome} onChange={(event) => props.income[0].setEneroIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                        <tr>
                            <td>Febrero</td>
                            <td>$<input id={1} value={props.income[1].febreroIncome} onChange={(event) => props.income[1].setFebreroIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                        <tr>
                            <td>Marzo</td>
                            <td>$<input id={2} value={props.income[2].marzoIncome} onChange={(event) => props.income[2].setMarzoIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                        <tr>
                            <td>Abril</td>
                            <td>$<input id={3} value={props.income[3].abrilIncome} onChange={(event) => props.income[3].setAbrilIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                        <tr>
                            <td>Mayo</td>
                            <td>$<input id={4} value={props.income[4].mayoIncome} onChange={(event) => props.income[4].setMayoIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                        <tr>
                            <td>Junio</td>
                            <td>$<input id={5} value={props.income[5].junioIncome} onChange={(event) => props.income[5].setJunioIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                        <tr>
                            <td>Julio</td>
                            <td>$<input id={6} value={props.income[6].julioIncome} onChange={(event) => props.income[6].setJulioIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                        <tr>
                            <td>Agosto</td>
                            <td>$<input id={7} value={props.income[7].agostoIncome} onChange={(event) => props.income[7].setAgostoIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                        <tr>
                            <td>Septiembre</td>
                            <td>$<input id={8} value={props.income[8].septiembreIncome} onChange={(event) => props.income[8].setSeptiembreIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                        <tr>
                            <td>Octubre</td>
                            <td>$<input id={9} value={props.income[9].octubreIncome} onChange={(event) => props.income[9].setOctubreIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                        <tr>
                            <td>Noviembre</td>
                            <td>$<input id={10}  value={props.income[10].noviembreIncome} onChange={(event) => props.income[10].setNoviembreIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                        <tr>
                            <td>Diciembre</td>
                            <td>$<input id={11}  value={props.income[11].diciembreIncome} onChange={(event) => props.income[11].setDiciembreIncome(event.target.value)} style={{ width: "100px", border: "none" }} /></td>
                        </tr>
                    </tbody>
                </table>
            </BModal.Body>

            <BModal.Footer>
                <Button onClick={props.handleCloseModalIncome} variant="btn btn-primary">Cerrar</Button>
            </BModal.Footer>
        </BModal>

    )
}

export default ModalIngresos