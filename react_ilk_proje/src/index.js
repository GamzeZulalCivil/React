/*
1- react-router
2- React.useState
   react-redux   >  redux/toolkit
NOT-Geliştirme: Container a basınca detay paneli açılsın sağ tarafta. 
URL değişecek fakat sayfa render tekrar yenilenmeyecek.
Bunu da react-router ile yapacaksın
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Router, Route, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
);