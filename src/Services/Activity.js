import { createGlobalStyle } from "styled-components";
import api from "./Api";

const activityService = {

    get: async () => {
        const { data } = await api.get('activity')
        return data
    },

    post: async (body) => {
        const { data } = await api.post('activity', body)
        return data
    },

    getBalance: async (body) => {
        const { data } = await api.post('activity/balance', body)
        return data
    },

    delete: async(id, name, date, isExpense) => {
        const response = await api.delete(`activity/${id}/${name}/${date}/${isExpense}`)
        return response
    }
}

export default activityService