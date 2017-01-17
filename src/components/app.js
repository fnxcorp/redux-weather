import React, {Component} from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';
import CustomTable from './custom-table';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <WeatherList/>
                <CustomTable/>
            </div>
        );
    }
}
