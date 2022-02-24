import api from "./Api";

const incomeService = {

    get: async () => {
        const { data } = await api.get('income')
        return data
    },

    getIncomePerMonth: async (year) => {
        const { data } = await api.post('income/incomepermonth', year)
        return data
    },

    post: async (body) => {
        const { data } = await api.post('income', body)
        return data
    }
}

export default incomeService