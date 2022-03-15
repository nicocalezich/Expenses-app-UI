import React, { useState, useEffect } from 'react'
import './App.css'
import CreateExpense from "./Components/Header/CreateExpense"
import Expenses from './Components/Activity/Expenses'
import 'bootstrap/dist/css/bootstrap.min.css'
import Statistics from './Components/Graphs/Statistics'
import Details from './Components/Graphs/Details'
import Modal from './Components/Graphs/Modal'
import expensesService from './Services/Expenses'
import incomeService from './Services/Income'
import activityService from './Services/Activity'
import settingsService from './Services/Settings'
import NewExpenseModal from './Components/Header/NewExpenseModal'
import NewIncomeModal from './Components/Header/NewIncomeModal'
import ModalSetTop from './Components/Graphs/modalSetTop'


function App() {

  const createExpense = async (expense) => {
    await expensesService.post(expense)
    await getExpenses()
    await getAmountsPerMonth(expense.date.getFullYear())
    if (showMonthExpenses) await handleSelectedMonth(selectedMonth)
    setSelectedYear(expense.date.getFullYear())
    await addActivity(expense, true)
    await getActivity()
  }

  const createIncome = async (income) => {
    await incomeService.post(income)
    await addActivity(income, false)
    await getActivity()
    await getIncomePerMonth(income.date.getFullYear())
  }

  const addActivity = async (item, isExpense) => {
    const activityItem = {...item, isExpense}
    await activityService.post(activityItem)
    await handleBalance(selectedMonth)
  }

  const handleSelectedYear = async (year) => {
    await getAmountsPerMonth(year)
    await getIncomePerMonth(year)
    setShowMonthExpenses(false)
    setSelectedYear(year)
  }

  const getExpenses = async () => {
    const resp = await expensesService.get()
    setExpenses(resp)
  }

  const getAmountsPerMonth = async (year) => {
    const resp = await expensesService.getAmountsPerMonth({ year })
    setAmountPerMonth(resp)
  }

  const getIncomePerMonth = async (year) => {
    const resp = await incomeService.getIncomePerMonth({ year })
    setIncomePerMonth(resp)
  }

  const handleSelectedMonth = async (month) => {
    const resp = await expensesService.getExpensesPerMonth({ month })
    setMonthExpenses(resp)
    setSelectedMonth(month)
    setShowMonthExpenses(true)
  }

  const handleDayExpensesModal = (expenses) => {
    setShowDayExpenses(true)
    setDayExpenses(expenses)
  }

  const getActivity = async () => {
    const resp = await activityService.get()
    setActivity(resp)
  }

  const getTop = async () => {
    const result = await settingsService.get()
    setTop(!result.length? 100000 : result[0].value)
  }

  const handleBalance = async (month) => {
    const resp = await activityService.getBalance({month, year: parseInt(selectedYear)})
    console.log(resp);
    setBalance(resp.balance)
  }

  const mounted = async () => {
    await getExpenses()
    await getActivity()
    await getAmountsPerMonth(new Date().getFullYear())
    await getIncomePerMonth(new Date().getFullYear())
    await getTop()
    setIsFetching(false)
  }

  useEffect(() => {
    mounted()
  }, [])


  const [expenses, setExpenses] = useState()
  const [activity, setActivity] = useState()
  const [top, setTop] = useState()
  const [showTopModal, setShowTopModal] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [amountPerMonth, setAmountPerMonth] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [incomePerMonth, setIncomePerMonth] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [balance, setBalance] = useState()
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedMonth, setSelectedMonth] = useState()
  const [monthExpenses, setMonthExpenses] = useState()
  const [dayExpenses, setDayExpenses] = useState()
  const [showMonthExpenses, setShowMonthExpenses] = useState(false)
  const [showDayExpenses, setShowDayExpenses] = useState(false)
  const [showNewExpenseModal, setShowNewExpenseModal] = useState(false)
  const [showNewIncomeModal, setShowNewIncomeModal] = useState(false)



  return (
    <div className='app'>
      <CreateExpense createExpense={createExpense} setShowNewExpenseModal={setShowNewExpenseModal} setShowNewIncomeModal={setShowNewIncomeModal} />
      <NewExpenseModal createExpense={createExpense} setShowNewExpenseModal={setShowNewExpenseModal} showNewExpenseModal={showNewExpenseModal}/>
      <NewIncomeModal createIncome={createIncome} setShowNewIncomeModal={setShowNewIncomeModal} showNewIncomeModal={showNewIncomeModal}/>
      <ModalSetTop top={top} showTopModal={showTopModal} setShowTopModal={setShowTopModal} setTop={setTop}/>
      {<Statistics handleBalance={handleBalance} isFetching={isFetching} top={top} setShowTopModal={setShowTopModal} handleSelectedMonth={handleSelectedMonth} selectedYear={selectedYear} expenses={expenses} amountPerMonth={amountPerMonth} incomePerMonth={incomePerMonth} handleSelectedYear={handleSelectedYear} /> }
      {showMonthExpenses ? <Details balance={balance} handleDayExpensesModal={handleDayExpensesModal} monthExpenses={monthExpenses} setShowMonthExpenses={setShowMonthExpenses} /> : null}
      <Modal showModal={showDayExpenses} dayExpenses={dayExpenses} setShowDayExpenses={setShowDayExpenses}/>
      {activity?.length === 0? <div style={{textAlign: "center", margin: "2rem"}}><h2>Aun no se registro movimiento</h2><h5 style={{display: "flex", justifyContent: "center"}}>Click en <h5 style={{color: "#b6ff2d", margin: "0 4px"}}> Nuevo Ingreso </h5> o <h5 style={{color: "#ff9b82", margin: "0 4px"}}>Nuevo Gasto</h5> para empezar!</h5></div> : <Expenses isFetching={isFetching} activity={activity} />}
    </div>
    
  );
}

export default App;
