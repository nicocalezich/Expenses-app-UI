import React from 'react'

const Charts = (props) => {

    const barHigh = (expenses) => {
        let amountsPerMont = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        if (expenses.length > 0) {
            for (let i = 0; i < expenses.length; i++) {
                if (expenses[i].amount) {
                    amountsPerMont[expenses[i].date.getMonth() - 1] += parseInt(expenses[i].amount)
                }
            }
            for (let i = 0; i < amountsPerMont.length; i++) {
                amountsPerMont[i] = ((amountsPerMont[i] * 170) / 100000 > 100 ? 170 : (amountsPerMont[i] * 170) / 100000)
            }
            return amountsPerMont
        }
        else return amountsPerMont
    }

    const incomeBarHight = (income) => {
        return ((income * 100) / 100000) > 100 ? 170 : (((income * 100) / 100000) * 170) / 100
    }

    const income = [2, 5, 1, 2, 5, 2, 4, 3, 0, 0]

    return (
        <div className='charts'>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.eneroIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 1, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[0] + "px" }}></div>
                </div>
                <span>Enero</span>
            </div>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.febreroIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 2, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[1] + "px" }}></div>
                </div>
                <span>Febrero</span>
            </div>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.marzoIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 3, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[2] + "px" }}></div>
                </div>
                <span>Marzo</span>
            </div>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.abrilIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 4, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[3] + "px" }}></div>
                </div>
                <span>Abril</span>
            </div>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.mayoIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 5, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[4] + "px" }}></div>
                </div>
                <span>Mayo</span>
            </div>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.junioIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 6, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[5] + "px" }}></div>
                </div>
                <span>Junio</span>
            </div>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.julioIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 7, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[6] + "px" }}></div>
                </div>
                <span>Julio</span>
            </div>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.agostoIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 8, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[7] + "px" }}></div>
                </div>
                <span>Agosto</span>
            </div>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.septiembreIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 9, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[8] + "px" }}></div>
                </div>
                <span>Septiembre</span>
            </div>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.octubreIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 10, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[9] + "px" }}></div>
                </div>
                <span>Octubre</span>
            </div>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.noviembreIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 11, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[10] + "px" }}></div>
                </div>
                <span>Noviembre</span>
            </div>
            <div className='char_container'>
                <div className='inner_charts'>
                    <div className='month_chart_income' style={{ height: incomeBarHight(props.diciembreIncome) + "px" }}></div>
                    <div onClick={() => props.handleDetails(true, 12, props.selectedYear)} className='month_chart_expense' style={{ height: barHigh(props.expenses)[11] + "px" }}></div>
                </div>
                <span>Diciembre</span>
            </div>
        </div>
    )
}

export default Charts