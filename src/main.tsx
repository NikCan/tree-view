import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
