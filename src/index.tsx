import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import CardForm from './components/CardForm/CardForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
          <Route path="/card-form/:cardId" render={({match}) => (
            <CardForm cardId={parseInt(match.params.cardId)} />
          )}/>
          <Route path="/card-form">
            <CardForm/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
