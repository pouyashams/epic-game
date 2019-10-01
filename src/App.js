import React, {Component} from 'react';
import {Switch, Redirect, Router, withRouter} from 'react-router-dom';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import {PrivateRoute} from "./components/privateroute";
import mainPage from "./components/main-page/main-page";

class App extends Component {
    render() {
        return (
            <div className="jumbotron-fluid rtl">
                <Navbar/>
                <main role="main" className=" page-size ">
                    <Router history={this.props.history}>
                        <Switch>
                            <PrivateRoute path="/" exact={true} component={mainPage}/>
                            <Redirect to="/not-found"/>
                        </Switch>
                    </Router>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(App);
