
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ApprovalCards, { ApprovalCardTest } from './containers/ApprovalCards'


const Page1 = () => (
    <div>
        Sayfa1
    </div>
)

const Page2 = () => <div>Sayfa2</div>


const App = () => {
    return (
        <div className="ui comments" style={{
            paddingTop: '100px',
            paddingLeft: '400px'
        }}>

            <div>
                <ul>
                    <li><Link to='/Page1'>Sayfa1</Link></li>
                    <li><Link to='/Page2'>Sayfa2</Link></li>
                    <li><Link to='/approval-cards'>Approval Cards</Link></li>
                </ul>
            </div>

            <Switch>
                <Route path='/Page1' component={Page1} />
                <Route path='/Page2' component={Page2} />
                <Route path='/approval-cards' >
                    <ApprovalCards ad="Gamze" />
                </Route>
            </Switch>
        </div>
    );
}

export default App