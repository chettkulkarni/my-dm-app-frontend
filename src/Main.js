import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Impeach from './Impeach.js';
import landing from "./landing";
import form from "./form"
import water from "./water"

class Main extends Component{
    render(){
        return(
            <div>
                 {/* <Route exact path="/form" component={Form}/>  */}
                 <Route path="/" exact={true} component={landing} />
                <Route exact path="/impeach" component={Impeach} />
                <Route  path="/form" component={form} />
                <Route  path="/water" component={water} />
            </div>
        )
    }
}

export default Main;