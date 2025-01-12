import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './index.jsx';
// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
