import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/Weather';

import './index.css'; // import the CSS file



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      location: '',
      error: null,
      loading: false,
      inputValue: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const apiKey = 'bdecd496d94d70da6c002e129c85f46e';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.inputValue}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        weatherData: data.list,
        location: `${data.city.name}, ${data.city.country}`,
        error: null
      });
    } catch (error) {
      this.setState({ error: 'Unable to retrieve weather data' });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { weatherData, location, error, loading, inputValue } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" value={inputValue} onChange={this.handleInputChange} placeholder="Enter location" />
          <button type="submit">Search</button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weatherData &&
          <Weather weatherData={weatherData} location={location} />
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
