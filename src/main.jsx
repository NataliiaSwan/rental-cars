// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

// import App from './components/App/App.jsx';
// import { Provider } from 'react-redux';
// import { persistor, store } from './redux/store.js';

// import { PersistGate } from 'redux-persist/integration/react';
// import './index.css';
// import 'modern-normalize';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
//           <App />
//         </PersistGate>
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App/App.jsx';

import './index.css';
import 'modern-normalize';
import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
