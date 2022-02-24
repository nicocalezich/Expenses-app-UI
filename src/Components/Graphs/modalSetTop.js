import React, { useState } from 'react'
import { Button, Modal as BModal } from 'react-bootstrap'
import settingsService from '../../Services/Settings'

const ModalSetTop = (props) => {

    const [topValue, setTopValue] = useState(props.top)
    const [error, setError] = useState(false)

    const handleTopValue = (event) => {
        const value = event.target.value
        setTopValue(value)
    }

    const submit = () => {
        if (topValue < 0 || topValue === ""){
            setError(true)
            return
        }
        settingsService.post({ top: topValue })
        props.setTop(topValue)
        setError(false)
        props.setShowTopModal(false)
    }

    return (
        <BModal show={props.showTopModal} onHide={() => props.setShowTopModal(false)}>
            <BModal.Header closeButton>
                <BModal.Title>Editar tope</BModal.Title>
            </BModal.Header>

            <BModal.Body style={{ padding: "0" }}>
                <form class="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="inputSetTop" className="sr-only mt-2 mb-2">Nuevo tope</label>
                        <input type="number" value={topValue} onChange={handleTopValue} className="form-control" id="inputSetTop" placeholder="Ingrese el nuevo tope" />
                    </div>
                </form>
                {error? <div style={{display: "flex", height: "1rem", alignItems: "center", justifyContent: "center"}} className="alert alert-danger" role="alert">
                    Valor invalido
                </div> : ""}
            </BModal.Body>

            <BModal.Footer style={{ justifyContent: "center", backgroundColor: "rgb(247, 245, 245)", border: "none" }}>
                <Button type="submit" style={{ width: "10rem", border: "none" }} onClick={submit} variant="primary">Guardar</Button>
            </BModal.Footer>
        </BModal>
    )
}

export default ModalSetTop