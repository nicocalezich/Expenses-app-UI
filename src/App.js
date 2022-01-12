import React, { useState } from 'react'
import './app.css'
import AddExpense from "./Components/AddExpense"
import Expenses from './Components/Expenses'
import 'bootstrap/dist/css/bootstrap.min.css'
import Statistics from './Components/Statistics'
import Details from './Components/Details'
import Modal from './Components/Modal'
import ModalIngresos from './Components/ModalIngresos'

function App() {
  const [expenses, setExpense] = useState([])
  const [filterExpenses, setFilterExpenses] = useState([])
  const [showDetails, setShowDetails] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showModalIncome, setShowModalIncome] = useState(false)
  const [detailsExpensesMonth, setDetailsExpensesMonth] = useState([])
  const [expensesSelectedDay, setExpensesSelectedDay] = useState()
  const [monthSelectedDay, setMonthSelectedDay] = useState()
  const [daySelectedDay, setDaySelectedDay] = useState()
  const [eneroIncome, setEneroIncome] = useState(0)
  const [febreroIncome, setFebreroIncome] = useState(0)
  const [marzoIncome, setMarzoIncome] = useState(0)
  const [abrilIncome, setAbrilIncome] = useState(0)
  const [mayoIncome, setMayoIncome] = useState(0)
  const [junioIncome, setJunioIncome] = useState(0)
  const [julioIncome, setJulioIncome] = useState(0)
  const [agostoIncome, setAgostoIncome] = useState(0)
  const [septiembreIncome, setSeptiembreIncome] = useState(0)
  const [octubreIncome, setOctubreIncome] = useState(0)
  const [noviembreIncome, setNoviembreIncome] = useState(0)
  const [diciembreIncome, setDiciembreIncome] = useState(0)

  const handleShowModal = (expenses, month, day) => {
    setExpensesSelectedDay(expenses)
    setMonthSelectedDay(month)
    setDaySelectedDay(day)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleOpenModalIncome = () => {
    setShowModalIncome(true)
  }

  const handleCloseModalIncome = () => {
    setShowModalIncome(false)
  }

  const handleNewExpense = (newExpense) => {
    setExpense((previusState) => {
      return [...previusState, newExpense]
    })
    if (expenses.length === 0) {
      setFilterExpenses([newExpense])
    }
    if (newExpense.date.getFullYear() === filterExpenses[filterExpenses.length - 1].date.getFullYear()) {
      setFilterExpenses((previusState) => {
        return [...previusState, newExpense]
      })
    }

  }

  const filterExpensesByYear = (year) => {
    const filtrados = expenses.filter((expense) => expense.date.getFullYear() === parseInt(year))
    setFilterExpenses(filtrados)
  }

  const diasDelMes = (monthExpenses) => {
    const mes = parseInt(monthExpenses[0].date.getMonth())
    switch (mes) {
      case 1: return { cant: 31, mes: "Enero" }
      case 2: return { cant: 28, mes: "Febrero" }
      case 3: return { cant: 31, mes: "Marzo" }
      case 4: return { cant: 30, mes: "Abril" }
      case 5: return { cant: 31, mes: "Mayo" }
      case 6: return { cant: 30, mes: "Junio" }
      case 7: return { cant: 31, mes: "Julio" }
      case 8: return { cant: 31, mes: "Agosto" }
      case 9: return { cant: 30, mes: "Septiembre" }
      case 10: return { cant: 31, mes: "Octubre" }
      case 11: return { cant: 30, mes: "Noviembre" }
      case 12: return { cant: 31, mes: "Diciembre" }
    }
  }

  const handleDetails = (toggleDetails, mes, selectedYear) => {
    setShowDetails(toggleDetails)
    if (mes != -1) {
      const monthExpenses = expenses.filter((expense) => expense.date.getMonth() === mes && expense.date.getFullYear() === parseInt(selectedYear ? selectedYear : expenses[expenses.length - 1].date.getFullYear()))
      const expensesPerDay = []
      for (let i = 0; i < diasDelMes(monthExpenses).cant; i++) {
        expensesPerDay[i + 1] = { expenses: monthExpenses.filter((expense) => expense.date.getDate() === i + 1), month: diasDelMes(monthExpenses).mes, day: i + 1 }
      }
      setDetailsExpensesMonth(expensesPerDay)
    }
  }

  return (
    <div className='app'>
      <AddExpense handleOpenModalIncome={handleOpenModalIncome} addNewExpense={handleNewExpense} />
      <ModalIngresos showModalIncome={showModalIncome} handleCloseModalIncome={handleCloseModalIncome} income={[{eneroIncome, setEneroIncome},{febreroIncome, setFebreroIncome},{marzoIncome, setMarzoIncome},{abrilIncome, setAbrilIncome},{mayoIncome, setMayoIncome},{junioIncome, setJunioIncome},{julioIncome, setJulioIncome},{agostoIncome, setAgostoIncome},{septiembreIncome, setSeptiembreIncome},{octubreIncome, setOctubreIncome},{noviembreIncome, setNoviembreIncome},{diciembreIncome, setDiciembreIncome}, ]}/>
      <Statistics eneroIncome={eneroIncome} febreroIncome={febreroIncome} marzoIncome={marzoIncome} abrilIncome={abrilIncome} mayoIncome={mayoIncome} junioIncome={junioIncome} julioIncome={julioIncome} agostoIncome={agostoIncome} septiembreIncome={septiembreIncome} octubreIncome={octubreIncome} noviembreIncome={noviembreIncome} diciembreIncome={diciembreIncome} handleDetails={handleDetails} years={expenses.map((expense) => expense.date.getFullYear())} filterExpensesByYear={filterExpensesByYear} expenses={filterExpenses} />
      {showDetails ? <Details handleDetails={handleDetails} detailsExpensesMonth={detailsExpensesMonth} handleShowModal={handleShowModal} /> : null}
      <Modal expenses={expensesSelectedDay} month={monthSelectedDay} day={daySelectedDay} showModal={showModal} handleCloseModal={handleCloseModal} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
