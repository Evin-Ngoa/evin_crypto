import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './app/store'

ReactDOM.render(
    <Router>
        {/* Provider to enable all components have access to store variable */}
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
  document.getElementById('root')
);

