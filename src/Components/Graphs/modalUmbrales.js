import React, { useState } from 'react'
import { Button, Modal as BModal } from 'react-bootstrap'
import settingsService from '../../Services/Settings'

const ModalUmbrales = (props) => {

    const [critical, setCritical] = useState()
    const [warning, setWarning] = useState()
    const [ok, setOk] = useState()
    const [error, setError] = useState(false)
    const [errorMsj, setErrorMsj] = useState()

    const handleCritical = (event) => {
        const value = event.target.value
        setCritical(value)
    }

    const handleWarning = (event) => {
        const value = event.target.value
        setWarning(value)
    }

    const handleOk = (event) => {
        const value = event.target.value
        setOk(value)
    }

    const submit = () => {
        if ((critical < warning < ok)){
            setErrorMsj("Critical debe ser mayor a warning y warning mayor a Ok")
            setError(true)
            return
        }
        if (!critical || !warning || !ok){
            setErrorMsj("Valores invalidos")
            setError(true)
            return
        }
        settingsService.post({ top: topValue })
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
                        <label for="critical" className="sr-only mt-2 mb-2">Critico: gasto alto</label>
                        <input type="number" value={topValue} onChange={handleTopValue} className="form-control" id="critical" placeholder="Ingrese el umbral critico" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="warning" className="sr-only mt-2 mb-2">Alerta: gasto intermedio</label>
                        <input type="number" value={topValue} onChange={handleTopValue} className="form-control" id="warning" placeholder="Ingrese el umbral warning" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="ok" className="sr-only mt-2 mb-2">Ok: gasto bajo</label>
                        <input type="number" value={topValue} onChange={handleTopValue} className="form-control" id="ok" placeholder="Ingrese el umbral ok" />
                    </div>
                </form>
                {error? <div style={{display: "flex", height: "1rem", alignItems: "center", justifyContent: "center"}} className="alert alert-danger" role="alert">
                    {errorMsj}
                </div> : ""}
            </BModal.Body>

            <BModal.Footer style={{ justifyContent: "center", backgroundColor: "rgb(247, 245, 245)", border: "none" }}>
                <Button type="submit" style={{ width: "10rem", border: "none" }} onClick={submit} variant="primary">Guardar</Button>
            </BModal.Footer>
        </BModal>
    )
}

export default ModalUmbrales