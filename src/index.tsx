import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';
import { ConfigProvider } from 'antd';
import './style/style.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#F08221'
          }
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
);
