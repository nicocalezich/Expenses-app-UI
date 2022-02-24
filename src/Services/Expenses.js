import api from "./Api";

const expensesService = {

    getAmountsPerMonth: async (body) => {
        const { data } = await api.post('expenses/amountpermonth', body)
        return data
    },

    getExpensesPerMonth: async (body) => {
        const { data } = await api.post('expenses/permonth', body)
        return data
    },

    get: async () => {
        const { data } = await api.get('expenses')
        return data
    },

    post: async (body) => {
        const { data } = await api.post('expenses', body)
        return data
    }
}

export default expensesService