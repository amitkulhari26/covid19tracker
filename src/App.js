import React, { Component } from 'react'
import styles from './App.module.css'
import { fetchData } from './api'
import { Chart, Cards, CountryPicker } from './components'
import covidImage from '../src/images/covid.png'
export class App extends Component {
    state = {
        data: {},
        country: ''
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data: fetchedData,
            country: country
        })
    }
    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <img alt="Covid-19" className={styles.image} src={covidImage} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App
