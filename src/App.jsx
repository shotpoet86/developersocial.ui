import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import GlobalStyles from './components/GlobalStyle';
const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Pages />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
