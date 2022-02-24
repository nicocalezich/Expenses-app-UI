import api from "./Api";

const settingsService = {

    get: async () => {
        const { data } = await api.get('settings/topcharts')
        return data
    },

    post: async (body) => {
        const { data } = await api.post('settings/topcharts', body)
        return data
    }


}

export default settingsService