import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
  const App = () => (
    <MuiThemeProvider>

    <App />
    </MuiThemeProvider>
);
  
  ReactDOM.render(<App />, document.getElementById('div'));
});
