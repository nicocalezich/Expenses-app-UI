import React from "react";
import './AddExpense.css'

const AddExpense = (props) => {

    return (
        <div className="add_buttons_container row">
            <button className="add_button income col-md-3" onClick={() => props.setShowNewIncomeModal(true)}>Nuevo Ingreso <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg></button>
            <button className="add_button expense col-md-3" onClick={() => props.setShowNewExpenseModal(true)}>Nuevo Gasto <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
            </svg></button>
        </div>
    );
}

export default AddExpense