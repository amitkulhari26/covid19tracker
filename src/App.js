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
        this.methodToFetachData()
    }
    handleCountryChange = async (country) => {
        this.methodToFetachData(country)
    }
    methodToFetachData = async (country) => {
        const fetchedData = await fetchData(country);
        if (country !== 'Global') {
            this.setState({
                data: fetchedData,
                country: country
            })
        } else {
            this.setState({ data: fetchedData })
        }
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
