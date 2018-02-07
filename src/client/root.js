import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import routes from './routes'
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import {store} from './store';

class Root extends Component {
    render() {
        return (
            <div>
                <Provider>
                    <BrowserRouter>
                        <Route path='/' component={App}/>
                    </BrowserRouter>
                </Provider>,
            </div>
        )
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
)