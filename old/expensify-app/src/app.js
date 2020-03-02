import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpensDashboard = () =>(
    <div>
        <h2>Dashboard</h2>
    </div>
);
const ExpensCreate = () =>(
    <div>
        <h2>New create page</h2>
    </div>
);
const ExpensEdit = () =>(
    <div>
        <h2>Edit</h2>
    </div>
);
const ExpensHelp = () =>(
    <div>
        <h2>Help </h2>
    </div>
);

const ExpensNotFound = () =>(
    <div>
        <h2>Page not found 404! - <Link to="/">Go home</Link> </h2>
    </div>
);

const Header = ()=>(
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/edit">Edit</NavLink>
        <NavLink to="/help">Help</NavLink>
    </header>
)


const routes = (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpensDashboard} exact={true} />
            <Route path="/create" component={ExpensCreate} />
            <Route path="/edit" component={ExpensEdit} />
            <Route path="/help" component={ExpensHelp} />
            <Route  component={ExpensNotFound} />
        </Switch>
    </div>
 
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
