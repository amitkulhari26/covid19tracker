import axios from 'axios'

const URL = `https://covid19.mathdro.id/api`;

export const fetchData = async (country) => {
    try {
        let changeAbleUrl = URL;
        if (country) {
            changeAbleUrl = `${changeAbleUrl}/countries/${country}`
        }
        const { data: { recovered, deaths, confirmed, lastUpdate } } = await axios.get(changeAbleUrl);
        return {
            recovered,
            deaths,
            confirmed,
            lastUpdate
        }
    } catch (error) {
        console.log(error)
    }
}
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`);
        return data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
    } catch (error) {
        console.log(error)
    }
}
export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${URL}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error)
    }
}