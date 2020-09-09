import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
// import { RegistrationPage } from './pages';
import { MainPage } from './pages';
import './app-styles.scss';

export const App = () => (
  <Provider store={store}>
    <section className="wrapper">
      {/*<RegistrationPage />*/}
      <MainPage />
    </section>
  </Provider>
);
